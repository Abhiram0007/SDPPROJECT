
import React, { useState } from 'react';
import axios from 'axios';
import "./AddCourses.css"
export default function AddCourses() {
  //formData state variable
  const [formData, setFormData] = useState({
    coursecode: '',
    coursename: '',
    year: '',
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2013/addcourses', formData);
      if (response.status === 200) {
        setFormData({
          coursecode: '',
          coursename: '',
          year: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="form-container">
      <h3><u>Add Courses</u></h3>
      {message ? <h4>{message}</h4> : <h4>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Code</label>
          <input type="text" id="coursecode" value={formData.coursecode} onChange={handleChange} required />
        </div>
        <div>
          <label>Course Name</label>
          <input type="text" id="coursename" value={formData.coursename} onChange={handleChange} required />
        </div>
        <div>
          <label>Year</label>
          <input type="number" id="year" value={formData.year} onChange={handleChange} required />
        </div>
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}
