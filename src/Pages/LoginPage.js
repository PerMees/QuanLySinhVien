import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ADMIN_ACCOUNT } from "../Redux/Types/AdminType";
import * as Yup from "yup";
import { REGEX_NUMBER } from "../Utils/setting";
import { history } from "../App";
import {
  STU_ViewStudentAction,
  ViewStudentAction,
} from "../Redux/Actions/AdminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { SetVisibleAction } from "../Redux/Actions/StudentAction";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { studentChoose, visible } = useSelector(
    (state) => state.StudentReducer
  );
  const formikStu = useFormik({
    initialValues: {
      maSV: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      maSV: Yup.string()
        .matches(REGEX_NUMBER, "Mã sinh viên chỉ được là số")
        .required("Mã sinh viên không được bỏ trống"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống"),
    }),
    onSubmit: (value) => {
      const action = STU_ViewStudentAction(value);
      dispatch(action);
    },
  });
  const formikAdmin = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username không được bỏ trống"),
      password: Yup.string().required("Password không được bỏ trống"),
    }),
    onSubmit: (values) => {
      if (values.username !== "admin" || values.password !== "admin") {
        alert("Thông tin đăng nhập sai, vui lòng nhập lại");
        return;
      }
      localStorage.setItem(ADMIN_ACCOUNT, JSON.stringify(values));
      alert("Đăng nhập thành công");
      history.push("/admin");
    },
  });
  const [option, setOption] = useState(0);
  const height = window.innerHeight;
  const width = window.innerWidth;
  const acc = { username: "abc", pass: "abc" };
  localStorage.setItem(ADMIN_ACCOUNT, JSON.stringify(acc));
  return (
    <div
      className="h-screen w-screen p-10 flex justify-center items-center"
      style={{
        background: `url(http://picsum.photos/id/120/${width}/${height}) center no-repeat`,
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.7)",
      }}
    >
      <div
        className="verflow-hidden"
        style={{
          height: "55%",
          width: 500,
          background: "rgba( 255, 255, 255, 0.25 )",
          backdropFilter: "blur( 4px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <div className="user">
          <button
            className={
              "w-1/2 text-lg font-bold p-4 text-gray-200 " +
              (option === 0 ? " shadow-2xl" : " shadow")
            }
            onClick={() => {
              setOption(0);
            }}
          >
            Student
          </button>
          <button
            className={
              "w-1/2 text-lg font-bold p-4 text-gray-200  " +
              (option === 1 ? " shadow-2xl" : " shadow-sm")
            }
            onClick={() => {
              setOption(1);
            }}
          >
            Admin
          </button>
        </div>
        <div className="content">
          {option === 0 ? (
            <form onSubmit={formikStu.handleSubmit} className="p-5">
              <div className="">
                <p className="text-gray-200 ">Nhập mã sinh viên</p>
                <input
                  value={formikStu.values.maSV}
                  name="maSV"
                  type="text"
                  className="w-full h-10 p-3 rounded-lg"
                  onChange={formikStu.handleChange}
                  onBlur={formikStu.handleBlur}
                />
                {formikStu.touched.maSV && formikStu.errors.maSV ? (
                  <p className="text-red-500 mt-2">{formikStu.errors.maSV}</p>
                ) : null}
              </div>
              <div className="mt-4">
                <p className="text-gray-200 ">Mật khẩu</p>
                <input
                  value={formikStu.values.matKhau}
                  name="matKhau"
                  type="password"
                  className="w-full h-10 p-3 rounded-lg"
                  onChange={formikStu.handleChange}
                  onBlur={formikStu.handleBlur}
                />
                {formikStu.touched.matKhau && formikStu.errors.matKhau ? (
                  <p className="text-red-500 mt-2">
                    {formikStu.errors.matKhau}
                  </p>
                ) : null}
              </div>
              <button
                className="block mx-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 mt-5"
                type="submit"
              >
                Đăng nhập
              </button>
            </form>
          ) : (
            <form onSubmit={formikAdmin.handleSubmit} className="p-5">
              <div>
                <p className="text-gray-200 ">Username:</p>
                <input
                  value={formikAdmin.values.username}
                  name="username"
                  type="text"
                  className="w-full h-10 p-3 rounded-lg"
                  onChange={formikAdmin.handleChange}
                  onBlur={formikAdmin.handleBlur}
                />
                {formikAdmin.touched.username && formikAdmin.errors.username ? (
                  <p className="text-red-500 mt-2">
                    {formikAdmin.errors.username}
                  </p>
                ) : null}
              </div>
              <div className="mt-5">
                <p className="text-gray-200 ">Password:</p>
                <input
                  value={formikAdmin.values.password}
                  name="password"
                  type="password"
                  className="w-full h-10 p-3 rounded-lg"
                  onChange={formikAdmin.handleChange}
                  onBlur={formikAdmin.handleBlur}
                />
                {formikAdmin.touched.password && formikAdmin.errors.password ? (
                  <p className="text-red-500 mt-2">
                    {formikAdmin.errors.password}
                  </p>
                ) : null}
              </div>
              <button
                className="block mx-auto rounded-lg bg-blue-600  hover:bg-blue-700 text-white px-3 py-2 mt-5"
                type="submit"
              >
                Đăng nhập
              </button>
            </form>
          )}
        </div>
        <div className="modal">
          <Modal
            title="Thông tin sinh viên"
            centered
            visible={visible}
            onOk={() => {
              const action = SetVisibleAction(false);
              dispatch(action);
            }}
            onCancel={() => {
              const action = SetVisibleAction(false);
              dispatch(action);
            }}
            footer={[
              <Button
                key="submit"
                type="primary"
                onClick={() => {
                  const action = SetVisibleAction(false);
                  dispatch(action);
                }}
              >
                Ok
              </Button>,
            ]}
            width={400}
          >
            <table>
              <thead>
                <tr>
                  <td>
                    <b>Mã số sinh viên: </b>
                  </td>
                  <td className="pl-3">{studentChoose.maSV}</td>
                </tr>
                <tr>
                  <td>
                    <b>Họ và tên: </b>
                  </td>
                  <td className="pl-3">{studentChoose.hoTen}</td>
                </tr>
                <tr>
                  <td>
                    <b>Ngày tháng năm sinh: </b>
                  </td>
                  <td className="pl-3">{studentChoose.ngaySinh}</td>
                </tr>
                <tr>
                  <td>
                    <b>Chứng minh nhân dân: </b>
                  </td>
                  <td className="pl-3">{studentChoose.cmnd}</td>
                </tr>
                <tr>
                  <td>
                    <b>Email: </b>
                  </td>
                  <td className="pl-3">{studentChoose.email}</td>
                </tr>
                <tr>
                  <td>
                    <b>Số điện thoại: </b>
                  </td>
                  <td className="pl-3">{studentChoose.soDT}</td>
                </tr>
                <tr>
                  <td>
                    <b>Khóa: </b>
                  </td>
                  <td className="pl-3">{studentChoose.khoaHoc}</td>
                </tr>
                <tr>
                  <td>
                    <b>Khoa: </b>
                  </td>
                  <td className="pl-3">{studentChoose.tenKhoa}</td>
                </tr>
                <tr>
                  <td>
                    <b>Lớp: </b>
                  </td>
                  <td className="pl-3">{studentChoose.tenLop}</td>
                </tr>
                <tr>
                  <td>
                    <b>Giáo viên phụ trách: </b>
                  </td>
                  <td className="pl-3">{studentChoose.tenGV}</td>
                </tr>
              </thead>
            </table>
          </Modal>
        </div>
      </div>
    </div>
  );
}
