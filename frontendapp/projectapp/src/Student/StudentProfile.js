import React, { useEffect, useState } from 'react';

export default function StudentProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student'); // Update storage key
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  return (
    studentData ? (
      <div className='profile-card'>
        <p><strong>Student ID:</strong> {studentData.studentID}</p>
        <p><strong>Student Name:</strong> {studentData.studentName}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Username:</strong> {studentData.username}</p>
        <p><strong>Contact:</strong> {studentData.contact}</p>
      </div>
    ) : (
      <p>No Student Data Found</p>
    )
  );
}