import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { getTranslatedTouristSpots } from '../i18n/contentTranslations'

function Tourism() {
  const { t, language } = useI18n()
  const touristSpots = getTranslatedTouristSpots(language)
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())

  const toggleCategory = (categoryName: string) => {
    const newOpenCategories = new Set(openCategories)
    if (newOpenCategories.has(categoryName)) {
      newOpenCategories.delete(categoryName)
    } else {
      newOpenCategories.add(categoryName)
    }
    setOpenCategories(newOpenCategories)
  }

  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-6 md:p-8 lg:p-10 text-white shadow-2xl animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative z-10 space-y-2 md:space-y-3">
          <div className="text-3xl md:text-4xl">🏝️🦥🌿</div>
          <p className="pill inline-block bg-white/20 border border-white/40 text-xs font-semibold tracking-wide text-white">{t.tourism.header.badge}</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-lg">{t.tourism.header.title}</h1>
          <p className="max-w-3xl text-base md:text-lg text-emerald-50">{t.tourism.header.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.beaches}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.corcovado}</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">{t.tourism.header.tags.mangroves}</span>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        {touristSpots.map((category, index) => {
          const isOpen = openCategories.has(category.category)
          
          return (
            <section key={category.category} className="soft-card border-l-4 border-emerald-400/70 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full p-4 md:p-5 flex items-center justify-between gap-3 hover:bg-emerald-50/50 transition-colors rounded-lg"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 md:p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xl md:text-2xl shadow-lg">
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-slate-950">{category.category}</h2>
                    <span className="text-xs md:text-sm text-emerald-700 font-semibold">{category.places.length} {t.tourism.sites}</span>
                  </div>
                </div>
                <div className={`text-emerald-600 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 md:px-5 md:pb-5 pt-2">
                  <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                    {category.places.map((place) => {
                      const baseContext = 'Puerto Jiménez, Puntarenas, Costa Rica'
                      const nameQuery = encodeURIComponent(`${place.name} ${baseContext}`)
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${nameQuery}`

                      const Component = 'a'
                      const linkProps = {
                        href: mapsUrl,
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }

                      return (
                        <Component
                          key={place.name}
                          {...linkProps}
                          className="soft-card p-4 md:p-5 border-l-4 border-emerald-300/50 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-slate-950 group-hover:text-emerald-600 transition-colors">{place.name}</h3>
                            <span className="text-emerald-600 text-lg flex-shrink-0 group-hover:scale-110 transition-transform" title={language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}>
                              📍
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{place.description}</p>
                        </Component>
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
