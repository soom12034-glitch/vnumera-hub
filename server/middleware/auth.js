import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'vnumera-secret-key-change-in-production';

export function generateToken(user) {
  return jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
