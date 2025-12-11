import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { translations, type Language } from './translations'

type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language')
    return (stored === 'en' || stored === 'es') ? stored : 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language]
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
