const express = require("express");
const {
  handleMarkAsCompleted,
} = require("../controllers/progress.controllers");
const { protectedRoute } = require("../middlewares/auth.middleware");

const progressRouter = express.Router();

progressRouter.post("/markAsCompleted", protectedRoute, handleMarkAsCompleted);

module.exports = { progressRouter };
