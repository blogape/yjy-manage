import React,{Component} from 'react';
import { Modal, Button,Card } from 'antd';

class modals extends Component{
    state = { visible: false }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    render(){
        return(
            <div>
            <Card title='基本'>
            <Button type="primary" onClick={this.showModal}>Open</Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            </Card>
            </div>
        )
    }

}

export default modals;