import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { TideInfo } from '../components/TideInfo'
import { WeatherInfo } from '../components/WeatherInfo'

type TourOperatorKey = 'jaguar' | 'guia' | 'sirena'

const TOUR_OPERATORS: { key: TourOperatorKey; name: string; url: string; imageUrl: string }[] = [
  {
    key: 'jaguar',
    name: 'Jaguar Corcovado Tours',
    url: 'https://www.jaguarcorcovadotourscr.com/',
    imageUrl: 'https://www.jaguarcorcovadotourscr.com/_next/image?url=%2Fimage%2Fportada%2F2.webp&w=1920&q=75'
  },
  {
    key: 'guia',
    name: 'Corcovado Guia CR',
    url: 'https://www.corcovadoguiacr.com/',
    imageUrl: 'https://www.corcovadoguiacr.com/image/aventura/nocturno.webp'
  },
  {
    key: 'sirena',
    name: 'Sirena Day Tour',
    url: 'https://sirenadaytour.com/',
    imageUrl: 'https://www.sirenadaytour.com/wp-content/uploads/2025/11/Rodolfo_Fishing.jpg'
  }
]

const EXCHANGE_RATE_CACHE_KEY = 'pj_usd_crc_rate_v1'
const EXCHANGE_RATE_CACHE_TTL_MS = 12 * 60 * 60 * 1000

