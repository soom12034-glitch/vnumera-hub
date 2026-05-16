import { motion } from 'framer-motion'
import { Package, FileText, Image, Users } from 'lucide-react'
import { loadConfig, loadAdmin } from '../data/siteData'

export default function Dashboard() {
  const config = loadConfig()
  const admin = loadAdmin()

  const stats = [
    { label: 'البرامج', value: config.software.length, icon: Package, color: 'from-emerald-500 to-emerald-700' },
    { label: 'اللقطات', value: config.software.reduce((sum, s) => sum + s.screenshots.length, 0), icon: Image, color: 'from-blue-500 to-blue-700' },
    { label: 'وسائل التواصل', value: config.contacts.filter(c => c.active).length + config.socials.filter(s => s.active).length, icon: Users, color: 'from-violet-500 to-violet-700' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-900/50 border border-white/10 rounded-2xl p-6"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-primary-400" />
          <h2 className="text-lg font-bold text-white">نظرة سريعة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-navy-950 rounded-xl p-4">
            <p className="text-slate-500 mb-1">اسم الشركة</p>
            <p className="text-white font-semibold">{config.company.name}</p>
          </div>
          <div className="bg-navy-950 rounded-xl p-4">
            <p className="text-slate-500 mb-1">اسم المستخدم الحالي</p>
            <p className="text-white font-semibold">{admin.username}</p>
          </div>
          <div className="bg-navy-950 rounded-xl p-4">
            <p className="text-slate-500 mb-1">البرامج المعلنة</p>
            <p className="text-white font-semibold">{config.software.length} برنامج</p>
          </div>
          <div className="bg-navy-950 rounded-xl p-4">
            <p className="text-slate-500 mb-1">وسائل التواصل النشطة</p>
            <p className="text-white font-semibold">
              {config.contacts.filter(c => c.active).length} قناة اتصال + {config.socials.filter(s => s.active).length} موقع اجتماعي
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">
        <h3 className="text-amber-400 font-semibold mb-2">ملاحظة مهمة</h3>
        <p className="text-amber-200/70 text-sm leading-relaxed">
          جميع التعديلات تُحفظ في المتصفح (localStorage). لنشر التغييرات على الموقع المباشر، يجب طلب Build و Push من المساعد.
          الصور والملفات الكبيرة لا تُرفع مباشرة — يتم تخزين روابطها فقط.
        </p>
      </div>
    </div>
  )
}
