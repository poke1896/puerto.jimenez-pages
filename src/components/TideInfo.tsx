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

// API Key de Stormglass
const STORMGLASS_API_KEY = '10cc1f6c-d6c4-11f0-a148-0242ac130003-10cc1fc6-d6c4-11f0-a148-0242ac130003'

export function TideInfo() {
  const { language } = useI18n()
  const [tideData, setTideData] = useState<TideExtreme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTideData = async () => {
      try {
        setLoading(true)
        
        // Obtener inicio y fin del día actual
        const start = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000)
        const end = Math.floor(new Date().setHours(23, 59, 59, 999) / 1000)
        
        const url = `https://api.stormglass.io/v2/tide/extremes/point?lat=${PUERTO_JIMENEZ_LAT}&lng=${PUERTO_JIMENEZ_LON}&start=${start}&end=${end}`
        
        const response = await fetch(url, {
          headers: {
            'Authorization': STORMGLASS_API_KEY
          }
        })
        
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API')
        }
        
        const data: StormGlassResponse = await response.json()
        
        if (data.data && data.data.length > 0) {
          setTideData(data.data)
          setError(null)
        } else {
          setError('No hay datos disponibles')
        }
      } catch (err) {
        setError('Error al cargar datos de mareas')
        console.error('Error fetching tide data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTideData()
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
        <a href="https://stormglass.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Stormglass.io
        </a>
      </div>
    </div>
  )
}
