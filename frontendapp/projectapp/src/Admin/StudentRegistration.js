import React, { useState } from 'react';
import axios from 'axios';
import './StudentRegistration.css';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2013/insertstudents', formData);
      setMessage(response.data);
      setError('');
      // Clear form after successful submission
      setFormData({
        fullname: '',
        gender: '',
        dateofbirth: '',
        email: '',
        password: '',
        location: '',
        contact: ''
      });
    } catch (error) {
      setError(error.response?.data || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="registration-container">
      <h3 className="registration-heading"><u>Student Registration</u></h3>
      {
        message ? <h4 className="registration-message">{message}</h4> : null
      }
      {
        error ? <h4 className="registration-error">{error}</h4> : null
      }

      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label className="registration-label">Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} className="registration-input" required />
        </div>
        <div>
          <label className="registration-label">Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} className="registration-input" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label className="registration-label">Date of Birth</label>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} className="registration-input" required />
        </div>
        <div>
          <label className="registration-label">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} className="registration-input" required />
        </div>
        <div>
          <label className="registration-label">Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} className="registration-input" required />
        </div>
        <div>
          <label className="registration-label">Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} className="registration-input" required />
        </div>
        <div>
          <label className="registration-label">Contact</label>
          <input type="tel" id="contact" pattern="[0-9]{10}" placeholder="Must be 10 digits" value={formData.contact} onChange={handleChange} className="registration-input" required />
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
}
