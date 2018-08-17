import React, { Component } from "react";
import {
  Input,
  Col,
  Tooltip,
  Button,
  Popconfirm,
  Icon,
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
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `加班3个小时以上 有餐补15块钱 ${i}`,
    age: 32,
    createtime:'2018-08-09',
    state:'下架',
    address: `London, Park Lane no. ${i}`,

  });
}
function handleChange(value) {
    console.log(`selected ${value}`);
  }
class recipeList extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        visible: false,
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
      //删除当前的
      handleDelete(record,key){
        console.log(record,key);
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
  render() {

    const columns = [
        {
          title: "食谱名称",
          dataIndex: "name"
        },
        {
          title: "状态",
          dataIndex: "state"
        },
        {
          title: "创建时间",
          dataIndex: "createtime"
        },
        {
            title: "操作",
            dataIndex: "operation",
            render: (text,record) => 
            <Popconfirm title="你确定要删除当前食谱吗?" onConfirm={() => this.handleDelete(record.key)}>
            <a href="javascript:;">删除</a>
            </Popconfirm>,
          },
          {
            title: "",
            dataIndex: "action",
            render: (text,record) => 
            <a href="javascript:;">查看</a>,
            
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
              <Select defaultValue="Sign Up">
                <Option value="Sign Up">全文搜索</Option>
                <Option value="Sign In">分类搜索</Option>
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
            <Button type="primary" onClick={this.showModal}>批量上架</Button>
              <Button type="primary" onClick={this.showModal}>批量下架</Button>
                <Button type="primary" onClick={this.showModal}>批量删除</Button>
          </div>
           {/*~~~~~~~  表格 ~~~~~~~~~~ */}
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} className='table' />

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
export default recipeList;
