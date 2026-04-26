import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { TideInfo } from '../components/TideInfo'
import { WeatherInfo } from '../components/WeatherInfo'

type TourOperatorKey = 'jaguar' | 'guia' | 'sirena'

const TOUR_OPERATORS: { key: TourOperatorKey; name: string; url: string; imageUrl: string; locationEs: string; locationEn: string }[] = [
  {
    key: 'jaguar',
    name: 'Jaguar Corcovado Tours',
    url: 'https://www.jaguarcorcovadotourscr.com/',
    imageUrl: 'https://www.jaguarcorcovadotourscr.com/_next/image?url=%2Fimage%2Fportada%2F2.webp&w=1920&q=75',
    locationEs: 'Parque Nacional Corcovado',
    locationEn: 'Corcovado National Park'
  },
  {
    key: 'guia',
    name: 'Corcovado Guia CR',
    url: 'https://www.corcovadoguiacr.com/',
    imageUrl: 'https://www.corcovadoguiacr.com/image/aventura/nocturno.webp',
    locationEs: 'Selva Tropical · Osa',
    locationEn: 'Tropical Rainforest · Osa'
  },
  {
    key: 'sirena',
    name: 'Sirena Day Tour',
    url: 'https://sirenadaytour.com/',
    imageUrl: 'https://www.sirenadaytour.com/wp-content/uploads/2025/11/Rodolfo_Fishing.jpg',
    locationEs: 'Golfo Dulce · Pesca deportiva',
    locationEn: 'Golfo Dulce · Sport Fishing'
  }
]

const EXCHANGE_RATE_CACHE_KEY = 'pj_usd_crc_rate_v1'
const EXCHANGE_RATE_CACHE_TTL_MS = 12 * 60 * 60 * 1000

