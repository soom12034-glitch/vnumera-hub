import { Router } from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM config WHERE id = 1');
    if (!rows[0]) return res.status(500).json({ error: 'Config not found' });

    const hero = JSON.parse(rows[0].hero || '{}');
    const stats = JSON.parse(rows[0].stats || '[]');
    const software = JSON.parse(rows[0].software || '[]');

    res.json({
      company: JSON.parse(rows[0].company),
      hero: {
        ...hero,
        stats: Array.isArray(hero.stats) ? hero.stats : stats,
      },
      software,
      contacts: JSON.parse(rows[0].contacts),
      socials: JSON.parse(rows[0].socials)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', verifyToken, async (req, res) => {
  try {
    const { company, hero, contacts, socials, software } = req.body;
    const heroStats = Array.isArray(hero?.stats) ? hero.stats : [];

    await db.query(`
      UPDATE config SET
        company = $1, hero = $2, stats = $3, contacts = $4, socials = $5, software = $6, updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `, [
      JSON.stringify(company),
      JSON.stringify(hero),
      JSON.stringify(heroStats),
      JSON.stringify(contacts),
      JSON.stringify(socials),
      JSON.stringify(Array.isArray(software) ? software : [])
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
