import { Button, Paper, Stack, Card, TextField, Divider, FormLabel, Alert, Grid, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


import React, { useEffect, useState } from 'react';

export default function Course() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(false);
    const[data,setData]=useState([]);
    const[coursecode,setCourseCode]=useState('');
    const[coursename,setCourseName]=useState('');
    const[year,setYear]=useState('');




    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:2013/sms/course', {
                coursecode: coursecode,
                coursename: coursename,
                year: year
            });
            setStatus(true);
        } catch (error) {
            console.log('Error sending data:', error);
        }
    }
    // const handleUpload = async () => {
    //     if (!file) return;
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     try {
    //         await axios.post('http://localhost:2013/sms/course/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         setStatus(true);
    //     } catch (error) {
    //         console.log('Error uploading data:', error);
    //     }
    // };
    useEffect(() => {
        const fetchData=async()=>{
            try {
                const response=await axios.get('http://localhost:2013/sms/course')
                setData(response.data);



                
            } catch (error) {
                console.log(error.message)
                
            }


        };
        fetchData();
      
    }, [])

    const handleDelete = async (_id) => {
        try {
          await axios.delete(`http://localhost:2013/sms/course/${_id}`);
          const updatedData = data.filter(item => item._id !== _id);
          setData(updatedData);
        } catch (error) {
          console.log("Error deleting item", error);
        }
      };
    
    
    return (
        <Stack direction="row" spacing={1} style={{ marginLeft: 35, marginTop: 15 }}>
            <Paper elevation={6} sx={{ height: '90vh', width: '40%', backgroundColor: '#FFF3C7' }}>
                <Stack direction="column">
                    <h4 align="center">Course Bulk Posting</h4>
                    <Paper sx={{ backgroundColor: '#F1F5A8', m: 1 }}>
                        {/* <FormLabel>File Upload in CSV Format only</FormLabel>
                        <TextField type="file" name="file" onChange={handleFileChange} /> */}
                        {/* <Button onClick={handleUpload}>Upload</Button>
                        {status && <Alert severity="success">CSV file uploaded successfully</Alert>} */}
                    </Paper>
                    <Divider sx={{ backgroundColor: '#FEC7B4' }} />
                    <Paper sx={{ backgroundColor: '#FC819E', m: 3 }}>
                        <Card sx={{ background: '#F6F5F5' }}>
                            <Stack direction="column" spacing={2} sx={{ m: 3 }}>
                                <TextField label="Course Code"  onChange={(e)=>{setCourseCode(e.target.value)}} />
                                <TextField label="Course Name" onChange={(e)=>{setCourseName(e.target.value)}} />

                                <TextField label="Year"  onChange={(e)=>{setYear(e.target.value)}}/>
                                <Button variant="contained" onClick={handleSubmit}>POST</Button>
                                {status && <Alert severity="success">Course Inserted Successfully</Alert>}

                            </Stack>
                        </Card>
                    </Paper>
                </Stack>
            </Paper>
            <Paper elevation={6} style={{ marginRight: 15 }} sx={{ height: '90vh', width: '70%', backgroundColor: '#FFCAD4' }}>
                <h1 align="center"> <font color="#9400FF"> Course Data</font> </h1>
                <Grid container spacing={1} sx={{m:1}}>
                {
                    data.map((item,index)=>{
                       return(
                        <Grid item xs={3} sm={3}  md={4} key={index}>
                        <Card sx={{backgroundcolor:'#0C356A'}}>
                            <CardContent>
                                <Typography vairant ='h6' compnent="h5">
                                   Course Code:  {item.coursecode}

                                </Typography>
                                <Typography color ="primary" >
                                    Course Name: {item.coursename}

                                </Typography>
                                <Typography color ="textsecondary" >
                                   Year: {item.year}

                                </Typography>
                               <Stack direction="row" spacing={2}>
                               <Button  onClick={()=>handleDelete(item._id)}vairant="contained" startIcon={<DeleteIcon/>}></Button>
                                <Button vairant="contained" startIcon={<SendIcon/>}></Button>


                                </Stack>


                            </CardContent>
                        </Card>


                    </Grid>
                    
                       )



                    })
                }

                </Grid>
              

            </Paper>
        </Stack>
    );
}
