import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'
import { useI18n } from './i18n/I18nContext'

function App() {
  const { language, setLanguage, t } = useI18n()

  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      'px-4 py-2 rounded-full font-semibold transition-all',
      isActive
        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
    ].join(' ')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <div className="app-shell text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 md:py-12">
        <header className="sticky top-4 z-50 bg-white/95 backdrop-blur-md shadow-xl rounded-full px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-2 border-emerald-500/20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">🌴</span>
              <div>
                <span className="font-display text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{t.header.title}</span>
                <p className="text-xs text-emerald-700 font-semibold">{t.header.subtitle}</p>
              </div>
            </Link>
          </div>
          <nav className="flex items-center gap-2 text-sm font-semibold text-gray-700">
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
        </header>

        <Outlet />

        {/* Botón flotante de cambio de idioma */}
        <button
          onClick={toggleLanguage}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full font-bold transition-all bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl hover:from-blue-600 hover:to-purple-600 hover:scale-110 flex items-center gap-2"
          title={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
        >
          <span className="text-2xl">{language === 'es' ? '🇺🇸' : '🇪🇸'}</span>
          <span className="text-lg">{language === 'es' ? 'EN' : 'ES'}</span>
        </button>

        <footer className="mt-12 border-t-2 border-emerald-100 pt-8 bg-gradient-to-br from-emerald-50/60 to-cyan-50/60 rounded-3xl px-6 py-8 text-center md:text-left">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-3xl">🦜</span>
              <div>
                <p className="font-display text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{t.footer.title}</p>
                <p className="text-sm font-semibold text-emerald-800">{t.footer.subtitle}</p>
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
