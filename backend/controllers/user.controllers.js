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
    res.status(500).json({ status: false, msg: "Server error" });
  }
};

//Login functionaltiy
const handleUserLogin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ status: false, msg: "User not found" });
    }
    const isPassVerfied = await bcrypt.compare(password, user.password);
    if (!isPassVerfied) {
      res.status(401).json({ status: false, msg: "Password is incorrect" });
    }
    const jwtToken = jwt.sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "4h",
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

module.exports = {
  handleUserLogin,
  handleUserRegister,
};
