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

module.exports = { handleAddInterviewExperience };
