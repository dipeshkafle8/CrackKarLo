const { Course } = require("../model/course.model");
const { Module } = require("../model/module.model");
const { Question } = require("../model/question.model");

// --------------------- FOR GETTING DATAS ------------------------

// for getting all Courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res
      .status(200)
      .json({ status: true, msg: "Courses fetched", Courses: courses });
  } catch (err) {
    console.log("Error in getting Courses", err);
    res.status(500).json({ status: false, msg: "Error in getAllCourse" });
  }
};


//for getting modules on particular courses
const getAllModules = async (req, res) => {
  try {
    const { courseId } = req.params;
    const modules = await Module.find({ course: courseId });
    res
      .status(200)
      .json({ status: true, msg: "modules fetched", Modules: modules });
  } catch (err) {
    console.log("Error in getting Modules", err);
    res.status(500).json({ status: false, msg: "Error in getting modules" });
  }
};

//for getting All questions on a particular module

const getAllQuestions = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const questions = await Question.find({ module: moduleId });
    res
      .status(200)
      .json({ status: true, msg: "Questions fetched", Questions: questions });
  } catch (err) {
    console.log("Error in getting Questions", err);
    res.status(500).json({ status: true, msg: "Error in getting questions" });
  }
};

//-------------------------FOR INSERTING DATA---------------------------------

//for creating new Course only allowed to admin
const handleCreateCourse = async (req, res) => {
  try {
    const { title, description, type } = req.body;
    const newCourse = new Course({
      title,
      description,
      type,
    });
    await newCourse.save();
    res
      .status(200)
      .json({ status: true, msg: "Course created", id: newCourse._id });
  } catch (err) {
    console.log("Error in creating Course", err);
    res.status(500).json({ status: false, msg: "Error in Creating Course" });
  }
};

// For creating a module for particular Course
const handleCreateModule = async (req, res) => {
  console.log("In the Controller");
  try {
    const { course } = req.body;
    const moduleDetails = req.body;

    const newModule = new Module(moduleDetails);

    //to update Course model include moduleId into the course and inc total modueles by 1
    await Course.findByIdAndUpdate(course, {
      $push: { modules: newModule._id },
      $inc: { totalModules: 1 },
    });

    newModule.save();
    res.status(200).json({
      status: true,
      msg: "Successfully created module",
      id: newModule._id,
    });
  } catch (err) {
    console.log("Error in creating Module", err);
    res.status(500).json({ status: false, msg: "Error in Creating Module" });
  }
};

const handleCreateQuestion = async (req, res) => {
  try {
    const { module } = req.body;
    const question = req.body;
    //creating instance of question
    const newQuestion = new Question(question);

    //updating module no of questions and questions array
    const updatedModule = await Module.findByIdAndUpdate(
      module,
      {
        $push: { questions: newQuestion._id },
        $inc: { totalQuestions: 1 },
      },
      {
        new: true,
      }
    );
    // update the total question in course for that particular module
    // await Course.findByIdAndUpdate(updatedModule.course, {
    //   $inc: { totalQuestions: 1 },
    // });

    //save the instance to the database
    newQuestion.save();

    res.status(200).json({
      status: true,
      msg: "Question created Successfully",
      id: newQuestion._id,
    });
  } catch (err) {
    console.log("Error in creating questions", err);
    res.status(500).json({ status: false, msg: "Error in creating questions" });
  }
};

module.exports = {
  getAllCourses,
  getAllModules,
  getAllQuestions,
  handleCreateCourse,
  handleCreateModule,
  handleCreateQuestion,
};
