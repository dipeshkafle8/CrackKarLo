const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDSA: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    sampleInput: {
      type: String,
    },
    sampleOuput: {
      type: String,
    },
    timer: {
      type: Number,
    },
    constraints: {
      type: String,
    },
    explaination: {
      type: String,
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

const Question = mongoose.model("Question", questionSchema);

module.exports = { Question };
