import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { Layout, Menu } from "antd";
import "../Assets/css/admin.css";
import { history } from "../App";

export const AdminTemplate = (props) => {
  const [state, setState] = useState({ collapsed: false });
  const { Header, Sider, Content } = Layout;
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  let page = 1;
  if (history.location.pathname === "/xem-sinh-vien") page = 2;
  if (history.location.pathname === "/them-sinh-vien") page = 3;
  else if (history.location.pathname === "/sua-sinh-vien") page = 4;
  else if (history.location.pathname === "/tim-sinh-vien") page = 5;
  return (
    <>
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <img
            className={
              "logo rounded-full my-4 mx-auto block transition-all" +
              (state.collapsed ? " w-10" : " w-20")
            }
            src="https://i.pravatar.cc/300"
            alt="avatar"
          />
          <h4
            className={
              "text-center text-white font-bold transition-all" +
              (state.collapsed ? " hidden" : " block")
            }
          >
            Hello, admin
          </h4>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${page}`]}>
            <Menu.Item
              key="1"
              icon={<i className="fas fa-home"></i>}
              onClick={() => {
                history.push("/home");
              }}
            >
              Trang chủ
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<i className="fas fa-user"></i>}
              onClick={() => {
                history.push("/xem-sinh-vien");
              }}
            >
              Xem sinh viên
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<i className="fas fa-user-plus"></i>}
              onClick={() => {
                history.push("/them-sinh-vien");
              }}
            >
              Thêm sinh viên
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<i className="fas fa-user-edit"></i>}
              onClick={() => {
                history.push("/sua-sinh-vien");
              }}
            >
              Chỉnh sửa sinh viên
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<i className="fas fa-search" style={{ width: 17.5 }}></i>}
              onClick={() => {
                history.push("/tim-sinh-vien");
              }}
            >
              Tìm sinh viên
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout ">
          <Header className="site-layout-background " style={{ padding: 0 }}>
            <i
              className="fa fa-bars trigger cursor-pointer ml-5 text-lg"
              onClick={toggle}
            ></i>
          </Header>
          <Content
            className="site-layout-background overflow-y-auto"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route
              exact={props.exact}
              path={props.path}
              render={(propsRoute) => {
                return <props.component {...propsRoute} />;
              }}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
