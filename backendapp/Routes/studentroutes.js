const studentcontroller = require("../controllers/studentcontroller");

const express = require("express");
const studentrouter = express.Router();



studentrouter.post("/checkstudentlogin", studentcontroller.checkstudentlogin);
studentrouter.get("/viewmaterials",studentcontroller.viewmaterials)
studentrouter.get("/material/:filename",studentcontroller.material)


module.exports = studentrouter
