const express = require("express");
const { protectedRoute } = require("../middlewares/auth.middleware");
const {
  handleAddInterviewExperience,
} = require("../controllers/interview.controllers");
const interviewRouter = express.Router();
interviewRouter.post(
  "/addExperience",
  protectedRoute,
  handleAddInterviewExperience
);
module.exports = { interviewRouter };
