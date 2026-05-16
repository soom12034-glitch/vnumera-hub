import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js';
import { generateToken, verifyToken } from '../middleware/auth.js';

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const row = db.prepare('SELECT * FROM admins WHERE id = 1').get();

  if (!row) return res.status(500).json({ error: 'Admin not initialized' });

  const isValid =
    row.password === '$2b$10$YourHashedPasswordHere'
      ? password === 'admin123'
      : bcrypt.compareSync(password, row.password);

  if (row.username !== username || !isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken({ username: row.username });
  res.json({ token, username: row.username });
});

router.put('/credentials', verifyToken, (req, res) => {
  const { currentPassword, newUsername, newPassword } = req.body;
  const row = db.prepare('SELECT * FROM admins WHERE id = 1').get();

  const isValid =
    row.password === '$2b$10$YourHashedPasswordHere'
      ? currentPassword === 'admin123'
      : bcrypt.compareSync(currentPassword, row.password);

  if (!isValid) return res.status(401).json({ error: 'Current password is incorrect' });

  const hashed = newPassword ? bcrypt.hashSync(newPassword, 10) : row.password;
  const finalUsername = newUsername || row.username;

  db.prepare('UPDATE admins SET username = ?, password = ? WHERE id = 1').run(finalUsername, hashed);

  const token = generateToken({ username: finalUsername });
  res.json({ token, username: finalUsername });
});

export default router;
