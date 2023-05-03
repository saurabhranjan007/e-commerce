const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY 

const validateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "API Access Denied!" })

  try {
    const decoded = jwt.verify(token, `${secretKey}`);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

exports.validateToken = validateToken