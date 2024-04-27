import { BrowserRouter as Router } from 'react-router-dom';

import MainNavBar from './Main/MainNavBar';
import AdminNavBar from './Admin/AdminNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentNavbar from './Student/StudentNavbar';
import FacultyNavBar from './Faculty/FacutlyNavBar';


function App() {
  return (
    <div className="App">
      <h3 align='center'>Student Learning Management System</h3>

      <Router>
           {/* <MainNavBar/>        */}
           <AdminNavBar/>   
           {/* <StudentNavbar/> */}
           {/* <FacultyNavBar/> */}
      </Router>
    </div>
  );
}

export default App;