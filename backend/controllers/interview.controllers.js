const { InterviewExp } = require("../model/interview.model");
const handleAddInterviewExperience = async (req, res) => {
  try {
    const createdExp = await new InterviewExp(req.body);
    await createdExp.save();
    res
      .status(200)
      .json({ status: true, msg: "Successfully received request", createdExp });
  } catch (err) {
    console.log("Error in adding new experience", err);
    res.status(500).json({ status: false, msg: "Internal Server error" });
  }
};

const handleGetInterviewExperiences = async (req, res) => {
  try {
    const experiences = await InterviewExp.find({});
    res.status(200).json({
      status: true,
      msg: "Successfully fetched interview experiences",
      experiences,
    });
  } catch (err) {
    console.log("Error in getting interview experiences", err);
    res.status(500).json({
      status: false,
      msg: "Error while getting interview experiences",
    });
  }
};

module.exports = {
  handleAddInterviewExperience,
  handleGetInterviewExperiences,
};
