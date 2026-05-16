import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Check, Plus, Globe, Phone, ToggleLeft, ToggleRight, Trash2 } from 'lucide-react'
import { loadConfig, saveConfig } from '../data/siteData'

export default function ContentEditor() {
  const [config, setConfig] = useState(loadConfig())
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'company' | 'hero' | 'contacts' | 'socials'>('company')
  const [newContact, setNewContact] = useState({ label: '', value: '', icon: 'Phone', href: '', active: true })
  const [newSocial, setNewSocial] = useState({ label: '', url: '', active: true })

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 2000)
  }

  const saveChanges = () => {
    saveConfig(config)
    showMessage('تم الحفظ بنجاح')
  }

  const updateCompany = (field: string, value: string) => {
    setConfig({ ...config, company: { ...config.company, [field]: value } })
  }

  const updateHero = (field: string, value: string) => {
    setConfig({ ...config, hero: { ...config.hero, [field]: value } })
  }

  const updateHeroStat = (index: number, field: string, value: string) => {
    const stats = config.hero.stats.map((s, i) => i === index ? { ...s, [field]: value } : s)
    setConfig({ ...config, hero: { ...config.hero, stats } })
  }

  const toggleContact = (id: string) => {
    setConfig({
      ...config,
      contacts: config.contacts.map((c) => c.id === id ? { ...c, active: !c.active } : c)
    })
  }

  const toggleSocial = (id: string) => {
    setConfig({
      ...config,
      socials: config.socials.map((s) => s.id === id ? { ...s, active: !s.active } : s)
    })
  }

  const deleteContact = (id: string) => {
    setConfig({ ...config, contacts: config.contacts.filter((c) => c.id !== id) })
  }

  const deleteSocial = (id: string) => {
    setConfig({ ...config, socials: config.socials.filter((s) => s.id !== id) })
  }

  const addContact = () => {
    if (!newContact.label.trim() || !newContact.value.trim()) return
    setConfig({
      ...config,
      contacts: [
        ...config.contacts,
        { ...newContact, id: Date.now().toString() }
      ]
    })
    setNewContact({ label: '', value: '', icon: 'Phone', href: '', active: true })
  }

  const addSocial = () => {
    if (!newSocial.label.trim() || !newSocial.url.trim()) return
    setConfig({
      ...config,
      socials: [
        ...config.socials,
        { ...newSocial, id: Date.now().toString() }
      ]
    })
    setNewSocial({ label: '', url: '', active: true })
  }

  return (
    <div className="space-y-4">
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
        >
          <Check className="w-4 h-4" /> {message}
        </motion.div>
      )}

      <div className="flex gap-2 bg-navy-900/50 border border-white/10 rounded-xl p-1">
        {(['company', 'hero', 'contacts', 'socials'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                ? 'bg-primary-600/20 text-primary-400'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            {tab === 'company' && 'الشركة'}
            {tab === 'hero' && 'الصفحة الرئيسية'}
            {tab === 'contacts' && 'قنوات التواصل'}
            {tab === 'socials' && 'مواقع التواصل'}
          </button>
        ))}
      </div>

      {activeTab === 'company' && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold mb-2">
            <Globe className="w-5 h-5 text-primary-400" />
            بيانات الشركة
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">اسم الشركة</label>
              <input value={config.company.name} onChange={(e) => updateCompany('name', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">الموقع</label>
              <input value={config.company.location} onChange={(e) => updateCompany('location', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">الشعار</label>
            <input value={config.company.tagline} onChange={(e) => updateCompany('tagline', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">الوصف</label>
            <textarea value={config.company.description} onChange={(e) => updateCompany('description', e.target.value)} rows={3} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">نص المحفظة</label>
            <textarea value={config.company.portfolioText} onChange={(e) => updateCompany('portfolioText', e.target.value)} rows={2} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none resize-none" />
          </div>
        </div>
      )}

      {activeTab === 'hero' && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="text-white font-bold mb-2">الصفحة الرئيسية</div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">الوسم</label>
            <input value={config.hero.badge} onChange={(e) => updateHero('badge', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">العنوان 1</label>
              <input value={config.hero.titleLine1} onChange={(e) => updateHero('titleLine1', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">العنوان 2</label>
              <input value={config.hero.titleLine2} onChange={(e) => updateHero('titleLine2', e.target.value)} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">الوصف الفرعي</label>
            <textarea value={config.hero.subtitle} onChange={(e) => updateHero('subtitle', e.target.value)} rows={2} className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none resize-none" />
          </div>
          <div className="space-y-3">
            <label className="block text-xs text-slate-400">الإحصائيات</label>
            {config.hero.stats.map((stat, i) => (
              <div key={i} className="grid grid-cols-3 gap-2">
                <input value={stat.value} onChange={(e) => updateHeroStat(i, 'value', e.target.value)} placeholder="القيمة" className="bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={stat.label} onChange={(e) => updateHeroStat(i, 'label', e.target.value)} placeholder="التسمية" className="bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={stat.desc} onChange={(e) => updateHeroStat(i, 'desc', e.target.value)} placeholder="الوصف" className="bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none" />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'contacts' && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold mb-2">
            <Phone className="w-5 h-5 text-primary-400" />
            قنوات التواصل
          </div>
          {config.contacts.map((c) => (
            <div key={c.id} className="bg-navy-950 rounded-xl p-3 flex items-center justify-between gap-3">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2">
                <input value={c.label} onChange={(e) => setConfig({ ...config, contacts: config.contacts.map((x) => x.id === c.id ? { ...x, label: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={c.value} onChange={(e) => setConfig({ ...config, contacts: config.contacts.map((x) => x.id === c.id ? { ...x, value: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={c.href} onChange={(e) => setConfig({ ...config, contacts: config.contacts.map((x) => x.id === c.id ? { ...x, href: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={c.icon} onChange={(e) => setConfig({ ...config, contacts: config.contacts.map((x) => x.id === c.id ? { ...x, icon: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" placeholder="Icon name" />
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => toggleContact(c.id)} className="p-1.5 text-slate-400 hover:text-white">
                  {c.active ? <ToggleRight className="w-5 h-5 text-emerald-400" /> : <ToggleLeft className="w-5 h-5" />}
                </button>
                <button onClick={() => deleteContact(c.id)} className="p-1.5 text-slate-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <div className="bg-navy-950 rounded-xl p-3 space-y-2">
            <p className="text-xs text-slate-500">إضافة قناة تواصل جديدة</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <input value={newContact.label} onChange={(e) => setNewContact({ ...newContact, label: e.target.value })} placeholder="التسمية" className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
              <input value={newContact.value} onChange={(e) => setNewContact({ ...newContact, value: e.target.value })} placeholder="القيمة" className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
              <input value={newContact.href} onChange={(e) => setNewContact({ ...newContact, href: e.target.value })} placeholder="الرابط" className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
              <div className="flex gap-2">
                <select value={newContact.icon} onChange={(e) => setNewContact({ ...newContact, icon: e.target.value })} className="flex-1 bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none">
                  <option value="Mail">Mail</option>
                  <option value="Phone">Phone</option>
                  <option value="MessageCircle">MessageCircle</option>
                </select>
                <button onClick={addContact} className="bg-primary-600 hover:bg-primary-500 text-white px-3 rounded-lg text-sm"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'socials' && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold mb-2">
            <Globe className="w-5 h-5 text-primary-400" />
            مواقع التواصل
          </div>
          {config.socials.map((s) => (
            <div key={s.id} className="bg-navy-950 rounded-xl p-3 flex items-center justify-between gap-3">
              <div className="flex-1 grid grid-cols-2 gap-2">
                <input value={s.label} onChange={(e) => setConfig({ ...config, socials: config.socials.map((x) => x.id === s.id ? { ...x, label: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <input value={s.url} onChange={(e) => setConfig({ ...config, socials: config.socials.map((x) => x.id === s.id ? { ...x, url: e.target.value } : x) })} className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => toggleSocial(s.id)} className="p-1.5 text-slate-400 hover:text-white">
                  {s.active ? <ToggleRight className="w-5 h-5 text-emerald-400" /> : <ToggleLeft className="w-5 h-5" />}
                </button>
                <button onClick={() => deleteSocial(s.id)} className="p-1.5 text-slate-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <div className="bg-navy-950 rounded-xl p-3 space-y-2">
            <p className="text-xs text-slate-500">إضافة موقع تواصل جديد</p>
            <div className="grid grid-cols-2 gap-2">
              <input value={newSocial.label} onChange={(e) => setNewSocial({ ...newSocial, label: e.target.value })} placeholder="الاسم" className="bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
              <div className="flex gap-2">
                <input value={newSocial.url} onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })} placeholder="الرابط" className="flex-1 bg-navy-900 border border-white/10 rounded-lg px-2 py-1.5 text-white text-sm focus:border-primary-500 focus:outline-none" />
                <button onClick={addSocial} className="bg-primary-600 hover:bg-primary-500 text-white px-3 rounded-lg text-sm"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={saveChanges}
        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
      >
        <Save className="w-4 h-4" /> حفظ جميع التغييرات
      </button>
    </div>
  )
}
