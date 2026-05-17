import { Router } from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM software ORDER BY sort_order, id DESC');
    res.json(rows.map(r => ({
      ...r,
      features: JSON.parse(r.features || '[]'),
      platforms: JSON.parse(r.platforms || '[]'),
      screenshots: JSON.parse(r.screenshots || '[]'),
      featured: Boolean(r.featured),
      isService: Boolean(r.is_service)
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const {
      name, category, description, version, size,
      downloadUrl, features, platforms, screenshots,
      featured, isService, image
    } = req.body;

    const result = await db.query(`
      INSERT INTO software (name, category, description, version, size, download_url, features, platforms, screenshots, featured, is_service, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id
    `, [
      name, category, description || '', version || '', size || '',
      downloadUrl || '', JSON.stringify(features || []), JSON.stringify(platforms || []),
      JSON.stringify(screenshots || []), featured ? 1 : 0, isService ? 1 : 0, image || ''
    ]);

    res.json({ id: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, category, description, version, size,
      downloadUrl, features, platforms, screenshots,
      featured, isService, image
    } = req.body;

    await db.query(`
      UPDATE software SET
        name = $1, category = $2, description = $3, version = $4, size = $5,
        download_url = $6, features = $7, platforms = $8, screenshots = $9,
        featured = $10, is_service = $11, image = $12, updated_at = CURRENT_TIMESTAMP
      WHERE id = $13
    `, [
      name, category, description || '', version || '', size || '',
      downloadUrl || '', JSON.stringify(features || []), JSON.stringify(platforms || []),
      JSON.stringify(screenshots || []), featured ? 1 : 0, isService ? 1 : 0, image || '', id
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM software WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
