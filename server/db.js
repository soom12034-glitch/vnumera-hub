import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '..', 'data', 'database.sqlite');
const DATA_DIR = path.join(__dirname, '..', 'data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

function init() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS config (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      company TEXT NOT NULL DEFAULT '{}',
      hero TEXT NOT NULL DEFAULT '{}',
      stats TEXT NOT NULL DEFAULT '[]',
      contacts TEXT NOT NULL DEFAULT '[]',
      socials TEXT NOT NULL DEFAULT '[]',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS software (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      version TEXT,
      size TEXT,
      download_url TEXT,
      features TEXT DEFAULT '[]',
      platforms TEXT DEFAULT '[]',
      screenshots TEXT DEFAULT '[]',
      featured INTEGER DEFAULT 0,
      is_service INTEGER DEFAULT 0,
      image TEXT,
      sort_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      username TEXT NOT NULL DEFAULT 'admin',
      password TEXT NOT NULL DEFAULT '$2b$10$hashed',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS files (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      original_name TEXT NOT NULL,
      filename TEXT NOT NULL,
      mime_type TEXT,
      size INTEGER DEFAULT 0,
      path TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const defaultCompany = JSON.stringify({
    name: 'vNumerav',
    location: 'القاهرة، مصر',
    tagline: 'حلول رقمية متكاملة',
    description: 'نظام محاسبي احترافي متكامل',
    portfolioText: 'مجموعة من البرامج المحاسبية'
  });
  const defaultHero = JSON.stringify({
    badge: 'نظام ERP متكامل',
    headline: 'حلول محاسبية ذكية',
    subheadline: 'إدارة أعمالك بكل سهولة'
  });
  const defaultStats = JSON.stringify([
    { label: 'عميل نشط', value: '+1500' },
    { label: 'فاتورة يومية', value: '25K+' },
    { label: 'فرع', value: '80+' }
  ]);
  const defaultContacts = JSON.stringify([
    { type: 'phone', label: 'الهاتف', value: '+20 100 000 0000', icon: 'Phone', active: true },
    { type: 'email', label: 'البريد', value: 'cashierpro-finance@cashierpro-cloud.com', icon: 'Mail', active: true }
  ]);
  const defaultSocials = JSON.stringify([
    { platform: 'facebook', url: '', active: false },
    { platform: 'twitter', url: '', active: false },
    { platform: 'instagram', url: '', active: false }
  ]);

  const stmt = db.prepare(`
    INSERT OR IGNORE INTO config (id, company, hero, stats, contacts, socials) VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(1, defaultCompany, defaultHero, defaultStats, defaultContacts, defaultSocials);

  const adminStmt = db.prepare(`
    INSERT OR IGNORE INTO admins (id, username, password) VALUES (?, ?, ?)
  `);
  adminStmt.run(1, 'admin', '$2b$10$YourHashedPasswordHere');
}

init();

export default db;
