const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    role: { type: String, default: "student" },
    username:{ type: String, default: "" },
    //to track how many questions are complete in particular module
    moduleProgress: [
      {
        module_Id: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
        completedQuestions: [
          { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
        ],
      },
    ],
    //to track how many questions are completed within a course
    courseProgress: [
      {
        course_Id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        progress: Number,
      },
    ],
    interviewExperiences: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Interview",
      },
    ],
  },
  { timestamps: true } //by default add createdAt and updatedAt fields in the schema
  
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
