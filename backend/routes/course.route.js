const express = require("express");
const { protectedRoute } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const {
  getAllCourses,
  getAllModules,
  getAllQuestions,
  handleCreateCourse,
  handleCreateModule,
  handleCreateQuestion,
} = require("../controllers/course.controllers");
const courseRouter = express.Router();

//----------FOR GETTING DATAS----------------------------
courseRouter.get("/getCourses", getAllCourses);
courseRouter.get("/getModules/:courseId", getAllModules);
courseRouter.get("/getQuestions/:moduleId", getAllQuestions);

//-----------------FOR CREATING DATA -----------------------
courseRouter.post("/addCourse", protectedRoute, isAdmin, handleCreateCourse);
courseRouter.post("/addModule", protectedRoute, isAdmin, handleCreateModule);
courseRouter.post(
  "/addQuestion",
  protectedRoute,
  isAdmin,
  handleCreateQuestion
);
module.exports = { courseRouter };
