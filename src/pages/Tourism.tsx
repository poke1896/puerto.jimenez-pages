import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { getTranslatedTouristSpots } from '../i18n/contentTranslations'

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.07-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8.25 8.25 0 00-16.5 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  )
}

function Tourism() {
  const { t, language } = useI18n()
  const touristSpots = getTranslatedTouristSpots(language)
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))

  const toggleIndex = (index: number) => {
    const next = new Set(openIndices)
    if (next.has(index)) {
      next.delete(index)
    } else {
      next.add(index)
    }
    setOpenIndices(next)
  }

  const mapLabel = language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'
  const mapHint = language === 'es'
    ? 'Toca cualquier lugar para ver su ubicación en Google Maps'
    : 'Tap any place to open its location in Google Maps'

  return (
    <div className="space-y-10 text-slate-100">
      <header className="hero-shell rounded-3xl p-6 md:p-8 lg:p-10 animate-fade-in-up">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{t.tourism.ui.eyebrow}</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl md:text-5xl lg:text-6xl">
              {t.tourism.header.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
              {t.tourism.header.description}
            </p>
          </div>
          <div className="hero-glass grid gap-3 rounded-3xl p-4 md:grid-cols-3 shadow-glow">
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.tourism.ui.badgeLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.tourism.header.badge}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.tourism.ui.focusLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.tourism.ui.focusValue}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.tourism.ui.toneLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.tourism.ui.toneValue}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex flex-wrap gap-3 text-sm font-semibold text-sand/80">
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.beaches}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.corcovado}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.mangroves}</span>
        </div>
      </header>

      {/* Map hint banner */}
      <div className="flex items-center gap-3 rounded-2xl border border-sea/30 bg-sea/10 px-4 py-3 text-sm text-sea backdrop-blur-sm">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sea/20">
          <MapPinIcon />
        </div>
        <span className="font-medium">{mapHint}</span>
      </div>

      <div className="space-y-4">
        {touristSpots.map((category, index) => {
          const isOpen = openIndices.has(index)

          return (
            <section
              key={category.category}
              className="soft-card border border-white/10 animate-fade-in-up shadow-glow"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Category header */}
              <button
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jungle/80 text-xs font-bold tracking-[0.2em] text-sand shadow-sun">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-sand md:text-2xl">{category.category}</h2>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/60">
                        {category.places.length} {t.tourism.sites}
                      </span>
                      {!isOpen && (
                        <span className="flex items-center gap-1 text-xs font-medium text-sea/80">
                          <MapPinIcon />
                          {language === 'es' ? 'ver en mapa' : 'view on map'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sand/60 transition-all duration-300 ${isOpen ? 'rotate-180 bg-white/10' : 'bg-white/5'}`}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>

              {/* Places grid */}
              <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 pt-1">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                    {category.places.map((place) => {
                      const baseContext = 'Puerto Jimenez, Puntarenas, Costa Rica'
                      const nameQuery = encodeURIComponent(`${place.name} ${baseContext}`)
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${nameQuery}`

                      return (
                        <a
                          key={place.name}
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group glass-card flex flex-col gap-3 rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:border-sea/40 hover:bg-sea/5 hover:shadow-glow"
                        >
                          <div className="flex items-start gap-3">
                            {/* Pin icon */}
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sea/25 bg-sea/15 text-sea transition-colors group-hover:border-sea/50 group-hover:bg-sea/25">
                              <MapPinIcon />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold leading-snug text-sand transition-colors group-hover:text-white">
                                {place.name}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                                {place.description}
                              </p>
                            </div>
                          </div>

                          {/* Map CTA */}
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-sea/70 transition-colors group-hover:text-sea">
                            <ExternalLinkIcon />
                            <span>{mapLabel}</span>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Tourism
