import { useI18n } from '../i18n/I18nContext'
import { getTranslatedServiceSpots } from '../i18n/contentTranslations'

function Services() {
  const { t, language } = useI18n()
  const serviceSpots = getTranslatedServiceSpots(language)

  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-500 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-25"></div>
        <div className="relative z-10 space-y-3">
          <div className="text-4xl">🏪🍽️🧭</div>
          <p className="pill inline-block bg-white/20 border border-white/40 text-white">{t.services.header.badge}</p>
          <h1 className="font-display text-4xl md:text-5xl font-black drop-shadow-lg">{t.services.header.title}</h1>
          <p className="max-w-3xl text-lg text-amber-50">{t.services.header.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.services.header.tags.restaurants}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.services.header.tags.hotels}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.services.header.tags.health}</span>
          </div>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceSpots.map((category) => (
          <article
            key={category.category}
            className="soft-card flex h-full flex-col gap-3 p-6 border-l-4 border-orange-400/80"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl text-white text-2xl shadow-lg">
                {category.icon}
              </div>
              <div>
                <h3 className="font-display text-xl text-slate-950">{category.category}</h3>
                <span className="text-xs font-semibold text-orange-600">{category.items.length} {t.services.options}</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {category.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services
