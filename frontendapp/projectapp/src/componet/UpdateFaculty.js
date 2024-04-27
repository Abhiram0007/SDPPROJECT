import React, { useEffect, useState } from 'react';
import { TableContainer, Paper, TableHead, Table, TableRow, TableCell, TableBody } from '@mui/material';
import Axios from 'axios';

export default function UpdateFaculty() {
    const [facultyDetails, setFacultyDetails] = useState([]);

    const fetchData = async () => {
        try {
            const response = await Axios.get("http://localhost:2013/sms/faculty");
            setFacultyDetails(response.data); 
        } catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <h2 align="center">Update Faculty</h2>

    </div>
  )
}