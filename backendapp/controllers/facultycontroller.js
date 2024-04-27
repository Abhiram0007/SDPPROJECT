const Faculty = require("../Models/Faculty");
const Material = require("../models/Material");
const multer = require('multer')

const checkfacultylogin = async (request, response) => {
  try {
    const input = request.body;
    const faculty = await Faculty.findOne(input);
    response.json(faculty);
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './media/'); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // File naming convention
  }
});
 const upload = multer({ storage: storage }).single('file');
 const  uploadmaterial= async (req, res) =>
    {
      try 
      {
        upload(req, res, async function (err) 
        {
          if (err) 
          {
            console.error(err);
            return res.status(500).send(err.message);
          }
          
          const { course, coursecode } = req.body;
          const fileName = req.file ? req.file.filename : undefined; // Extracting file name
    
          const newMaterial = new Material({
            course,
            coursecode,
            file: fileName // Save only the file name
          });
    
          await newMaterial.save();
          res.status(200).send('Material Uploaded Successfully');
        });
      } 
      catch (error) 
      {
        console.error(error);
        res.status(500).send(error.message);
      }
    };
module.exports = { checkfacultylogin ,uploadmaterial};
