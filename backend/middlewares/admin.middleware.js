const { User } = require("../model/user.model");

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne({ _id: userId });
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
