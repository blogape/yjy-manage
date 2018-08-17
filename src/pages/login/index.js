import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { loginByUsername } from '../../services/api.js';

import { setToken, getToken } from "../../utils/token.js";
import "./index.less";
const FormItem = Form.Item;
class Login extends Component {
  // antd's click on the event login api call
  constructor(props) {
    super(props);
    this.handleSubmit = e => {
      e.preventDefault();
      // return err values
      this.props.form.validateFields((err, values) => {
        console.log(values);
        if (!err) {
          // statement let par
          let par = { username: values.userName, password: values.password };
           try{
            let res=await loginByUsername(userName,password);
            const data=res.data;
            console.log(data);
          }
          catch(e){

          }
        }
      });
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>后台管理系统</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "请输入您的用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入你的密码！" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);
