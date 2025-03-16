const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    interviewType: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    questions: {
      dsa: [{ name: String }],
      theory: [{ question: String }],
      queries: [{ question: String }],
    },
    difficultyLevel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const InterviewExp = new mongoose.model("interviews", interviewSchema);

module.exports = { InterviewExp };
