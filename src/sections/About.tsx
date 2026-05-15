import { motion } from 'framer-motion'
import { Target, Users, Code2, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wide uppercase">About</span>
          <h2 className="heading-lg text-white mt-4 mb-4">عن الشركة</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/10 to-gold-500/5 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                    V
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">vNumera</h3>
                    <p className="text-sm text-slate-400">Software Solutions</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  شركة برمجيات متخصصة في تطوير حلول المحاسبة والإدارة للشركات السعودية.
                  نقدم برامج حقيقية تعمل على الأجهزة المحلية والسحابة مع دعم كامل للوائح
                  هيئة الزكاة والضريبة والفواتير الإلكترونية.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  منتجاتنا تخدم من المحلات التجارية الصغيرة إلى الشركات المتوسطة
                  في قطاعات التجزئة والمطاعم والخدمات والصناعة.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Target, label: 'الهدف', desc: 'تبسيط إدارة الأعمال بالتقنية' },
              { icon: Users, label: 'الفريق', desc: 'مطورون ومحاسبون متخصصون' },
              { icon: Code2, label: 'التقنية', desc: 'تطبيقات حديثة وآمنة' },
              { icon: MapPin, label: 'الموقع', desc: 'المملكة العربية السعودية' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 text-center hover:border-primary-500/30 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
