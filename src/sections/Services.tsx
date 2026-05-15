import { motion } from 'framer-motion'
import { Calculator, CreditCard, Package, BarChart3, FileText, LineChart, Users, Cloud } from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'المحاسبة المتكاملة',
    description: 'نظام محاسبي ذكي يدعم جميع العمليات المالية والتقارير المحاسبية المعقدة',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: CreditCard,
    title: 'نقاط البيع POS',
    description: 'حلول نقاط بيع متقدمة تعمل على أي جهاز مع دعم كامل للدفع الإلكتروني',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Package,
    title: 'إدارة المخزون',
    description: 'تحكم كامل في المخزون مع التنبيهات الذكية وإدارة المستودعات المتعددة',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: BarChart3,
    title: 'ERP متكامل',
    description: 'نظام تخطيط موارد المؤسسات الشامل لإدارة جميع أقسام شركتك',
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: FileText,
    title: 'الفواتير الإلكترونية',
    description: 'فواتير متوافقة مع هيئة الزكاة والضريبة والفاتورة الإلكترونية السعودية',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: LineChart,
    title: 'التقارير الذكية',
    description: 'تقارير تحليلية متقدمة مع ذكاء اصطناعي لاتخاذ قرارات أفضل',
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: Users,
    title: 'إدارة العملاء',
    description: 'CRM متكامل لإدارة علاقات العملاء وتتبع المبيعات والولاء',
    color: 'from-pink-500 to-pink-700',
  },
  {
    icon: Cloud,
    title: 'التطبيقات السحابية',
    description: 'وصول آمن من أي مكان وفي أي وقت مع مزامنة تلقائية للبيانات',
    color: 'from-sky-500 to-sky-700',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            خدماتنا
          </span>
          <h2 className="heading-lg text-white mb-4">
            حلول <span className="text-gradient">متكاملة</span> لأعمالك
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة أعمالك بكفاءة في منصة واحدة موحدة
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-6 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
