import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import RootRouter from "./Router";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const navigation = [
  {
    name: "Campaign",
    path: "/dashboard/campaign",
    icon: <UserOutlined />,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: <VideoCameraOutlined />,
  },
];

const Dasboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={open}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {navigation.map((item, index) => (
              <Menu.Item key={index} icon={item.icon}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(open ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: () => setOpen(!open),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              // minHeight: "calc(100vh - 112px)",
              // width: "100%",
              height: "100%",
            }}
          >
            <RootRouter />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dasboard;
