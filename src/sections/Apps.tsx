import { motion } from 'framer-motion'
import { Download, Monitor, Cloud, ArrowLeft, ShoppingCart, FileSpreadsheet, MapPin } from 'lucide-react'

const software = [
  {
    id: 'cashierpro-cloud',
    name: 'CashierPro Cloud',
    icon: Cloud,
    category: 'منصة سحابية متكاملة',
    description: 'برنامجان في برنامج واحد: قسم البيع المباشر POS وقسم الإدارة المالية المتكاملة. كل قسم له واجهة وتسجيل دخول خاص، والبيانات تصدر آلياً بين القسمين.',
    features: ['البيع المباشر + الإدارة المالية', 'واجهتان مستقلتان متزامنتان', 'فواتير إلكترونية ZATCA', 'يدعم جميع الأنظمة المالية العربية', 'عربي / إنجليزي'],
    platforms: ['Web'],
    type: 'Cloud',
    size: '-',
    version: 'v2026',
    featured: true,
  },
  {
    id: 'cashierpro-desktop',
    name: 'Cashier Pro',
    icon: ShoppingCart,
    category: 'نقاط البيع',
    description: 'نظام POS احترافي للسوبرماركت والمحلات التجارية. يدعم الباركود، طباعة الإيصالات 80mm، الضريبة 15%، ZATCA QR، والشبكات المحلية.',
    features: ['نقاط البيع بالباركود', 'طباعة إيصالات حرارية 80mm', 'فواتير إلكترونية ZATCA QR', 'درج نقدية وميزان باركود', 'شبكة محلية متعددة أجهزة', 'نظام شفتات'],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~85 MB',
    version: 'v1.0.0',
    featured: true,
  },
  {
    id: 'bluemax-pro',
    name: 'BlueMax Pro',
    icon: FileSpreadsheet,
    category: 'شهادات المعايرة',
    description: 'نظام إدارة شهادات معايرة أجهزة القياس والمختبرات. يدعم إدارة العملاء، الأجهزة، الصيانة، التاريخ، والملصقات.',
    features: ['إدارة شهادات المعايرة', 'سجل العملاء والأجهزة', 'إدارة الصيانة الدورية', 'تصميم الملصقات', 'تقارير مالية متكاملة'],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~120 MB',
    version: 'v4.7.0',
    featured: false,
  },
  {
    id: 'surveyor-pro',
    name: 'Surveyor Pro ERP',
    icon: MapPin,
    category: 'أجهزة المساحة',
    description: 'نظام ERP متخصص لمجال بيع وإيجار أجهزة المساحة والمساحين. فواتير مبيعات وشراء، إيجارات، عقود، وتقارير ضريبية.',
    features: ['فواتير مبيعات وشراء', 'نظام الإيجارات', 'سجل العملاء والعقود', 'تقارير ضريبية ومالية', 'نسخ احتياطي تلقائي'],
    platforms: ['Windows'],
    type: 'Desktop',
    size: '~75 MB',
    version: 'v3.8.0',
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
