import { Globe, MessageCircle, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'المحاسبة', href: '#services' },
    { label: 'نقاط البيع', href: '#services' },
    { label: 'إدارة المخزون', href: '#services' },
    { label: 'التقارير', href: '#dashboard' },
    { label: 'التسعير', href: '#pricing' },
  ],
  company: [
    { label: 'من نحن', href: '#' },
    { label: 'المدونة', href: '#' },
    { label: 'الوظائف', href: '#' },
    { label: 'اتصل بنا', href: '#contact' },
  ],
  resources: [
    { label: 'مركز المساعدة', href: '#' },
    { label: 'التوثيق', href: '#' },
    { label: 'واجهة API', href: '#' },
    { label: 'حالة النظام', href: '#' },
  ],
  legal: [
    { label: 'سياسة الخصوصية', href: '#' },
    { label: 'شروط الاستخدام', href: '#' },
    { label: 'اتفاقية SLA', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold text-white">Numerav</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              منصة متكاملة للمحاسبة والأعمال. حلول ذكية للشركات في المملكة العربية السعودية والعالم.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, title: 'الموقع' },
                { Icon: MessageCircle, title: 'التواصل' },
                { Icon: ExternalLink, title: 'روابط' },
              ].map(({ Icon, title }, i) => (
                <a
                  key={i}
                  href="#"
                  title={title}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">المنتج</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">الموارد</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">قانوني</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 mb-12 py-8 border-y border-white/5">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Mail className="w-4 h-4" />
            <span>cashierpro-finance@cashierpro-cloud.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Phone className="w-4 h-4" />
            <span dir="ltr">+966 50 000 0000</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 vNumerav. جميع الحقوق محفوظة.
          </p>
          <p className="text-slate-600 text-xs">
            صنع بإتقان في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  )
}
