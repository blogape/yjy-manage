import React,{Component} from 'react';
import './index.less';
import { Card,Avatar,Row,Col} from 'antd';
import { width } from 'window-size';
const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
class Recipedetail extends Component{
    render(){
        return(
            <div className='recipes-detail'>
            <div className='detail-content'>
            <Card   title='西冷牛排'    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{margin:'0 auto',padding:'20px',}} />}            >
            <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Administrator "
            description="   拎起一小块牛排丢到嘴里，能清楚感受到汁水随着牙齿的咀嚼而散溢开来            "
          />
          <div style={{ background: '#ECECEC', padding: '30px',marginTop:'40px' }}>
          <Row gutter={16}>
          <Col span={8}>
            <Card title="烹饪难度" bordered={false}>初级</Card>
          </Col>
          <Col span={8}>
            <Card title="烹饪时间" bordered={false}>10分钟左右</Card>
          </Col>
          <Col span={8}>
            <Card title="烹饪设备" bordered={false}>牛扒机</Card>
          </Col>
        </Row>
</div>


            <Card title='主料' style={{marginTop:'40px'}}>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            </Card>
            <Card title='辅料' style={{marginTop:'40px'}}>
            <Card.Grid style={gridStyle}>西兰花 <span style={{marginLeft:'20px',color:'#f97c00'}}>300g            </span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>
            <Card.Grid style={gridStyle}>西冷牛排 <span style={{marginLeft:'20px',color:'#f97c00'}}>500g</span> </Card.Grid>

            </Card>
          </Card>,
          </div>
            </div>
        )
    }
}
export default Recipedetail;