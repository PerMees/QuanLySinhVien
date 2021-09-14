import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { ViewStudentAction } from "../Redux/Actions/AdminAction";
import { REGEX_NUMBER } from "../Utils/setting";

export default function ViewStudent() {
  const { studentChoose } = useSelector((state) => state.StudentReducer);
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
  return (
    <div className="container">
      <h3 className="text-3xl font-bold">Xem thông tin sinh viên</h3>
      <form className="" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="maSV"
          placeholder="Nhập mã sinh viên"
          className="border rounded p-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: "87%" }}
        />
        <button
          className=" bg-blue-500 hover:bg-blue-600 text-white px-3 py-2.5 rounded-md ml-5"
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
            <b>Mã số sinh viên:</b> {studentChoose.maSV}
          </li>
          <li className="mt-5 text-md ml-5">
            <b> Họ tên sinh viên: </b>
            {studentChoose.hoTen}
          </li>
          <li className="mt-5 text-md ml-5">
            <b> Ngày sinh: </b>
            {studentChoose.ngaySinh}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Chứng minh nhân dân:</b> {studentChoose.cmnd}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Email: </b>
            {studentChoose.email}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Số điện thoại: </b>
            {studentChoose.soDT}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Khóa:</b> {studentChoose.khoaHoc}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Khoa:</b> {studentChoose.tenKhoa}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Lớp: </b>
            {studentChoose.tenLop}
          </li>
          <li className="mt-5 text-md ml-5">
            <b>Giáo viên phụ trách: </b>
            {studentChoose.tenGV}
          </li>
        </ul>
      </div>
    </div>
  );
}
