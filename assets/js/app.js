/* ========================================
   vNumera App Loader
   Loads content from admin/config.json
   ======================================== */

const DEFAULT_CONFIG = {
  siteName: "vNumera",
  tagline: "حلول محاسبية رقمية متكاملة",
  aboutText: "نحن فريق متخصص في تطوير البرمجيات المحاسبية والإدارية. نقدم حلولاً رقمية متكاملة تساعد الشركات والأفراد على إدارة أعمالهم بكفاءة واحترافية.",
  footerText: "جميع الحقوق محفوظة © 2026",
  apps: [
    {
      id: "cashierpro",
      name: "CashierPro",
      icon: "🖥️",
      description: "نظام نقاط بيع وإدارة مخازن احترافي للمتاجر والمطاعم",
      version: "3.0.0",
      downloadUrl: "#",
      featured: true
    },
    {
      id: "accounter",
      name: "Accounter",
      icon: "📊",
      description: "برنامج محاسبي متكامل للشركات الصغيرة والمتوسطة",
      version: "1.5.0",
      downloadUrl: "#",
      featured: false
    },
    {
      id: "payroll",
      name: "Payroll Manager",
      icon: "💰",
      description: "إدارة الرواتب والموظفين والحضور والانصراف",
      version: "2.0.0",
      downloadUrl: "#",
      featured: false
    }
  ],
  ads: [
    {
      id: "ad1",
      title: "عرض خاص",
      description: "احصل على خصم 30% على جميع البرامج",
      image: "",
      link: "#",
      position: "top"
    }
  ],
  social: [
    { name: "تويتر", url: "#" },
    { name: "واتساب", url: "#" },
    { name: "تيليجرام", url: "#" }
  ]
};

async function loadConfig() {
  try {
    const response = await fetch('admin/config.json');
    if (!response.ok) throw new Error('Config not found');
    return await response.json();
  } catch (e) {
    console.log('Using default config');
    return DEFAULT_CONFIG;
  }
}

function renderApps(apps) {
  const grid = document.getElementById('appsGrid');
  if (!grid) return;

  grid.innerHTML = apps.map(app => `
    <div class="app-card ${app.featured ? 'featured' : ''}">
      ${app.featured ? '<span class="featured-badge">مميز</span>' : ''}
      <div class="app-icon">${app.icon}</div>
      <h3 class="app-name">${app.name}</h3>
      <p class="app-desc">${app.description}</p>
      <span class="app-version">الإصدار ${app.version}</span>
      <br>
      <a href="${app.downloadUrl}" class="app-download" download>تحميل البرنامج</a>
    </div>
  `).join('');
}

function renderAds(ads) {
  const container = document.getElementById('adsContainer');
  if (!container || !ads || ads.length === 0) {
    if (container) container.style.display = 'none';
    return;
  }

  container.innerHTML = ads.map(ad => `
    <a href="${ad.link}" class="ad-card" target="_blank">
      ${ad.image ? `<img src="${ad.image}" alt="${ad.title}" class="ad-image">` : ''}
      <div class="ad-content">
        <h3 class="ad-title">${ad.title}</h3>
        <p class="ad-desc">${ad.description}</p>
      </div>
    </a>
  `).join('');
}

function renderSocial(social) {
  const container = document.getElementById('socialLinks');
  if (!container || !social) return;

  container.innerHTML = social.map(s => `
    <a href="${s.url}" class="social-link" target="_blank">${s.name}</a>
  `).join('');
}

function updateTexts(config) {
  const tagline = document.getElementById('siteTagline');
  const about = document.getElementById('aboutText');
  const footer = document.getElementById('footerText');

  if (tagline && config.tagline) tagline.textContent = config.tagline;
  if (about && config.aboutText) about.textContent = config.aboutText;
  if (footer && config.footerText) footer.textContent = config.footerText;
}

async function init() {
  const config = await loadConfig();
  renderApps(config.apps || DEFAULT_CONFIG.apps);
  renderAds(config.ads || DEFAULT_CONFIG.ads);
  renderSocial(config.social || DEFAULT_CONFIG.social);
  updateTexts(config);
}

document.addEventListener('DOMContentLoaded', init);
