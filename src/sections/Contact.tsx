import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, Clock, ExternalLink } from 'lucide-react'
import supportImage from '../assets/marketing/support.jpg'
import { loadConfig } from '../data/siteData'

const defaultChannels = [
  {
    icon: Phone,
    title: 'الدعم الفني',
    value: '9200XXXXX',
    desc: 'من السبت إلى الخميس ٩ص–٩م',
    action: 'اتصل الآن',
    href: 'tel:920000000',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: 'cashierpro-finance@cashierpro-cloud.com',
    desc: 'رد خلال ٢٤ ساعة عمل',
    action: 'إرسال بريد',
    href: 'mailto:cashierpro-finance@cashierpro-cloud.com',
  },
  {
    icon: MessageSquare,
    title: 'الواتساب',
    value: '+966 5X XXX XXXX',
    desc: 'دعم فوري عبر الرسائل',
    action: 'تواصل',
    href: 'https://wa.me/966500000000',
  },
]

export default function Contact() {
  const [channels, setChannels] = useState(defaultChannels)

  useEffect(() => {
    loadConfig().then((config) => {
      if (config?.contacts?.length) {
        const activeContacts = config.contacts.filter((item) => item.active)
        if (activeContacts.length > 0) {
          setChannels(
            activeContacts.map((item) => ({
              icon: item.icon === 'Phone' ? Phone : item.icon === 'Mail' ? Mail : MessageSquare,
              title: item.label,
              value: item.value,
              desc: 'متاح للتواصل',
              action: item.icon === 'Mail' ? 'إرسال بريد' : item.icon === 'Phone' ? 'اتصل الآن' : 'تواصل',
              href: item.href,
            }))
          )
        }
      }
    })
  }, [])

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 text-sm font-medium tracking-wide uppercase">Support</span>
          <h2 className="heading-lg text-slate-900 mt-4 mb-4">الدعم الفني والتواصل</h2>
          <p className="body-lg max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك في اختيار البرنامج المناسب وإجابة استفساراتك.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-12 items-center">
          <div className="glass-card p-6">
            <p className="text-sm text-primary-600 font-semibold mb-2">دعم متجاوب ومتاح دائماً</p>
            <h3 className="text-xl font-bold text-slate-900 mb-3">فريق خبراء يرافقك خطوة بخطوة</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              نوفر استجابة سريعة عبر الهاتف والبريد والواتساب. هدفنا تسهيل رحلتك الرقمية وضمان تشغيل الأنظمة بثقة.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="chip text-xs">استجابة سريعة</span>
              <span className="chip text-xs">خبراء محاسبة</span>
              <span className="chip text-xs">دعم عربي كامل</span>
            </div>
          </div>
          <div className="glass-card overflow-hidden">
            <img src={supportImage} alt="فريق الدعم" className="w-full h-64 object-cover" loading="lazy" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.title}
              href={channel.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 text-right block"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <channel.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-slate-900 font-bold mb-1">{channel.title}</h3>
              <p className="text-primary-600 font-medium mb-2">{channel.value}</p>
              <p className="text-slate-500 text-sm mb-4">{channel.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary-600 group-hover:text-primary-500 transition-colors">
                {channel.action}
                <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-gold-500" />
            <h3 className="text-slate-900 font-bold">ساعات العمل</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between py-3 border-b border-slate-200/70">
              <span className="text-slate-600">السبت – الأربعاء</span>
              <span className="text-slate-900">٩:٠٠ ص – ٩:٠٠ م</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-200/70">
              <span className="text-slate-600">الخميس</span>
              <span className="text-slate-900">٩:٠٠ ص – ٥:٠٠ م</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-200/70 md:col-span-2">
              <span className="text-slate-600">الجمعة</span>
              <span className="text-gold-500">إجازة</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
