import { motion } from 'framer-motion'
import { Check, Monitor, Download, ArrowLeft, TrendingUp, DollarSign, ShoppingCart, Users, Search, Bell, Menu } from 'lucide-react'

const featuredApps = [
  {
    id: 'cashierpro-cloud',
    name: 'CashierPro Cloud',
    tagline: 'منصة محاسبية سحابية متكاملة',
    description: 'برنامجان في برنامج واحد: قسم البيع المباشر POS بسرعة البرق، وقسم الإدارة المالية المتكاملة. كل قسم له واجهة مستقلة وتسجيل دخول خاص، والبيانات تصدر آلياً بين القسمين بدون تدخل. يدعم جميع الأنظمة المالية للدول العربية والفواتير الإلكترونية ZATCA.',
    image: '/screenshots/cashierpro-cloud.jpg',
    features: [
      'قسم البيع المباشر POS + قسم الإدارة المالية في برنامج واحد',
      'واجهتان مستقلتان مع مزامنة آلية للبيانات',
      'فواتير إلكترونية متوافقة مع ZATCA وهيئة الزكاة',
      'يدعم جميع الأنظمة المالية للدول العربية',
      'يدعم اللغتين العربية والإنجليزية بالكامل',
      'يعمل على جميع الأجهزة عبر المتصفح بدون تثبيت',
    ],
    platforms: ['Web Browser (Chrome, Edge, Firefox, Safari)'],
    type: 'Cloud SaaS',
    size: '-',
  },
  {
    id: 'surveyor-pro',
    name: 'Surveyor Pro ERP',
    tagline: 'نظام ERP متخصص لأجهزة المساحة',
    description: 'نظام إدارة موارد متكامل لمجال بيع وإيجار أجهزة المساحة والمختبرات. يغطي الفواتير والإيجارات والعقود والتقارير الضريبية مع نسخ احتياطي ذكي وترخيص مرن.',
    image: '/screenshots/surveyor-pro.jpg',
    features: [
      'فواتير مبيعات وشراء مع سجل العملاء والموردين',
      'نظام إيجارات مرن لأجهزة المساحة والمختبرات',
      'عقود ومستندات مؤرشفة رقمياً',
      'تقارير ضريبية ومالية متوافقة مع الأنظمة المحلية',
      'نسخ احتياطي silent تلقائي + snapshots',
      'واجهة عربية/إنجليزية مع دعم RTL',
    ],
    platforms: ['Windows 10/11 (Electron)'],
    type: 'Desktop',
    size: '~75 MB',
  },
]

