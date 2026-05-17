import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Code2, MapPin } from 'lucide-react'
import BrandLogo from '../components/BrandLogo'
import teamImage from '../assets/marketing/team-collab.jpg'
import { loadConfig } from '../data/siteData'

export default function About() {
  const [company, setCompany] = useState<any>(null)

  useEffect(() => {
    loadConfig().then((config) => setCompany(config.company))
  }, [])

  if (!company) return null
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
          <h2 className="heading-lg text-slate-900 mt-4 mb-4">عن الشركة</h2>
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
                  <BrandLogo size="sm" subtitle="Digital Business Studio" />
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  شركة برمجيات متخصصة في تطوير حلول المحاسبة والإدارة للشركات والمحلات
                  العربية. نقدم برامج حقيقية تعمل على الأجهزة المحلية والسحابة مع دعم كامل
                  للوائح هيئة الزكاة والضريبة ZATCA والفواتير الإلكترونية.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  محفظتنا تشمل CashierPro Cloud (منصة سحابية متكاملة)، Cashier Pro (نقاط بيع
                  للسوبرماركت)، و Surveyor Pro ERP (إدارة أجهزة المساحة والإيجارات).
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 glass-card overflow-hidden"
            >
              <img src={teamImage} alt="فريق العمل" className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-900">فريق متكامل يقود التحول الرقمي</p>
                <p className="text-xs text-slate-500 mt-1">تعاون بين المحاسبة والتقنية لضمان أفضل تجربة عملاء.</p>
              </div>
            </motion.div>
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
                <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                <h4 className="text-slate-900 font-bold text-sm mb-1">{item.label}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
