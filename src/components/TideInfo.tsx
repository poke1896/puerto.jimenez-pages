import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

interface TideExtreme {
  height: number
  time: string
  type: 'low' | 'high'
}

interface StormGlassResponse {
  data: TideExtreme[]
}

// Coordenadas de Puerto Jiménez
const PUERTO_JIMENEZ_LAT = 8.5334
const PUERTO_JIMENEZ_LON = -83.3187

// API Keys / endpoints
const STORMGLASS_API_KEY = import.meta.env.VITE_STORMGLASS_API_KEY || '10cc1f6c-d6c4-11f0-a148-0242ac130003-10cc1fc6-d6c4-11f0-a148-0242ac130003'
const MAREA_TOKEN = import.meta.env.VITE_MAREA_TOKEN || '7148abbd-9e69-4d1c-bfc3-e7de1ca87e06'
const MAREA_ENDPOINT = import.meta.env.VITE_MAREA_URL || 'https://api.marea.ooo/v2/tides'

type TideProvider = 'marea' | 'stormglass'

interface TideCachePayload {
  data: TideExtreme[]
  provider: TideProvider
  cachedAt: number
}

const TIDE_CACHE_KEY = 'pj_tides_cache_v1'
const TIDE_CACHE_TTL_MS = 24 * 60 * 60 * 1000

