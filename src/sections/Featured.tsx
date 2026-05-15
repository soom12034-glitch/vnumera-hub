import { motion } from 'framer-motion'
import { Check, Monitor, Download, ArrowLeft } from 'lucide-react'

const featuredApps = [
  {
    id: 'erp-pro',
    name: 'ERP Pro',
    tagline: 'نظام إدارة الموارد الشامل',
    description: 'نظام ERP متكامل يغطي جميع جوانب العمل من المحاسبة والموارد البشرية إلى المشاريع والمخزون. مناسب للشركات المتوسطة والكبيرة.',
    image: '/screenshots/erp-pro.jpg',
    features: [
      'محاسبة متقدمة مع دفتر الأستاذ والقيود اليومية',
      'إدارة الموارد البشرية والرواتب',
      'تخطيط المخزون والتوريد',
      'إدارة المشاريع والعملاء',
      'تقارير مالية تفاعلية',
      'توافق كامل مع معايير IFRS',
    ],
    platforms: ['Windows 10/11', 'Mac OS', 'Linux Ubuntu'],
    type: 'Desktop + Cloud Sync',
    size: '245 MB',
  },
  {
    id: 'pos-smart',
    name: 'POS Smart',
    tagline: 'نظام نقاط البيع المتقدم',
    description: 'حل شامل لنقاط البيع يدعم جميع وسائل الدفع السعودية والفواتير الإلكترونية. يعمل على الكمبيوتر والأجهزة اللوحية والهواتف.',
    image: '/screenshots/pos-smart.jpg',
    features: [
      'دعم كامل لـ MADA و Apple Pay و STC Pay',
      'فواتير إلكترونية متوافقة مع ZATCA',
      'إدارة المخزون الفوري والتنبيهات',
      'نظام ولاء وخصومات مرن',
      'تقارير المبيعات والشفتات',
      'يعمل بدون إنترنت (Offline Mode)',
    ],
    platforms: ['Windows', 'Android', 'iOS', 'Linux'],
    type: 'Desktop + Mobile + Cloud',
    size: '128 MB',
  },
]

export default function Featured() {
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
          <span className="text-gold-400 text-sm font-medium tracking-wide uppercase">Featured Software</span>
          <h2 className="heading-lg text-white mt-4 mb-4">برامجنا المميزة</h2>
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
                  <div className="relative glass-card p-2 glow-purple">
                    <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center border border-white/5">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary-400/30 mb-2">{app.name}</div>
                        <div className="text-slate-500 text-sm">Screenshot / Preview</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-right'}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    {app.type}
                  </span>
                  <span className="text-xs text-slate-500">{app.size}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{app.name}</h3>
                <p className="text-lg text-primary-400 mb-4">{app.tagline}</p>
                <p className="text-slate-400 mb-8 leading-relaxed">{app.description}</p>

                <div className="grid gap-3 mb-8">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
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
