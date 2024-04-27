const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const dburl = "mongodb://localhost:27017/sdpproject";

mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express();
app.use(bodyParser.json());
app.use(cors());







const adminrouter=require("./Routes/adminroutes")
const facultyrouter=require("./Routes/facultyroutes")
const studentrouter=require("./Routes/studentroutes")


app.use("",adminrouter)
app.use("",facultyrouter)
app.use("",studentrouter)

app.listen(2013, () => {
    console.log(`Server is running on port 2013 successfully`);
});


