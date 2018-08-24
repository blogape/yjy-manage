import React, { Component } from 'react';
import { Form, Input, Icon, Button, Row, Col } from 'antd';
import './index.less';

const FormItem = Form.Item;

let uuid = 0;
class auxiliary extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayoutWithOutLabel = {
      wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 20, offset: 4 }, },
    };
    getFieldDecorator('keys', { initialValue: [] });

    const keys = getFieldValue('keys');

    const formItems = keys.map((k, index) => {
      return (
        <Row key={k}>
          <Col span={12}>
            <FormItem
              {...formItemLayoutWithOutLabel}
              required={false}
              
            >
              {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "请填写辅料名称",
                }],
              })(
                <Input placeholder="请填写辅料名称" style={{ width: '90%', marginRight: 8 }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayoutWithOutLabel}
              required={false}
            >
              {getFieldDecorator(`address[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "请填写重量",
                }],
              })(
                <Input placeholder="重量/克" style={{ width: '90%', marginRight: 8 }} />
              )}
              {keys.length > 1 ? (
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  disabled={keys.length === 1}
                  onClick={() => this.remove(k)}
                />
              ) : null}
            </FormItem>
          </Col>
        </Row>
      );
    });
    
    return (
      <div>
    
      <h3>添加辅料</h3>
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%',marginLeft:'80px' }}>
            <Icon type="plus" /> 添加
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit" style={{ width: '60%',marginLeft:'80px' }}>提交</Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}
export default Form.create()(auxiliary)

