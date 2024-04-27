import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import About from './About';
import AdminLogin from '../Admin/AdminLogin';
import StudentLogin from './../Student/StudentLogin';
import FacultyLogin from './../Faculty/FacutlyLogin';
import "./MainNavBar.css"

export default function MainNavBar({ onAdminLogin,onFacultyLogin,onStudentLogin }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <li className="dropdown">
              <Nav.Link>Login</Nav.Link>
              <div className="dropdown-content">
                <Nav.Link as={Link} to="/facultylogin">Faculty login</Nav.Link>
                <Nav.Link as={Link} to="/adminlogin">Admin Login</Nav.Link>
                <Nav.Link as={Link} to="/studentlogin">Student Login</Nav.Link>
              </div>
            </li>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facultylogin" element={<FacultyLogin/>} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
        </Routes>
      </div>
    </>
  );
}
