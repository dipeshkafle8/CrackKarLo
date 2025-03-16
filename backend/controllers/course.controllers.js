const { Course } = require("../model/course.model");
const { Module } = require("../model/module.model");
const { Question } = require("../model/question.model");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res
      .status(200)
      .json({ status: true, msg: "Courses fetched", Courses: courses });
  } catch (err) {
    res.status(500).json({ status: false, msg: "Error in getAllCourse" });
  }
};

const getAllModules = async (req, res) => {
  try {
    const { courseId } = req.params;
    const modules = await Module.find({ course: courseId });
    res
      .status(200)
      .json({ status: true, msg: "modules fetched", Modules: modules });
  } catch (err) {
    res.status(500).json({ status: false, msg: "Error in getting modules" });
  }
};

module.exports = {
  getAllCourses,
  getAllModules,
};
