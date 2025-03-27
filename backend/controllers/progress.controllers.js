const { User } = require("../model/user.model");
const { Module } = require("../model/module.model");
const { Course } = require("../model/course.model");

const handleMarkAsCompleted = async (req, res) => {
  try {
    const { moduleId, questionId } = req.body;

    //to find if the logged user exists or not
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res
        .status(404)
        .json({ status: false, msg: "User doesn't exists" });
    }

    //to get the module does exist or not
    const moduleDetails = await Module.findOne({ _id: moduleId });
    if (!moduleDetails) {
      return res
        .status(404)
        .json({ status: false, msg: "Module doesn't exists" });
    }

    //get courseId from module course
    const courseId = moduleDetails.course;

    const courseDetails = await Course.findOne({ _id: courseId });

    if (!courseDetails) {
      return res.status(404).json({ status: false, msg: "Course not found" });
    }

    //check if the module is already present in moduleProgress or not
    const isExistingModule = user.moduleProgress.find(
      (mod) => moduleDetails._id === mod.module_Id
    );

    //if module already exists then check if question is already there do't do anything otherwise push questionId
    if (isExistingModule) {
      if (!isExistingModule.completedQuestions.includes(questionId)) {
        isExistingModule.completedQuestions.push(questionId);
      }
    } else {
      //if not present insert the new module
      user.moduleProgress.push({
        module_Id: moduleDetails._id,
        completedQuestions: [questionId],
      });
    }

    //to check if the user is first time using the course
    const isExistingCourse = user.courseProgress.find(
      (c) => c.course_Id === courseDetails._id
    );

    if (isExistingCourse) {
      if (!isExistingCourse) {
        user.courseProgress.push({
          course_Id: courseDetails._id,
          progress: 1,
        });
      } else {
        isExistingCourse.progress += 1;
      }
    }

    await user.save();

    res
      .status(200)
      .json({ status: true, msg: "Successfully added progress", user });
  } catch (err) {
    console.log("Error in marking it as completed", err);
    res
      .status(500)
      .json({ status: false, msg: "Unable to mark the question as completed" });
  }
};

module.exports = { handleMarkAsCompleted };
