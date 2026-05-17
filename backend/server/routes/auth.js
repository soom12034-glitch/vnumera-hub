import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js';
import { generateToken, verifyToken } from '../middleware/auth.js';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { rows } = await db.query('SELECT * FROM admins WHERE id = 1');
    const row = rows[0];

    if (!row) return res.status(500).json({ error: 'Admin not initialized' });

    const isValid =
      row.password === '$2b$10$YourHashedPasswordHere'
        ? password === 'admin123'
        : await bcrypt.compare(password, row.password);

    if (row.username !== username || !isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken({ username: row.username });
    res.json({ token, username: row.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/credentials', verifyToken, async (req, res) => {
  try {
    const { currentPassword, newUsername, newPassword } = req.body;
    const { rows } = await db.query('SELECT * FROM admins WHERE id = 1');
    const row = rows[0];

    const isValid =
      row.password === '$2b$10$YourHashedPasswordHere'
        ? currentPassword === 'admin123'
        : await bcrypt.compare(currentPassword, row.password);

    if (!isValid) return res.status(401).json({ error: 'Current password is incorrect' });

    const hashed = newPassword ? bcrypt.hashSync(newPassword, 10) : row.password;
    const finalUsername = newUsername || row.username;

    await db.query('UPDATE admins SET username = $1, password = $2 WHERE id = 1', [finalUsername, hashed]);

    const token = generateToken({ username: finalUsername });
    res.json({ token, username: finalUsername });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
