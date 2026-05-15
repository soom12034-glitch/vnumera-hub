import { motion } from 'framer-motion'
import { Monitor, Smartphone, TrendingUp, DollarSign, ShoppingCart, BarChart2 } from 'lucide-react'

const tabs = [
  { id: 'analytics', label: 'تحليلات', icon: TrendingUp },
  { id: 'sales', label: 'المبيعات', icon: DollarSign },
  { id: 'invoices', label: 'الفواتير', icon: ShoppingCart },
  { id: 'reports', label: 'التقارير', icon: BarChart2 },
]

const dashboardData = {
  analytics: {
    title: 'تحليلات المبيعات المتقدمة',
    description: 'رؤية شاملة لأداء أعمالك مع تنبؤات ذكية',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-white">٢٤٥,٨٠٠ ر.س</div>
            <div className="text-emerald-400 text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +١٨.٥٪ مقارنة بالشهر الماضي
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs">أسبوعي</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs">شهري</span>
          </div>
        </div>
        <div className="flex items-end gap-2 h-32">
          {[45, 60, 55, 80, 70, 95, 85, 100, 75, 90, 65, 88].map((h, i) => {
            const heightMap: Record<number, string> = {
              45: 'h-[45%]', 55: 'h-[55%]', 60: 'h-[60%]', 65: 'h-[65%]',
              70: 'h-[70%]', 75: 'h-[75%]', 80: 'h-[80%]', 85: 'h-[85%]',
              88: 'h-[88%]', 90: 'h-[90%]', 95: 'h-[95%]', 100: 'h-[100%]',
            }
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full bg-gradient-to-t from-primary-600 to-primary-400/60 rounded-t-lg transition-all duration-500 ${heightMap[h] || 'h-1/2'}`}
                />
              </div>
            )
          })}
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          {['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    ),
  },
  sales: {
    title: 'إدارة المبيعات',
    description: 'تتبع كل عملية بيع مع تفاصيل كاملة',
    content: (
      <div className="space-y-3">
        {[
          { product: 'نظام ERP Pro', qty: '١٢٤', amount: '٤٩,٦٠٠ ر.س', status: 'مكتمل' },
          { product: 'POS متقدم', qty: '٨٩', amount: '٢٦,٧٠٠ ر.س', status: 'مكتمل' },
          { product: 'حلول المحاسبة', qty: '٢١٠', amount: '٣١,٥٠٠ ر.س', status: 'قيد التنفيذ' },
          { product: 'إدارة المخزون', qty: '٥٦', amount: '١٦,٨٠٠ ر.س', status: 'مكتمل' },
        ].map((sale) => (
          <div key={sale.product} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">{sale.product}</div>
                <div className="text-slate-400 text-xs">{sale.qty} وحدة</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">{sale.amount}</div>
              <div className={`text-xs ${sale.status === 'مكتمل' ? 'text-emerald-400' : 'text-amber-400'}`}>
                {sale.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  invoices: {
    title: 'الفواتير الإلكترونية',
    description: 'فواتير متوافقة مع هيئة الزكاة والضريبة',
    content: (
      <div className="space-y-3">
        {[
          { id: 'INV-2024-001', client: 'شركة التقنية المتقدمة', amount: '١٢,٥٠٠ ر.س', date: '٢٠٢٤/٠٥/١٥', status: 'مسددة' },
          { id: 'INV-2024-002', client: 'مؤسسة الأمل', amount: '٨,٩٠٠ ر.س', date: '٢٠٢٤/٠٥/١٤', status: 'مسددة' },
          { id: 'INV-2024-003', client: 'مجموعة النجاح', amount: '١٥,٢٠٠ ر.س', date: '٢٠٢٤/٠٥/١٣', status: 'معلقة' },
          { id: 'INV-2024-004', client: 'شركة المستقبل', amount: '٢٢,٨٠٠ ر.س', date: '٢٠٢٤/٠٥/١٢', status: 'مسددة' },
        ].map((inv) => (
          <div key={inv.id} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">{inv.id}</div>
                <div className="text-slate-400 text-xs">{inv.client}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">{inv.amount}</div>
              <div className="text-slate-400 text-xs">{inv.date}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  reports: {
    title: 'التقارير الذكية',
    description: 'تقارير تحليلية متقدمة لأداء أعمالك',
    content: (
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: 'الإيرادات', value: '٢٤٥,٨٠٠ ر.س', change: '+١٨٪', color: 'text-emerald-400' },
          { title: 'المصروفات', value: '١٢٨,٣٠٠ ر.س', change: '+٥٪', color: 'text-rose-400' },
          { title: 'صافي الربح', value: '١١٧,٥٠٠ ر.س', change: '+٢٢٪', color: 'text-emerald-400' },
          { title: 'العملاء الجدد', value: '٣٤٥', change: '+١٥٪', color: 'text-primary-400' },
        ].map((report) => (
          <div key={report.title} className="bg-white/5 rounded-xl p-4">
            <div className="text-slate-400 text-xs mb-2">{report.title}</div>
            <div className="text-white text-lg font-bold">{report.value}</div>
            <div className={`text-xs ${report.color}`}>{report.change}</div>
          </div>
        ))}
        <div className="col-span-2 bg-white/5 rounded-xl p-4">
          <div className="text-slate-400 text-xs mb-3">توزيع المبيعات حسب الفئة</div>
          <div className="space-y-2">
            {[
              { label: 'المنتجات', value: 65, color: 'bg-primary-500' },
              { label: 'الخدمات', value: 25, color: 'bg-gold-500' },
              { label: 'الاشتراكات', value: 10, color: 'bg-emerald-500' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-slate-400 text-xs w-20">{item.label}</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full w-[${item.value}%]`} />
                </div>
                <span className="text-white text-xs font-medium w-10 text-left">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('analytics')

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            جولة في النظام
          </span>
          <h2 className="heading-lg text-white mb-4">
            نظام <span className="text-gradient">واقعي</span> يعمل الآن
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            واجهة مستخدم حديثة وبديهية صممت خصيصاً للمحترفين
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6 glow-purple">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {dashboardData[activeTab as keyof typeof dashboardData].content}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {dashboardData[activeTab as keyof typeof dashboardData].title}
                  </h3>
                </div>
                <p className="body-base">
                  {dashboardData[activeTab as keyof typeof dashboardData].description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">تطبيق متكامل</h4>
                  <p className="text-slate-400 text-sm">متاح على iOS و Android مع مزامنة فورية</p>
                </div>
              </div>

              <a href="#pricing" className="btn-primary inline-flex items-center gap-2">
                ابدأ التجربة المجانية
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
