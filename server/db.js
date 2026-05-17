import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:ZGcxshNXnl4D9UsVfUEhbuCZQQmtGCM6118D8dsz8P9RxDegCnHCetpYWQsp3vzx@af959i5yah06ex9iur9xku7u:5432/postgres',
  ssl: false
});

async function init() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS config (
        id INTEGER PRIMARY KEY,
        company TEXT NOT NULL DEFAULT '{}',
        hero TEXT NOT NULL DEFAULT '{}',
        stats TEXT NOT NULL DEFAULT '[]',
        contacts TEXT NOT NULL DEFAULT '[]',
        socials TEXT NOT NULL DEFAULT '[]',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS software (
        id SERIAL PRIMARY KEY,
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
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL DEFAULT 'admin',
        password TEXT NOT NULL DEFAULT '$2b$10$hashed',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS files (
        id SERIAL PRIMARY KEY,
        original_name TEXT NOT NULL,
        filename TEXT NOT NULL,
        mime_type TEXT,
        size INTEGER DEFAULT 0,
        path TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

    await client.query(`
      INSERT INTO config (id, company, hero, stats, contacts, socials)
      VALUES (1, $1, $2, $3, $4, $5)
      ON CONFLICT (id) DO NOTHING
    `, [defaultCompany, defaultHero, defaultStats, defaultContacts, defaultSocials]);

    await client.query(`
      INSERT INTO admins (id, username, password)
      VALUES (1, 'admin', '$2b$10$YourHashedPasswordHere')
      ON CONFLICT (id) DO NOTHING
    `);
  } finally {
    client.release();
  }
}

init();

export default pool;
