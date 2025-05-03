const express = require("express");
const {
  handleUserLogin,
  handleUserRegister,
  handleCheckUserSession,
  hanldeIsAdmin,
  handleAccount,
} = require("../controllers/user.controllers");
const { isAdmin } = require("../middlewares/admin.middleware");
const { protectedRoute } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/login", handleUserLogin);
userRouter.post("/register", handleUserRegister);
userRouter.get("/checkUserSession", protectedRoute, handleCheckUserSession);
userRouter.get("/checkIsAdmin", protectedRoute, isAdmin, hanldeIsAdmin);
userRouter.get("/account", protectedRoute, handleAccount);

module.exports = { userRouter };
