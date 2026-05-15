import { motion } from 'framer-motion'
import { ArrowLeft, Play, TrendingUp, Users, Shield, Star } from 'lucide-react'

const stats = [
  { icon: Users, value: '+10,000', label: 'عميل نشط' },
  { icon: TrendingUp, value: '99.9%', label: 'نسبة التشغيل' },
  { icon: Shield, value: 'متوافق', label: 'مع الفاتورة الإلكترونية' },
  { icon: Star, value: '4.9', label: 'تقييم العملاء' },
]

const companies = ['STC Pay', 'SADAD', 'VAT', 'ZATCA', 'MADA', 'Visa']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300">النظام رقم 1 في المملكة العربية السعودية</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl text-white mb-6"
            >
              نظام محاسبي{' '}
              <span className="text-gradient">احترافي</span>{' '}
              لإدارة أعمالك باحترافية عالمية
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="body-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
              منصة متكاملة للمحاسبة، نقاط البيع، إدارة المخزون، والفواتير الإلكترونية.
              حلول ذكية تساعدك على تطوير أعمالك وزيادة أرباحك.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <a href="#pricing" className="btn-primary flex items-center justify-center gap-2">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5" />
              </a>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                مشاهدة النظام
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 text-center hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-primary-400/10 rounded-3xl blur-2xl" />

              {/* Main Dashboard Card */}
              <div className="relative glass-card p-6 glow-purple">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                      V
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">لوحة التحكم</div>
                      <div className="text-slate-400 text-xs">vNumera Pro</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'المبيعات', value: '١٢٤,٥٣٠ ر.س', change: '+١٢٪', color: 'text-emerald-400' },
                    { label: 'الطلبات', value: '٨٤٣', change: '+٨٪', color: 'text-primary-400' },
                    { label: 'العملاء', value: '٢,١٥٤', change: '+١٥٪', color: 'text-gold-400' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-xl p-3">
                      <div className="text-slate-400 text-xs mb-1">{item.label}</div>
                      <div className="text-white font-bold text-sm">{item.value}</div>
                      <div className={`text-xs ${item.color}`}>{item.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-white/5 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm font-medium">تحليل المبيعات</span>
                    <span className="text-slate-400 text-xs">آخر ٦ أشهر</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 95, 70, 85, 60, 75].map((h, i) => {
                      const heightMap: Record<number, string> = {
                        40: 'h-[40%]', 45: 'h-[45%]', 55: 'h-[55%]', 60: 'h-[60%]',
                        65: 'h-[65%]', 70: 'h-[70%]', 75: 'h-[75%]', 80: 'h-[80%]',
                        85: 'h-[85%]', 95: 'h-[95%]',
                      }
                      return (
                        <div
                          key={i}
                          className={`flex-1 bg-gradient-to-t from-primary-600/80 to-primary-400/40 rounded-t-sm transition-all duration-500 hover:from-primary-500 hover:to-primary-300 ${heightMap[h] || 'h-1/2'}`}
                        />
                      )
                    })}
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="space-y-2">
                  {[
                    { name: 'فاتورة #١٢٤٥', amount: '+٣,٢٥٠ ر.س', status: 'مكتمل', statusColor: 'bg-emerald-500/20 text-emerald-400' },
                    { name: 'فاتورة #١٢٤٤', amount: '+١,٨٠٠ ر.س', status: 'مكتمل', statusColor: 'bg-emerald-500/20 text-emerald-400' },
                    { name: 'فاتورة #١٢٤٣', amount: '+٥,٤٠٠ ر.س', status: 'قيد المعالجة', statusColor: 'bg-amber-500/20 text-amber-400' },
                  ].map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between bg-white/3 rounded-lg p-3">
                      <span className="text-white text-sm">{tx.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400 text-sm font-medium">{tx.amount}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${tx.statusColor}`}>{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 glass-card p-3 glow-gold"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">+٢٤٪</div>
                    <div className="text-slate-400 text-xs">نمو المبيعات</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">مأمن</div>
                    <div className="text-slate-400 text-xs">فاتورة إلكترونية</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-center text-slate-500 text-sm mb-8">موثوق من قبل آلاف الشركات</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {companies.map((company) => (
              <span
                key={company}
                className="text-slate-500 font-semibold text-lg opacity-50 hover:opacity-100 transition-opacity"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
