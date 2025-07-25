// controllers/authController.js
import bcrypt from 'bcryptjs';
import users from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find((u) => u.email === email);
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashed };

  users.push(newUser);
  const token = generateToken(newUser.id);

  res.status(201).json({ user: { id: newUser.id, name, email }, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken(user.id);
  res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
};
