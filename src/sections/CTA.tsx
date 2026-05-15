import { motion } from 'framer-motion'
import { ArrowLeft, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-gold-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative section-padding max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">ابدأ الآن في دقائق</span>
          </div>

          <h2 className="heading-lg text-white mb-6">
            جاهز لتطوير <span className="text-gradient">أعمالك</span>؟
          </h2>

          <p className="body-lg max-w-2xl mx-auto mb-10">
            انضم لأكثر من ١٠,٠٠٠ شركة تثق بـ vNumera. ابدأ تجربتك المجانية لمدة ١٤ يوماً
            واكتشف الفرق بنفسك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-primary flex items-center justify-center gap-2 text-lg px-10 py-5">
              ابدأ التجربة المجانية
              <ArrowLeft className="w-5 h-5" />
            </a>
            <button className="btn-secondary flex items-center justify-center gap-2 text-lg px-10 py-5">
              تحدث مع خبير
            </button>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            لا يحتاج بطاقة ائتمان · إلغاء في أي وقت · دعم فني ٢٤/٧
          </p>
        </motion.div>
      </div>
    </section>
  )
}
