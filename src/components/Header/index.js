import React, { Component } from "react";
import { Row, Col } from "antd";
import { HashRouter, Route, Switch ,withRouter} from "react-router-dom";



import "./index.less";
import Util from "../../utils/utils";
import axios from "axios";
import { getToken, removeToken } from "../../utils/token.js";
import {logout} from '../../services/api.js';
class Header extends Component {
  state = {};
  componentWillMount() {
    // 转成对象
    let token = JSON.parse(getToken());
    // 设置用户名
    
    if(token==null){
     this.props.history.push('/login');
    }else{
      this.setState({
        username: token.nickname
      });
    }
   
    // 设置时间
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
    
  }
 
    logout=async()=>{
      const { history } = this.props;

      try{
        await logout();
      }
      catch(e){

      }
      removeToken();
      this.props.history.push('/login')

    }
   

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎 {this.state.username}</span>
            <a onClick={this.logout.bind(this)}>退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            {/*<span className='weather-detail'>晴转多云</span> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Header);
