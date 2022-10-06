import "../../styles/mystyles.css";
import { useNavigate } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { LayoutMenu } from "../../constants/LayoutMenu";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["Home", "Register", "Logout"].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = ["Products", LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `${icon}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const Navigation = ({ children }) => {
  const navigate = useNavigate();
  // const span = useRef();
  const onClickHandler = (e) => {
    // console.log("e.key: ", e.key.toLowerCase());
    // history.push(`/ ${e.key.toLowerCase()}`);
    navigate(`/${e.key.toLowerCase()}`);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              onClick={(e) => onClickHandler(e)}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
              style={{
                height: "100%",
              }}
              items={LayoutMenu}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Fake Shop ©2022
      </Footer>
    </Layout>
  );
};

export default Navigation;
