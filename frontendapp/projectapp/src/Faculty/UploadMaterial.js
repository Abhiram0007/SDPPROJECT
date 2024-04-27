import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';
import './UploadMaterial.css'; // Import CSS file

export default function UploadMaterial() {
  const [formData, setFormData] = useState({
    course: '',
    coursecode: '',
    file: null
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('course', formData.category);
      formDataToSend.append('coursecode', formData.title);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/uploadmaterial`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          course: '',
          coursecode: '',
          file: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="upload-material-container">
      <h3>Upload Material</h3>
      {message ? <h4>{message}</h4> : null}
      {error ? <h4 style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Course</label>
          <input type="text" id="course" value={formData.course} onChange={handleChange} required />
        </div>
        <div>
          <label>Course Code</label>
          <input type="text" id="coursecode" value={formData.coursecode} onChange={handleChange} required />
        </div>
        <div>
          <label>Material</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
