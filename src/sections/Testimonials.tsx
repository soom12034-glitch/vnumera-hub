import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'أحمد السليمان',
    role: 'مدير مالي',
    company: 'شركة التقنية المتقدمة',
    content: 'vNumera غيرت طريقة إدارتنا المالية بالكامل. التقارير الذكية وفواتير ZATCA المتكاملة وفرت علينا ساعات من العمل يومياً.',
    rating: 5,
  },
  {
    name: 'سارة العتيبي',
    role: 'صاحبة متجر',
    company: 'متجر الأناقة',
    content: 'نظام POS سهل الاستخدام ومتوافق مع جميع وسائل الدفع. دعم الفني ممتاز ومتجاوب دائماً. أنصح به بشدة.',
    rating: 5,
  },
  {
    name: 'محمد القحطاني',
    role: 'CEO',
    company: 'مجموعة النجاح',
    content: 'انتقلنا من ٣ أنظمة مختلفة إلى vNumera الواحد. التكامل الكامل بين المحاسبة والمخزون والمبيعات أحدث فرقاً هائلاً.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]" />
      
      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-sm font-medium mb-4">
            آراء العملاء
          </span>
          <h2 className="heading-lg text-white mb-4">
            يثقون <span className="text-gradient-gold">بنا</span> آلاف الشركات
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونجاحاتهم المستمرة معنا
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary-400 mb-6 opacity-50" />
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                {testimonial.content}
              </p>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-slate-400 text-xs">{testimonial.role} · {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
