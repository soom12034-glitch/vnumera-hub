import { motion } from 'framer-motion'
import { Download, Monitor, Cloud, ArrowLeft, Cpu, ShoppingCart, Boxes, Receipt, BarChart3, FileSpreadsheet, Building2 } from 'lucide-react'

const software = [
  {
    id: 'erp-pro',
    name: 'ERP Pro',
    icon: Cpu,
    category: 'أنظمة إدارة',
    description: 'نظام تخطيط موارد المؤسسات الشامل مع إدارة جميع الأقسام والعمليات الداخلية.',
    features: ['إدارة الموارد البشرية', 'المحاسبة المتقدمة', 'التقارير المالية', 'إدارة المشاريع'],
    platforms: ['Windows', 'Mac', 'Linux'],
    type: 'Desktop + Cloud',
    size: '245 MB',
    version: 'v3.2.1',
    featured: true,
  },
  {
    id: 'pos-smart',
    name: 'POS Smart',
    icon: ShoppingCart,
    category: 'نقاط البيع',
    description: 'نظام نقاط البيع المتقدم مع دعم جميع وسائل الدفع وبطاقات MADA والفواتير الإلكترونية.',
    features: ['دعم MADA وVisa', 'فواتير إلكترونية', 'إدارة المخزون الفوري', 'التقارير اليومية'],
    platforms: ['Windows', 'Android', 'iOS'],
    type: 'Desktop + Mobile',
    size: '128 MB',
    version: 'v2.8.0',
    featured: true,
  },
  {
    id: 'inventory-plus',
    name: 'Inventory Plus',
    icon: Boxes,
    category: 'المخزون',
    description: 'إدارة المخزون الذكية مع التنبؤات الآلية والتقارير المتقدمة لحركة المنتجات.',
    features: ['التنبؤ بالطلب', 'إدارة الموردين', 'الجرد الآلي', 'تنبيهات المخزون'],
    platforms: ['Windows', 'Web'],
    type: 'Desktop + Cloud',
    size: '89 MB',
    version: 'v2.1.5',
    featured: false,
  },
  {
    id: 'invoice-hub',
    name: 'Invoice Hub',
    icon: Receipt,
    category: 'الفواتير الإلكترونية',
    description: 'إصدار الفواتير الإلكترونية المتوافقة مع هيئة الزكاة والضريبة ZATCA بكل سهولة.',
    features: ['توافق ZATCA', 'QR Code', 'تخزين سحابي', 'تصدير XML'],
    platforms: ['Windows', 'Mac', 'Web'],
    type: 'Cloud + Desktop',
    size: '156 MB',
    version: 'v4.0.2',
    featured: true,
  },
  {
    id: 'analytics-pro',
    name: 'Analytics Pro',
    icon: BarChart3,
    category: 'التقارير',
    description: 'لوحة تحليلات متقدمة للأعمال مع رسوم بيانية تفاعلية ولوحات مخصصة.',
    features: ['لوحات تفاعلية', 'تحليلات ذكية', 'تقارير مخصصة', 'تصدير PDF/Excel'],
    platforms: ['Web', 'Windows'],
    type: 'Cloud + Desktop',
    size: '72 MB',
    version: 'v1.5.0',
    featured: false,
  },
  {
    id: 'office-suite',
    name: 'Office Suite',
    icon: FileSpreadsheet,
    category: 'أدوات مكتبية',
    description: 'حزمة تطبيقات مكتبية للمحاسبة تشمل Excel Pro وPDF Manager والتوقيع الإلكتروني.',
    features: ['Excel Pro للمحاسبة', 'PDF Manager', 'التوقيع الإلكتروني', 'قوالب جاهزة'],
    platforms: ['Windows', 'Mac'],
    type: 'Desktop',
    size: '95 MB',
    version: 'v2.0.1',
    featured: false,
  },
  {
    id: 'company-manager',
    name: 'Company Manager',
    icon: Building2,
    category: 'أنظمة إدارة',
    description: 'نظام إدارة الشركات الصغيرة والمتوسطة مع متابعة جميع الجوانب الإدارية والمالية.',
    features: ['إدارة الموظفين', 'التقرير المالي', 'المناقصات', 'إدارة العقود'],
    platforms: ['Windows', 'Web'],
    type: 'Cloud + Desktop',
    size: '180 MB',
    version: 'v3.0.0',
    featured: true,
  },
]

export default function Apps() {
  return (
    <section id="apps" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wide uppercase">Software Showcase</span>
          <h2 className="heading-lg text-white mt-4 mb-4">برامجنا المحاسبية والإدارية</h2>
          <p className="body-lg max-w-2xl mx-auto">
            مجموعة متكاملة من البرامج المتخصصة لإدارة الأعمال — من المحاسبة إلى نقاط البيع وإدارة المخزون.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {software.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-card p-6 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 ${app.featured ? 'lg:col-span-1' : ''
                }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center border border-primary-500/20 group-hover:scale-110 transition-transform duration-500">
                  <app.icon className="w-7 h-7 text-primary-400" />
                </div>
                <div className="flex items-center gap-2">
                  {app.type.includes('Cloud') && <Cloud className="w-4 h-4 text-slate-400" aria-label="Cloud" />}
                  {app.type.includes('Desktop') && <Monitor className="w-4 h-4 text-slate-400" aria-label="Desktop" />}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs text-primary-400 font-medium">{app.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary-300 transition-colors">{app.name}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{app.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {app.features.map((feature) => (
                  <span key={feature} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="text-xs text-slate-500">
                  <span>{app.version}</span> · <span>{app.size}</span>
                </div>
                <button className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium group/btn">
                  <Download className="w-4 h-4" />
                  تحميل
                  <ArrowLeft className="w-3 h-3 group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
