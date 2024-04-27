import React, { useEffect, useState } from 'react';
import { Button, Paper, Stack, Card, TextField, Divider, Alert, Grid, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProfileStudent() {
    const [data, setData] = useState([]);
    const [stuname, setStuName] = useState('');
    const [stuage, setStuAge] = useState('');
    const [sub, setStuSub] = useState('');
    const [status, setStatus] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:2013/sms/studentprofiles');
            setData(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stuname || !stuage || !sub) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:2013/sms/studentprofiles', {
                name: stuname,
                age: stuage,
                subject: sub
            });
            setStatus(true);
            // Clear input fields after successful submission
            setStuName('');
            setStuAge('');
            setStuSub('');
            // Fetch updated data
            fetchData();
        } catch (error) {
            console.log('Error sending data:', error);
        }
    }

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:2013/sms/studentprofiles/${_id}`);
            // Filter out the deleted item
            const updatedData = data.filter(item => item._id !== _id);
            setData(updatedData);
        } catch (error) {
            console.log("Error deleting item", error);
        }
    };

    return (
        <Stack direction="row" spacing={1} style={{ marginLeft: 35, marginTop: 15 }}>
            <Paper elevation={6} sx={{ height: '90vh', width: '40%', backgroundColor: '#FFF3C7' }}>
                <Stack direction="column" sx={{ p: 3 }}>
                    <h4 align="center">Student Profile Posting</h4>
                    <Divider sx={{ backgroundColor: '#FEC7B4' }} />
                    <TextField label="Student Name" value={stuname} onChange={(e) => setStuName(e.target.value)} sx={{ mb: 2 }} />
                    <TextField label="Student Age" value={stuage} onChange={(e) => setStuAge(e.target.value)} sx={{ mb: 2 }} />
                    <TextField label="Student Subject" value={sub} onChange={(e) => setStuSub(e.target.value)} sx={{ mb: 2 }} />
                    <Button variant="contained" onClick={handleSubmit}>Post</Button>
                    {status && <Alert severity="success">Data Inserted Successfully</Alert>}
                </Stack>
            </Paper>
            <Paper elevation={6} style={{ marginRight: 15, overflow: 'auto' }} sx={{ height: '90vh', width: '60%', backgroundColor: '#FFCAD4' }}>
                <h1 align="center"> <font color="#9400FF"> Student Profile Data</font> </h1>
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {data.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ backgroundColor: '#0C356A', color: '#fff', p: 2, mb: 2 }}>
                                <CardContent>
                                    <Typography variant='h6' component="h5">
                                        Name: {item.name}
                                    </Typography>
                                    <Typography>
                                        Age: {item.age}
                                    </Typography>
                                    <Typography>
                                        Subject: {item.subject}
                                    </Typography>
                                    <Button onClick={() => handleDelete(item._id)} variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Stack>
    );
}
