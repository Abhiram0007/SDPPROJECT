import "../App.css";
import { Grid, TextField,Button, Alert} from '@mui/material'
import React, { useState } from 'react'
import Axios from 'axios';

export default function AddFaculty() {
    const [facultyId,setFacultyId] = useState("");
    const [facultyName,setFacultyName] = useState("");
    const [department,setDepartment ] = useState("");
    const [qualification,setQualification] = useState("");
    const [designation,setDesignation] = useState("");
    const [email,setEmail] = useState("");
    const [status,setStatus] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await Axios.post("http://localhost:2013/sms/faculty",{
                Faculty_id: facultyId,
                faculty_name: facultyName,
                faculty_dept: department, 
                qualification: qualification,
                designation: designation, 
                email: email,
                password: "klu123"

            })
            setStatus(true);
        }
        catch(error){
            console.log("Error in Sending Data",error)
        }

    }
    const handleRefresh = () =>{
        window.location.reload(false )
    }
  return (
    <div className="App">
      <h2 align="center"> Add Faculty</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Faculty ID"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={facultyId}
            onChange={(e) => setFacultyId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Faculty Name"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={facultyName}
            onChange={(e) => setFacultyName( e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Department"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Qualification"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Designation"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            size="small"
            sx={{ width: 300, height: 30 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            size="small"
            sx={{ width: 300, height: 30 }}
            value="klu123"
            disabled

          /> 
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button variant="contained" onClick={handleSubmit}>
            SAVE
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button variant="contained" onClick={handleRefresh}>REFRESH</Button>
        </Grid>
        
      </Grid>
      {
        status && (
            <Alert severity="success" sx = {{display:"flex", justifyContent:"center"}}>Faculty Inserted</Alert>
        )
      }
    </div>
  );
}