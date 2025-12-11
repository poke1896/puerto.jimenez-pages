import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      'px-4 py-2 rounded-full font-semibold transition-all',
      isActive
        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
    ].join(' ')

  return (
    <div className="app-shell text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 md:py-12">
        <header className="sticky top-4 z-50 bg-white/95 backdrop-blur-md shadow-xl rounded-full px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-2 border-emerald-500/20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">🌴</span>
              <div>
                <span className="font-display text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Puerto Jiménez</span>
                <p className="text-xs text-emerald-700 font-semibold">Península de Osa · Costa Rica</p>
              </div>
            </Link>
          </div>
          <nav className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <NavLink to="/" className={navClass} end>
              Inicio
            </NavLink>
            <NavLink to="/turismo" className={navClass}>
              Turismo
            </NavLink>
            <NavLink to="/servicios" className={navClass}>
              Servicios
            </NavLink>
            <NavLink to="/cultura" className={navClass}>
              Cultura
            </NavLink>
          </nav>
        </header>

        <Outlet />

        <footer className="mt-12 border-t-2 border-emerald-100 pt-8 bg-gradient-to-br from-emerald-50/60 to-cyan-50/60 rounded-3xl px-6 py-8 text-center md:text-left">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-3xl">🦜</span>
              <div>
                <p className="font-display text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Puerto Jiménez</p>
                <p className="text-sm font-semibold text-emerald-800">Corcovado • Golfo Dulce • Cultura local</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">Turismo responsable</span>
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">Guías locales certificados</span>
              <span className="pill bg-white/70 text-emerald-800 border-emerald-200">Pura Vida 🤙</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">© 2025 Puerto Jiménez. Biodiversidad y comunidad.</div>
        </footer>
      </div>
    </div>
  )
}

export default App
