// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import users from '../models/userModel.js';

export const protect = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth && auth.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
      req.user = users.find((u) => u.id === decoded.id);
      if (!req.user) throw new Error();
      next();
    } catch {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};
