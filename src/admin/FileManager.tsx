import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Trash2, ImagePlus, FileArchive, Check, X, Folder } from 'lucide-react'
import { api } from '../lib/api'
import { defaultSoftware } from '../data/siteData'

interface StoredFile {
  id: string
  name: string
  type: 'image' | 'software'
  size: string
  data?: string
  url?: string
  date: string
  softwareId?: string
}

const STORAGE_KEY = 'vnumera_files'

function loadFiles(): StoredFile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return []
}

function saveFiles(files: StoredFile[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(files))
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export default function FileManager() {
  const [files, setFiles] = useState<StoredFile[]>(loadFiles())
  const [message, setMessage] = useState('')
  const [uploadType, setUploadType] = useState<'image' | 'software'>('image')
  const [newUrl, setNewUrl] = useState('')
  const [newName, setNewName] = useState('')
  const [uploadingFile, setUploadingFile] = useState(false)
  const [selectedSoftwareId, setSelectedSoftwareId] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)
  const softwareInputRef = useRef<HTMLInputElement>(null)

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 2000)
  }

  const addFile = (file: StoredFile) => {
    const updated = [...files, file]
    setFiles(updated)
    saveFiles(updated)
  }

  const deleteFile = (id: string) => {
    const updated = files.filter((f) => f.id !== id)
    setFiles(updated)
    saveFiles(updated)
    showMessage('تم الحذف')
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        addFile({
          id: Date.now().toString(),
          name: file.name,
          type: 'image',
          size: formatSize(file.size),
          data: reader.result,
          date: new Date().toLocaleDateString('ar-SA'),
          softwareId: selectedSoftwareId || undefined,
        })
        showMessage('تم رفع الصورة')
      }
    }
    reader.readAsDataURL(file)
    if (imageInputRef.current) imageInputRef.current.value = ''
  }

  const handleAddUrl = () => {
    if (!newName.trim() || !newUrl.trim()) return
    addFile({
      id: Date.now().toString(),
      name: newName.trim(),
      type: uploadType,
      size: '-',
      url: newUrl.trim(),
      date: new Date().toLocaleDateString('ar-SA'),
      softwareId: selectedSoftwareId || undefined,
    })
    setNewName('')
    setNewUrl('')
    showMessage(uploadType === 'image' ? 'تم إضافة رابط الصورة' : 'تم إضافة رابط البرنامج')
  }

  const handleSoftwareUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      setUploadingFile(true)
      const res = await api.uploadFile(file)
      addFile({
        id: res?.id ? String(res.id) : Date.now().toString(),
        name: res?.name || file.name,
        type: 'software',
        size: formatSize(res?.size || file.size),
        url: res?.url || '',
        date: new Date().toLocaleDateString('ar-SA'),
        softwareId: selectedSoftwareId || undefined,
      })
      showMessage('تم رفع البرنامج بنجاح')
    } catch (err: any) {
      showMessage(err?.message || 'فشل رفع البرنامج')
    } finally {
      setUploadingFile(false)
      if (softwareInputRef.current) softwareInputRef.current.value = ''
    }
  }

  const images = files.filter((f) => f.type === 'image')
  const software = files.filter((f) => f.type === 'software')

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

      {/* Upload section */}
      <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-white font-bold">
          <Upload className="w-5 h-5 text-primary-400" />
          رفع أو إضافة ملف
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setUploadType('image')}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${uploadType === 'image'
              ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
              : 'bg-navy-950 text-slate-400 border border-white/10'
              }`}
          >
            <ImagePlus className="w-4 h-4 inline-block ml-1" />
            صورة
          </button>
          <button
            onClick={() => setUploadType('software')}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${uploadType === 'software'
              ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
              : 'bg-navy-950 text-slate-400 border border-white/10'
              }`}
          >
            <FileArchive className="w-4 h-4 inline-block ml-1" />
            برنامج
          </button>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">ربط ببرنامج (اختياري)</label>
          <select
            value={selectedSoftwareId}
            onChange={(e) => setSelectedSoftwareId(e.target.value)}
            className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
            title="اختيار البرنامج المرتبط بالملف"
          >
            <option value="">بدون ربط</option>
            {defaultSoftware.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {uploadType === 'image' && (
          <div className="space-y-3">
            <div
              onClick={() => imageInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
            >
              <ImagePlus className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">اضغط لرفع صورة من الجهاز</p>
              <p className="text-slate-600 text-xs mt-1">PNG, JPG, WebP — يُخزن كـ base64</p>
              <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} aria-label="رفع صورة" />
            </div>
            <div className="flex gap-2">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="اسم الصورة"
                className="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                aria-label="اسم الصورة"
              />
              <input
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="رابط الصورة"
                className="flex-[2] bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                aria-label="رابط الصورة"
              />
              <button onClick={handleAddUrl} className="bg-primary-600 hover:bg-primary-500 text-white px-4 rounded-lg text-sm font-medium">+</button>
            </div>
          </div>
        )}

        {uploadType === 'software' && (
          <div className="space-y-3">
            <div
              onClick={() => !uploadingFile && softwareInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
            >
              <FileArchive className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">
                {uploadingFile ? 'جاري رفع الملف...' : 'اضغط لرفع ملف البرنامج'}
              </p>
              <p className="text-slate-600 text-xs mt-1">الحد الأقصى 500MB</p>
              <input
                ref={softwareInputRef}
                type="file"
                className="hidden"
                onChange={handleSoftwareUpload}
                aria-label="رفع ملف البرنامج"
              />
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-amber-400 text-sm font-medium mb-1">ملاحظة</p>
              <p className="text-amber-200/70 text-xs leading-relaxed">
                لو الملف أكبر من 500MB ارفع الملف خارجيًا وضع رابط التحميل هنا.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="اسم البرنامج"
                className="flex-1 bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                aria-label="اسم البرنامج"
              />
              <input
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="رابط التحميل"
                className="flex-[2] bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
                aria-label="رابط التحميل"
              />
              <button onClick={handleAddUrl} className="bg-primary-600 hover:bg-primary-500 text-white px-4 rounded-lg text-sm font-medium">+</button>
            </div>
          </div>
        )}
      </div>

      {/* Images list */}
      {images.length > 0 && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-white font-bold mb-4">
            <Folder className="w-5 h-5 text-blue-400" />
            الصور ({images.length})
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {images.map((file) => (
              <div key={file.id} className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden bg-navy-800 border border-white/10">
                  <img src={file.data || file.url} alt={file.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center p-2">
                  <p className="text-white text-xs text-center truncate w-full mb-1">{file.name}</p>
                  <p className="text-slate-400 text-[10px] mb-2">{file.size}</p>
                  <button
                    onClick={() => deleteFile(file.id)}
                    className="bg-red-500/80 hover:bg-red-500 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1"
                    aria-label="حذف الصورة"
                    title="حذف"
                  >
                    <X className="w-3 h-3" /> حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Software list */}
      {software.length > 0 && (
        <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-white font-bold mb-4">
            <FileArchive className="w-5 h-5 text-emerald-400" />
            البرامج ({software.length})
          </div>
          <div className="space-y-2">
            {software.map((file) => (
              <div key={file.id} className="bg-navy-950 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{file.name}</p>
                  <p className="text-slate-500 text-xs">{file.url}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs">{file.date}</span>
                  <button
                    onClick={() => deleteFile(file.id)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                    aria-label="حذف البرنامج"
                    title="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {files.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <Folder className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>لا توجد ملفات</p>
        </div>
      )}
    </div>
  )
}
