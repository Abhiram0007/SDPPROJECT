import React from 'react';
import { Typography } from "@mui/material";
import studentLearningPic from '/Student Learning Pic.jpg'; // Import your background image

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${studentLearningPic})`, // Apply background image
      backgroundColor: '#FBF9F1', // Light blue background color
      backgroundSize: 'cover', // Make sure the background image covers the entire container
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Ensure the background covers the entire viewport
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // Center the content vertically
    }}>
      <Typography variant='h5' style={{ textAlign: "center", color: "black", padding: '20px' }}>
      </Typography>
      <Typography variant='body1' style={{ textAlign: "center", color: "black", maxWidth: '600px', padding: '20px' }}>
        A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, and delivery of educational courses, training programs, or learning and development programs. It helps educational institutions and organizations to automate various processes related to learning, such as creating and managing courses, tracking student progress, conducting assessments, and facilitating communication between instructors and learners.
      </Typography>
      <img src={studentLearningPic} alt="Student Learning" style={{ maxWidth: '100%', height: 'auto', padding: '20px' }} />
    </div>
  );
}