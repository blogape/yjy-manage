import React,{Component} from 'react';
import 'antd/dist/antd.css'
import {Row,Col} from 'antd';


class Admin extends Component{
    render(){
        return(
        
            <Row>
            <Col span={3}>left</Col>
            <Col span={21}>right</Col>
            </Row>
           
        )
    }
}

export default Admin;