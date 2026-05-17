import { motion } from 'framer-motion'
import { Download, Monitor, Cloud, ArrowLeft, ShoppingCart, MapPin, Lightbulb, Mail } from 'lucide-react'

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
    id: 'custom-software',
    name: 'اطرح فكرة برنامجك',
    icon: Lightbulb,
    category: 'حلول مخصصة',
    description: 'هل تبحث عن نظام محاسبي أو إداري لا يوجد في السوق؟ نحن نحوّل فكرتك إلى برنامج متكامل — من تحليل الاحتياجات إلى التسليم. سواءً كنت تحتاج إدارة مخازن متخصصة، أو فواتير إلكترونية مخصصة، أو أي حل تقني آخر... فريقنا جاهز لتنفيذه بدقة واحترافية.',
    features: [
      'تحليل احتياجات العمل بدقة شاملة',
      'تصميم واجهات حسب طبيعة نشاطك التجاري',
      'بيئة عمل: سحابي أو محلي أو تطبيق موبايل',
      'عدد أجهزة غير محدود — حسب اتفاقية العمل',
      'استقبال بيانات شركتك وبناء النظام عليها',
      'تصميم لوجو احترافي إذا لم يكن لديك',
      'دعم فني مستمر بعد التسليم',
      'تسليم سريع ومنظم مع اختبار شامل',
    ],
    platforms: ['Web', 'Windows', 'Mobile'],
    type: 'Custom',
    size: '-',
    version: 'حسب الطلب',
    featured: false,
    isService: true,
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
          <span className="text-primary-500 text-sm font-medium tracking-wide uppercase">Software Showcase</span>
          <h2 className="heading-lg text-slate-900 mt-4 mb-4">برامجنا المحاسبية والإدارية</h2>
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
              className={`group glass-card p-6 hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 ${app.featured ? 'lg:col-span-1' : ''
                } ${app.isService ? 'hover:border-amber-500/30' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-500 ${app.isService ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/20' : 'bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/20'}`}>
                  <app.icon className={`w-7 h-7 ${app.isService ? 'text-amber-500' : 'text-primary-500'}`} />
                </div>
                <div className="flex items-center gap-2">
                  {app.isService && <span className="text-[10px] text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full">خدمة</span>}
                  {app.type.includes('Cloud') && <Cloud className="w-4 h-4 text-slate-500" aria-label="Cloud" />}
                  {app.type.includes('Desktop') && <Monitor className="w-4 h-4 text-slate-500" aria-label="Desktop" />}
                </div>
              </div>

              <div className="mb-4">
                <span className={`text-xs font-medium ${app.isService ? 'text-amber-500' : 'text-primary-500'}`}>{app.category}</span>
                <h3 className={`text-xl font-bold mt-1 transition-colors ${app.isService ? 'text-slate-900 group-hover:text-amber-500' : 'text-slate-900 group-hover:text-primary-600'}`}>{app.name}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{app.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {app.features.map((feature) => (
                  <span key={feature} className="text-xs px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  <span>{app.version}</span>
                </div>
                {app.isService ? (
                  <a
                    href="mailto:cashierpro-finance@cashierpro-cloud.com?subject=استفسار%20عن%20تطوير%20برنامج%20مخصص"
                    className="flex items-center gap-3 text-sm text-amber-500 hover:text-amber-600 transition-colors font-medium group/btn"
                  >
                    <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 group-hover/btn:scale-110 group-hover/btn:-translate-y-0.5 transition-all duration-300">
                      <Mail className="w-4 h-4 text-white" />
                    </span>
                    تواصل معنا
                    <ArrowLeft className="w-3 h-3 group-hover/btn:-translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-500 transition-colors font-medium group/btn">
                    <Download className="w-4 h-4" />
                    تحميل
                    <ArrowLeft className="w-3 h-3 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
