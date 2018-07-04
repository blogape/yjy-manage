import React, { Component } from "react";
import MenuConfig from "./../../config/menuConfig";
import { Menu, Icon } from "antd";
import "./index.less";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return(
            <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
            </SubMenu>)
      }
      return <Menu.Item title={item.title} key={item.key} />;
    });
  };
  render() {
    return (
      <div>
        <div className="logo">
          {/*
        <img src="http://www.eg-cloud.com/images/logo.jpg" alt="" />
        */}
          <h1>云食谱管理系统</h1>
        </div>
        <Menu theme="dark">
            {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
