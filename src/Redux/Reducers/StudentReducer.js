/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  VIEW_STUDENT,
  UPDATE_STUDENT,
  SEARCH_STUDENT,
} from "../Types/AdminType";
const initialState = {
  arrStudent: [
    {
      maSV: "31190000001",
      hoTen: "Nguyễn Văn A",
      ngaySinh: "01/01/2001",
      cmnd: "201788801",
      email: "nguyenvana@gmail.com",
      soDT: "0905123123",
      khoaHoc: "K45",
      tenKhoa: "Kinh tế",
      tenLop: "KT001",
      tenGV: "Lê Văn B",
    },
    {
      maSV: "31190000002",
      hoTen: "Nguyễn Văn B",
      ngaySinh: "02/02/2001",
      cmnd: "201788802",
      email: "nguyenvanb@gmail.com",
      soDT: "0905231231",
      khoaHoc: "K45",
      tenKhoa: "Quản trị",
      tenLop: "QT001",
      tenGV: "Lê Văn C",
    },
    {
      maSV: "31190000003",
      hoTen: "Nguyễn Văn C",
      ngaySinh: "03/03/2001",
      cmnd: "201788803",
      email: "nguyenvanc@gmail.com",
      soDT: "0905234234",
      khoaHoc: "K45",
      tenKhoa: "Luật",
      tenLop: "LU001",
      tenGV: "Lê Văn D",
    },
    {
      maSV: "31190000004",
      hoTen: "Nguyễn Văn D",
      ngaySinh: "04/04/2001",
      cmnd: "201788816",
      email: "nguyenvand@gmail.com",
      soDT: "0905098098",
      khoaHoc: "K45",
      tenKhoa: "Kinh tế",
      tenLop: "KT001",
      tenGV: "Lê Văn E",
    },
    {
      maSV: "31190000005",
      hoTen: "Nguyễn Văn E",
      ngaySinh: "05/05/2002",
      cmnd: "201788804",
      email: "nguyenvane@gmail.com",
      soDT: "0905987897",
      khoaHoc: "K46",
      tenKhoa: "Kinh tế",
      tenLop: "KT001",
      tenGV: "Lê Văn F",
    },
    {
      maSV: "31190000006",
      hoTen: "Nguyễn Văn F",
      ngaySinh: "06/06/2001",
      cmnd: "201788805",
      email: "nguyenvanf@gmail.com",
      soDT: "0905938475",
      khoaHoc: "K45",
      tenKhoa: "Quản trị",
      tenLop: "QT001",
      tenGV: "Lê Văn G",
    },
    {
      maSV: "31190000007",
      hoTen: "Nguyễn Văn G",
      ngaySinh: "07/07/2003",
      cmnd: "201788806",
      email: "nguyenvang@gmail.com",
      soDT: "0905231231",
      khoaHoc: "K47",
      tenKhoa: "Quản trị",
      tenLop: "QT001",
      tenGV: "Lê Văn H",
    },
    {
      maSV: "31190000008",
      hoTen: "Nguyễn Văn H",
      ngaySinh: "08/08/2003",
      cmnd: "201788820",
      email: "nguyenvanh@gmail.com",
      soDT: "0905888888",
      khoaHoc: "K47",
      tenKhoa: "Kinh tế",
      tenLop: "KT002",
      tenGV: "Lê Văn I",
    },
    {
      maSV: "31190000009",
      hoTen: "Lê Văn K",
      ngaySinh: "09/09/2002",
      cmnd: "2017888078",
      email: "levank@gmail.com",
      soDT: "0905882904",
      khoaHoc: "K46",
      tenKhoa: "Kinh doanh",
      tenLop: "KD001",
      tenGV: "Nguyễn Văn L",
    },
    {
      maSV: "31190000010",
      hoTen: "Lê Văn L",
      ngaySinh: "10/10/2002",
      cmnd: "201788809",
      email: "levanl@gmail.com",
      soDT: "090592145",
      khoaHoc: "K46",
      tenKhoa: "Luật",
      tenLop: "LU002",
      tenGV: "Nguyễn Văn M",
    },
    {
      maSV: "31190000011",
      hoTen: "Lê Văn M",
      ngaySinh: "11/11/2002",
      cmnd: "201788810",
      email: "levanm@gmail.com",
      soDT: "0905928899",
      khoaHoc: "K46",
      tenKhoa: "Kinh tế",
      tenLop: "KT002",
      tenGV: "Nguyễn Văn N",
    },
    {
      maSV: "31190000012",
      hoTen: "Lê Văn N",
      ngaySinh: "12/12/2001",
      cmnd: "201788811",
      email: "levann@gmail.com",
      soDT: "0905928876",
      khoaHoc: "K45",
      tenKhoa: "Quản trị",
      tenLop: "QT002",
      tenGV: "Nguyễn Văn O",
    },
    {
      maSV: "31190000013",
      hoTen: "Lê Văn O",
      ngaySinh: "13/13/2002",
      cmnd: "201788812",
      email: "levan0@gmail.com",
      soDT: "0905928879",
      khoaHoc: "K46",
      tenKhoa: "Kinh tế",
      tenLop: "KT001",
      tenGV: "Nguyễn Văn P",
    },
    {
      maSV: "31190000014",
      hoTen: "Lê Văn P",
      ngaySinh: "14/14/2001",
      cmnd: "201788813",
      email: "levan0@gmail.com",
      soDT: "0905928873",
      khoaHoc: "K45",
      tenKhoa: "Luật",
      tenLop: "LU001",
      tenGV: "Nguyễn Văn Q",
    },
    {
      maSV: "31190000015",
      hoTen: "Trần Văn Q",
      ngaySinh: "15/15/2001",
      cmnd: "201788814",
      email: "tranvanq0@gmail.com",
      soDT: "0905928872",
      khoaHoc: "K45",
      tenKhoa: "Luật",
      tenLop: "LU001",
      tenGV: "Lê Văn R",
    },
    {
      maSV: "31190000016",
      hoTen: "Trần Văn R",
      ngaySinh: "16/16/2002",
      cmnd: "201788815",
      email: "tranvanr0@gmail.com",
      soDT: "0905928871",
      khoaHoc: "K46",
      tenKhoa: "Kinh doanh",
      tenLop: "KD001",
      tenGV: "Lê Văn S",
    },
    {
      maSV: "31190000017",
      hoTen: "Trần Văn S",
      ngaySinh: "17/17/2002",
      cmnd: "201788817",
      email: "tranvans0@gmail.com",
      soDT: "0905928276",
      khoaHoc: "K46",
      tenKhoa: "Kinh doanh",
      tenLop: "KD001",
      tenGV: "Lê Văn T",
    },
    {
      maSV: "31190000018",
      hoTen: "Trần Văn T",
      ngaySinh: "18/18/2002",
      cmnd: "201788818",
      email: "tranvant0@gmail.com",
      soDT: "0905928571",
      khoaHoc: "K46",
      tenKhoa: "Kinh doanh",
      tenLop: "KD001",
      tenGV: "Lê Văn Z",
    },
  ],
  studentChoose: {
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
  searchValue: "",
  arrResult: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT: {
      const arrStudentUpdate = [...state.arrStudent];
      const index = arrStudentUpdate.findIndex(
        (stu) => stu.maSV === action.student.maSV
      );
      if (index === -1) {
        arrStudentUpdate.push(action.student);
        state.arrStudent = arrStudentUpdate;
        alert("Thêm sinh viên thành công");
      } else alert("Mã sinh viên đã tồn tại");
      return { ...state };
    }
    case VIEW_STUDENT: {
      const arrStudentUpdate = [...state.arrStudent];
      let newStudentChoose = {
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
      };
      const index = arrStudentUpdate.findIndex((st) => st.maSV === action.id);
      if (index === -1) alert("Mã sinh viên không tồn tại");
      else newStudentChoose = arrStudentUpdate[index];
      state.studentChoose = newStudentChoose;
      return { ...state };
    }
    case DELETE_STUDENT: {
      const arrStudentUpdate = [...state.arrStudent];
      let newStudentChoose = {
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
      };
      const newArrStudent = arrStudentUpdate.filter(
        (stu) => stu.maSV !== state.studentChoose.maSV
      );
      state.studentChoose = newStudentChoose;
      state.arrStudent = newArrStudent;
      return { ...state };
    }
    case UPDATE_STUDENT: {
      const arrStudentUpdate = [...state.arrStudent];
      const index = arrStudentUpdate.findIndex(
        (stu) => stu.maSV === action.student.maSV
      );
      arrStudentUpdate[index] = action.student;
      state.arrStudent = arrStudentUpdate;

      return { ...state };
    }
    case SEARCH_STUDENT: {
      const convertStringViToEn = (str) => {
        str = str.toLowerCase();
        str = str.replace(
          /\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g,
          "a"
        );
        str = str.replace(
          /\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g,
          "e"
        );
        str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
        str = str.replace(
          /\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g,
          "o"
        );
        str = str.replace(
          /\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g,
          "u"
        );
        str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
        str = str.replace(/\u0111/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        return str;
      };
      state.searchValue = convertStringViToEn(action.value);
      const arrStudentUpdate = [...state.arrStudent];
      let newArrResult = [];
      for (let stu of arrStudentUpdate) {
        let flag = false;
        for (let stuAttr in stu) {
          let attrValue = "";
          attrValue = stu[stuAttr];
          attrValue = convertStringViToEn(attrValue);
          if (attrValue.includes(state.searchValue)) flag = true;
        }
        if (flag) newArrResult.push(stu);
      }
      state.arrResult = newArrResult;
      return { ...state };
    }
    default:
      return state;
  }
};
