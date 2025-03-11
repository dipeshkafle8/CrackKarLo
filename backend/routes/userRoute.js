const express = require("express");
const { handleUserLogin, handleUserRegister } = require("../controllers/user");
const user = express.Router();

user.post("/login", handleUserLogin);
user.post("/register", handleUserRegister);

module.exports = { user };
