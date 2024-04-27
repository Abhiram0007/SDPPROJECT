const express = require('express');
const facultycontroller = require("../controllers/facultycontroller");

const facultyrouter = express.Router();

facultyrouter.post("/checkfacultylogin", facultycontroller.checkfacultylogin);
facultyrouter.post("/uploadmaterial",facultycontroller.uploadmaterial)

module.exports = facultyrouter;
