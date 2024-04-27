const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  course: {
        type: String,
        required: true,
      },
  coursecode: {
    type: String,
    required: true,
  },
  
  file: {
    type: String, //URL
    required: true,
  },
});

const material = mongoose.model('Material', materialSchema);

module.exports = material;