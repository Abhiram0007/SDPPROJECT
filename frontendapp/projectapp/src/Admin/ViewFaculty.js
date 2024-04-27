import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewFaculty() {
  const [faculty, setFaculty] = useState([]);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:2013/viewfaculty');
      setFaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const deleteFaculty = async (facultyName) => {
    try {
      await axios.delete(`http://localhost:2013/deletefaculty/${facultyName}`);
      fetchFaculty();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Faculty Members</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Faculty Name</th>
            <th>Department</th>
            <th>Qualification</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(faculty) && faculty.length > 0 ? (
            faculty.map((facultyMember, index) => (
              <tr key={index}>
                <td>{facultyMember.facultyId}</td>
                <td>{facultyMember.facultyName}</td>
                <td>{facultyMember.department}</td>
                <td>{facultyMember.qualification}</td>
                <td>{facultyMember.designation}</td>
                <td>{facultyMember.email}</td>
                <td>
                  <button onClick={() => deleteFaculty(facultyMember.facultyName)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