export function TideInfo() {
  const { language } = useI18n()
  const [tideData, setTideData] = useState<TideExtreme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<TideProvider | null>(null)
  const [usingStaleCache, setUsingStaleCache] = useState(false)

  useEffect(() => {
    const readCache = (allowExpired = false): TideCachePayload | null => {
      try {
        const raw = localStorage.getItem(TIDE_CACHE_KEY)
        if (!raw) return null

        const parsed = JSON.parse(raw) as TideCachePayload
        if (!Array.isArray(parsed.data) || !parsed.provider || typeof parsed.cachedAt !== 'number') {
          return null
        }

        const age = Date.now() - parsed.cachedAt
        if (!allowExpired && age > TIDE_CACHE_TTL_MS) {
          return null
        }

        return parsed
      } catch {
        return null
      }
    }

    const writeCache = (data: TideExtreme[], dataProvider: TideProvider) => {
      try {
        const payload: TideCachePayload = {
          data,
          provider: dataProvider,
          cachedAt: Date.now()
        }
        localStorage.setItem(TIDE_CACHE_KEY, JSON.stringify(payload))
      } catch {
        // Ignore storage errors (private mode, quota, etc.)
      }
    }

    const nowTs = Math.floor(Date.now() / 1000)
    const startDay = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000)
    const endDay = Math.floor(new Date().setHours(23, 59, 59, 999) / 1000)

    const normalizeMarea = (payload: any): TideExtreme[] => {
      const items = payload?.data || payload?.extremes || payload?.result || []
      return (items as any[]).map((item) => {
        const rawType = (item.type || item.event || item.tide || item.state || '').toString().toLowerCase()
        const resolvedType: TideExtreme['type'] = rawType.includes('high') || rawType.includes('plea') ? 'high' : 'low'
        const timeValue = item.time || item.datetime || item.timestamp || item.date
        const heightValue = typeof item.height === 'number' ? item.height : (item.value || item.level || 0)
        return {
          type: resolvedType,
          time: typeof timeValue === 'number' ? new Date(timeValue * 1000).toISOString() : timeValue,
          height: heightValue
        }
      }).filter((item) => item.time)
    }

    const fetchFromMarea = async (): Promise<TideExtreme[]> => {
      if (!MAREA_TOKEN) return []
      const durationMinutes = 1440 // 24h
      const intervalMinutes = 60

      // Primer intento con radio moderado; si falla, probamos con radio más amplio
      const tryFetch = async (radius: number) => {
        const url = `${MAREA_ENDPOINT}?latitude=${PUERTO_JIMENEZ_LAT}&longitude=${PUERTO_JIMENEZ_LON}&timestamp=${nowTs}&duration=${durationMinutes}&interval=${intervalMinutes}&radius=${radius}&model=FES2014`

        const resp = await fetch(url, {
          headers: {
            'x-marea-api-token': MAREA_TOKEN
          }
        })

        if (!resp.ok) {
          const text = await resp.text()
          throw new Error(`Marea API error (${resp.status}): ${text}`)
        }

        const payload = await resp.json()
        const normalized = normalizeMarea(payload)
        if (!normalized.length) {
          throw new Error('Marea sin datos')
        }
        return normalized
      }

      try {
        return await tryFetch(50)
      } catch (err) {
        console.warn('Reintentando Marea con mayor radio', err)
        return await tryFetch(400)
      }
    }

    const fetchFromStormGlass = async (): Promise<TideExtreme[]> => {
      const url = `https://api.stormglass.io/v2/tide/extremes/point?lat=${PUERTO_JIMENEZ_LAT}&lng=${PUERTO_JIMENEZ_LON}&start=${startDay}&end=${endDay}`
      const response = await fetch(url, {
        headers: {
          Authorization: STORMGLASS_API_KEY
        }
      })

      if (!response.ok) {
        throw new Error('Stormglass API error')
      }

      const data: StormGlassResponse = await response.json()
      if (!data.data || data.data.length === 0) {
        throw new Error('Stormglass sin datos')
      }
      return data.data
    }

    const providers: { name: TideProvider; fetcher: () => Promise<TideExtreme[]>; enabled: boolean }[] = [
      { name: 'marea', fetcher: fetchFromMarea, enabled: Boolean(MAREA_TOKEN) },
      { name: 'stormglass', fetcher: fetchFromStormGlass, enabled: true }
    ]

    const fetchTideData = async () => {
      setLoading(true)
      setError(null)
      setUsingStaleCache(false)

      const cachedData = readCache()
      if (cachedData) {
        setTideData(cachedData.data)
        setProvider(cachedData.provider)
        return
      }

      const staleCachedData = readCache(true)

      let lastError = ''
      for (const candidate of providers.filter((p) => p.enabled)) {
        try {
          const data = await candidate.fetcher()
          setTideData(data)
          setProvider(candidate.name)
          setUsingStaleCache(false)
          writeCache(data, candidate.name)
          return
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          lastError = `${candidate.name}: ${message}`
          console.error(`Error con proveedor ${candidate.name}:`, err)
        }
      }

      if (staleCachedData) {
        setTideData(staleCachedData.data)
        setProvider(staleCachedData.provider)
        setUsingStaleCache(true)
        return
      }

      console.error('No se pudieron actualizar mareas:', lastError || 'No hay datos disponibles')
      setError('FETCH_FAILED')
    }

    fetchTideData().finally(() => setLoading(false))
  }, [])

  const formatTime = (timeString: string) => {
    const date = new Date(timeString)
    return date.toLocaleTimeString(language === 'es' ? 'es-CR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: language === 'en'
    })
  }

  const formatHeight = (height: number) => {
    return `${height.toFixed(2)}m`
  }

  if (loading) {
    return (
      <div className="glass-card glass-card--cool p-4 md:p-6 space-y-3 md:space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-sea to-lagoon rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg animate-pulse">
            🌊
          </div>
          <div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-sand">
              {language === 'es' ? 'Mareas' : 'Tides'}
            </h2>
            <p className="text-sm md:text-base text-slate-200">
              {language === 'es' ? 'Cargando...' : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-card glass-card--cool p-4 md:p-6 space-y-3 md:space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-sea to-lagoon rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg">
            🌊
          </div>
          <div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-sand">
              {language === 'es' ? 'Mareas' : 'Tides'}
            </h2>
            <p className="text-sm text-coral">
              {error === 'FETCH_FAILED'
                ? (language === 'es'
                    ? 'No se pudo actualizar mareas en este momento.'
                    : 'Could not update tides right now.')
                : error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="glass-card glass-card--cool p-4 md:p-6 space-y-3 md:space-y-4 animate-fade-in-up">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-2 md:p-3 bg-gradient-to-br from-sea to-lagoon rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg">
          🌊
        </div>
        <div>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-sand">
            {language === 'es' ? 'Mareas de Hoy' : "Today's Tides"}
          </h2>
          <p className="text-sm md:text-base text-slate-200">
            {language === 'es' ? 'Información actualizada' : 'Updated information'}
          </p>
          {usingStaleCache ? (
            <p className="text-xs font-medium text-sun">
              {language === 'es'
                ? 'Mostrando datos guardados por falta de conexión con el proveedor.'
                : 'Showing cached data because the provider is unavailable.'}
            </p>
          ) : null}
        </div>
      </div>

      {tideData && tideData.length > 0 ? (
          <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tideData.map((extreme, index) => (
            <div
              key={index}
                className={`p-3 md:p-4 rounded-xl shadow-md ${
                extreme.type === 'high'
                  ? 'bg-white/10 border border-white/10'
                  : 'bg-white/10 border border-white/10'
              }`}
            >
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-2xl md:text-3xl">
                  {extreme.type === 'high' ? '⬆️' : '⬇️'}
                </div>
                  <div className="font-bold text-base md:text-lg text-sand">
                  {extreme.type === 'high' 
                    ? (language === 'es' ? 'Pleamar' : 'High Tide')
                    : (language === 'es' ? 'Bajamar' : 'Low Tide')
                  }
                </div>
                  <div className="text-xl md:text-2xl font-bold text-sand">
                  {formatTime(extreme.time)}
                </div>
                  <div className="text-xs md:text-sm text-slate-200">
                  {formatHeight(extreme.height)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-200 text-center">
          {language === 'es' ? 'No hay datos disponibles' : 'No data available'}
        </p>
      )}

      <div className="text-xs text-sand/70 text-center pt-2 border-t border-white/10">
        {language === 'es' ? 'Datos proporcionados por' : 'Data provided by'}{' '}
        {provider === 'marea' ? (
          <a href="https://api.marea.ooo/" target="_blank" rel="noopener noreferrer" className="text-sand hover:underline">
            Marea
          </a>
        ) : (
          <a href="https://stormglass.io" target="_blank" rel="noopener noreferrer" className="text-sand hover:underline">
            Stormglass.io
          </a>
        )}
      </div>
    </div>
  )
}
