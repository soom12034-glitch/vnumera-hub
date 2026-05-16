import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import Hero from './sections/Hero'
import Apps from './sections/Apps'
import Featured from './sections/Featured'
import Downloads from './sections/Downloads'
import Categories from './sections/Categories'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#apps', label: 'البرامج' },
    { href: '#featured', label: 'المميز' },
    { href: '#downloads', label: 'التحميل' },
    { href: '#categories', label: 'التصنيفات' },
    { href: '#about', label: 'عن الشركة' },
    { href: '#contact', label: 'الدعم' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
          }`}
      >
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
                V
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white">Numera</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#downloads"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl text-sm hover:from-primary-500 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
              >
                تحميل البرامج
              </a>
              <Link
                to="/admin"
                className="text-slate-500 hover:text-white text-xs transition-colors"
                aria-label="لوحة التحكم"
                title="لوحة التحكم"
              >
                ⚙
              </Link>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="فتح القائمة"
              title="فتح القائمة"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-padding pt-6">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                    V
                  </div>
                  <span className="text-2xl font-bold text-white">Numera</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="إغلاق القائمة" title="إغلاق القائمة">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-white hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#downloads"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 btn-primary text-center"
                >
                  تحميل البرامج
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 hover:bg-primary-500 transition-all"
          aria-label="العودة للأعلى"
          title="العودة للأعلى"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function MainSite() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <Apps />
        <Featured />
        <Downloads />
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
