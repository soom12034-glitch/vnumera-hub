import { motion } from 'framer-motion'
import { ArrowLeft, Monitor, Download, Layers } from 'lucide-react'

const highlights = [
  { label: 'برنامج', value: '٨+', desc: 'نظام محاسبي' },
  { label: 'مستخدم', value: '١٠K+', desc: 'تحميل نشط' },
  { label: 'متوافق', value: 'ZATCA', desc: 'الفاتورة الإلكترونية' },
  { label: 'يعمل', value: 'Cloud', desc: 'و Offline' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.12] grid-pattern" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm"
          >
            <Layers className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-slate-600">استوديو حلول رقمية للشركات الطموحة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl text-slate-900 mb-6 max-w-4xl mx-auto"
          >
            <span className="text-gradient">Numera</span> — برمجيات
            <br />رقمية تصنع فرقاً حقيقياً
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="body-lg mb-10 max-w-2xl mx-auto"
          >
            منصة تسويقية راقية للبرمجيات الرقمية: نعرض منتجاتنا بأعلى جودة تصميمية
            ونمنح العميل صورة احترافية من أول نظرة — بدون أسعار على الصفحة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <a href="#apps" className="btn-primary flex items-center justify-center gap-2">
              استكشف البرامج
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="#downloads" className="btn-secondary flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              مركز التحميل
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-5 text-center hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Monitor className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
