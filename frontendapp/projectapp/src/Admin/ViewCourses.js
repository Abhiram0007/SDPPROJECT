import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:2013/viewcourses');
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (coursecode) => {
    try {
      await axios.delete(`http://localhost:2013/deletecourse/${coursecode}`);
      fetchCourses();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.coursecode}</td>
                  <td>{course.coursename}</td>
                  <td>{course.year}</td>
                  <td>
                    <button onClick={() => deleteCourse(course.coursecode)} className='button'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Data Not Found</td>
              </tr>
            )}
          </tbody>
      </table>
    </div>
  );
}
