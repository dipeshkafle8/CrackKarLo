const { User } = require("../model/user.model");

const isAdmin = async (req, res, next) => {
  try {
    const email = req.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ status: false, msg: "User doesn't exist" });
    }
    if (user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, msg: "Not authorized to access this route" });
    }
    next();
  } catch (err) {
    return res.status(500).json({ status: false, msg: "Error in isAdmin" });
  }
};

module.exports = { isAdmin };
