const express = require("express");
const {
  handleUserLogin,
  handleUserRegister,
} = require("../controllers/user.controllers");
const { isAdmin } = require("../middlewares/admin.middleware");
const { protectedRoute } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/login", handleUserLogin);
userRouter.post("/register", handleUserRegister);
userRouter.get("/check", protectedRoute, isAdmin, (req, res) => {
  res.json({ msg: "Successfully passed test" });
});

module.exports = { userRouter };
