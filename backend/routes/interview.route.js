const express = require("express");
const { protectedRoute } = require("../middlewares/auth.middleware");
const {
  handleAddInterviewExperience,
  handleGetInterviewExperiences,
  handleGetParticularExperience,
} = require("../controllers/interview.controllers");

const interviewRouter = express.Router();

interviewRouter.post(
  "/addExperience",
  protectedRoute,
  handleAddInterviewExperience,
  handleGetParticularExperience
);
interviewRouter.get("/getAllInterviews", handleGetInterviewExperiences);
interviewRouter.get("/getExperience/:id", handleGetParticularExperience);

module.exports = { interviewRouter };
