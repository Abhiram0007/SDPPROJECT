import React, { useEffect, useState } from 'react';
import { TableContainer, Paper, TableHead,Button, Table, TableRow, TableCell, TableBody } from '@mui/material';
import Axios from 'axios';
import DeleteFaculty from './DeleteFaculty';

export default function ViewFaculty() {
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


    const deleteFaculty=async(_id)=>{
        

    }

    return (
        <div>
            <h2 align="center">Faculty Details</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor: "magenta"}}>
                        <TableRow>
                            <TableCell>Faculty ID</TableCell>
                            <TableCell>Faculty Name</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Qualification</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {facultyDetails.map((faculty) => (
                            <TableRow key={faculty._id}>
                                <TableCell>{faculty.faculty_id}</TableCell>
                                <TableCell>{faculty.faculty_name}</TableCell>
                                <TableCell>{faculty.faculty_dept}</TableCell>
                                <TableCell>{faculty.qualification}</TableCell>
                                <TableCell>{faculty.designation}</TableCell>
                                <TableCell>{faculty.email}</TableCell>
                                <TableCell><Button variant='contained' onClick={()=>DeleteFaculty(faculty._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
