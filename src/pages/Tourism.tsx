import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { getTranslatedTouristSpots } from '../i18n/contentTranslations'

function Tourism() {
  const { t, language } = useI18n()
  const touristSpots = getTranslatedTouristSpots(language)
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())

  const toggleCategory = (categoryName: string) => {
    const next = new Set(openCategories)
    if (next.has(categoryName)) {
      next.delete(categoryName)
    } else {
      next.add(categoryName)
    }
    setOpenCategories(next)
  }

  return (
    <div className="space-y-10 text-slate-100">
      <header className="hero-shell rounded-3xl p-6 md:p-8 lg:p-10 animate-fade-in-up">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{t.tourism.ui.eyebrow}</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t.tourism.header.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              {t.tourism.header.description}
            </p>
          </div>
          <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm md:grid-cols-3">
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{t.tourism.ui.badgeLabel}</p>
              <p className="mt-2 font-semibold text-white">{t.tourism.header.badge}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{t.tourism.ui.focusLabel}</p>
              <p className="mt-2 font-semibold text-white">{t.tourism.ui.focusValue}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{t.tourism.ui.toneLabel}</p>
              <p className="mt-2 font-semibold text-white">{t.tourism.ui.toneValue}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.beaches}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.corcovado}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.tourism.header.tags.mangroves}</span>
        </div>
      </header>

      <div className="space-y-4">
        {touristSpots.map((category, index) => {
          const isOpen = openCategories.has(category.category)

          return (
            <section
              key={category.category}
              className="soft-card border border-white/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleCategory(category.category)}
                className="flex w-full items-center justify-between gap-4 rounded-3xl px-4 py-4 text-left transition-colors hover:bg-white/5 md:px-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xs font-bold tracking-[0.2em] text-white shadow-lg shadow-slate-900/15">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-white md:text-2xl">{category.category}</h2>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {category.places.length} {t.tourism.sites}
                    </span>
                  </div>
                </div>
                <div className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 pt-2 md:px-5 md:pb-5">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
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
                          className="soft-card group cursor-pointer border border-white/10 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white/5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold text-white transition-colors group-hover:text-slate-200">
                              {place.name}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              {t.tourism.ui.mapLabel}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{place.description}</p>
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
