import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";
import AddStudentForm from "./Components/AddStudentForm";
import { AdminTemplate } from "./Template/AdminTemplate";
import TableStudent from "./Components/TableStudent";
import UpdateDeleteStudent from "./Components/UpdateDeleteStudent";
import SearchStudentForm from "./Components/SearchStudentForm";
import ViewStudent from "./Components/ViewStudent";
import LoginPage from "./Pages/LoginPage";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate
          exact={true}
          path="/admin/xem-sinh-vien"
          component={ViewStudent}
        />
        <AdminTemplate
          exact={true}
          path="/admin/them-sinh-vien"
          component={AddStudentForm}
        />
        <AdminTemplate
          exact={true}
          path="/admin/sua-sinh-vien"
          component={UpdateDeleteStudent}
        />
        <AdminTemplate
          exact={true}
          path="/admin/tim-sinh-vien"
          component={SearchStudentForm}
        />
        <AdminTemplate
          exact={true}
          path="/admin/home"
          component={TableStudent}
        />
        <AdminTemplate exact={true} path="/admin/" component={TableStudent} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
