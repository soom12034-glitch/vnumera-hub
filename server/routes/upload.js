import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 * 1024 }
});

const router = Router();

router.post('/', verifyToken, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const result = db.prepare(`
    INSERT INTO files (original_name, filename, mime_type, size, path)
    VALUES (?, ?, ?, ?, ?)
  `).run(
    req.file.originalname,
    req.file.filename,
    req.file.mimetype,
    req.file.size,
    `/uploads/${req.file.filename}`
  );

  res.json({
    id: result.lastInsertRowid,
    url: `/uploads/${req.file.filename}`,
    name: req.file.originalname,
    size: req.file.size
  });
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM files WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'File not found' });
  res.json(row);
});

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM files ORDER BY created_at DESC').all();
  res.json(rows);
});

export default router;
