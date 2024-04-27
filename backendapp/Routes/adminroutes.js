const admincontroller = require("../controllers/admincontroller");


const express = require("express");
const adminrouter = express.Router();

adminrouter.post("/checkadminlogin", admincontroller.checkadminlogin);

adminrouter.post("/addcourses",admincontroller.addcourses)
adminrouter.get("/viewcourses",admincontroller.viewcourses)
adminrouter.delete("/deletecourse/:coursecode",admincontroller.deletecourse)
adminrouter.post("/addfaculty",admincontroller.addfaculty)
adminrouter.get("/viewfaculty",admincontroller.viewfaculty)
adminrouter.delete("/deletefaculty/:facultyName",admincontroller.deletefaculty)
adminrouter.post("/addstudent",admincontroller.addstudent)
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)




module.exports = adminrouter;
