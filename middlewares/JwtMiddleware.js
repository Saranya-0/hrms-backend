const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  console.log("Inside jwtMiddleware");

  try {
    // Check if Authorization header exists
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ message: "Token not provided" });
    }

    // Extract token
    const token = authHeader.slice(7); 
    console.log("Token:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.jwtKey);
    console.log("Decoded:", decoded);

    
    req.payload = decoded.userId;

    next(); 
  } catch (err) {
    console.log("JWT Error:", err.message);
    res.status(401).json({ message: "Please login again" });
  }
};

module.exports = jwtMiddleware;
