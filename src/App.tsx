import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import { useI18n } from './i18n/I18nContext'

function App() {
  const { language, setLanguage, t } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      'px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold transition-all',
      isActive
        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
    ].join(' ')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 px-4 md:px-6 py-6 md:py-10 lg:py-12">
        <header className="sticky top-2 md:top-4 z-50 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl md:rounded-full px-4 md:px-8 py-3 md:py-4 border-2 border-emerald-500/20 animate-fade-in">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <span className="text-2xl md:text-3xl">🌴</span>
              <div>
                <span className="font-display text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{t.header.title}</span>
                <p className="text-xs text-emerald-700 font-semibold">{t.header.subtitle}</p>
              </div>
            </Link>
            
            {/* Botón hamburguesa - solo visible en móvil */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-emerald-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-emerald-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-emerald-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            {/* Navegación desktop - siempre visible en md+ */}
            <nav className="hidden md:flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold text-gray-700">
              <NavLink to="/" className={navClass} end>
                {t.header.nav.home}
              </NavLink>
              <NavLink to="/turismo" className={navClass}>
                {t.header.nav.tourism}
              </NavLink>
              <NavLink to="/servicios" className={navClass}>
                {t.header.nav.services}
              </NavLink>
              <NavLink to="/cultura" className={navClass}>
                {t.header.nav.culture}
              </NavLink>
            </nav>
          </div>

          {/* Navegación móvil - desplegable */}
          <nav className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-2 py-2">
              <NavLink to="/" className={navClass} end onClick={closeMenu}>
                {t.header.nav.home}
              </NavLink>
              <NavLink to="/turismo" className={navClass} onClick={closeMenu}>
                {t.header.nav.tourism}
              </NavLink>
              <NavLink to="/servicios" className={navClass} onClick={closeMenu}>
                {t.header.nav.services}
              </NavLink>
              <NavLink to="/cultura" className={navClass} onClick={closeMenu}>
                {t.header.nav.culture}
              </NavLink>
            </div>
          </nav>
        </header>

        <Outlet />

        {/* Botón flotante de cambio de idioma */}
        <button
          onClick={toggleLanguage}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-full font-bold transition-all bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl hover:from-blue-600 hover:to-purple-600 hover:scale-110 flex items-center gap-1.5 md:gap-2 animate-bounce-subtle animate-fade-in"
          title={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
        >
          <span className="text-xl md:text-2xl">{language === 'es' ? '🇺🇸' : '🇪🇸'}</span>
          <span className="text-base md:text-lg">{language === 'es' ? 'EN' : 'ES'}</span>
        </button>

        <footer className="mt-6 md:mt-12 border-t-2 border-emerald-100 pt-6 md:pt-8 bg-gradient-to-br from-emerald-50/60 to-cyan-50/60 rounded-2xl md:rounded-3xl px-4 md:px-6 py-6 md:py-8 text-center md:text-left animate-fade-in-up">
          <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
              <span className="text-2xl md:text-3xl">🦜</span>
              <div>
                <p className="font-display text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{t.footer.title}</p>
                <p className="text-xs md:text-sm font-semibold text-emerald-800">{t.footer.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">{language === 'es' ? 'Turismo responsable' : 'Responsible tourism'}</span>
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">{language === 'es' ? 'Guías locales certificados' : 'Certified local guides'}</span>
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">Pura Vida 🤙</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">{t.footer.rights}</div>
        </footer>
      </div>
    </div>
  )
}

export default App
