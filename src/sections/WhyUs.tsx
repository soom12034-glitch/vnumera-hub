import { motion } from 'framer-motion'
import { Brain, Server, GitBranch, Receipt, Clock, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'تقارير مدعومة بالذكاء الاصطناعي',
    description: 'تحليلات ذكية تتنبأ بالاتجاهات المالية وتساعدك في اتخاذ قرارات مستنيرة',
  },
  {
    icon: Server,
    title: 'بنية تحتية سحابية',
    description: 'خوادم عالمية المستوى مع نسخ احتياطي تلقائي وحماية على مستوى المؤسسات',
  },
  {
    icon: GitBranch,
    title: 'دعم الفروع المتعددة',
    description: 'إدارة غير محدودة للفروع والمستودعات مع مزامنة فورية للبيانات',
  },
  {
    icon: Receipt,
    title: 'الفاتورة الإلكترونية السعودية',
    description: 'متوافق بالكامل مع متطلبات هيئة الزكاة والضريبة والفاتورة الإلكترونية',
  },
  {
    icon: Clock,
    title: 'دعم فني على مدار الساعة',
    description: 'فريق دعم متخصص متواجد 24/7 لمساعدتك في أي وقت وفي أي مكان',
  },
  {
    icon: Globe,
    title: 'وصول عالمي',
    description: 'العمل من أي مكان في العالم مع تطبيقات iOS و Android المتكاملة',
  },
]

const stats = [
  { value: '+10,000', label: 'عميل نشط', suffix: '' },
  { value: '99.9', label: 'نسبة التشغيل', suffix: '%' },
  { value: '+50', label: 'تكامل API', suffix: '' },
  { value: '24/7', label: 'دعم فني', suffix: '' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-sm font-medium mb-4">
            لماذا نحن
          </span>
          <h2 className="heading-lg text-white mb-4">
            نبني <span className="text-gradient-gold">المستقبل</span> المحاسبي
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            تقنيات متقدمة وحلول مبتكرة تضعك في المقدمة
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}<span className="text-primary-400">{stat.suffix}</span>
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
