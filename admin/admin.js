/* eslint-disable no-unused-vars */
/* ========================================
   vNumera Admin Panel
   ======================================== */

const DEFAULT_PASS = 'vnumera2026';

let config = null;

async function loadConfig() {
  try {
    const res = await fetch('config.json');
    config = await res.json();
  } catch (e) {
    alert('تعذر تحميل config.json');
  }
}

function getAdminPass() {
  return localStorage.getItem('vnumera_admin_pass') || DEFAULT_PASS;
}

function doLogin() {
  const pass = document.getElementById('loginPass').value;
  if (pass === getAdminPass()) {
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('adminLayout').classList.remove('hidden');
    loadConfig().then(() => {
      renderAll();
      fillSettings();
    });
  } else {
    document.getElementById('loginError').textContent = 'كلمة المرور غير صحيحة';
  }
}

function logout() {
  location.reload();
}

document.getElementById('loginPass').addEventListener('keypress', e => {
  if (e.key === 'Enter') doLogin();
});

/* Tabs */
function showTab(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');
}

/* Render */
function renderAll() {
  renderAppsTable();
  renderAdsTable();
  renderSocialTable();
}

function renderAppsTable() {
  const tbody = document.getElementById('appsTableBody');
  tbody.innerHTML = config.apps.map((app, i) => `
    <tr>
      <td>${app.icon}</td>
      <td>${app.name}</td>
      <td>${app.description}</td>
      <td>${app.version}</td>
      <td>${app.featured ? '✅' : ''}</td>
      <td>
        <button class="btn-icon btn-edit" onclick="editApp('${app.id}')">تعديل</button>
        <button class="btn-icon btn-delete" onclick="deleteApp('${app.id}')">حذف</button>
      </td>
    </tr>
  `).join('');
}

function renderAdsTable() {
  const tbody = document.getElementById('adsTableBody');
  tbody.innerHTML = (config.ads || []).map((ad, i) => `
    <tr>
      <td>${ad.title}</td>
      <td>${ad.description}</td>
      <td><a href="${ad.link}" target="_blank" style="color:#0071e3;">رابط</a></td>
      <td>
        <button class="btn-icon btn-edit" onclick="editAd(${i})">تعديل</button>
        <button class="btn-icon btn-delete" onclick="deleteAd(${i})">حذف</button>
      </td>
    </tr>
  `).join('');
}

function renderSocialTable() {
  const tbody = document.getElementById('socialTableBody');
  tbody.innerHTML = (config.social || []).map((s, i) => `
    <tr>
      <td>${s.name}</td>
      <td><a href="${s.url}" target="_blank" style="color:#0071e3;">رابط</a></td>
      <td>
        <button class="btn-icon btn-edit" onclick="editSocial(${i})">تعديل</button>
        <button class="btn-icon btn-delete" onclick="deleteSocial(${i})">حذف</button>
      </td>
    </tr>
  `).join('');
}

/* Settings */
function fillSettings() {
  document.getElementById('cfgSiteName').value = config.siteName || '';
  document.getElementById('cfgTagline').value = config.tagline || '';
  document.getElementById('cfgAbout').value = config.aboutText || '';
  document.getElementById('cfgFooter').value = config.footerText || '';
}

/* Password Change */
function changePassword() {
  const curr = document.getElementById('cfgCurrPass').value;
  const newPass = document.getElementById('cfgNewPass').value;
  const confirm = document.getElementById('cfgConfirmPass').value;
  const msgEl = document.getElementById('passChangeMsg');

  if (curr !== getAdminPass()) {
    msgEl.textContent = '❌ كلمة المرور الحالية غير صحيحة';
    msgEl.style.color = '#ff453a';
    return;
  }
  if (!newPass || newPass.length < 4) {
    msgEl.textContent = '⚠️ كلمة المرور الجديدة يجب أن تكون 4 أحرف على الأقل';
    msgEl.style.color = '#f1c40f';
    return;
  }
  if (newPass !== confirm) {
    msgEl.textContent = '❌ كلمتا المرور الجديدتين غير متطابقتين';
    msgEl.style.color = '#ff453a';
    return;
  }

  localStorage.setItem('vnumera_admin_pass', newPass);
  config.adminPassword = newPass;

  document.getElementById('cfgCurrPass').value = '';
  document.getElementById('cfgNewPass').value = '';
  document.getElementById('cfgConfirmPass').value = '';

  msgEl.textContent = '✅ تم تغيير كلمة المرور بنجاح! اضغط "حفظ الإعدادات" لتصدير الملف';
  msgEl.style.color = '#34c759';
}

function saveSettings() {
  config.siteName = document.getElementById('cfgSiteName').value;
  config.tagline = document.getElementById('cfgTagline').value;
  config.aboutText = document.getElementById('cfgAbout').value;
  config.footerText = document.getElementById('cfgFooter').value;
  exportConfig();
}

