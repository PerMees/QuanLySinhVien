import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import AddStudentForm from "./Components/AddStudentForm";
import { AdminTemplate } from "./Template/AdminTemplate";
import TableStudent from "./Components/TableStudent";
import UpdateDeleteStudent from "./Components/UpdateDeleteStudent";
import SearchStudentForm from "./Components/SearchStudentForm";
import ViewStudent from "./Components/ViewStudent";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate
          exact={true}
          path="/xem-sinh-vien"
          component={ViewStudent}
        />
        <AdminTemplate
          exact={true}
          path="/them-sinh-vien"
          component={AddStudentForm}
        />
        <AdminTemplate
          exact={true}
          path="/sua-sinh-vien"
          component={UpdateDeleteStudent}
        />
        <AdminTemplate
          exact={true}
          path="/tim-sinh-vien"
          component={SearchStudentForm}
        />
        <AdminTemplate exact={true} path="/home" component={TableStudent} />
        <AdminTemplate exact={true} path="/" component={TableStudent} />
      </Switch>
    </Router>
  );
}

export default App;
