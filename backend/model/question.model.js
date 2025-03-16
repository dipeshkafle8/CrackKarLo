const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDSA: {
      type: Boolean,
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

const Question = mongoose.model("questions", questionSchema);

module.exports = { Question };
