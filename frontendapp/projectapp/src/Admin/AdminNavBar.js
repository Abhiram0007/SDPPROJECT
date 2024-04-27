import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import AddCourses from './AddCourses'; // Import your course management component
import ViewFaculty from './ViewFaculty'; // Import your faculty management component
import ViewStudents from './ViewStudents'; // Import your student management component
import Home from '../Main/Home'; // Import your Home component (optional)
import AddStudents from './AddStudents'; // Import your student addition component
import AddFaculty from './Addfaculty';
import AdminLogin from './AdminLogin';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
 

  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/addcourses">Add Courses</Nav.Link>
              <Nav.Link as={Link} to="/addfaculty">Add Faculty</Nav.Link>
              <Nav.Link as={Link} to="/viewfaculty">View Faculty</Nav.Link>
              <Nav.Link as={Link} to="/addstudents">Add Students</Nav.Link>
              <Nav.Link as={Link} to="/viewstudents">View Students</Nav.Link>
            </Nav>
            <Nav>
               {/* <Nav.Link onClick={handleLogout}>Logout</Nav.Link>  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} exact /> {/* Optional Home route */}
          <Route path="/addcourses" element={<AddCourses />} exact />
          <Route path="/addfaculty" element={<AddFaculty/>} exact />
          <Route path="/viewfaculty" element={<ViewFaculty />} exact />
          <Route path="/addstudents" element={<AddStudents/>} exact />
          <Route path="/viewstudents" element={<ViewStudents />} exact />
        </Routes>
      </Container>
    </div>
  );
}
