import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Monitor, Download, ArrowLeft } from 'lucide-react'
import posImage from '../assets/marketing/hero-pos.jpg'
import analyticsImage from '../assets/marketing/featured-analytics.jpg'
import { loadConfig } from '../data/siteData'

const defaultFeaturedApps = [
  {
    id: 'cashierpro-cloud',
    name: 'CashierPro Cloud',
    tagline: 'منصة محاسبية سحابية متكاملة',
    description: 'برنامجان في برنامج واحد: قسم البيع المباشر POS بسرعة البرق، وقسم الإدارة المالية المتكاملة. كل قسم له واجهة مستقلة وتسجيل دخول خاص، والبيانات تصدر آلياً بين القسمين بدون تدخل. يدعم جميع الأنظمة المالية للدول العربية والفواتير الإلكترونية ZATCA.',
    image: posImage,
    features: [
      'قسم البيع المباشر POS + قسم الإدارة المالية في برنامج واحد',
      'واجهتان مستقلتان مع مزامنة آلية للبيانات',
      'فواتير إلكترونية متوافقة مع ZATCA وهيئة الزكاة',
      'يدعم جميع الأنظمة المالية للدول العربية',
      'يدعم اللغتين العربية والإنجليزية بالكامل',
      'يعمل على جميع الأجهزة عبر المتصفح بدون تثبيت',
    ],
    platforms: ['Web Browser (Chrome, Edge, Firefox, Safari)'],
    type: 'Cloud SaaS',
    size: '-',
  },
  {
    id: 'surveyor-pro',
    name: 'Surveyor Pro ERP',
    tagline: 'نظام ERP متخصص لأجهزة المساحة',
    description: 'نظام إدارة موارد متكامل لمجال بيع وإيجار أجهزة المساحة والمختبرات. يغطي الفواتير والإيجارات والعقود والتقارير الضريبية مع نسخ احتياطي ذكي وترخيص مرن.',
    image: analyticsImage,
    features: [
      'فواتير مبيعات وشراء متكاملة',
      'نظام الإيجارات والعقود',
      'سجل العملاء والموردين',
      'تقارير ضريبية ومالية شاملة',
      'نسخ احتياطي تلقائي',
      'ترخيص مرن حسب الحاجة',
    ],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~75 MB',
  },
]

export default function Featured() {
  const [featuredApps, setFeaturedApps] = useState(defaultFeaturedApps)

  useEffect(() => {
    loadConfig().then((config) => {
      const featured = config.software.filter((s: any) => s.featured)
      if (featured.length > 0) {
        setFeaturedApps(featured.map((s: any) => ({
          id: s.id,
          name: s.name,
          tagline: s.category,
          description: s.description,
          image: s.screenshots[0] || posImage,
          features: s.features,
          platforms: s.platforms,
          type: s.type,
          size: s.size,
        })))
      }
    })
  }, [])

  return (
    <section id="featured" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-medium tracking-wide uppercase">Featured Software</span>
          <h2 className="heading-lg text-slate-900 mt-4 mb-4">برامجنا المميزة</h2>
          <p className="body-lg max-w-2xl mx-auto">
            حلول برمجية متكاملة صُممت خصيصاً للسوق السعودي مع دعم كامل للقوانين المحلية.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/10 to-gold-500/5 rounded-3xl blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)]">
                    <img
                      src={app.image}
                      alt={`واجهة ${app.name}`}
                      className="w-full h-[340px] sm:h-[380px] lg:h-[420px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 left-4 glass-card p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500">واجهة حقيقية</p>
                          <p className="text-sm font-semibold text-slate-900">{app.tagline}</p>
                        </div>
                        <span className="chip text-xs">عرض مباشر</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute -bottom-8 left-6 bg-white rounded-2xl border border-slate-200 shadow-lg px-4 py-3 gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-600 font-bold">24/7</div>
                    <div>
                      <p className="text-xs text-slate-500">تشغيل مستمر</p>
                      <p className="text-sm font-semibold text-slate-900">خدمة عملاء مباشرة</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-right'}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/15 text-primary-600 border border-primary-500/30">
                    {app.type}
                  </span>
                  <span className="text-xs text-slate-500">{app.size}</span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-2">{app.name}</h3>
                <p className="text-lg text-primary-600 mb-4">{app.tagline}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{app.description}</p>

                <div className="grid gap-3 mb-8">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-8 text-slate-500 text-sm">
                  <Monitor className="w-4 h-4" />
                  <span>{app.platforms.join(' · ')}</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    تحميل البرنامج
                  </button>
                  <button className="btn-secondary flex items-center gap-2">
                    التفاصيل
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
