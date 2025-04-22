const jwt = require("jsonwebtoken");

const protectedRoute = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header) {
      return res
        .status(404)
        .json({ status: false, msg: "Token isn't in header" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res
        .status(404)
        .json({ status: false, msg: "Token is not provided" });
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: false, msg: "Token is expired" });
  }
};

module.exports = { protectedRoute };
