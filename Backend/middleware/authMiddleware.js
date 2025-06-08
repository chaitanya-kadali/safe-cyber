// authMiddleware.js
require("dotenv").config();
const jwt = require("jsonwebtoken"); // Make sure to require jwt

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          tokenSuccess: false,
          error: "Invalid token -> from backend",
        });
      }
      // Attach user information to the request object if needed
      req.user = user;
      next(); // Call next() to allow the request to proceed
    });
  } else {
    return res.status(401).json({
      tokenSuccess: false,
      error: "Authorization token missing. -> from backend",
    });
  }
};

module.exports = authenticateJWT;
