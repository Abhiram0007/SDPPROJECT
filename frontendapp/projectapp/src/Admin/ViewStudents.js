import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:2013/viewstudents');
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (email) => {
    try {
      await axios.delete(`http://localhost:2013/deletestudent/${email}`);
      fetchStudents();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.studentid}</td>
        <td>{student.studentname}</td>
        <td>{student.gender}</td>
        <td>{student.email}</td>
        <td>{student.username}</td>
        <td>{student.contact}</td>
        <td>
          <button onClick={() => deleteStudent(student.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}