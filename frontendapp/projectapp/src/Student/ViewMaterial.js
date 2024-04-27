import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewMaterial() {
  const [events, setEvents] = useState([]);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get(`${config.url}/viewmaterials`);
      setEvents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div>
      <h1 align="center">Materials</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>CourseCode</th>
            <th>Course</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((material, index) => (
              <tr key={index}>
                <td>{material.coursecode}</td>
                <td>{material.course}</td>
                <td>
  {material.file.endsWith('.jpg') || material.file.endsWith('.jpeg') || material.file.endsWith('.png') ? (
    <img src={`${config.url}/material/${material.file}`} alt="Material" style={{ width: '250px', height: '250px' }} />
  ) : (
    <a href={`${config.url}/material/${material.file}`}>Click Here</a>
  )}
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}