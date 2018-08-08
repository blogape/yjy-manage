import React, { Component } from "react";
import { Card, Button } from "antd";
import "./index.less";
const ButtonGroup = Button.Group;

class Buttons extends Component {
    
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Primary</Button>
          <Button>Primary</Button>
          <Button type="dashed">Primary</Button>
          <Button type="danger">danger</Button>
          <Button disabled>danger</Button>
        </Card>
        <Card title="图标按钮">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </Card>
        <Card title="按钮组合">
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>
        </Card>
      </div>
    );
  }
}

export default Buttons;
