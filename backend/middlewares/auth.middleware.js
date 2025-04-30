const jwt = require("jsonwebtoken");

const protectedRoute = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header) {
      return res
        .status(401)
        .json({ status: false, msg: "Authorization header is missing" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ status: false, msg: "Token is not provided" });
    }
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {
        id: user.id,
        email: user.email,
        name: user.name,
      };
      next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          status: false, 
          msg: "Token has expired. Please login again.",
          expired: true
        });
      }
      return res.status(401).json({ 
        status: false, 
        msg: "Invalid token. Please login again." 
      });
    }
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(500).json({ 
      status: false, 
      msg: "Internal server error" 
    });
  }
};

module.exports = { protectedRoute };
