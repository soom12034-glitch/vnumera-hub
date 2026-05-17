const API_BASE = '';

function getToken() {
  return localStorage.getItem('admin_token') || '';
}

async function fetchJSON(url: string, options?: RequestInit) {
  if (!API_BASE) {
    throw new Error('API not configured');
  }
  const res = await fetch(API_BASE + url, {
    ...options,
    headers: {
      ...(options?.headers || {}),
      ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  // Auth
  login: (username: string, password: string) =>
    fetchJSON('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }),

  updateCredentials: (data: { currentPassword: string; newUsername?: string; newPassword?: string }) =>
    fetchJSON('/api/auth/credentials', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),

  // Config
  getConfig: () => fetchJSON('/api/config'),
  updateConfig: (data: any) =>
    fetchJSON('/api/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),

  // Software
  getSoftware: () => fetchJSON('/api/software'),
  createSoftware: (data: any) =>
    fetchJSON('/api/software', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  updateSoftware: (id: number, data: any) =>
    fetchJSON(`/api/software/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  deleteSoftware: (id: number) =>
    fetchJSON(`/api/software/${id}`, { method: 'DELETE' }),

  // Upload
  uploadFile: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return fetchJSON('/api/upload', {
      method: 'POST',
      body: formData,
    });
  },
  getFiles: () => fetchJSON('/api/upload'),
};
