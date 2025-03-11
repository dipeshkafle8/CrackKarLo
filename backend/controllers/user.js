const { User } = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleUserRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(409).json({ status: false, msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res
      .status(201)
      .json({ status: true, msg: "User Created Successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, msg: "Server error" });
  }
};

const handleUserLogin = async (req, res) => {
  res.status(200).json({ msg: "Getting the msg" });
};

module.exports = {
  handleUserLogin,
  handleUserRegister,
};
