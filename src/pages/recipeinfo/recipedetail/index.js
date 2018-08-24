import React,{Component} from 'react';
import './index.less';
import { Card,Avatar,Row,Col,Collapse} from 'antd';
import { width } from 'window-size';
import  {recipedetail} from '../../../services/api.js';

const { Meta } = Card;
const Panel = Collapse.Panel;




const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  function  callback(key) {
    console.log(key);
  }
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
class Recipedetail extends Component{
      state={
            resdata:'',
            user:'',
            ingredientInfo:'',
            main:''

        }
  fetch = async (query = {}) => {
    const data=await recipedetail(this.props.match.params.id );
    this.setState({
      resdata:data.data,
      user:data.data.user,
      ingredientInfo:data.data.ingredientInfo,
      main:data.data.ingredientInfo[0].ingredients
    })
    
  }
  componentDidMount() {
    this.fetch();
  }
    render(){

        return(
            <div className='recipes-detail'>
            <div className='detail-content'>
            <Card   title={this.state.resdata.title}    cover={<img alt="example" src={this.state.resdata.images} style={{margin:'0 auto',padding:'20px',}} />}            >
            <Meta
            avatar={<Avatar src={this.state.user.headimg} />}
            title={this.state.user.nickname}
            description={this.state.resdata.description}
          />
          <div style={{ background: '#ECECEC', padding: '30px',marginTop:'40px' }}>
          <Row gutter={16}>
          <Col span={8}>
            <Card title="烹饪难度" bordered={false}>{this.state.resdata.difficultyDegree}</Card>
          </Col>
          <Col span={8}>
            <Card title="烹饪时间" bordered={false}>{this.state.resdata.timeCost}分钟左右</Card>
          </Col>
          <Col span={8}>
            <Card title="烹饪设备" bordered={false}>牛扒机</Card>
          </Col>
        </Row>
</div>


            <Card title='主料' style={{marginTop:'40px'}}>
           {/* {this.state.main.map((item,index)=>{
              return(
                <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
              )
            })}
          */}
            </Card>
            <Card title='辅料' style={{marginTop:'40px'}}>
            <Card.Grid style={gridStyle}>西兰花 <span style={{marginLeft:'20px',color:'#f97c00'}}>300g            </span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            </Card>
                        {/*~~~~~~~~~~ 步骤 ~~~~~~~~~~~~~*/}
       <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginTop:'30px'}}>
       <Panel header="This is panel header 1" key="1">
         <p>{text}</p>
       </Panel>
       <Panel header="This is panel header 2" key="2">
         <p>{text}</p>
       </Panel>
       <Panel header="This is panel header 3" key="3" disabled>
         <p>{text}</p>
       </Panel>
     </Collapse>
          </Card>,
          </div>
    
            </div>
        )
    }
}
export default Recipedetail;