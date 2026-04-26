import { useI18n } from '../i18n/I18nContext'
import { getTranslatedCultureActivities } from '../i18n/contentTranslations'

function Culture() {
  const { t, language } = useI18n()
  const cultureActivities = getTranslatedCultureActivities(language)

  const cultureSections = [
    { title: t.culture.sections.dailyLife.title, content: t.culture.sections.dailyLife.content },
    { title: t.culture.sections.traditions.title, content: t.culture.sections.traditions.content },
    { title: t.culture.sections.gastronomy.title, content: t.culture.sections.gastronomy.content },
    { title: t.culture.sections.music.title, content: t.culture.sections.music.content },
    { title: t.culture.sections.ancestral.title, content: t.culture.sections.ancestral.content },
    { title: t.culture.sections.rhythm.title, content: t.culture.sections.rhythm.content },
  ]

  return (
    <div className="space-y-10 text-slate-100">
      <header className="hero-shell rounded-3xl p-6 md:p-8 lg:p-10 animate-fade-in-up">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{t.culture.ui.eyebrow}</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl md:text-5xl lg:text-6xl">
              {t.culture.header.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
              {t.culture.header.subtitle}
            </p>
            <p className="max-w-3xl text-sm leading-7 text-slate-300">
              {t.culture.header.description}
            </p>
          </div>
          <div className="hero-glass grid gap-3 rounded-3xl p-4 md:grid-cols-3 shadow-glow">
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.culture.ui.badgeLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.culture.header.badge}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.culture.ui.focusLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.culture.ui.focusValue}</p>
            </div>
            <div className="metric p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">{t.culture.ui.toneLabel}</p>
              <p className="mt-2 font-semibold text-sand">{t.culture.ui.toneValue}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex flex-wrap gap-3 text-sm font-semibold text-sand/80">
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.culture.header.tags.gastronomy}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.culture.header.tags.fishing}</span>
          <span className="pill border-white/15 bg-white/5 text-slate-100">{t.culture.header.tags.music}</span>
        </div>
      </header>

      <section className="space-y-4 md:space-y-6 animate-fade-in-up animate-delay-200">
        <h2 className="font-display text-2xl font-bold text-sand md:text-3xl px-2">{t.culture.aspectsTitle}</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
          {cultureSections.map((section, index) => (
            <article
              key={section.title}
              className="soft-card border border-white/10 p-4 md:p-6 animate-fade-in-left transition-all duration-300 hover:scale-[1.02] hover:shadow-glow hover:bg-white/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 flex items-center gap-3 md:mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-jungle/80 text-xs font-bold tracking-[0.2em] text-sand shadow-sun">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-lg text-sand">{section.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">{section.content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 md:space-y-6 animate-fade-in-up animate-delay-300">
        <div className="px-2">
          <h2 className="font-display text-2xl font-bold text-sand md:text-3xl">{t.culture.experiencesTitle}</h2>
          <p className="text-slate-200">{t.culture.experiencesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
          {cultureActivities.map((activity, index) => (
            <article
              key={activity.name}
              className="soft-card border border-white/10 p-4 md:p-5 animate-scale-in transition-all duration-300 hover:scale-[1.02] hover:shadow-glow hover:bg-white/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-3">
                <span className="pill bg-white/5 text-slate-100 border-white/10">{activity.location}</span>
                <h3 className="font-semibold text-sand">{activity.name}</h3>
                <p className="text-sm leading-relaxed text-slate-200">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Culture
