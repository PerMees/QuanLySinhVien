import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DatePicker, Space } from "antd";
import moment from "moment";
import {
  REGEX_VIETNAMESE,
  REGEX_NUMBER,
  REGEX_KHOAHOC,
  REGEX_NUMTEXT,
} from "../Utils/setting";
import { useDispatch } from "react-redux";
import { AddStudentAction } from "../Redux/Actions/AdminAction";

export default function AddStudentForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      maSV: "",
      hoTen: "",
      ngaySinh: "",
      cmnd: "",
      email: "",
      soDT: "",
      khoaHoc: "",
      tenKhoa: "",
      tenLop: "",
      tenGV: "",
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
    }),
    onSubmit: (values) => {
      const action = AddStudentAction(values);
      dispatch(action);
    },
  });

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <div className="container">
      <h3 className="font-bold text-3xl">Thêm sinh viên</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="flex">
          <div className="w-1/2">
            <div className="mt-5 mr-2">
              <p className="m-0">Mã số sinh viên</p>
              <input
                className=" border rounded w-full p-2"
                type="text"
                name="maSV"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.maSV && formik.errors.maSV ? (
                <p className=" text-xs text-red-600">{formik.errors.maSV}</p>
              ) : null}
            </div>
            <div className="mt-5 mr-2">
              <p className="m-0">Họ tên sinh viên</p>
              <input
                className=" border rounded w-full p-2"
                type="text"
                name="hoTen"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <p className=" text-xs text-red-600">{formik.errors.hoTen}</p>
              ) : null}
            </div>
            <div className="mt-5 mr-2">
              <p className="m-0">Ngày sinh</p>
              <Space direction="vertical" size={12} style={{ height: 40 }}>
                <DatePicker
                  format={dateFormatList}
                  onChange={(e) => {
                    formik.setFieldValue("ngaySinh", moment(e?._d).format("L"));
                  }}
                />
                {formik.touched.ngaySinh && formik.errors.ngaySinh ? (
                  <p className=" text-xs text-red-600">
                    {formik.errors.ngaySinh}
                  </p>
                ) : null}
              </Space>
            </div>
            <div className="mt-5 mr-2">
              <p className="m-0">Chứng minh nhân dân</p>
              <input
                className=" border rounded w-full p-2"
                type="text"
                name="cmnd"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cmnd && formik.errors.cmnd ? (
                <p className=" text-xs text-red-600">{formik.errors.cmnd}</p>
              ) : null}
            </div>
            <div className="mt-5 mr-2">
              <div className="mt-5 mr-2">
                <p className="m-0">Email</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className=" text-xs text-red-600">{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mt-5 ml-2">
              <div className="mt-5 ml-2">
                <p className="m-0">Số điện thoại</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="soDT"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.soDT && formik.errors.soDT ? (
                  <p className=" text-xs text-red-600">{formik.errors.soDT}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-5 ml-2">
              <div className="mt-5 ml-2">
                <p className="m-0">Khóa</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="khoaHoc"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.khoaHoc && formik.errors.khoaHoc ? (
                  <p className=" text-xs text-red-600">
                    {formik.errors.khoaHoc}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5 ml-2">
              <div className="mt-5 ml-2">
                <p className="m-0">Khoa</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="tenKhoa"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tenKhoa && formik.errors.tenKhoa ? (
                  <p className=" text-xs text-red-600">
                    {formik.errors.tenKhoa}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5 ml-2">
              <div className="mt-5 ml-2">
                <p className="m-0">Lớp</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="tenLop"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tenLop && formik.errors.tenLop ? (
                  <p className=" text-xs text-red-600">
                    {formik.errors.tenLop}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5 ml-2">
              <div className="mt-5 ml-2">
                <p className="m-0">Giáo viên phụ trách</p>
                <input
                  className=" border rounded w-full p-2"
                  type="text"
                  name="tenGV"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tenGV && formik.errors.tenGV ? (
                  <p className=" text-xs text-red-600">{formik.errors.tenGV}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <button
          className=" bg-blue-500 hover:bg-blue-600 text-white px-3 py-2.5 rounded-md mt-5 block mx-auto"
          type="submit"
        >
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
}
