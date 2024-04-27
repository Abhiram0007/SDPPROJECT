
const mongoose = require("mongoose");

const facultyschema = new mongoose.Schema({
  facultyId: {
    type: Number,
    required: true,
    unique: true // Make sure facultyId is unique
  },
  facultyName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Make sure email is unique
  },
  password: {
    type: String,
    required: true
  }
});

const faculty = mongoose.model('Faculty', facultyschema);

 module.exports = faculty;