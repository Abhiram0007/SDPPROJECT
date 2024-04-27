const Student = require("../Models/Student") 
const Material = require("../models/Material")
const path = require('path')
const fs = require('fs')

const checkstudentlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const student = await Student.findOne(input)
     response.json(student)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };
 const viewmaterials = async (req, res) => 
{
  try 
  {
    const materials = await Material.find();
    res.status(200).json(materials);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
};
 const material = async (req, res) => 
{
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../media', filename);
  console.log(filepath)

    fs.readFile(filepath, (err, data) => {
      if (err) 
      {
        console.error(err);
        return res.status(500).send('Error reading image file');
      }
     
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // Default to octet-stream (binary data)

if (ext === '.png') {
  contentType = 'image/png';
} else if (ext === '.jpg' || ext === '.jpeg') {
  contentType = 'image/jpeg';
} else if (ext === '.pdf') {
  contentType = 'application/pdf';
} else if (ext === '.txt') {
  contentType = 'text/plain';
}

    res.setHeader('Content-Type', contentType);
      res.send(data);
    })
}
 module.exports = {checkstudentlogin,viewmaterials,material}