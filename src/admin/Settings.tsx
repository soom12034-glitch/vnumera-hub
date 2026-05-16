import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, KeyRound, AlertTriangle, Check } from 'lucide-react'
import { loadAdmin, saveAdmin, logoutAdmin } from '../data/siteData'

export default function Settings() {
  const [creds, setCreds] = useState(loadAdmin())
  const [currentPassword, setCurrentPassword] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  const handleChangeCreds = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (currentPassword !== creds.password) {
      setError('كلمة المرور الحالية غير صحيحة')
      return
    }
    if (newPassword && newPassword !== confirmPassword) {
      setError('كلمتا المرور الجديدة غير متطابقتين')
      return
    }
    if (newPassword && newPassword.length < 6) {
      setError('كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل')
      return
    }
    const updated = {
      username: newUsername || creds.username,
      password: newPassword || creds.password,
    }
    saveAdmin(updated)
    setCreds(updated)
    setCurrentPassword('')
    setNewUsername('')
    setNewPassword('')
    setConfirmPassword('')
    showMessage('تم تحديث بيانات الدخول بنجاح')
  }

  const handleReset = () => {
    if (!confirm('هل أنت متأكد؟ سيتم مسح جميع البيانات المخزنة في المتصفح وإعادة التعيين.')) return
    localStorage.removeItem('vnumera_site_config')
    localStorage.removeItem('vnumera_files')
    logoutAdmin()
    window.location.reload()
  }

  return (
    <div className="space-y-6 max-w-xl">
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
        >
          <Check className="w-4 h-4" /> {message}
        </motion.div>
      )}

      <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-5">
        <div className="flex items-center gap-2 text-white font-bold mb-4">
          <KeyRound className="w-5 h-5 text-primary-400" />
          تغيير بيانات الدخول
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleChangeCreds} className="space-y-4">
          <div className="bg-navy-950 rounded-xl p-3">
            <p className="text-slate-500 text-xs mb-2">البيانات الحالية</p>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-slate-400 text-xs">اسم المستخدم</p>
                <p className="text-white font-medium">{creds.username}</p>
              </div>
              <div className="flex-1">
                <p className="text-slate-400 text-xs">كلمة المرور</p>
                <p className="text-white font-medium">{'•'.repeat(creds.password.length)}</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">كلمة المرور الحالية</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              title="كلمة المرور الحالية"
              className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">اسم المستخدم الجديد (اختياري)</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                title="اسم المستخدم الجديد"
                className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">كلمة المرور الجديدة (اختياري)</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                title="كلمة المرور الجديدة"
                className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
              />
            </div>
          </div>

          {newPassword && (
            <div>
              <label className="block text-xs text-slate-400 mb-1">تأكيد كلمة المرور الجديدة</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                title="تأكيد كلمة المرور الجديدة"
                className="w-full bg-navy-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <Save className="w-4 h-4" /> حفظ التغييرات
          </button>
        </form>
      </div>

      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
          <AlertTriangle className="w-5 h-5" />
          منطقة الخطر
        </div>
        <p className="text-red-300/70 text-sm mb-4">
          إعادة التعيين ستمسح جميع البيانات المخزنة في المتصفح (الإعدادات، الملفات، التعديلات) وستعيد الموقع للحالة الافتراضية.
        </p>
        <button
          onClick={handleReset}
          className="bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          إعادة تعيين كل شيء
        </button>
      </div>
    </div>
  )
}
