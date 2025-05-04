const { User } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register Functionality
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
    res.status(500).json({ status: false, msg: "Error in Creating user" });
  }
};

//Login functionaltiy
const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ status: false, msg: "User not found" });
    }
    const isPassVerfied = await bcrypt.compare(password, user.password);
    if (!isPassVerfied) {
     return res.status(401).json({ status: false, msg: "Password is incorrect" });
    }
    const jwtToken = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      status: true,
      msg: "User logged Successfully",
      user: {
        id: user._id,
        email: user.email,
        profile: user.profilePic,
        role: user.role,
      },
      jwtToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, msg: "Internal server error" });
  }
};

//to check user session
const handleCheckUserSession = async (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "User is authenticated", user: req.user });
};

//to handle the user if the user is admin or not
const hanldeIsAdmin = async (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "Yes!!,the user is Admin", user: req.user });
};

const handleAccount = async (req, res) => {
  try {

    console.log("Request User:", req.user);
    const userId = req.user.id;
    // Find the user by ID
    const user = await User.findById(userId);
    console.log(user.username);
    if (!user) {
      return res.status(404).json({ status: false, msg: "User not found" });
    }
    // Respond with the user's email, name, and role
    res.status(200).json({
      status: true,
      msg: "User account details fetched successfully",
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
        username: user.username,
      },
    });
  } catch (err) {
    console.log("Error in fetching user account details", err);
    res.status(500).json({ status: false, msg: "Internal server error" });
  }
};

module.exports = {
  handleUserLogin,
  handleUserRegister,
  handleCheckUserSession,
  hanldeIsAdmin,
  handleAccount,
};
