const express = require("express");
const {
  getAllCourses,
  getAllModules,
  getAllQuestions,
} = require("../controllers/course.controllers");
const course = express.Router();

course.get("/allCourses", getAllCourses);
course.get("/getModules/:courseId", getAllModules);
course.get("/getQuestions/:moduleId", getAllQuestions);

module.exports = { course };
