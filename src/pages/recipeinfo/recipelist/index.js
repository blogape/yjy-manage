import React, { Component } from "react";
import  {recipelist,deleterecipe} from '../../../services/api.js';
import { HashRouter, Route, Switch ,withRouter} from "react-router-dom";

import {
  Input,
  Col,
  message,
  Tooltip,
  Button,
  Popconfirm,
  Icon,

  Pagination,
  Table,
  Select,
  Modal,
  AutoComplete,
  Card
} from "antd";
import "./index.less";
const InputGroup = Input.Group;
const Option = Select.Option;

const children=[];
const showAddress=['轮播图','视图展示区','热门食谱']
for (let i = 0; i < showAddress.length; i++) {
    children.push(<Option key={i.toString(showAddress.length) + i}>{showAddress[i] }</Option>);
  }
const data = [];

function handleChange(value) {
    console.log(`selected ${value}`);
  }
function  callback(key) {
  console.log(key);
}
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


class recipeList extends Component {


    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        visible: false,
        tablePagination:{
          //  current: 1,
            pageSize: 10,
            total:'',
        },
        tablePagedList: [],
      };
      
      start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      }
    //   添加测试用户信息
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
      //删除当前的食谱
      handleDelete=async(record)=>{
        let dataDte=await deleterecipe(record);
       
        if(dataDte.code==0){
          //提示成功 并且调用食谱列表函数
          message.success('删除成功！');
          this.fetch();
        }else{
          message.error(dataDte.msg);
        }
      }

      // 查看详情
      viewClick=async(record)=>{
        this.props.history.push('/admin/recipe/recipedetail/'+record.id);
      }
   
    // 检车分页是否产生变化 *请求数据
    tableChange=async(page)=>{
      console.log(page);
      let dataRes = await recipelist(page.current);
      let data = dataRes.data.list;

      console.log(data);
      this.setState({
        tablePagedList:data,
        current: page
      });
    }
 

    //   同意添加测试用户
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    //   拒接添加测试用户
    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    //   监听表单变化
      onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
  
      componentDidMount() {
        this.fetch();
      }
      addrepice=async()=>{
        this.props.history.push('/admin/recipe/addrecipe');
      }
      fetch = async (query = {}) => {
        this.setState({ tableLoading: true });
        let dataRes = await recipelist(1);
        console.log(dataRes);
        let data = dataRes.data.list;
        const pagination = { ...this.state.tablePagination };
        pagination.total = dataRes.data.total;
        this.setState({
            tableLoading: false,
            tablePagedList: data,
            tablePagination:pagination
        });
    }



  render() {

    const columns = [
     
        {
          title: "食谱名称",
          dataIndex: "title",
          key: 'id'
        },
        {
          title: "状态",
          dataIndex: "statusDesc",
       

        },
        {
          title: "创建时间",
          dataIndex: "createTime",
         

        },
        {
            title: "操作",
            dataIndex: "operation",
            render: (text,record) => 
            <Popconfirm title="你确定要删除当前食谱吗?" onConfirm={() => this.handleDelete(record.id)}>
            <a href="javascript:;">删除</a>
            </Popconfirm>,
          },
          {
            title: "",
            dataIndex: "action",
            render: (text,record) => 
              <a href="javascript:;" onClick={this.viewClick.bind(text,record)}>查看</a>
            
          
          },
          {
            title: "",
            dataIndex: "editor",
            render: (text,record) => 
            <a href="javascript:;">编辑</a>,
            
          },
          {
            title: "显示到",
            dataIndex: "show",
            render:(text,record)=><Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="请选择要放置的位置"
            defaultValue={[]}
            onChange={handleChange}
          >
            {children}
          </Select>,
          }
          
      ];


    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div className="recipelist">
        <Card>
          {/* table header*/}
          <div className="recipelist-header">
          {/*~~~~~~~  添加测试账号 ~~~~~~~~~~ */}
          <Tooltip placement="bottom" title='此账号可供测试未审核状态的食谱'  >
          <Button type="primary" onClick={this.showModal}>添加测试账号</Button>
            </Tooltip>
            {/*~~~~~~~  搜索输入框 ~~~~~~~~~~ */}
            <InputGroup compact className="InputSearch">
              <Select defaultValue="全文搜索">
                <Option value="1">全文搜索</Option>
                <Option value="2">分类搜索</Option>
              </Select>
              <AutoComplete
                // dataSource={this.state.dataSource}
                style={{ width: 200 }}
                onChange={this.handleChange}
                placeholder="搜索你想要的"
              />
            </InputGroup>
            <Button type="primary" style={{ marginLeft: "20px" }}>
              搜索
            </Button>
            <Button type="primary" onClick={this.addrepice}>添加食谱</Button>

             {/*~~~~~~~ 
              <Button type="primary" onClick={this.showModal}>批量下架</Button>
                <Button type="primary" onClick={this.showModal}>批量删除</Button>
                ~~~~~~~~~~ */}
          </div>
           {/*~~~~~~~  表格 ~~~~~~~~~~ */}
          <Table pagination={this.state.tablePagination} onChange={this.tableChange} rowSelection={rowSelection} rowKey={record => record.id}    columns={columns} dataSource={this.state.tablePagedList} className='table' />
          
        </Card>



     {/*~~~~~~~  添加测试用户信息弹窗 ~~~~~~~~~~ */}
        <Modal
        title="添加测试账号"
        visible={this.state.visible}
        okText="确认"
          cancelText="取消"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户账号" />
        </p>
       
      </Modal>

 
      </div>
    );
  }
}
export default withRouter(recipeList);

