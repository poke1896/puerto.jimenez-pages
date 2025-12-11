import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { TideInfo } from '../components/TideInfo'
import { WeatherInfo } from '../components/WeatherInfo'

function Home() {
  const { t } = useI18n()

  return (
    <div className="space-y-12">
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-4 sm:p-6 md:p-10 lg:p-12 text-center text-white shadow-2xl animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10 space-y-2 md:space-y-3 lg:space-y-4">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-3 lg:mb-4">🌴🦜🌺</div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black drop-shadow-lg">
            {t.home.hero.title}
          </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 max-w-3xl mx-auto font-medium px-2">
            {t.home.hero.description}
          </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mt-3 md:mt-4 lg:mt-6 px-2">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold border border-white/30">{t.home.hero.badges.wildlife}</span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold border border-white/30">{t.home.hero.badges.beaches}</span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold border border-white/30">{t.home.hero.badges.ecotourism}</span>
          </div>
        </div>
      </div>

      {/* Información Clave: Clima y Mareas */}
      <div className="space-y-4 animate-fade-in-up">
        <WeatherInfo />
        <TideInfo />
      </div>

      <div className="space-y-4 md:space-y-6 animate-fade-in-up animate-delay-200">
        <div className="text-center space-y-2 px-2">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            {t.home.howToGetHere.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600">{t.home.howToGetHere.subtitle}</p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3">
          <article className="soft-card p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 border-l-4 border-orange-500 animate-fade-in-left animate-delay-300 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl text-white text-3xl shadow-lg">
                🚌
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">{t.home.howToGetHere.bus.title}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.bus.sjToPj.title}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.sjToPj.departure}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.sjToPj.arrival}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.sjToPj.price}</p>
                <p className="text-xs text-slate-500 mt-1">{t.home.howToGetHere.bus.sjToPj.note}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.bus.pjToSj.title}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.pjToSj.departure}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.pjToSj.arrival}</p>
                <p className="text-slate-600">{t.home.howToGetHere.bus.pjToSj.price}</p>
                <p className="text-xs text-slate-500 mt-1">{t.home.howToGetHere.bus.pjToSj.note}</p>
              </div>
              <p className="text-xs text-slate-500 border-t border-slate-200 pt-2">{t.home.howToGetHere.bus.footer}</p>
            </div>
          </article>

          <article className="soft-card p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 border-l-4 border-cyan-500 animate-fade-in-up animate-delay-400 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl text-white text-3xl shadow-lg">
                ⛴️
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">{t.home.howToGetHere.ferry.title}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.ferry.weekdays.title}</p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.weekdays.pjToGolfito}</strong></p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.weekdays.golfitoToPj}</strong></p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.ferry.saturday.title}</p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.saturday.pjToGolfito}</strong></p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.saturday.golfitoToPj}</strong></p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.ferry.sunday.title}</p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.sunday.pjToGolfito}</strong></p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.ferry.sunday.golfitoToPj}</strong></p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="text-slate-600">{t.home.howToGetHere.ferry.duration}</p>
                <p className="text-slate-600">{t.home.howToGetHere.ferry.price}</p>
              </div>
              <p className="text-xs text-slate-500">{t.home.howToGetHere.ferry.note}</p>
            </div>
          </article>

          <article className="soft-card rounded-2xl p-4 md:p-6 space-y-3 md:space-y-4 animate-fade-in-right animate-delay-500 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white text-3xl shadow-lg">
                ✈️
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">{t.home.howToGetHere.plane.title}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.plane.sjToPj.title}</p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.plane.sjToPj.highSeason}</strong></p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.plane.sjToPj.lowSeason}</strong></p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">{t.home.howToGetHere.plane.pjToSj.title}</p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.plane.pjToSj.highSeason}</strong></p>
                <p className="text-slate-600"><strong>{t.home.howToGetHere.plane.pjToSj.lowSeason}</strong></p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="text-slate-600">{t.home.howToGetHere.plane.duration}</p>
                <p className="text-slate-600">{t.home.howToGetHere.plane.price}</p>
              </div>
              <p className="text-xs text-slate-500">
                {t.home.howToGetHere.plane.note}{' '}
                <a 
                  href={t.home.howToGetHere.plane.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  flysansa.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        <article className="soft-card p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 animate-fade-in-left animate-delay-200">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-xl md:text-2xl shadow-lg">
              📍
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900">{t.home.usefulInfo.title}</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.climate}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.climateValue}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.avgTemp}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.avgTempValue}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.drySeason}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.drySeasonValue}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.greenSeason}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.greenSeasonValue}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.currency}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.currencyValue}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.atm}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.atmValue}</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-slate-600">{t.home.usefulInfo.emergency}</span>
              <span className="font-semibold text-slate-900">{t.home.usefulInfo.emergencyValue}</span>
            </div>
          </div>
        </article>

        <article className="soft-card p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 bg-gradient-to-br from-amber-50 to-orange-50 animate-fade-in-right animate-delay-300">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white text-xl md:text-2xl shadow-lg">
              💡
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900">{t.home.quickTips.title}</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {t.home.quickTips.tips.map((tip, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="soft-card p-4 md:p-8 lg:p-10 space-y-4 md:space-y-6 bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50 border-2 border-emerald-200 animate-scale-in animate-delay-200">
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <span className="text-2xl md:text-3xl lg:text-4xl">🌟</span>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{t.home.whyVisit.title}</h2>
        </div>
        <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {t.home.whyVisit.reasons.map((reason, index) => (
            <div key={index} className="space-y-2 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xl md:text-2xl mb-1 md:mb-2">{['🦋', '🏖️', '🤝', '🐬', '♻️', '🌳'][index]}</div>
              <h3 className="font-bold text-base md:text-lg text-emerald-700">{reason.title}</h3>
              <p className="text-sm text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mapa de Google Maps */}
      <div className="soft-card p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in-up">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg">
            📍
          </div>
          <div>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.home.howToGetHere.title === 'Cómo llegar' ? 'Ubicación' : 'Location'}
            </h2>
            <p className="text-sm md:text-base text-gray-600">Puerto Jiménez, Puntarenas, Costa Rica</p>
          </div>
        </div>
        <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7904.2!2d-83.3187!3d8.5334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa95cb9b0aa46f3%3A0x4b8e8b4b4b4b4b4b!2sPuerto%20Jim%C3%A9nez%2C%20Puntarenas!5e0!3m2!1ses!2scr!4v1734000000000!5m2!1ses!2scr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Puerto Jiménez"
          ></iframe>
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        <Link to="/turismo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group soft-card p-4 md:p-6 transition-all hover:scale-105 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
          <div className="p-2.5 md:p-3 lg:p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl text-white text-2xl md:text-3xl lg:text-4xl inline-block shadow-lg mb-3 md:mb-4">
            🏖️
          </div>
          <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{t.home.sections.tourism.title}</h3>
          <p className="mt-3 text-sm text-gray-700">{t.home.sections.tourism.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:gap-3 transition-all">
            {t.home.sections.tourism.cta}
          </span>
        </Link>
        <Link to="/servicios" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group soft-card p-4 md:p-6 transition-all hover:scale-105 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
          <div className="p-2.5 md:p-3 lg:p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl text-white text-2xl md:text-3xl lg:text-4xl inline-block shadow-lg mb-3 md:mb-4">
            🏪
          </div>
          <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{t.home.sections.services.title}</h3>
          <p className="mt-3 text-sm text-gray-700">{t.home.sections.services.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:gap-3 transition-all">
            {t.home.sections.services.cta}
          </span>
        </Link>
        <Link to="/cultura" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group soft-card p-4 md:p-6 transition-all hover:scale-105 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200">
          <div className="p-2.5 md:p-3 lg:p-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white text-2xl md:text-3xl lg:text-4xl inline-block shadow-lg mb-3 md:mb-4">
            🎭
          </div>
          <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{t.home.sections.culture.title}</h3>
          <p className="mt-3 text-sm text-gray-700">{t.home.sections.culture.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:gap-3 transition-all">
            {t.home.sections.culture.cta}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
