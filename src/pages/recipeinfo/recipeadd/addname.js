import React,{Component}  from 'react';
import { Form, Input, Tooltip, Icon,Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

class Addname extends Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 6,
              },
            },
          };
        return(
            <div>
            <Form onSubmit={this.handleSubmit}>
            <FormItem
            {...formItemLayout}
            label={(
              <span>
                食谱名称&nbsp;
                
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入食谱名称!', whitespace: true }],
            })(
              <Input maxLength='20' />
            )}

        </FormItem>


        <FormItem
        {...formItemLayout}
        label={(
          <span>
            食谱简介&nbsp;
          </span>
        )}
      >
        {getFieldDecorator('describe', {
          rules: [{ required: false, message: '请输入食谱描述!', whitespace: true }],
        })(
            <TextArea placeholder=""  maxLength='200' autosize={{ minRows: 6, maxRows: 6 }} />
        )}

    </FormItem>


        <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">下一步</Button>
      </FormItem>
        </Form>
            </div>
        )
    }

}
 export default  Form.create()(Addname);