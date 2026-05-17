import { Router } from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM config WHERE id = 1');
    if (!rows[0]) return res.status(500).json({ error: 'Config not found' });

    res.json({
      company: JSON.parse(rows[0].company),
      hero: JSON.parse(rows[0].hero),
      stats: JSON.parse(rows[0].stats),
      contacts: JSON.parse(rows[0].contacts),
      socials: JSON.parse(rows[0].socials)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', verifyToken, async (req, res) => {
  try {
    const { company, hero, stats, contacts, socials } = req.body;

    await db.query(`
      UPDATE config SET
        company = $1, hero = $2, stats = $3, contacts = $4, socials = $5, updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `, [
      JSON.stringify(company),
      JSON.stringify(hero),
      JSON.stringify(stats),
      JSON.stringify(contacts),
      JSON.stringify(socials)
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
