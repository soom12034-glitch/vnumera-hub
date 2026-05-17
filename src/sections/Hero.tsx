import { motion } from 'framer-motion'
import { ArrowLeft, Monitor, Download, Layers, ShieldCheck, BadgeCheck, Sparkles } from 'lucide-react'
import heroPrimary from '../assets/marketing/hero-primary.jpg'
import heroPos from '../assets/marketing/hero-pos.jpg'
import heroDashboard from '../assets/marketing/hero-dashboard.jpg'

const highlights = [
  { label: 'برنامج', value: '٨+', desc: 'نظام محاسبي' },
  { label: 'مستخدم', value: '١٠K+', desc: 'تحميل نشط' },
  { label: 'متوافق', value: 'ZATCA', desc: 'الفاتورة الإلكترونية' },
  { label: 'يعمل', value: 'Cloud', desc: 'و Offline' },
]

const heroImages = {
  primary: heroPrimary,
  pos: heroPos,
  dashboard: heroDashboard,
}

const trustBadges = [
  {
    icon: ShieldCheck,
    title: 'متوافق مع هيئة الزكاة والضريبة والجمارك',
    subtitle: 'ZATCA e-Invoicing Ready',
  },
  {
    icon: BadgeCheck,
    title: 'منصة فاتورة إلكترونية معتمدة',
    subtitle: 'Fatoora Compliance',
  },
  {
    icon: Sparkles,
    title: 'واجهة بصرية عالية الجودة',
    subtitle: 'انطباع احترافي من أول نظرة',
  },
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
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="text-right">
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
              className="heading-xl text-slate-900 mb-6"
            >
              <span className="text-gradient">Numera</span> — برمجيات
              <br />رقمية تصنع فرقاً حقيقياً
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="body-lg mb-10 max-w-xl"
            >
              منصة تسويقية راقية للبرمجيات الرقمية: نعرض منتجاتنا بأعلى جودة تصميمية
              ونمنح العميل صورة احترافية من أول نظرة — بدون أسعار على الصفحة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-start mb-10"
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
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl"
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary-500/20 via-sky-400/15 to-emerald-400/10 rounded-[32px] blur-2xl" />
            <div className="relative rounded-[32px] overflow-hidden border border-white shadow-[0_40px_120px_-60px_rgba(14,165,233,0.7)]">
              <img
                src={heroImages.primary}
                alt="لوحة تحكم رقمية"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 right-6 w-[220px] rounded-3xl overflow-hidden border border-white bg-white shadow-xl">
              <img src={heroImages.pos} alt="واجهة نقطة بيع" className="w-full h-36 object-cover" loading="lazy" />
              <div className="px-3 py-2">
                <p className="text-xs text-slate-500">نقطة بيع عملية</p>
                <p className="text-sm font-semibold text-slate-900">واجهة POS جاهزة</p>
              </div>
            </div>
            <div className="hidden md:block absolute -top-8 left-6 w-[200px] rounded-3xl overflow-hidden border border-white bg-white shadow-xl">
              <img src={heroImages.dashboard} alt="تقارير الأعمال" className="w-full h-32 object-cover" loading="lazy" />
              <div className="px-3 py-2">
                <p className="text-xs text-slate-500">تقارير فورية</p>
                <p className="text-sm font-semibold text-slate-900">لوحات مؤشرات</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {trustBadges.map((badge) => (
            <div key={badge.title} className="glass-card p-5 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{badge.title}</p>
                <p className="text-xs text-slate-500 mt-1">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
