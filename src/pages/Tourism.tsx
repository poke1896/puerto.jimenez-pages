import { useI18n } from '../i18n/I18nContext'
import { getTranslatedTouristSpots } from '../i18n/contentTranslations'

function Tourism() {
  const { t, language } = useI18n()
  const touristSpots = getTranslatedTouristSpots(language)

  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative z-10 space-y-3">
          <div className="text-4xl">🏝️🦥🌿</div>
          <p className="pill inline-block bg-white/20 border border-white/40 text-xs font-semibold tracking-wide text-white">{t.tourism.header.badge}</p>
          <h1 className="font-display text-4xl md:text-5xl font-black drop-shadow-lg">{t.tourism.header.title}</h1>
          <p className="max-w-3xl text-lg text-emerald-50">{t.tourism.header.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.beaches}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.corcovado}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.mangroves}</span>
          </div>
        </div>
      </header>

      <div className="space-y-8">
        {touristSpots.map((category) => (
          <section key={category.category} className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-2xl shadow-lg">
                {category.icon}
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-slate-950">{category.category}</h2>
              <span className="pill bg-emerald-50 text-emerald-700 border-emerald-200">{category.places.length} {t.tourism.sites}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {category.places.map((place) => (
                <article
                  key={place.name}
                  className="soft-card p-5 border-l-4 border-emerald-400/70"
                >
                  <h3 className="font-semibold text-slate-950">{place.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{place.description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Tourism
