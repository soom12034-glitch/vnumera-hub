import { motion } from 'framer-motion'
import { Download, Monitor, Cloud, FileArchive, ExternalLink } from 'lucide-react'

const downloadLinks = [
  {
    name: 'ERP Pro',
    version: 'v3.2.1',
    size: '245 MB',
    type: 'Desktop',
    platforms: [
      { name: 'Windows (64-bit)', url: '#download-erp-windows', icon: Monitor },
      { name: 'Mac OS', url: '#download-erp-mac', icon: Monitor },
      { name: 'Linux Ubuntu', url: '#download-erp-linux', icon: Monitor },
    ],
    cloud: { name: 'الوصول السحابي', url: '#cloud-erp', icon: Cloud },
  },
  {
    name: 'POS Smart',
    version: 'v2.8.0',
    size: '128 MB',
    type: 'Desktop + Mobile',
    platforms: [
      { name: 'Windows', url: '#download-pos-windows', icon: Monitor },
      { name: 'Android APK', url: '#download-pos-android', icon: Monitor },
      { name: 'iOS (App Store)', url: '#download-pos-ios', icon: Monitor },
    ],
    cloud: { name: 'الوصول السحابي', url: '#cloud-pos', icon: Cloud },
  },
  {
    name: 'Invoice Hub',
    version: 'v4.0.2',
    size: '156 MB',
    type: 'Desktop + Cloud',
    platforms: [
      { name: 'Windows', url: '#download-invoice-windows', icon: Monitor },
      { name: 'Mac OS', url: '#download-invoice-mac', icon: Monitor },
    ],
    cloud: { name: 'Web App', url: '#web-invoice', icon: Cloud },
  },
  {
    name: 'Inventory Plus',
    version: 'v2.1.5',
    size: '89 MB',
    type: 'Desktop + Cloud',
    platforms: [
      { name: 'Windows', url: '#download-inventory-windows', icon: Monitor },
      { name: 'Web', url: '#web-inventory', icon: Monitor },
    ],
    cloud: { name: 'الوصول السحابي', url: '#cloud-inventory', icon: Cloud },
  },
  {
    name: 'Analytics Pro',
    version: 'v1.5.0',
    size: '72 MB',
    type: 'Desktop + Web',
    platforms: [
      { name: 'Windows', url: '#download-analytics-windows', icon: Monitor },
      { name: 'Web', url: '#web-analytics', icon: Monitor },
    ],
    cloud: { name: 'SaaS Dashboard', url: '#saas-analytics', icon: Cloud },
  },
  {
    name: 'Office Suite',
    version: 'v2.0.1',
    size: '95 MB',
    type: 'Desktop',
    platforms: [
      { name: 'Windows', url: '#download-office-windows', icon: Monitor },
      { name: 'Mac OS', url: '#download-office-mac', icon: Monitor },
    ],
    cloud: null,
  },
]

export default function Downloads() {
  return (
    <section id="downloads" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Download Center</span>
          <h2 className="heading-lg text-white mt-4 mb-4">مركز التحميل</h2>
          <p className="body-lg max-w-2xl mx-auto">
            حمل البرامج المناسبة لنظام التشغيل الخاص بك. جميع الروابط محدثة ومباشرة.
          </p>
        </motion.div>

        <div className="space-y-4">
          {downloadLinks.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <FileArchive className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{app.name}</h3>
                    <div className="text-xs text-slate-500 mt-1">
                      {app.version} · {app.size} · {app.type}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-wrap gap-3">
                  {app.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <platform.icon className="w-4 h-4" />
                      {platform.name}
                    </a>
                  ))}
                  {app.cloud && (
                    <a
                      href={app.cloud.url}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400 hover:bg-emerald-500/20 transition-all"
                    >
                      <app.cloud.icon className="w-4 h-4" />
                      {app.cloud.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button className="btn-primary text-sm flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    تحميل
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