function Home() {
  const { t, language } = useI18n()
  const [usdToCrcRate, setUsdToCrcRate] = useState<number | null>(null)

  useEffect(() => {
    const readCachedRate = (): number | null => {
      try {
        const raw = localStorage.getItem(EXCHANGE_RATE_CACHE_KEY)
        if (!raw) return null
        const parsed = JSON.parse(raw) as { rate: number; cachedAt: number }
        if (typeof parsed.rate !== 'number' || typeof parsed.cachedAt !== 'number') return null
        if (Date.now() - parsed.cachedAt > EXCHANGE_RATE_CACHE_TTL_MS) return null
        return parsed.rate
      } catch {
        return null
      }
    }

    const writeCachedRate = (rate: number) => {
      try {
        localStorage.setItem(EXCHANGE_RATE_CACHE_KEY, JSON.stringify({ rate, cachedAt: Date.now() }))
      } catch { /* ignore */ }
    }

    const cachedRate = readCachedRate()
    if (cachedRate) { setUsdToCrcRate(cachedRate); return }

    const fetchRate = async () => {
      try {
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=CRC')
        if (!response.ok) throw new Error('Exchange rate request failed')
        const data = await response.json() as { rates?: { CRC?: number } }
        const rate = data?.rates?.CRC
        if (typeof rate === 'number' && Number.isFinite(rate)) {
          setUsdToCrcRate(rate)
          writeCachedRate(rate)
        }
      } catch (err) {
        console.error('No se pudo cargar tipo de cambio USD/CRC', err)
      }
    }
    fetchRate()
  }, [])

  const formattedExchangeRate =
    usdToCrcRate !== null
      ? new Intl.NumberFormat(language === 'es' ? 'es-CR' : 'en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(usdToCrcRate)
      : null

  const stats =
    language === 'es'
      ? [
          { value: '2.5%', label: 'Biodiversidad mundial' },
          { value: '21+', label: 'Playas vírgenes' },
          { value: '500+', label: 'Especies de aves' },
          { value: '5.0', label: 'Calificación promedio' }
        ]
      : [
          { value: '2.5%', label: 'World Biodiversity' },
          { value: '21+', label: 'Virgin Beaches' },
          { value: '500+', label: 'Bird Species' },
          { value: '5.0', label: 'Average Rating' }
        ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative left-1/2 isolate -mt-[8.5rem] min-h-screen w-screen -translate-x-1/2 overflow-hidden md:-mt-[9.5rem] lg:-mt-[10.5rem]">
        <img
          src="/image/pj.webp"
          alt="Puerto Jiménez"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />

        {/* Centered hero content */}
        <div className="relative z-10 flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center px-6 pb-56 pt-44 text-center sm:pb-52 md:pt-52">
          <span className="eyebrow mb-6">{t.header.subtitle}</span>

          <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {language === 'es'
              ? 'Naturaleza pura y encanto cultural'
              : 'Extraordinary nature and cultural charm'}
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg md:text-xl">
            {language === 'es'
              ? 'Explorar la Península de Osa es una aventura que no olvidarás.'
              : 'Exploring the Osa Peninsula is an unforgettable adventure.'}
          </p>

          {/* Filter bar */}
          <div className="mt-10 flex w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-xl sm:flex-nowrap">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15">
              <svg className="h-4 w-4 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {language === 'es' ? 'Temporada' : 'Season'}
            </button>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15">
              <svg className="h-4 w-4 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
              {language === 'es' ? 'Actividad' : 'Activity'}
            </button>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15">
              <svg className="h-4 w-4 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {language === 'es' ? 'Personas' : 'Guests'}
            </button>
            <button className="shrink-0 rounded-full bg-sand px-6 py-2.5 text-sm font-bold text-jungle transition-colors hover:bg-sand/90">
              {language === 'es' ? 'Explorar' : 'Explore'}
            </button>
          </div>
        </div>

        {/* Stats strip — anchored to hero bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-t-2xl border border-white/10 bg-white/90 px-4 py-4 text-center backdrop-blur-xl"
              >
                <p className="font-display text-2xl font-bold text-[#14362d] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-[#14362d]/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-8 py-8">
        {/* ── BEST DESTINATION ── */}
        <section className="animate-fade-in-up">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{language === 'es' ? 'Mejor destino' : 'Best destination'}</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {language === 'es' ? 'Turismo en Puerto Jiménez' : 'Tourism in Puerto Jiménez'}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300 md:text-base">
              {language === 'es'
                ? 'Naturaleza extraordinaria, biodiversidad única y la calidez de la gente local.'
                : 'Extraordinary natural beauty, unique biodiversity, and the warmth of local people.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Large card */}
            <a
              href={TOUR_OPERATORS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 sm:row-span-2"
              style={{ minHeight: '28rem' }}
            >
              <img
                src={TOUR_OPERATORS[0].imageUrl}
                alt={TOUR_OPERATORS[0].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  {language === 'es' ? TOUR_OPERATORS[0].locationEs : TOUR_OPERATORS[0].locationEn}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white">
                  {TOUR_OPERATORS[0].name}
                </p>
              </div>
            </a>

            {/* Two stacked smaller cards */}
            {TOUR_OPERATORS.slice(1).map((op) => (
              <a
                key={op.key}
                href={op.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10"
                style={{ minHeight: '13rem' }}
              >
                <img
                  src={op.imageUrl}
                  alt={op.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    {language === 'es' ? op.locationEs : op.locationEn}
                  </p>
                  <p className="mt-0.5 font-display text-base font-bold text-white">
                    {op.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── WEATHER + TIDE ── */}
        <div className="grid gap-4 animate-fade-in-up md:gap-6 lg:grid-cols-2">
          <WeatherInfo />
          <TideInfo />
        </div>

        {/* ── HOW TO GET HERE ── */}
        <section className="soft-card space-y-5 rounded-3xl p-5 md:p-7 animate-fade-in-up animate-delay-200 text-slate-100 shadow-glow">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">{t.home.ui.howToGetHereEyebrow}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {t.home.howToGetHere.title}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              {t.home.howToGetHere.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-3 border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/70">{t.home.ui.routeLabels.land}</p>
              <h3 className="font-display text-xl font-bold text-sand">{t.home.howToGetHere.bus.title}</h3>
              <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.bus.sjToPj.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.sjToPj.departure}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.sjToPj.arrival}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.sjToPj.price}</p>
              <p className="text-xs text-slate-300">{t.home.howToGetHere.bus.sjToPj.note}</p>
              <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.bus.pjToSj.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.pjToSj.departure}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.pjToSj.arrival}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.bus.pjToSj.price}</p>
              <p className="text-xs text-slate-300">{t.home.howToGetHere.bus.pjToSj.note}</p>
              <p className="pt-2 text-xs text-slate-300">{t.home.howToGetHere.bus.footer}</p>
            </div>

            <div className="space-y-3 border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/70">{t.home.ui.routeLabels.sea}</p>
              <h3 className="font-display text-xl font-bold text-sand">{t.home.howToGetHere.ferry.title}</h3>
              <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.weekdays.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.weekdays.pjToGolfito}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.weekdays.golfitoToPj}</p>
              <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.saturday.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.saturday.pjToGolfito}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.saturday.golfitoToPj}</p>
              <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.sunday.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.sunday.pjToGolfito}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.sunday.golfitoToPj}</p>
              <p className="pt-2 text-sm text-slate-200">{t.home.howToGetHere.ferry.duration}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.ferry.price}</p>
              <p className="text-xs text-slate-300">{t.home.howToGetHere.ferry.note}</p>
            </div>

            <div className="space-y-3 border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/70">{t.home.ui.routeLabels.air}</p>
              <h3 className="font-display text-xl font-bold text-sand">{t.home.howToGetHere.plane.title}</h3>
              <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.plane.sjToPj.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.plane.sjToPj.highSeason}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.plane.sjToPj.lowSeason}</p>
              <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.plane.pjToSj.title}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.plane.pjToSj.highSeason}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.plane.pjToSj.lowSeason}</p>
              <p className="pt-2 text-sm text-slate-200">{t.home.howToGetHere.plane.duration}</p>
              <p className="text-sm text-slate-200">{t.home.howToGetHere.plane.price}</p>
              <p className="text-xs text-slate-300">
                {t.home.howToGetHere.plane.note}{' '}
                <a href={t.home.howToGetHere.plane.link} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  flysansa.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── USEFUL INFO + QUICK TIPS ── */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] animate-fade-in-up animate-delay-300">
          <section className="soft-card rounded-3xl p-5 md:p-7 text-slate-100 shadow-glow">
            <h2 className="font-display text-2xl font-bold text-sand">{t.home.usefulInfo.title}</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.climate}</span><span className="font-semibold text-white">{t.home.usefulInfo.climateValue}</span></div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.avgTemp}</span><span className="font-semibold text-white">{t.home.usefulInfo.avgTempValue}</span></div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.drySeason}</span><span className="font-semibold text-white">{t.home.usefulInfo.drySeasonValue}</span></div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.greenSeason}</span><span className="font-semibold text-white">{t.home.usefulInfo.greenSeasonValue}</span></div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.currency}</span><span className="font-semibold text-white">{t.home.usefulInfo.currencyValue}</span></div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                <span>{language === 'es' ? 'Tipo de cambio USD → CRC' : 'USD → CRC exchange rate'}</span>
                <span className="font-semibold text-white">
                  {formattedExchangeRate
                    ? `${language === 'es' ? '1 USD ≈ ₡' : '1 USD ~= CRC '} ${formattedExchangeRate}`
                    : language === 'es' ? 'No disponible' : 'Unavailable'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.atm}</span><span className="font-semibold text-white">{t.home.usefulInfo.atmValue}</span></div>
              <div className="flex items-center justify-between gap-4"><span>{t.home.usefulInfo.emergency}</span><span className="font-semibold text-white">{t.home.usefulInfo.emergencyValue}</span></div>
            </div>
          </section>

          <section className="soft-card rounded-3xl p-5 md:p-7 text-slate-100 shadow-glow">
            <h2 className="font-display text-2xl font-bold text-sand">{t.home.quickTips.title}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2 text-sm text-slate-200">
              {t.home.quickTips.tips.map((tip, index) => (
                <li key={index} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sun" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── WHY VISIT ── */}
        <section className="soft-card space-y-5 rounded-3xl p-5 md:p-7 animate-fade-in-up animate-delay-400 text-slate-100 shadow-glow">
          <h2 className="font-display text-2xl font-bold text-sand md:text-3xl">{t.home.whyVisit.title}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.home.whyVisit.reasons.map((reason, index) => (
              <div key={index} className="border-l border-white/10 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold text-sand">{reason.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MAP ── */}
        <section className="soft-card rounded-3xl p-5 md:p-7 animate-fade-in-up animate-delay-500 text-slate-100 shadow-glow">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-bold text-sand md:text-3xl">
                {t.home.ui.locationTitle}
              </h2>
              <p className="text-sm text-slate-300">{t.home.ui.locationCity}</p>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7904.2!2d-83.3187!3d8.5334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa95cb9b0aa46f3%3A0x4b8e8b4b4b4b4b4b!2sPuerto%20Jim%C3%A9nez%2C%20Puntarenas!5e0!3m2!1ses!2scr!4v1734000000000!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '24rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Puerto Jimenez"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
