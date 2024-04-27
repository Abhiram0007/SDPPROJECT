import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FacultyHome from './FacultyHome';
import UploadMaterial from './UploadMaterial';

function FacultyNavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* Add more Nav.Link components for other routes */}
            <Nav.Link as={Link} to="/uploadmaterial">UploadMaterial</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<FacultyHome />} exact />
        {/* Add more Route components for other routes */}
        <Route path="/uploadmaterial" element={<UploadMaterial/>} exact />


      </Routes>
    </div>
  );
}

export default FacultyNavBar;
