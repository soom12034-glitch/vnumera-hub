import { useEffect, useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Package,
  FileText,
  FolderOpen,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react'
import { checkAuth, logoutAdmin } from '../data/siteData'

const navItems = [
  { path: '/admin/dashboard', label: 'الرئيسية', icon: LayoutDashboard },
  { path: '/admin/software', label: 'البرامج', icon: Package },
  { path: '/admin/content', label: 'المحتوى', icon: FileText },
  { path: '/admin/files', label: 'الملفات', icon: FolderOpen },
  { path: '/admin/settings', label: 'الإعدادات', icon: Settings },
]

export default function AdminLayout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!checkAuth()) {
      window.location.href = '/admin'
    }
  }, [])

  const handleLogout = () => {
    logoutAdmin()
    window.location.href = '/admin'
  }

  return (
    <div className="min-h-screen bg-navy-950 text-white" dir="rtl">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 bg-navy-900 border-l border-white/10 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 ${sidebarOpen ? 'w-64' : 'w-20'} hidden lg:block`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                  V
                </div>
                <span className="font-bold text-lg">لوحة التحكم</span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-400 hover:text-white p-1"
              title="توسيع/طي القائمة"
              aria-label="توسيع/طي القائمة"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${!sidebarOpen && 'rotate-180'}`} />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive
                      ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          <div className="p-3 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-3 w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="text-sm font-medium">خروج</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 bg-navy-900 border-l border-white/10 w-64 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                V
              </div>
              <span className="font-bold text-lg">لوحة التحكم</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-slate-400" title="إغلاق القائمة" aria-label="إغلاق القائمة">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive
                      ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="p-3 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-3 w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">خروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:mr-64' : 'lg:mr-20'}`}>
        <header className="sticky top-0 z-30 bg-navy-950/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
              title="فتح القائمة"
              aria-label="فتح القائمة"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold">
              {navItems.find((n) => n.path === location.pathname)?.label || 'لوحة التحكم'}
            </h1>
            <div className="w-8" />
          </div>
        </header>
        <main className="p-6">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  )
}
