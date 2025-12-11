import { cultureIntro, cultureSections, cultureActivities } from '../data/content'

function Culture() {
  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-25"></div>
        <div className="relative z-10 space-y-3">
          <div className="text-4xl">🎭🪘🍫</div>
          <p className="pill inline-block bg-white/20 border border-white/40 text-white">Cultura local</p>
          <h1 className="font-display text-4xl md:text-5xl font-black drop-shadow-lg">{cultureIntro.title}</h1>
          <p className="text-lg text-emerald-50 max-w-3xl">{cultureIntro.subtitle}</p>
          <p className="max-w-3xl text-sm md:text-base text-emerald-50/90 leading-relaxed">{cultureIntro.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">Gastronomía local</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">Pesca artesanal</span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30">Música y tradiciones</span>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="font-display text-3xl text-slate-950">Aspectos culturales</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {cultureSections.map((section) => (
            <article key={section.title} className="soft-card p-6 border-l-4 border-emerald-400/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl text-white text-2xl shadow-lg">
                  {section.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-950">{section.title}</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{section.content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-slate-950">Experiencias culturales</h2>
            <p className="text-slate-600">Actividades para conectar con tradiciones y saberes locales</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cultureActivities.map((activity) => (
            <article key={activity.name} className="soft-card p-5 border border-emerald-100">
              <div className="space-y-3">
                <span className="pill bg-emerald-50 text-emerald-700 border-emerald-200">{activity.location}</span>
                <h3 className="font-semibold text-slate-950">{activity.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Culture
