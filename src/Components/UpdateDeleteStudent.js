import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  DeleteStudentAction,
  UpdateStudentAction,
  ViewStudentAction,
} from "../Redux/Actions/AdminAction";
import {
  REGEX_KHOAHOC,
  REGEX_NUMBER,
  REGEX_NUMTEXT,
  REGEX_VIETNAMESE,
} from "../Utils/setting";
import { Modal } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";

export default function UpdateDeleteStudent() {
  const { studentChoose } = useSelector((state) => state.StudentReducer);
  const [acceptChange, setAcceptChange] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maSV: "",
    },
    validationSchema: Yup.object({
      maSV: Yup.string()
        .matches(REGEX_NUMBER, "Mã sinh viên chỉ được là số")
        .min(8, "Mã sinh viên không được ít hơn 8 chữ sô")
        .required("Mã sinh viên không được bỏ trống"),
    }),
    onSubmit: (values) => {
      const action = ViewStudentAction(values.maSV);
      dispatch(action);
    },
  });
  if (studentChoose.hoTen !== "" && acceptChange) {
    setAcceptChange(false);
  }
  const formikUpdate = useFormik({
    enableReinitialize: true,
    initialValues: {
      maSV: studentChoose.maSV,
      hoTen: studentChoose.hoTen,
      ngaySinh: studentChoose.ngaySinh,
      cmnd: studentChoose.cmnd,
      email: studentChoose.email,
      soDT: studentChoose.soDT,
      matKhau: studentChoose.matKhau,
      khoaHoc: studentChoose.khoaHoc,
      tenKhoa: studentChoose.tenKhoa,
      tenLop: studentChoose.tenLop,
      tenGV: studentChoose.tenGV,
    },
    validationSchema: Yup.object({
      maSV: Yup.string()
        .matches(REGEX_NUMBER, "Mã sinh viên phải là số")
        .min(8, "Mã sinh viên không được ít hơn 8 chữ sô")
        .required("Mã sinh viên không được bỏ trống"),
      hoTen: Yup.string()
        .matches(REGEX_VIETNAMESE, "Họ tên không hợp lệ")
        .required("Họ tên không được bỏ trống"),
      ngaySinh: Yup.string().required("Ngày sinh không được bỏ trống"),
      email: Yup.string()
        .email("Email phải đúng định dạng")
        .required("Email không được bỏ trống"),
      soDT: Yup.string()
        .matches(REGEX_NUMBER, "Số điện thoại phải là số")
        .length(10, "Số điện thoại phải có 10 chữ số")
        .required("Mã sinh viên không được bỏ trống"),
      khoaHoc: Yup.string()
        .matches(REGEX_KHOAHOC, "Khóa học phải có dạng K**")
        .length(3, "Khóa học phải có 3 ký tự")
        .required("Khóa học không được bỏ trống"),
      tenKhoa: Yup.string()
        .matches(REGEX_NUMTEXT, "Tên khoa không hợp lệ")
        .required("Tên khoa không được bỏ trống"),
      tenLop: Yup.string()
        .matches(REGEX_NUMTEXT, "Tên lớp không hợp lệ")
        .required("Tên lớp không được bỏ trống"),
      tenGV: Yup.string()
        .matches(REGEX_VIETNAMESE, "Họ tên giáo viên không hợp lệ")
        .required("Họ tên giáo viên không được bỏ trống"),
      cmnd: Yup.string()
        .matches(REGEX_NUMBER, "CMND không đúng định dạng")
        .required("CMND không được bỏ trống"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống"),
    }),
    onSubmit: (values) => {
      const action = UpdateStudentAction(values);
      dispatch(action);
    },
  });
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  return (
    <div className="container">
      <h3 className="text-3xl font-bold">Chỉnh sửa sinh viên</h3>
      <form className="" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="maSV"
          placeholder="Nhập mã sinh viên"
          className="border rounded p-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: "88%" }}
        />
        <button
          className=" bg-blue-500 hover:bg-blue-600 text-white px-3 py-2.5 rounded-md ml-3"
          type="submit"
        >
          Xem thông tin
        </button>
        {formik.touched.maSV && formik.errors.maSV ? (
          <p className=" text-xs text-red-600">{formik.errors.maSV}</p>
        ) : null}
      </form>
      <div className=" shadow-lg mt-5 p-3">
        <ul>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Mã số sinh viên:</b>{" "}
            {studentChoose.maSV}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Họ tên sinh viên: </b>
            {studentChoose.hoTen}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Ngày sinh: </b>
            {studentChoose.ngaySinh}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Chứng minh nhân dân:</b>
            {studentChoose.cmnd}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Email: </b>
            {studentChoose.email}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Số điện thoại: </b>
            {studentChoose.soDT}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Mật khẩu: </b>
            {studentChoose.matKhau}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Khóa:</b>
            {studentChoose.khoaHoc}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Khoa:</b>
            {studentChoose.tenKhoa}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Lớp: </b>
            {studentChoose.tenLop}
          </li>
          <li className="mt-5 text-md ml-5">
            <b className="inline-block w-44">Giáo viên phụ trách: </b>
            {studentChoose.tenGV}
          </li>
        </ul>
      </div>
      <button
        disabled={acceptChange}
        className={
          " bg-yellow-500 hover:bg-yellow-600  text-white px-3 py-2.5 rounded-md mt-5 " +
          (acceptChange ? " cursor-not-allowed " : null)
        }
        onClick={() => {
          setVisible(true);
        }}
      >
        Chỉnh sửa
      </button>
      <Modal
        title="Chỉnh sửa sinh viên"
        centered
        visible={visible}
        onOk={() => {
          setVisible(false);
          formikUpdate.handleSubmit();
        }}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="container">
          <form action="">
            <div className="flex">
              <div className="w-1/2">
                <div className="mt-5 mr-2">
                  <p className="m-0">Mã số sinh viên</p>
                  <input
                    value={formikUpdate.values.maSV}
                    className=" border rounded w-full p-2"
                    type="text"
                    name="maSV"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                    disabled
                  />
                </div>
                <div className="mt-5 mr-2">
                  <p className="m-0">Họ tên sinh viên</p>
                  <input
                    value={formikUpdate.values.hoTen}
                    className=" border rounded w-full p-2"
                    type="text"
                    name="hoTen"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                  />
                  {formikUpdate.touched.hoTen && formikUpdate.errors.hoTen ? (
                    <p className=" text-xs text-red-600">
                      {formikUpdate.errors.hoTen}
                    </p>
                  ) : null}
                </div>
                <div className="mt-5 mr-2">
                  <p className="m-0">Ngày sinh</p>
                  <Space direction="vertical" size={12} style={{ height: 40 }}>
                    <DatePicker
                      defaultValue={moment(
                        formikUpdate?.values.ngaySinh,
                        dateFormatList
                      )}
                      format={dateFormatList}
                      onChange={(e) => {
                        formikUpdate.setFieldValue(
                          "ngaySinh",
                          moment(e?._fd).format("L")
                        );
                      }}
                    />
                    {formikUpdate.touched.ngaySinh &&
                    formikUpdate.errors.ngaySinh ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.ngaySinh}
                      </p>
                    ) : null}
                  </Space>
                </div>
                <div className="mt-5 mr-2">
                  <p className="m-0">Chứng minh nhân dân</p>
                  <input
                    value={formikUpdate.values.cmnd}
                    className=" border rounded w-full p-2"
                    type="text"
                    name="cmnd"
                    onChange={formikUpdate.handleChange}
                    onBlur={formikUpdate.handleBlur}
                  />
                  {formikUpdate.touched.cmnd && formikUpdate.errors.cmnd ? (
                    <p className=" text-xs text-red-600">
                      {formikUpdate.errors.cmnd}
                    </p>
                  ) : null}
                </div>
                <div className="mt-5 mr-2">
                  <div className="mt-5 mr-2">
                    <p className="m-0">Email</p>
                    <input
                      value={formikUpdate.values.email}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="email"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.email && formikUpdate.errors.email ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 mr-2">
                  <div className="mt-5 mr-2">
                    <p className="m-0">Số điện thoại</p>
                    <input
                      value={formikUpdate.values.soDT}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="soDT"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.soDT && formikUpdate.errors.soDT ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.soDT}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mt-5 ml-2">
                  <div className="mt-5 ml-2">
                    <p className="m-0">Mật khẩu</p>
                    <input
                      value={formikUpdate.values.matKhau}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="matKhau"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.matKhau &&
                    formikUpdate.errors.matKhau ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.matKhau}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 ml-2">
                  <div className="mt-5 ml-2">
                    <p className="m-0">Khóa</p>
                    <input
                      value={formikUpdate.values.khoaHoc}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="khoaHoc"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.khoaHoc &&
                    formikUpdate.errors.khoaHoc ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.khoaHoc}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 ml-2">
                  <div className="mt-5 ml-2">
                    <p className="m-0">Khoa</p>
                    <input
                      value={formikUpdate.values.tenKhoa}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="tenKhoa"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.tenKhoa &&
                    formikUpdate.errors.tenKhoa ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.tenKhoa}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 ml-2">
                  <div className="mt-5 ml-2">
                    <p className="m-0">Lớp</p>
                    <input
                      value={formikUpdate.values.tenLop}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="tenLop"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.tenLop &&
                    formikUpdate.errors.tenLop ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.tenLop}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5 ml-2">
                  <div className="mt-5 ml-2">
                    <p className="m-0">Giáo viên phụ trách</p>
                    <input
                      value={formikUpdate.values.tenGV}
                      className=" border rounded w-full p-2"
                      type="text"
                      name="tenGV"
                      onChange={formikUpdate.handleChange}
                      onBlur={formikUpdate.handleBlur}
                    />
                    {formikUpdate.touched.tenGV && formikUpdate.errors.tenGV ? (
                      <p className=" text-xs text-red-600">
                        {formikUpdate.errors.tenGV}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <button
        disabled={acceptChange}
        className={
          " w-20 bg-red-600 hover:bg-red-700 text-white px-3 py-2.5 rounded-md mt-5 ml-5 " +
          (acceptChange ? " cursor-not-allowed " : null)
        }
        onClick={() => {
          setVisibleModal2(true);
        }}
      >
        Xóa
      </button>
      <Modal
        centered
        visible={visibleModal2}
        onOk={() => {
          setVisibleModal2(false);
          const action = DeleteStudentAction();
          dispatch(action);
        }}
        onCancel={() => setVisibleModal2(false)}
        width={300}
      >
        <b>Xác nhận xóa sinh viên?</b>
      </Modal>
    </div>
  );
}
