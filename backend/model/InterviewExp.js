const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({});

const InterviewExp = new mongoose.model("interviews", interviewSchema);

module.exports = { InterviewExp };
