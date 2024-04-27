import React, { useState } from 'react';
import axios from 'axios';
import "./AddStudents.css"

export default function AddStudents() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    studentid:'',
    studentname: '',
    gender: '',
    email: '',
    username:'',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2013/addstudent', formData);
      if (response.status === 200) 
      {
        setFormData({
            studentid:',',
            studentname: '',
            gender: '',
            email: '',
            username:'',
            contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Student</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <div>
          <label>StudentID</label>
          <input type="number" id="studentid" value={formData.studentid}  pattern="{}[]{}"onChange={handleChange} required />
        </div>
        <div>
          <label>Student Name</label>
          <input type="text" id="studentname" value={formData.studentname} onChange={handleChange}  required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={formData.contact}  pattern="{6789}[0-9]{9}"placeholder="Must be 10 digits"onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}