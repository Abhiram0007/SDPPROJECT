import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Courses from './Courses';
import Help from './Help';
import Home from '../Main/Home';
import StudentProfile from './StudentProfile';
import ViewMaterial from './ViewMaterial';

export default function StudentNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload()
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/viewmaterial">ViewMaterial</Nav.Link>

              <Nav.Link as={Link} to="/help">Help</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Home" element={<Home />} exact />
        <Route path="/courses" element={<Courses />} exact />
        <Route path="/studentprofile" element={<StudentProfile/>} exact/>
        <Route path="/viewmaterial" element={<ViewMaterial/>} exact/>

        
        <Route path="/Help" element={<Help />} exact />
      </Routes>
    </>
  );
}
