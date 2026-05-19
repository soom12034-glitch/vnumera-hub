import { api } from '../lib/api'

const CONFIG_STORAGE_KEY = 'vnumera_site_config'

export interface SoftwareItem {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  platforms: string[]
  type: string
  size: string
  version: string
  featured: boolean
  isService?: boolean
  downloadUrl?: string
  screenshots: string[]
  iconName?: string
}

export interface ContactChannel {
  id: string
  label: string
  value: string
  icon: string
  href: string
  active: boolean
}

export interface SocialLink {
  id: string
  label: string
  url: string
  active: boolean
}

export interface SiteConfig {
  company: {
    name: string
    tagline: string
    description: string
    portfolioText: string
    location: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    stats: { label: string; value: string; desc: string }[]
  }
  software: SoftwareItem[]
  contacts: ContactChannel[]
  socials: SocialLink[]
}

export const defaultSoftware: SoftwareItem[] = [
  {
    id: 'cashierpro-cloud',
    name: 'CashierPro Cloud',
    category: 'منصة سحابية متكاملة',
    description: 'برنامجان في برنامج واحد: قسم البيع المباشر POS وقسم الإدارة المالية المتكاملة. كل قسم له واجهة وتسجيل دخول خاص، والبيانات تصدر آلياً بين القسمين.',
    features: ['البيع المباشر + الإدارة المالية', 'واجهتان مستقلتان متزامنتان', 'فواتير إلكترونية ZATCA', 'يدعم جميع الأنظمة المالية العربية', 'عربي / إنجليزي'],
    platforms: ['Web'],
    type: 'Cloud',
    size: '-',
    version: 'v2026',
    featured: true,
    downloadUrl: 'https://cashierpro-cloud.com/?public=true',
    screenshots: [],
    iconName: 'Cloud',
  },
  {
    id: 'cashierpro-desktop',
    name: 'Cashier Pro',
    category: 'نقاط البيع',
    description: 'نظام POS احترافي للسوبرماركت والمحلات التجارية. يدعم الباركود، طباعة الإيصالات 80mm، الضريبة 15%، ZATCA QR، والشبكات المحلية.',
    features: ['نقاط البيع بالباركود', 'طباعة إيصالات حرارية 80mm', 'فواتير إلكترونية ZATCA QR', 'درج نقدية وميزان باركود', 'شبكة محلية متعددة أجهزة', 'نظام شفتات'],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~85 MB',
    version: 'v1.0.0',
    featured: true,
    downloadUrl: '#download-cashierpro-windows',
    screenshots: [],
    iconName: 'ShoppingCart',
  },
  {
    id: 'custom-software',
    name: 'اطرح فكرة برنامجك',
    category: 'حلول مخصصة',
    description: 'هل تبحث عن نظام محاسبي أو إداري لا يوجد في السوق؟ نحن نحوّل فكرتك إلى برنامج متكامل — من تحليل الاحتياجات إلى التسليم.',
    features: ['تحليل احتياجات العمل بدقة شاملة', 'تصميم واجهات حسب طبيعة نشاطك التجاري', 'بيئة عمل: سحابي أو محلي أو تطبيق موبايل', 'عدد أجهزة غير محدود — حسب اتفاقية العمل', 'استقبال بيانات شركتك وبناء النظام عليها', 'تصميم لوجو احترافي إذا لم يكن لديك', 'دعم فني مستمر بعد التسليم', 'تسليم سريع ومنظم مع اختبار شامل'],
    platforms: ['Web', 'Windows', 'Mobile'],
    type: 'Custom',
    size: '-',
    version: 'حسب الطلب',
    featured: false,
    isService: true,
    downloadUrl: '',
    screenshots: [],
    iconName: 'Lightbulb',
  },
  {
    id: 'surveyor-pro',
    name: 'Surveyor Pro ERP',
    category: 'أجهزة المساحة',
    description: 'نظام ERP متخصص لمجال بيع وإيجار أجهزة المساحة والمساحين. فواتير مبيعات وشراء، إيجارات، عقود، وتقارير ضريبية.',
    features: ['فواتير مبيعات وشراء', 'نظام الإيجارات', 'سجل العملاء والعقود', 'تقارير ضريبية ومالية', 'نسخ احتياطي تلقائي'],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~75 MB',
    version: 'v3.8.0',
    featured: true,
    downloadUrl: '#download-surveyor-windows',
    screenshots: [],
    iconName: 'MapPin',
  },
]

