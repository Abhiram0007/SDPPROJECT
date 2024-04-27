import React, { useState } from 'react';
import axios from 'axios';
import './AddFaculty.css';

export default function AddFaculty() {
  const [formData, setFormData] = useState({
    facultyId: '',
    facultyName: '',
    department: '',
    qualification: '',
    designation: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2013/addfaculty', formData);
      if (response.status === 200) {
        setFormData({
          facultyId: '',
          facultyName: '',
          department: '',
          qualification: '',
          designation: '',
          email: '',
          password: ''
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
    <div className="container">
      <h3><u>Add Faculty</u></h3>
      {
        message ? <h4 className="success-message">{message}</h4> : <h4 className="error-message">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Faculty ID</label>
          <input type="text" id="facultyId" value={formData.facultyId} onChange={handleChange} required />
        </div>
        <div>
          <label>Faculty Name</label>
          <input type="text" id="facultyName" value={formData.facultyName} onChange={handleChange} required />
        </div>
        <div>
          <label>Department</label>
          <input type="text" id="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div>
          <label>Qualification</label>
          <input type="text" id="qualification" value={formData.qualification} onChange={handleChange} required />
        </div>
        <div>
          <label>Designation</label>
          <input type="text" id="designation" value={formData.designation} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
}
