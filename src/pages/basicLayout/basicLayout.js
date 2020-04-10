import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./basicLayout.scss";
import Home from '../home/home'
import Notice from "../home/notice";
import Region from "../user/region"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <a href="#/index/home">主页</a>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>用户中心</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <a href="#/index/user/region">区域管理</a>
              </Menu.Item>
              <Menu.Item key="4">客户信息管理</Menu.Item>
              <Menu.Item key="5">用户账户管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>能力中心</span>
                </span>
              }
            >
              <Menu.Item key="6">能力申请</Menu.Item>
              <Menu.Item key="7">能力配置</Menu.Item>
              <Menu.Item key="8">能力查询</Menu.Item>
              <Menu.Item key="9">接口监测</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <TeamOutlined />
                  <span>产品中心</span>
                </span>
              }
            >
              <Menu.Item key="10">产品管理</Menu.Item>
              <Menu.Item key="11">产品菜单管理</Menu.Item>
              <Menu.Item key="12">产品版本管理</Menu.Item>
              <Menu.Item key="13">供应商管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="header">
              <div className="header-left">运营管理平台</div>
              <div className="header-right">
                <div>惠旅云官网</div>
                <div>小微园区官网</div>
                <div>admin</div>
                <div>退出</div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/index/home" exact component={Home}></Route>
                <Route path="/index/home/notice" exact component={Notice}></Route>
                <Route path="/index/user/region" exact component={Region}></Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
