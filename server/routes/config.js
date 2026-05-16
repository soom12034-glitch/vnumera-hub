import { Router } from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/', (req, res) => {
  const row = db.prepare('SELECT * FROM config WHERE id = 1').get();
  if (!row) return res.status(500).json({ error: 'Config not found' });

  res.json({
    company: JSON.parse(row.company),
    hero: JSON.parse(row.hero),
    stats: JSON.parse(row.stats),
    contacts: JSON.parse(row.contacts),
    socials: JSON.parse(row.socials)
  });
});

router.put('/', verifyToken, (req, res) => {
  const { company, hero, stats, contacts, socials } = req.body;

  db.prepare(`
    UPDATE config SET
      company = ?, hero = ?, stats = ?, contacts = ?, socials = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).run(
    JSON.stringify(company),
    JSON.stringify(hero),
    JSON.stringify(stats),
    JSON.stringify(contacts),
    JSON.stringify(socials)
  );

  res.json({ success: true });
});

export default router;
