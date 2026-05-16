import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Save, Trash2, X, Edit3, ImagePlus, Check } from 'lucide-react'
import { loadConfig, saveConfig, type SoftwareItem } from '../data/siteData'

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

const emptySoftware: SoftwareItem = {
  id: '',
  name: '',
  category: '',
  description: '',
  features: [],
  platforms: [],
  type: 'Desktop',
  size: '-',
  version: 'v1.0',
  featured: false,
  isService: false,
  downloadUrl: '',
  screenshots: [],
}

export default function SoftwareManager() {
  const [config, setConfig] = useState(loadConfig())
  const [editing, setEditing] = useState<SoftwareItem | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [featureInput, setFeatureInput] = useState('')
  const [platformInput, setPlatformInput] = useState('')
  const [screenshotUrl, setScreenshotUrl] = useState('')
  const [message, setMessage] = useState('')

  const software = config.software

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 2000)
  }

  const save = (sw: SoftwareItem) => {
    const newSoftware = sw.id
      ? software.map((s) => (s.id === sw.id ? sw : s))
      : [...software, { ...sw, id: generateId() }]
    const newConfig = { ...config, software: newSoftware }
    setConfig(newConfig)
    saveConfig(newConfig)
    setEditing(null)
    setIsAdding(false)
    setFeatureInput('')
    setPlatformInput('')
    setScreenshotUrl('')
    showMessage('تم الحفظ بنجاح')
  }

  const deleteItem = (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا البرنامج؟')) return
    const newSoftware = software.filter((s) => s.id !== id)
    const newConfig = { ...config, software: newSoftware }
    setConfig(newConfig)
    saveConfig(newConfig)
    showMessage('تم الحذف')
  }

  const startEdit = (item: SoftwareItem) => {
    setEditing({ ...item })
    setIsAdding(false)
  }

  const startAdd = () => {
    setEditing({ ...emptySoftware })
    setIsAdding(true)
  }

  const updateField = (field: keyof SoftwareItem, value: any) => {
    if (!editing) return
    setEditing({ ...editing, [field]: value })
  }

  const addFeature = () => {
    if (!featureInput.trim() || !editing) return
    updateField('features', [...editing.features, featureInput.trim()])
    setFeatureInput('')
  }

  const removeFeature = (index: number) => {
    if (!editing) return
    updateField('features', editing.features.filter((_, i) => i !== index))
  }

  const addPlatform = () => {
    if (!platformInput.trim() || !editing) return
    updateField('platforms', [...editing.platforms, platformInput.trim()])
    setPlatformInput('')
  }

  const removePlatform = (index: number) => {
    if (!editing) return
    updateField('platforms', editing.platforms.filter((_, i) => i !== index))
  }

  const addScreenshot = () => {
    if (!screenshotUrl.trim() || !editing) return
    updateField('screenshots', [...editing.screenshots, screenshotUrl.trim()])
    setScreenshotUrl('')
  }

  const removeScreenshot = (index: number) => {
    if (!editing) return
    updateField('screenshots', editing.screenshots.filter((_, i) => i !== index))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editing) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        updateField('screenshots', [...editing.screenshots, reader.result])
      }
    }
    reader.readAsDataURL(file)
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

      <div className="flex justify-between items-center">
        <p className="text-slate-400 text-sm">{software.length} برنامج مسجل</p>
        <button
          onClick={startAdd}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" /> إضافة برنامج
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {software.map((item) => (
          <div
            key={item.id}
            className="bg-navy-900/50 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-primary-400 font-bold text-sm">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-slate-400 text-xs">{item.category} · {item.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {item.featured && (
                <span className="text-xs bg-primary-600/20 text-primary-400 px-2 py-1 rounded-lg">مميز</span>
              )}
              <button onClick={() => startEdit(item)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="تعديل" aria-label="تعديل">
                <Edit3 className="w-4 h-4" />
              </button>
              <button onClick={() => deleteItem(item.id)} className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all" title="حذف" aria-label="حذف">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {editing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-navy-900 border border-white/10 rounded-2xl w-full max-w-2xl my-8 overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">
                  {isAdding ? 'إضافة برنامج جديد' : 'تعديل البرنامج'}
                </h3>
                <button onClick={() => { setEditing(null); setIsAdding(false) }} className="text-slate-400 hover:text-white" title="إغلاق" aria-label="إغلاق">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">الاسم</label>
                    <input
                      type="text"
                      value={editing.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      title="الاسم"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">الفئة</label>
                    <input
                      type="text"
                      value={editing.category}
                      onChange={(e) => updateField('category', e.target.value)}
                      title="الفئة"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">الوصف</label>
                  <textarea
                    value={editing.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    rows={3}
                    title="الوصف"
                    aria-label="الوصف"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">الإصدار</label>
                    <input
                      type="text"
                      value={editing.version}
                      onChange={(e) => updateField('version', e.target.value)}
                      title="الإصدار"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">الحجم</label>
                    <input
                      type="text"
                      value={editing.size}
                      onChange={(e) => updateField('size', e.target.value)}
                      title="الحجم"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">رابط التحميل</label>
                    <input
                      type="text"
                      value={editing.downloadUrl || ''}
                      onChange={(e) => updateField('downloadUrl', e.target.value)}
                      title="رابط التحميل"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.featured}
                      onChange={(e) => updateField('featured', e.target.checked)}
                      className="rounded border-white/20 bg-navy-950 text-primary-600"
                    />
                    مميز (يظهر في قسم المميز)
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.isService || false}
                      onChange={(e) => updateField('isService', e.target.checked)}
                      className="rounded border-white/20 bg-navy-950 text-primary-600"
                    />
                    خدمة (بدون تحميل)
                  </label>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2">المميزات</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addFeature()}
                      placeholder="أضف ميزة..."
                      className="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                    <button onClick={addFeature} className="bg-primary-600 hover:bg-primary-500 text-white px-3 rounded-lg text-sm">+</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {editing.features.map((f, i) => (
                      <span key={i} className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        {f}
                        <button onClick={() => removeFeature(i)} className="hover:text-white" title="حذف" aria-label="حذف"><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2">المنصات</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={platformInput}
                      onChange={(e) => setPlatformInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addPlatform()}
                      placeholder="Web, Windows, Mobile..."
                      className="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                    <button onClick={addPlatform} className="bg-primary-600 hover:bg-primary-500 text-white px-3 rounded-lg text-sm">+</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {editing.platforms.map((p, i) => (
                      <span key={i} className="bg-navy-800 text-slate-300 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        {p}
                        <button onClick={() => removePlatform(i)} className="hover:text-white" title="حذف" aria-label="حذف"><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2">الصور</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={screenshotUrl}
                      onChange={(e) => setScreenshotUrl(e.target.value)}
                      placeholder="رابط صورة..."
                      className="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                    />
                    <button onClick={addScreenshot} className="bg-primary-600 hover:bg-primary-500 text-white px-3 rounded-lg text-sm">+</button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer transition-colors">
                      <ImagePlus className="w-4 h-4" />
                      رفع صورة
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {editing.screenshots.map((s, i) => (
                      <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-navy-800 border border-white/10">
                        <img src={s} alt="" className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeScreenshot(i)}
                          className="absolute top-1 left-1 bg-red-500/80 text-white p-1 rounded-md hover:bg-red-500"
                          title="حذف"
                          aria-label="حذف"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => { setEditing(null); setIsAdding(false) }}
                  className="px-4 py-2 rounded-xl text-slate-300 hover:bg-white/5 text-sm transition-colors"
                >
                  إلغاء
                </button>
                <button
                  onClick={() => save(editing)}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors"
                >
                  <Save className="w-4 h-4" /> حفظ
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