function Home() {
  const { t, language } = useI18n()
  const [activeOperator, setActiveOperator] = useState(0)
  const [usdToCrcRate, setUsdToCrcRate] = useState<number | null>(null)

  useEffect(() => {
    if (TOUR_OPERATORS.length <= 1) return

    const intervalId = setInterval(() => {
      setActiveOperator((prev) => (prev + 1) % TOUR_OPERATORS.length)
    }, 7000)

    return () => clearInterval(intervalId)
  }, [])

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
        localStorage.setItem(
          EXCHANGE_RATE_CACHE_KEY,
          JSON.stringify({ rate, cachedAt: Date.now() })
        )
      } catch {
        // Ignore localStorage write errors.
      }
    }

    const cachedRate = readCachedRate()
    if (cachedRate) {
      setUsdToCrcRate(cachedRate)
      return
    }

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

  const operatorDescriptions: Record<TourOperatorKey, string> = {
    jaguar: t.home.tourOperators.operators.jaguar.description,
    guia: t.home.tourOperators.operators.guia.description,
    sirena: t.home.tourOperators.operators.sirena.description
  }

  const nextOperator = () => {
    setActiveOperator((prev) => (prev + 1) % TOUR_OPERATORS.length)
  }

  const prevOperator = () => {
    setActiveOperator((prev) => (prev - 1 + TOUR_OPERATORS.length) % TOUR_OPERATORS.length)
  }

  const formattedExchangeRate =
    usdToCrcRate !== null
      ? new Intl.NumberFormat(language === 'es' ? 'es-CR' : 'en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(usdToCrcRate)
      : null

  return (
    <>
    <section className="hero-shell relative left-1/2 isolate -mt-[8.5rem] min-h-[calc(100svh-5rem)] w-screen -translate-x-1/2 overflow-hidden px-6 py-8 md:-mt-[9.5rem] md:px-10 md:py-10 lg:-mt-[10.5rem] lg:px-14 lg:py-12 animate-fade-in-up">
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl flex-col justify-between gap-10 lg:min-h-[calc(100svh-8rem)]">
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 md:mt-20 lg:mt-24">
          <p className="eyebrow">{t.header.subtitle}</p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            <span className="pill border-white/15 bg-white/5 text-slate-100">{t.home.hero.badges.wildlife}</span>
            <span className="pill border-white/15 bg-white/5 text-slate-100">{t.home.hero.badges.beaches}</span>
            <span className="pill border-white/15 bg-white/5 text-slate-100">{t.home.hero.badges.ecotourism}</span>
          </div>
        </div>

        <div className="grid flex-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{t.home.ui.howToGetHereEyebrow}</p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {t.home.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              {t.home.hero.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="pill">{t.home.ui.destinationLabel}: {t.home.ui.destinationValue}</span>
              <span className="pill">{t.home.ui.focusLabel}: {t.home.ui.focusValue}</span>
              <span className="pill">{t.home.ui.styleLabel}: {t.home.ui.styleValue}</span>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 md:pt-7 lg:pt-8">
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.locationTitle}</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">{t.home.ui.locationCity}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2 border-l border-white/10 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.land}</p>
                <h3 className="text-base font-semibold text-white">{t.home.howToGetHere.bus.title}</h3>
                <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.sjToPj.title}</p>
                <p className="text-xs text-slate-400">{t.home.howToGetHere.bus.footer}</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.sea}</p>
                <h3 className="text-base font-semibold text-white">{t.home.howToGetHere.ferry.title}</h3>
                <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.weekdays.title}</p>
                <p className="text-xs text-slate-400">{t.home.howToGetHere.ferry.note}</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.air}</p>
                <h3 className="text-base font-semibold text-white">{t.home.howToGetHere.plane.title}</h3>
                <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.sjToPj.title}</p>
                <p className="text-xs text-slate-400">{t.home.howToGetHere.plane.note}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-slate-400">
          <span>{t.footer.rights}</span>
          <span>{t.footer.developedBy} Pokedev-ops</span>
        </div>
      </div>
    </section>

    <div className="space-y-8 py-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 animate-fade-in-up text-slate-100">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">{t.home.tourOperators.eyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {t.home.tourOperators.title}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            {t.home.tourOperators.subtitle}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeOperator * 100}%)` }}
          >
            {TOUR_OPERATORS.map((operator) => (
              <article key={operator.key} className="w-full flex-shrink-0 bg-black/25 p-5 md:p-7">
                <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {t.home.tourOperators.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                      {operator.name}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      {operatorDescriptions[operator.key]}
                    </p>
                    <a
                      href={operator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      {t.home.tourOperators.visitCta}
                    </a>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={operator.imageUrl}
                      alt={operator.name}
                      className="h-52 w-full object-cover md:h-64"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {TOUR_OPERATORS.length > 1 ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {TOUR_OPERATORS.map((operator, index) => (
                <button
                  key={operator.key}
                  type="button"
                  onClick={() => setActiveOperator(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === activeOperator ? 'w-8 bg-white' : 'bg-white/35 hover:bg-white/60'
                  }`}
                  aria-label={`${t.home.tourOperators.title} ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevOperator}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:bg-white/10"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={nextOperator}
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </section>

      <div className="grid gap-4 animate-fade-in-up md:gap-6 lg:grid-cols-2">
        <WeatherInfo />
        <TideInfo />
      </div>

      <section className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 animate-fade-in-up animate-delay-200 text-slate-100">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">{t.home.ui.howToGetHereEyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {t.home.howToGetHere.title}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            {t.home.howToGetHere.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 border-l border-white/10 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.land}</p>
            <h3 className="font-display text-xl font-bold text-white">{t.home.howToGetHere.bus.title}</h3>
            <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.bus.sjToPj.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.sjToPj.departure}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.sjToPj.arrival}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.sjToPj.price}</p>
            <p className="text-xs text-slate-400">{t.home.howToGetHere.bus.sjToPj.note}</p>
            <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.bus.pjToSj.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.pjToSj.departure}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.pjToSj.arrival}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.bus.pjToSj.price}</p>
            <p className="text-xs text-slate-400">{t.home.howToGetHere.bus.pjToSj.note}</p>
            <p className="pt-2 text-xs text-slate-400">{t.home.howToGetHere.bus.footer}</p>
          </div>

          <div className="space-y-3 border-l border-white/10 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.sea}</p>
            <h3 className="font-display text-xl font-bold text-white">{t.home.howToGetHere.ferry.title}</h3>
            <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.weekdays.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.weekdays.pjToGolfito}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.weekdays.golfitoToPj}</p>
            <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.saturday.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.saturday.pjToGolfito}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.saturday.golfitoToPj}</p>
            <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.ferry.sunday.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.sunday.pjToGolfito}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.sunday.golfitoToPj}</p>
            <p className="pt-2 text-sm text-slate-300">{t.home.howToGetHere.ferry.duration}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.ferry.price}</p>
            <p className="text-xs text-slate-400">{t.home.howToGetHere.ferry.note}</p>
          </div>

          <div className="space-y-3 border-l border-white/10 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.home.ui.routeLabels.air}</p>
            <h3 className="font-display text-xl font-bold text-white">{t.home.howToGetHere.plane.title}</h3>
            <p className="text-sm font-semibold text-slate-200">{t.home.howToGetHere.plane.sjToPj.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.sjToPj.highSeason}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.sjToPj.lowSeason}</p>
            <p className="pt-2 text-sm font-semibold text-slate-200">{t.home.howToGetHere.plane.pjToSj.title}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.pjToSj.highSeason}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.pjToSj.lowSeason}</p>
            <p className="pt-2 text-sm text-slate-300">{t.home.howToGetHere.plane.duration}</p>
            <p className="text-sm text-slate-300">{t.home.howToGetHere.plane.price}</p>
            <p className="text-xs text-slate-400">
              {t.home.howToGetHere.plane.note}{' '}
              <a href={t.home.howToGetHere.plane.link} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                flysansa.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] animate-fade-in-up animate-delay-300">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 text-slate-100">
          <h2 className="font-display text-2xl font-bold text-white">{t.home.usefulInfo.title}</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
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
                  : language === 'es'
                    ? 'No disponible'
                    : 'Unavailable'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2"><span>{t.home.usefulInfo.atm}</span><span className="font-semibold text-white">{t.home.usefulInfo.atmValue}</span></div>
            <div className="flex items-center justify-between gap-4"><span>{t.home.usefulInfo.emergency}</span><span className="font-semibold text-white">{t.home.usefulInfo.emergencyValue}</span></div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 text-slate-100">
          <h2 className="font-display text-2xl font-bold text-white">{t.home.quickTips.title}</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2 text-sm text-slate-300">
            {t.home.quickTips.tips.map((tip, index) => (
              <li key={index} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 animate-fade-in-up animate-delay-400 text-slate-100">
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{t.home.whyVisit.title}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.home.whyVisit.reasons.map((reason, index) => (
            <div key={index} className="border-l border-white/10 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 animate-fade-in-up animate-delay-500 text-slate-100">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              {t.home.ui.locationTitle}
            </h2>
            <p className="text-sm text-slate-400">{t.home.ui.locationCity}</p>
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
