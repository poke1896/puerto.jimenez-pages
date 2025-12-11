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

export function TideInfo() {
  const { language } = useI18n()
  const [tideData, setTideData] = useState<TideExtreme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<TideProvider | null>(null)

  useEffect(() => {
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
      let lastError = ''
      for (const candidate of providers.filter((p) => p.enabled)) {
        try {
          const data = await candidate.fetcher()
          setTideData(data)
          setProvider(candidate.name)
          return
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          lastError = `${candidate.name}: ${message}`
          console.error(`Error con proveedor ${candidate.name}:`, err)
        }
      }
      setError(lastError || 'No hay datos disponibles')
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
        <div className="soft-card p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in-up">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg animate-pulse">
            🌊
          </div>
          <div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Mareas' : 'Tides'}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {language === 'es' ? 'Cargando...' : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
        <div className="soft-card p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in-up">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg">
            🌊
          </div>
          <div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Mareas' : 'Tides'}
            </h2>
            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="soft-card p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in-up">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-xl md:text-2xl lg:text-3xl shadow-lg">
          🌊
        </div>
        <div>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Mareas de Hoy' : "Today's Tides"}
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            {language === 'es' ? 'Información actualizada' : 'Updated information'}
          </p>
        </div>
      </div>

      {tideData && tideData.length > 0 ? (
          <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tideData.map((extreme, index) => (
            <div
              key={index}
                className={`p-3 md:p-4 rounded-xl shadow-md ${
                extreme.type === 'high'
                  ? 'bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-cyan-300'
                  : 'bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300'
              }`}
            >
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-2xl md:text-3xl">
                  {extreme.type === 'high' ? '⬆️' : '⬇️'}
                </div>
                  <div className="font-bold text-base md:text-lg">
                  {extreme.type === 'high' 
                    ? (language === 'es' ? 'Pleamar' : 'High Tide')
                    : (language === 'es' ? 'Bajamar' : 'Low Tide')
                  }
                </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-800">
                  {formatTime(extreme.time)}
                </div>
                  <div className="text-xs md:text-sm text-gray-600">
                  {formatHeight(extreme.height)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          {language === 'es' ? 'No hay datos disponibles' : 'No data available'}
        </p>
      )}

      <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200">
        {language === 'es' ? 'Datos proporcionados por' : 'Data provided by'}{' '}
        {provider === 'marea' ? (
          <a href="https://api.marea.ooo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Marea
          </a>
        ) : (
          <a href="https://stormglass.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Stormglass.io
          </a>
        )}
      </div>
    </div>
  )
}
