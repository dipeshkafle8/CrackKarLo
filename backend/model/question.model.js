const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: Text,
    },
    link: {
      type: String,
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("questios", questionSchema);

module.exports = { Question };
