const express = require("express");
const { protectedRoute } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const {
  getAllCourses,
  getAllModules,
  getAllQuestions,
  handleCreateCourse,
  handleCreateModule,
} = require("../controllers/course.controllers");
const course = express.Router();

//----------FOR GETTING DATAS----------------------------

course.get("/getCourses", getAllCourses);
course.get("/getModules/:courseId", getAllModules);
course.get("/getQuestions/:moduleId", getAllQuestions);

//-----------------FOR CREATING DATA -----------------------

course.post("/addCourse", protectedRoute, isAdmin, handleCreateCourse);
course.post("/addModule", protectedRoute, isAdmin, handleCreateModule);
module.exports = { course };
