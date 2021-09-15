import {
  ADD_STUDENT,
  VIEW_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  SEARCH_STUDENT,
  ADMIN_LOGOUT,
} from "../Types/AdminType";

export const AddStudentAction = (student) => {
  return {
    type: ADD_STUDENT,
    student,
  };
};

export const ViewStudentAction = (id) => {
  return {
    type: VIEW_STUDENT,
    id,
  };
};

export const UpdateStudentAction = (student) => {
  alert("Chỉnh sửa sinh viên thành công");
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

export const DeleteStudentAction = () => {
  alert("Xóa sinh viên thành công");
  return {
    type: DELETE_STUDENT,
  };
};

export const SearchStudentAction = (value) => {
  return {
    type: SEARCH_STUDENT,
    value,
  };
};

export const AdminLogoutAction = (value) => {
  return {
    type: ADMIN_LOGOUT,
    value,
  };
};