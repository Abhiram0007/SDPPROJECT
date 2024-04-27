const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
    coursecode: {
      type: String,
     required: true,
    },
    coursename: {
       type: String,
       required: true
    },
    year:{
        type:Number,
        required:true
    }
  });

 const course = mongoose.model('Course', courseschema);

 module.exports = course;