import { Router } from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM software ORDER BY sort_order, id DESC').all();
  res.json(rows.map(r => ({
    ...r,
    features: JSON.parse(r.features || '[]'),
    platforms: JSON.parse(r.platforms || '[]'),
    screenshots: JSON.parse(r.screenshots || '[]'),
    featured: Boolean(r.featured),
    isService: Boolean(r.is_service)
  })));
});

router.post('/', verifyToken, (req, res) => {
  const {
    name, category, description, version, size,
    downloadUrl, features, platforms, screenshots,
    featured, isService, image
  } = req.body;

  const result = db.prepare(`
    INSERT INTO software (name, category, description, version, size, download_url, features, platforms, screenshots, featured, is_service, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    name, category, description || '', version || '', size || '',
    downloadUrl || '', JSON.stringify(features || []), JSON.stringify(platforms || []),
    JSON.stringify(screenshots || []), featured ? 1 : 0, isService ? 1 : 0, image || ''
  );

  res.json({ id: result.lastInsertRowid });
});

router.put('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const {
    name, category, description, version, size,
    downloadUrl, features, platforms, screenshots,
    featured, isService, image
  } = req.body;

  db.prepare(`
    UPDATE software SET
      name = ?, category = ?, description = ?, version = ?, size = ?,
      download_url = ?, features = ?, platforms = ?, screenshots = ?,
      featured = ?, is_service = ?, image = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    name, category, description || '', version || '', size || '',
    downloadUrl || '', JSON.stringify(features || []), JSON.stringify(platforms || []),
    JSON.stringify(screenshots || []), featured ? 1 : 0, isService ? 1 : 0, image || '', id
  );

  res.json({ success: true });
});

router.delete('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM software WHERE id = ?').run(id);
  res.json({ success: true });
});

export default router;
