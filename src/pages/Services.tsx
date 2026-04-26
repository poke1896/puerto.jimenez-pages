import { useI18n } from '../i18n/I18nContext'
import { getTranslatedServiceSpots } from '../i18n/contentTranslations'

function Services() {
  const { t, language } = useI18n()
  const serviceSpots = getTranslatedServiceSpots(language)

  return (
    <div className="space-y-10 text-slate-100">
      <header className="hero-shell rounded-3xl p-6 md:p-8 lg:p-10 animate-fade-in-up">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{t.services.ui.eyebrow}</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl md:text-5xl lg:text-6xl">
              {t.services.header.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
              {t.services.header.description}
            </p>
          </div>
          <div className="hero-glass grid gap-3 rounded-3xl p-4 md:grid-cols-3 shadow-glow">
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.services.ui.badgeLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.services.header.badge}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.services.ui.focusLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.services.ui.focusValue}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.services.ui.toneLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.services.ui.toneValue}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex flex-wrap gap-3 text-sm font-semibold text-sand/80">
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.services.header.tags.restaurants}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.services.header.tags.hotels}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.services.header.tags.health}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceSpots.map((category, index) => (
          <article
            key={category.category}
            className="soft-card flex h-full flex-col gap-3 border border-white/10 p-4 md:p-6 animate-scale-in transition-all duration-300 hover:scale-[1.02] hover:shadow-glow hover:bg-white/5"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-jungle/80 text-xs font-bold tracking-[0.2em] text-sand shadow-sun">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-sand">{category.category}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">
                  {category.items.length} {t.services.options}
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {category.items.map((item) => {
                const baseContext = 'Puerto Jimenez, Puntarenas, Costa Rica'
                const itemName = typeof item === 'string' ? item : item.name
                const nameQuery = encodeURIComponent(`${itemName} ${baseContext}`)
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${nameQuery}`

                return (
                  <li key={itemName} className="group flex gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sun" />
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <span>{itemName}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-sand/70 opacity-0 transition-opacity group-hover:opacity-100">
                        {t.services.ui.mapLabel}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services