/* App CRUD */
function openAppModal() {
  document.getElementById('appModalTitle').textContent = 'إضافة برنامج';
  document.getElementById('appEditId').value = '';
  document.getElementById('appIcon').value = '';
  document.getElementById('appName').value = '';
  document.getElementById('appDesc').value = '';
  document.getElementById('appVersion').value = '';
  document.getElementById('appDownload').value = '';
  document.getElementById('appFeatured').checked = false;
  document.getElementById('appModal').classList.add('active');
}

function editApp(id) {
  const app = config.apps.find(a => a.id === id);
  if (!app) return;
  document.getElementById('appModalTitle').textContent = 'تعديل برنامج';
  document.getElementById('appEditId').value = id;
  document.getElementById('appIcon').value = app.icon;
  document.getElementById('appName').value = app.name;
  document.getElementById('appDesc').value = app.description;
  document.getElementById('appVersion').value = app.version;
  document.getElementById('appDownload').value = app.downloadUrl;
  document.getElementById('appFeatured').checked = app.featured;
  document.getElementById('appModal').classList.add('active');
}

function saveApp() {
  const id = document.getElementById('appEditId').value;
  const appData = {
    id: id || Date.now().toString(),
    icon: document.getElementById('appIcon').value,
    name: document.getElementById('appName').value,
    description: document.getElementById('appDesc').value,
    version: document.getElementById('appVersion').value,
    downloadUrl: document.getElementById('appDownload').value,
    featured: document.getElementById('appFeatured').checked
  };

  if (id) {
    const idx = config.apps.findIndex(a => a.id === id);
    config.apps[idx] = appData;
  } else {
    config.apps.push(appData);
  }

  closeModal('appModal');
  renderAppsTable();
  exportConfig();
}

function deleteApp(id) {
  if (!confirm('هل أنت متأكد من الحذف؟')) return;
  config.apps = config.apps.filter(a => a.id !== id);
  renderAppsTable();
  exportConfig();
}

/* Ad CRUD */
function openAdModal() {
  document.getElementById('adModalTitle').textContent = 'إضافة إعلان';
  document.getElementById('adEditId').value = '';
  document.getElementById('adTitle').value = '';
  document.getElementById('adDesc').value = '';
  document.getElementById('adImage').value = '';
  document.getElementById('adLink').value = '';
  document.getElementById('adModal').classList.add('active');
}

function editAd(idx) {
  const ad = config.ads[idx];
  document.getElementById('adModalTitle').textContent = 'تعديل إعلان';
  document.getElementById('adEditId').value = idx;
  document.getElementById('adTitle').value = ad.title;
  document.getElementById('adDesc').value = ad.description;
  document.getElementById('adImage').value = ad.image || '';
  document.getElementById('adLink').value = ad.link;
  document.getElementById('adModal').classList.add('active');
}

function saveAd() {
  const idx = document.getElementById('adEditId').value;
  const adData = {
    id: Date.now().toString(),
    title: document.getElementById('adTitle').value,
    description: document.getElementById('adDesc').value,
    image: document.getElementById('adImage').value,
    link: document.getElementById('adLink').value,
    position: 'top'
  };

  if (idx !== '') {
    config.ads[idx] = adData;
  } else {
    if (!config.ads) config.ads = [];
    config.ads.push(adData);
  }

  closeModal('adModal');
  renderAdsTable();
  exportConfig();
}

function deleteAd(idx) {
  if (!confirm('هل أنت متأكد من الحذف؟')) return;
  config.ads.splice(idx, 1);
  renderAdsTable();
  exportConfig();
}

/* Social CRUD */
function openSocialModal() {
  document.getElementById('socialModalTitle').textContent = 'إضافة رابط';
  document.getElementById('socialEditIdx').value = '';
  document.getElementById('socialName').value = '';
  document.getElementById('socialUrl').value = '';
  document.getElementById('socialModal').classList.add('active');
}

function editSocial(idx) {
  const s = config.social[idx];
  document.getElementById('socialModalTitle').textContent = 'تعديل رابط';
  document.getElementById('socialEditIdx').value = idx;
  document.getElementById('socialName').value = s.name;
  document.getElementById('socialUrl').value = s.url;
  document.getElementById('socialModal').classList.add('active');
}

function saveSocial() {
  const idx = document.getElementById('socialEditIdx').value;
  const sData = {
    name: document.getElementById('socialName').value,
    url: document.getElementById('socialUrl').value
  };

  if (idx !== '') {
    config.social[idx] = sData;
  } else {
    if (!config.social) config.social = [];
    config.social.push(sData);
  }

  closeModal('socialModal');
  renderSocialTable();
  exportConfig();
}

function deleteSocial(idx) {
  if (!confirm('هل أنت متأكد من الحذف؟')) return;
  config.social.splice(idx, 1);
  renderSocialTable();
  exportConfig();
}

/* Modal Helpers */
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

/* Export Config */
function exportConfig() {
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.json';
  a.click();
  URL.revokeObjectURL(url);
  alert('تم تصدير config.json\nارفع الملف إلى المجلد admin/ لتحديث الموقع');
}