export const defaultConfig: SiteConfig = {
  company: {
    name: 'Numera',
    tagline: 'Digital Business Studio',
    description: 'شركة برمجيات متخصصة في تطوير حلول المحاسبة والإدارة للشركات والمحلات العربية. نقدم برامج حقيقية تعمل على الأجهزة المحلية والسحابة مع دعم كامل للوائح هيئة الزكاة والضريبة ZATCA والفواتير الإلكترونية.',
    portfolioText: 'محفظتنا تشمل CashierPro Cloud (منصة سحابية متكاملة)، Cashier Pro (نقاط بيع للسوبرماركت)، و Surveyor Pro ERP (إدارة أجهزة المساحة والإيجارات).',
    location: 'المملكة العربية السعودية',
  },
  hero: {
    badge: 'استوديو حلول رقمية للشركات الطموحة',
    titleLine1: 'برمجيات رقمية',
    titleLine2: 'تصنع فرقاً حقيقياً',
    subtitle: 'منصة تسويقية راقية للبرمجيات الرقمية: نعرض منتجاتنا بأعلى جودة تصميمية ونمنح العميل صورة احترافية من أول نظرة — بدون أسعار على الصفحة.',
    stats: [
      { label: 'برنامج', value: '٨+', desc: 'نظام محاسبي' },
      { label: 'مستخدم', value: '١٠K+', desc: 'تحميل نشط' },
      { label: 'متوافق', value: 'ZATCA', desc: 'الفاتورة الإلكترونية' },
      { label: 'يعمل', value: 'Cloud', desc: 'و Offline' },
    ],
  },
  software: defaultSoftware,
  contacts: [
    { id: 'email', label: 'البريد الإلكتروني', value: 'cashierpro-finance@cashierpro-cloud.com', icon: 'Mail', href: 'mailto:cashierpro-finance@cashierpro-cloud.com', active: true },
    { id: 'phone', label: 'الهاتف', value: '+966 50 000 0000', icon: 'Phone', href: 'tel:+966500000000', active: true },
    { id: 'whatsapp', label: 'واتساب', value: '+966 50 000 0000', icon: 'MessageCircle', href: 'https://wa.me/966500000000', active: true },
  ],
  socials: [
    { id: 'website', label: 'الموقع الإلكتروني', url: 'https://cashierpro-cloud.com', active: true },
    { id: 'twitter', label: 'X / تويتر', url: '#', active: false },
    { id: 'linkedin', label: 'لينكدإن', url: '#', active: false },
  ],
}

export async function loadConfig(): Promise<SiteConfig> {
  try {
    const data = await api.getConfig()
    const merged: SiteConfig = {
      ...defaultConfig,
      ...data,
      company: { ...defaultConfig.company, ...(data?.company || {}) },
      hero: {
        ...defaultConfig.hero,
        ...(data?.hero || {}),
        stats: Array.isArray(data?.hero?.stats)
          ? data.hero.stats
          : defaultConfig.hero.stats,
      },
      software: Array.isArray(data?.software) ? data.software : defaultConfig.software,
      contacts: Array.isArray(data?.contacts) ? data.contacts : defaultConfig.contacts,
      socials: Array.isArray(data?.socials) ? data.socials : defaultConfig.socials,
    }
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(merged))
    return merged
  } catch {
    try {
      const raw = localStorage.getItem(CONFIG_STORAGE_KEY)
      if (raw) {
        const localData = JSON.parse(raw)
        return {
          ...defaultConfig,
          ...localData,
          company: { ...defaultConfig.company, ...(localData?.company || {}) },
          hero: {
            ...defaultConfig.hero,
            ...(localData?.hero || {}),
            stats: Array.isArray(localData?.hero?.stats)
              ? localData.hero.stats
              : defaultConfig.hero.stats,
          },
          software: Array.isArray(localData?.software) ? localData.software : defaultConfig.software,
          contacts: Array.isArray(localData?.contacts) ? localData.contacts : defaultConfig.contacts,
          socials: Array.isArray(localData?.socials) ? localData.socials : defaultConfig.socials,
        }
      }
    } catch {
      // ignore localStorage parse errors
    }
    return defaultConfig
  }
}

export async function saveConfig(config: SiteConfig): Promise<{ persistedToServer: boolean }> {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config))
  try {
    await api.updateConfig(config)
    return { persistedToServer: true }
  } catch {
    return { persistedToServer: false }
  }
}

export function resetConfig() {
  // Clears local fallback if any
}

export interface AdminCredentials {
  username: string
  password: string
}

export function loadAdmin(): AdminCredentials {
  try {
    const raw = localStorage.getItem('vnumera_admin')
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { username: 'admin', password: 'admin123' }
}

export function saveAdmin(creds: AdminCredentials) {
  localStorage.setItem('vnumera_admin', JSON.stringify(creds))
}

export function checkAuth(): boolean {
  return !!localStorage.getItem('admin_token')
}

export async function loginAdmin(username: string, password: string): Promise<boolean> {
  try {
    const res = await api.login(username, password)
    localStorage.setItem('admin_token', res.token)
    return true
  } catch {
    return false
  }
}

export function logoutAdmin() {
  localStorage.removeItem('admin_token')
}

export async function updateAdminCredentials(currentPassword: string, newUsername?: string, newPassword?: string) {
  const res = await api.updateCredentials({ currentPassword, newUsername, newPassword })
  localStorage.setItem('admin_token', res.token)
}
