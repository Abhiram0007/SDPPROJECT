const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    studentid: {
        type: Number,
        required:true,
        unique:true
    },
    studentname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique:true
    },  
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const student = mongoose.model('student', studentschema)
module.exports = student;