export default function Featured() {
  return (
    <section id="featured" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wide uppercase">Featured Software</span>
          <h2 className="heading-lg text-white mt-4 mb-4">برامجنا المميزة</h2>
          <p className="body-lg max-w-2xl mx-auto">
            حلول برمجية متكاملة صُممت خصيصاً للسوق السعودي مع دعم كامل للقوانين المحلية.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/10 to-gold-500/5 rounded-3xl blur-2xl" />
                  <div className="relative glass-card p-2 glow-purple overflow-hidden">
                    {app.id === 'cashierpro-cloud' ? (
                      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden border border-white/5 font-sans text-[10px] leading-tight">
                        {/* Top bar */}
                        <div className="bg-slate-800/80 border-b border-white/5 px-3 py-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Menu className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-200 font-semibold text-xs">CashierPro Cloud</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Search className="w-3 h-3 text-slate-400" />
                            <Bell className="w-3 h-3 text-slate-400" />
                            <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-[8px] text-primary-300">AD</div>
                          </div>
                        </div>
                        <div className="flex h-[calc(100%-26px)]">
                          {/* Sidebar */}
                          <div className="w-16 bg-slate-800/40 border-l border-white/5 py-2 flex flex-col items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300"><TrendingUp className="w-3.5 h-3.5" /></div>
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400"><ShoppingCart className="w-3.5 h-3.5" /></div>
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400"><Users className="w-3.5 h-3.5" /></div>
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400"><DollarSign className="w-3.5 h-3.5" /></div>
                          </div>
                          {/* Main content */}
                          <div className="flex-1 p-2 space-y-2 overflow-hidden">
                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-lg p-1.5 border border-emerald-500/10">
                                <div className="text-[8px] text-emerald-400 mb-0.5">المبيعات اليوم</div>
                                <div className="text-sm font-bold text-white">٤٥,٢٣٠ ر.س</div>
                                <div className="text-[8px] text-emerald-400/70">+١٢٪ عن الأمس</div>
                              </div>
                              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-lg p-1.5 border border-primary-500/10">
                                <div className="text-[8px] text-primary-400 mb-0.5">الفواتير</div>
                                <div className="text-sm font-bold text-white">١٢٨</div>
                                <div className="text-[8px] text-primary-400/70">٨٥ فاتورة إلكترونية</div>
                              </div>
                              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-lg p-1.5 border border-amber-500/10">
                                <div className="text-[8px] text-amber-400 mb-0.5">الزبائن</div>
                                <div className="text-sm font-bold text-white">٣٤</div>
                                <div className="text-[8px] text-amber-400/70">٧ زبائن جدد</div>
                              </div>
                            </div>
                            {/* Chart area */}
                            <div className="bg-slate-800/30 rounded-lg p-2 border border-white/5">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[8px] text-slate-300">أداء المبيعات — آخر ٧ أيام</span>
                                <span className="text-[8px] text-emerald-400">+٢٣٪</span>
                              </div>
                              <div className="flex items-end gap-1 h-10">
                                {['h-[40%]', 'h-[65%]', 'h-[45%]', 'h-[80%]', 'h-[55%]', 'h-[90%]', 'h-[70%]'].map((cls, i) => (
                                  <div key={i} className={`flex-1 bg-gradient-to-t from-primary-500/60 to-primary-400/20 rounded-t-sm ${cls}`} />
                                ))}
                              </div>
                              <div className="flex justify-between text-[7px] text-slate-500 mt-0.5">
                                <span>سبت</span><span>أحد</span><span>إثن</span><span>ثلث</span><span>أرب</span><span>خمس</span><span>جمع</span>
                              </div>
                            </div>
                            {/* Recent invoices */}
                            <div className="bg-slate-800/30 rounded-lg border border-white/5 overflow-hidden">
                              <div className="px-2 py-1 border-b border-white/5 text-[8px] text-slate-300 font-medium">آخر الفواتير</div>
                              <div className="divide-y divide-white/5">
                                {[
                                  { id: 'INV-2026-001', date: '١٦/٠٥/٢٠٢٦', amount: '١,٢٥٠ ر.س', status: 'مدفوعة' },
                                  { id: 'INV-2026-002', date: '١٦/٠٥/٢٠٢٦', amount: '٣٤٠ ر.س', status: 'مدفوعة' },
                                  { id: 'INV-2026-003', date: '١٥/٠٥/٢٠٢٦', amount: '٨٩٠ ر.س', status: 'معلقة' },
                                ].map((inv) => (
                                  <div key={inv.id} className="px-2 py-1 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                      <div className="w-4 h-4 rounded bg-primary-500/10 flex items-center justify-center text-[6px] text-primary-300">ف.م</div>
                                      <div>
                                        <div className="text-[8px] text-slate-200">{inv.id}</div>
                                        <div className="text-[7px] text-slate-500">{inv.date}</div>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-[8px] text-white font-medium">{inv.amount}</div>
                                      <div className={`text-[7px] ${inv.status === 'مدفوعة' ? 'text-emerald-400' : 'text-amber-400'}`}>{inv.status}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden border border-white/5 font-sans text-[10px] leading-tight">
                        {/* Surveyor Pro ERP mockup */}
                        <div className="bg-slate-800/80 border-b border-white/5 px-3 py-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Menu className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-200 font-semibold text-xs">Surveyor Pro ERP</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Search className="w-3 h-3 text-slate-400" />
                            <Bell className="w-3 h-3 text-slate-400" />
                          </div>
                        </div>
                        <div className="p-2 space-y-2 h-[calc(100%-26px)] overflow-hidden">
                          {/* Tabs */}
                          <div className="flex gap-1">
                            {['الفواتير', 'الإيجارات', 'العملاء', 'العقود'].map((tab, i) => (
                              <div key={tab} className={`px-2 py-0.5 rounded-md text-[8px] ${i === 0 ? 'bg-primary-500/20 text-primary-300 border border-primary-500/20' : 'text-slate-500 bg-white/5'}`}>{tab}</div>
                            ))}
                          </div>
                          {/* Invoice card */}
                          <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-lg p-2 border border-white/5">
                            <div className="flex items-center justify-between mb-1.5">
                              <div>
                                <div className="text-[8px] text-slate-400">فاتورة مبيعات — إيجار جهاز مساحة</div>
                                <div className="text-xs text-white font-bold">فاتورة رقم #SI-2026-089</div>
                              </div>
                              <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[7px] text-emerald-400">مدفوعة</div>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                              <div className="bg-white/5 rounded p-1">
                                <div className="text-[7px] text-slate-500">العميل</div>
                                <div className="text-[8px] text-white">مؤسسة الأرض للمساحة</div>
                              </div>
                              <div className="bg-white/5 rounded p-1">
                                <div className="text-[7px] text-slate-500">الجهاز</div>
                                <div className="text-[8px] text-white">جهاز GPS RTK - قناة مزدوجة</div>
                              </div>
                              <div className="bg-white/5 rounded p-1">
                                <div className="text-[7px] text-slate-500">فترة الإيجار</div>
                                <div className="text-[8px] text-white">١٥/٠٥/٢٠٢٦ — ١٥/٠٦/٢٠٢٦</div>
                              </div>
                              <div className="bg-white/5 rounded p-1">
                                <div className="text-[7px] text-slate-500">المبلغ الإجمالي</div>
                                <div className="text-[8px] text-amber-400 font-bold">٤,٥٠٠ ر.س</div>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <div className="flex-1 bg-primary-500/10 rounded p-1 text-center border border-primary-500/10">
                                <div className="text-[7px] text-primary-400">الضريبة ١٥٪</div>
                                <div className="text-[8px] text-white">٦٧٥ ر.س</div>
                              </div>
                              <div className="flex-1 bg-primary-500/10 rounded p-1 text-center border border-primary-500/10">
                                <div className="text-[7px] text-primary-400">الإجمالي مع الضريبة</div>
                                <div className="text-[8px] text-white font-bold">٥,١٧٥ ر.س</div>
                              </div>
                            </div>
                          </div>
                          {/* Rental history table */}
                          <div className="bg-slate-800/30 rounded-lg border border-white/5 overflow-hidden">
                            <div className="px-2 py-1 border-b border-white/5 text-[8px] text-slate-300 font-medium">سجل الإيجارات الأخيرة</div>
                            <div className="divide-y divide-white/5">
                              {[
                                { device: 'جهاز مساحة أرضي', client: 'شركة البناء الحديث', days: '٣٠ يوم', amount: '٣,٢٠٠ ر.س' },
                                { device: 'GPS RTK محمول', client: 'مؤسسة التخطيط', days: '١٥ يوم', amount: '٢,١٠٠ ر.س' },
                                { device: 'جهاز مساحة أرضي', client: 'مكتب الهندسة', days: '٩٠ يوم', amount: '٨,٥٠٠ ر.س' },
                              ].map((row, i) => (
                                <div key={i} className="px-2 py-1 flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-4 rounded bg-amber-500/10 flex items-center justify-center text-[6px] text-amber-300">إيج</div>
                                    <div>
                                      <div className="text-[8px] text-slate-200">{row.device}</div>
                                      <div className="text-[7px] text-slate-500">{row.client}</div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[8px] text-white">{row.amount}</div>
                                    <div className="text-[7px] text-slate-500">{row.days}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-right'}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    {app.type}
                  </span>
                  <span className="text-xs text-slate-500">{app.size}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{app.name}</h3>
                <p className="text-lg text-primary-400 mb-4">{app.tagline}</p>
                <p className="text-slate-400 mb-8 leading-relaxed">{app.description}</p>

                <div className="grid gap-3 mb-8">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-8 text-slate-500 text-sm">
                  <Monitor className="w-4 h-4" />
                  <span>{app.platforms.join(' · ')}</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    تحميل البرنامج
                  </button>
                  <button className="btn-secondary flex items-center gap-2">
                    التفاصيل
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
