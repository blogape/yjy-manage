import React,{Component} from 'react';
import 'antd/dist/antd.css'
import {Row,Col,Button} from 'antd';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
import './style/common.less';
class Admin extends Component{
    render(){
        return(
        
            <Row className='container'>
            <Col span={3} className='nav-left'>
                <NavLeft></NavLeft>
            </Col>
            <Col span={21} className='main'>
            <Header></Header>
            <Row className='content'>
            content
            </Row>
            <Footer className=''></Footer>
            </Col>
            </Row>
           
        )
    }
}

export default Admin;