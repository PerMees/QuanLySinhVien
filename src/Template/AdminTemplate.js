import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { Layout, Menu } from "antd";
import "../Assets/css/admin.css";
import { history } from "../App";
import { NavLink } from "react-router-dom";
import { ADMIN_ACCOUNT } from "../Redux/Types/AdminType";
import { AdminLogoutAction } from "../Redux/Actions/AdminAction";
import { useDispatch } from "react-redux";

export const AdminTemplate = (props) => {
  const dispatch = useDispatch();
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
          {localStorage.getItem(ADMIN_ACCOUNT) ? (
            <>
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
                Hello,
                {JSON.parse(localStorage.getItem(ADMIN_ACCOUNT)).username}
              </h4>
            </>
          ) : (
            <NavLink to="/" className="block text-center my-5 text-white">
              Đăng nhập
            </NavLink>
          )}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${page}`]}>
            <Menu.Item
              key="1"
              icon={<i className="fas fa-home"></i>}
              onClick={() => {
                history.push("/admin/home");
              }}
            >
              Trang chủ
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<i className="fas fa-user"></i>}
              onClick={() => {
                history.push("/admin/xem-sinh-vien");
              }}
            >
              Xem sinh viên
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<i className="fas fa-user-plus"></i>}
              onClick={() => {
                history.push("/admin/them-sinh-vien");
              }}
            >
              Thêm sinh viên
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<i className="fas fa-user-edit"></i>}
              onClick={() => {
                history.push("/admin/sua-sinh-vien");
              }}
            >
              Chỉnh sửa sinh viên
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<i className="fas fa-search" style={{ width: 17.5 }}></i>}
              onClick={() => {
                history.push("/admin/tim-sinh-vien");
              }}
            >
              Tìm sinh viên
            </Menu.Item>
            <NavLink
              to="/"
              className=" absolute bottom-4 text-gray-200 text-center flex justify-center items-center"
              style={{
                bottom: "2rem",
                left: "50%",
                transform: "translate(-50%,0)",
              }}
              onClick={() => {
                const action = AdminLogoutAction();
                dispatch(action);
                alert("Đăng xuất thành công");
                localStorage.clear();
              }}
            >
              <i class="fas fa-sign-out-alt mr-3 text-lg"></i>
              {!state.collapsed ? <p className=" mt-3.5">Đăng xuất</p> : null}
            </NavLink>
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
            {localStorage.getItem(ADMIN_ACCOUNT) ? (
              <Route
                exact={props.exact}
                path={props.path}
                render={(propsRoute) => {
                  return <props.component {...propsRoute} />;
                }}
              />
            ) : (
              <h3 className="text-4xl text-red-600 font-bold">
                Vui lòng đăng nhập!
              </h3>
            )}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
