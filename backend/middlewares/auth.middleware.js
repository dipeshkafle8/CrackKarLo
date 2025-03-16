const jwt = require("jsonwebtoken");

const protectedRoute = async (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res
        .status(404)
        .json({ status: false, msg: "Token is not provided" });
    }
    const { name, email } = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(500).json({ status: false, msg: "Token is expired" });
  }
  // include email into the req object
  req.email = email;
  next();
};

module.exports = { protectedRoute };
