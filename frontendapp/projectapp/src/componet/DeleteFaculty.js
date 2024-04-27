import React, { useEffect, useState } from 'react';
import { TableContainer, Paper, TableHead, Table, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';

export default function DeleteFaculty() {
    const [facultyDetails, setFacultyDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:2013/sms/faculty");
                setFacultyDetails(response.data);
            } catch(error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    const deleteFaculty = async (_id) => {
        try {
            await axios.delete(`http://localhost:2013/sms/faculty/${_id}`);
            const updatedFaculty = facultyDetails.filter((faculty) => faculty._id !== _id);
            setFacultyDetails(updatedFaculty);
        } catch(error) {
            console.log(error.message);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Faculty Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {facultyDetails.map((faculty) => (
                        <TableRow key={faculty._id}>
                            <TableCell>{faculty.name}</TableCell>
                            <TableCell>{faculty.email}</TableCell>
                            <TableCell>
                                <button onClick={() => DeleteFaculty(faculty._id)}>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
