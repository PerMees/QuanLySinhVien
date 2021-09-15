import React from "react";
import { Input } from "antd";
import { SearchStudentAction } from "../Redux/Actions/AdminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ADMIN_ACCOUNT } from "../Redux/Types/AdminType";

const { Search } = Input;

export default function SearchStudentForm() {
  const dispatch = useDispatch();
  const { searchValue, arrResult } = useSelector(
    (state) => state.StudentReducer
  );
  const onSearch = (value) => {
    const action = SearchStudentAction(value);
    dispatch(action);
  };
  const renderTable = () => {
    return arrResult.map((stu, i) => {
      return (
        <tr key={i} className="">
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.maSV}
          </td>
          <td
            className={
              "p-2 border border-gray-300  " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.hoTen}
          </td>
          <td
            className={
              "p-2 border border-gray-300  " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.ngaySinh}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.cmnd}
          </td>
          <td
            className={
              "p-2 border border-gray-300" +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.email}
          </td>

          <td
            className={
              " py-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.soDT}
          </td>
          <td
            className={
              "p-2 border border-gray-300" +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.khoaHoc}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenKhoa}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenLop}
          </td>
          <td
            className={
              "p-2 border border-gray-300 " +
              (i % 2 !== 0 ? " bg-gray-200" : " bg-white")
            }
          >
            {stu.tenGV}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <Search
        allowClear
        placeholder="Nhập thông tin tìm kiếm"
        onSearch={onSearch}
        enterButton
        size="large"
      />
      <table className="w-full text-center shadow-lg mt-5 rounded overflow-hidden">
        <thead className="w-full">
          <tr className="bg-gray-600 text-white">
            <th className="border-2 border-gray-500 p-2 font-bold ">Mã số</th>
            <th className="border-2 border-gray-500 p-2 font-bold ">Họ tên</th>
            <th className="border-2 border-gray-500 p-2 font-bold ">
              Ngày sinh
            </th>
            <th className="border-2 border-gray-500 p-2 font-bold ">Cmnd</th>
            <th className="border-2 border-gray-500 p-2 font-bold">Email</th>
            <th className="border-2 border-gray-500 p-2 font-bold">
              Số điện thoại
            </th>
            <th className="border-2 border-gray-500 p-2 font-bold">Khóa học</th>
            <th className="border-2 border-gray-500 p-2 font-bold">Khoa</th>
            <th className="border-2 border-gray-500 p-2 font-bold">Lớp</th>
            <th className="border-2 border-gray-500 p-2 font-bold">
              Giáo viên phụ trách
            </th>
          </tr>
        </thead>
        <tbody className="">{renderTable()}</tbody>
      </table>
    </div>
  );
}
