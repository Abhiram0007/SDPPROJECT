import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css'; // Import CSS file

export default function StudentLogin({onStudentLogin}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2013/checkstudentlogin', formData);
      if (response.data != null) {
        onStudentLogin();

        localStorage.setItem('student', JSON.stringify(response.data));

        navigate("/studenthome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className="faculty-login-container"> {/* Apply the new CSS class */}
      <h3><u>Student Login</u></h3>
      {
        message ? <div className="error">{message}</div> : null
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="input-field" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="input-field" required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
