import React, { Component } from "react";
import { Form, Input, Icon, Button, Row, Col, Upload, Modal,message } from "antd";
import "./index.less";
import OSS from "ali-oss";
// 构建对象，传入所需配置参数

const FormItem = Form.Item;

const client = new OSS.Wrapper({
  region: "oss-cn-shenzhen",
    accessKeyId: "LTAIF7RJOgw4JlC2",
    accessKeySecret: "th1fpjzKjGfCEffUepNMpArPSVMba5",
    bucket: "recipes"
});
function beforeUpload(file) {

  const name = file.name;
  // 使用上面的client上传文件
  client
  .multipartUpload(file.name, file, { progress: this.progress })
  .then(function(data) {
      console.log(data);
      console.log("返回地址", data.res.requestUrls);
  });




  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}



let uuid = 0;
class Steps extends React.Component {

  constructor(props){
    super(props)
  }



  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
    






  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    //   图片上传
    const { previewVisible, previewImage, fileList } = this.state;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    //   表单
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayoutWithOutLabel = {
      wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 20, offset: 4 } }
    };
    getFieldDecorator("keys", { initialValue: [] });

    const keys = getFieldValue("keys");

    const formItems = keys.map((k, index) => {
      return (
        <Row key={k} >
          <Col span={12}>
            <FormItem {...formItemLayoutWithOutLabel} required={false}>
              {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ["onChange", "onBlur"],
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "请填写步骤描述"
                  }
                ]
              })(
                <Input
                  placeholder="请填写步骤描述"
                  style={{ width: "90%", marginRight: 8 }}
                />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem>
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 5 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </FormItem>
          </Col>
        </Row>
      );
    });

    return (
      <div>
        <h3>添加步骤</h3>
        <Form onSubmit={this.handleSubmit}>
          {formItems}
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button
              type="dashed"
              onClick={this.add}
              style={{ width: "60%", marginLeft: "80px" }}
            >
              <Icon type="plus" /> 添加
            </Button>
          </FormItem>
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "60%", marginLeft: "80px" }}
            >
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Steps);
