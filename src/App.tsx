import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import { useI18n } from './i18n/I18nContext'

function App() {
  const { language, setLanguage, t } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200',
      isActive
        ? 'bg-white text-slate-950 shadow-sm'
        : 'text-slate-300 hover:bg-white/10 hover:text-white'
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
    <div className="app-shell text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 px-4 md:px-6 py-6 md:py-10 lg:py-12">
        <header className="sticky top-2 md:top-4 z-50 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:rounded-full md:px-6 md:py-4 animate-fade-in">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white text-xs font-bold tracking-[0.2em] text-slate-950">
                PJ
              </span>
              <div>
                <span className="font-display text-lg md:text-xl font-bold text-white">{t.header.title}</span>
                <p className="text-xs font-medium tracking-wide text-slate-400">{t.header.subtitle}</p>
              </div>
            </Link>
            
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-slate-200 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300">
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

        <button
          onClick={toggleLanguage}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/20 transition-transform hover:scale-[1.03] md:bottom-8 md:right-8 animate-fade-in backdrop-blur-xl"
          title={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">Lang</span>
          <span className="text-sm">{language === 'es' ? 'EN' : 'ES'}</span>
        </button>

        <footer className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-6 text-center shadow-lg shadow-black/20 backdrop-blur md:mt-12 md:px-6 md:py-8 md:text-left animate-fade-in-up">
          <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white text-xs font-bold tracking-[0.2em] text-slate-950">
                PJ
              </span>
              <div>
                <p className="font-display text-lg md:text-xl font-bold text-white">{t.footer.title}</p>
                <p className="text-xs md:text-sm font-medium text-slate-400">{t.footer.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
              <span className="pill bg-white/5 text-slate-100 border-white/10">{language === 'es' ? 'Turismo responsable' : 'Responsible tourism'}</span>
              <span className="pill bg-white/5 text-slate-100 border-white/10">{language === 'es' ? 'Guías locales certificados' : 'Certified local guides'}</span>
              <span className="pill bg-white/5 text-slate-100 border-white/10">Puerto Jimenez</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-400">
            {t.footer.rights}
          </div>
          <div className="mt-1 text-xs font-semibold text-slate-300">
            {t.footer.developedBy}{' '}
            <a 
              href="https://pokedev-ops.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              Pokedev-ops
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
