import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'المبتدئ',
    price: '٢٩٩',
    period: 'شهرياً',
    description: 'للشركات الصغيرة والمشاريع الناشئة',
    features: [
      'حتى ٥ مستخدمين',
      'فاتورة إلكترونية أساسية',
      'نقاط البيع POS',
      'تقارير شهرية',
      'دعم فني بالبريد',
      'تخزين سحابي ١٠ جيجا',
    ],
    popular: false,
    button: 'ابدأ الآن',
  },
  {
    name: 'المحترف',
    price: '٧٩٩',
    period: 'شهرياً',
    description: 'للشركات المتوسطة والمتنامية',
    features: [
      'حتى ٢٥ مستخدم',
      'فاتورة إلكترونية كاملة (ZATCA)',
      'نقاط البيع المتقدمة + الأجهزة',
      'إدارة المخزون والفروع',
      'تقارير ذكية بالذكاء الاصطناعي',
      'تكامل API كامل',
      'دعم فني优先 ٢٤/٧',
      'تخزين سحابي ١٠٠ جيجا',
    ],
    popular: true,
    button: 'ابدأ التجربة المجانية',
  },
  {
    name: 'المؤسسي',
    price: 'مخصص',
    period: '',
    description: 'للمؤسسات الكبرى والمجموعات',
    features: [
      'مستخدمين غير محدود',
      'حلول مخصصة بالكامل',
      'فريق نجاح مخصص',
      'تدريب على الموقع',
      'SLA مضمون 99.99%',
      'خادم خاص Private Cloud',
      'تدقيق أمني سنوي',
      'تخزين سحابي غير محدود',
    ],
    popular: false,
    button: 'تواصل معنا',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            الأسعار
          </span>
          <h2 className="heading-lg text-white mb-4">
            اختر <span className="text-gradient">الخطة</span> المناسبة لك
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            جرب مجاناً لمدة ١٤ يوم بدون بطاقة ائتمان
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary-600/20 to-primary-900/20 border-2 border-primary-500/50 glow-purple scale-105 z-10'
                  : 'glass-card hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    الأكثر شعبية
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== 'مخصص' && <span className="text-slate-400 text-lg">ر.س</span>}
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-400 text-sm">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-primary-500/30' : 'bg-white/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-400' : 'text-slate-400'}`} />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 hover:shadow-lg hover:shadow-primary-500/25'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
