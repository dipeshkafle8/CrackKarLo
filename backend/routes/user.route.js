const express = require("express");
const {
  handleUserLogin,
  handleUserRegister,
} = require("../controllers/user.controllers");
const { isAdmin } = require("../middlewares/admin.middleware");
const { protectedRoute } = require("../middlewares/auth.middleware");
const user = express.Router();

user.post("/login", handleUserLogin);
user.post("/register", handleUserRegister);
user.get("/check", protectedRoute, isAdmin, (req, res) => {
  res.json({ msg: "Successfully passed test" });
});

module.exports = { user };
