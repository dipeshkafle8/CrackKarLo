const express = require("express");
const { protectedRoute } = require("../middlewares/auth.middleware");
const {
  handleAddInterviewExperience,
  handleGetInterviewExperiences,
} = require("../controllers/interview.controllers");

const interviewRouter = express.Router();

interviewRouter.post(
  "/addExperience",
  protectedRoute,
  handleAddInterviewExperience
);
interviewRouter.get("/getAllInterviews", handleGetInterviewExperiences);

module.exports = { interviewRouter };
