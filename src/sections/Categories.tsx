import { motion } from 'framer-motion'
import { Cpu, ShoppingCart, Boxes, Receipt, BarChart3, FileSpreadsheet, Building2, Cloud } from 'lucide-react'

const categories = [
  {
    name: 'أنظمة ERP',
    icon: Cpu,
    count: 2,
    description: 'أنظمة تخطيط موارد شاملة',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'نقاط البيع',
    icon: ShoppingCart,
    count: 1,
    description: 'POS وكاشير متقدم',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    name: 'المخزون',
    icon: Boxes,
    count: 1,
    description: 'إدارة المستودعات والمنتجات',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'الفواتير الإلكترونية',
    icon: Receipt,
    count: 1,
    description: 'فواتير ZATCA معتمدة',
    color: 'from-rose-500 to-rose-700',
  },
  {
    name: 'التقارير',
    icon: BarChart3,
    count: 1,
    description: 'تحليلات ولوحات تفاعلية',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    name: 'أدوات مكتبية',
    icon: FileSpreadsheet,
    count: 1,
    description: 'حزم الإنتاجية للمحاسبين',
    color: 'from-violet-500 to-violet-700',
  },
  {
    name: 'إدارة الشركات',
    icon: Building2,
    count: 1,
    description: 'حلول SMEs المتكاملة',
    color: 'from-gold-500 to-gold-700',
  },
  {
    name: 'حلول سحابية',
    icon: Cloud,
    count: 3,
    description: 'تطبيقات Cloud وWeb',
    color: 'from-sky-500 to-sky-700',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm font-medium tracking-wide uppercase">Categories</span>
          <h2 className="heading-lg text-slate-900 mt-4 mb-4">تصنيفات البرامج</h2>
          <p className="body-lg max-w-2xl mx-auto">
            برامجنا مصنفة حسب الاستخدام لتسهيل الوصول للحل المناسب لعملك.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass-card p-6 text-center hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                <cat.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-slate-900 font-bold mb-1">{cat.name}</h3>
              <p className="text-xs text-slate-500 mb-3">{cat.description}</p>
              <span className="text-xs text-primary-600 font-medium">{cat.count} برنامج</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
