const Admin = require("../Models/Admin");
const Course = require("../Models/Course");
const Faculty = require("../Models/Faculty");
const Student = require("../Models/Student");


const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const admin = await Admin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};


const addcourses = async (request, response) => {
  try {
    const input = request.body;
    const course = new Course(input);
    await course.save();
    response.send('Added Successfully');
  } catch(e) {
    response.status(500).send(e.message);
  }
};

const viewcourses = async (request, response) => {
  try {
    const courses = await Course.find();
    if(courses.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(courses);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletecourse = async (request, response) => {
  try {
    const ccode = request.params.coursecode;
    const course = await Course.findOne({ "coursecode": ccode });
    if(course !== null) {
      await Course.deleteOne({ "coursecode": ccode });
      response.send("Deleted Successfully");
    } else {
      response.send("Course Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const addfaculty = async (request, response) => {
  try {
    const input = request.body;
    const faculty = new Faculty(input);
    await faculty.save();
    response.send('Added Successfully');
  } catch(e) {
    response.status(500).send(e.message);
  }
};

const viewfaculty = async (request, response) => {
  try {
    const faculty = await Faculty.find();
    if(faculty.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(faculty);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletefaculty = async (request, response) => {
  try {
    const fname = request.params.facultyName;
    const faculty = await Faculty.findOne({ "facultyName": fname });
    if (faculty !== null) {
      await Faculty.deleteOne({ "facultyName": fname });
      response.send("Deleted Successfully");
    } else {
      response.send("Faculty Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};


const addstudent = async (request, response) => {
  try 
  {
    const input = request.body;
    const student = new Student(input);
    await student.save();
    response.send('Added Successfully');
  } 
  catch(e) 
  {
    response.status(500).send(e.message);
  }
};


  
const viewstudents = async (request, response) => 
 {
    try 
    {
      const students = await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


 const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const students = await Student.findOne({"email":email})
      if(students!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };





module.exports = {
  checkadminlogin, addcourses, viewcourses,deletecourse,addfaculty,viewfaculty,
  deletefaculty,
  viewstudents,
  addstudent,
  deletestudent
};
