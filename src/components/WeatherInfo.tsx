import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

interface WeatherData {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    weather_code: number
    wind_speed_10m: number
  }
}

// Coordenadas de Puerto Jiménez
const PUERTO_JIMENEZ_LAT = 8.5334
const PUERTO_JIMENEZ_LON = -83.3187

const getWeatherIcon = (code: number) => {
  if (code === 0) return '☀️'
  if (code <= 3) return '🌤️'
  if (code <= 48) return '☁️'
  if (code <= 67) return '🌧️'
  if (code <= 77) return '🌨️'
  if (code <= 82) return '🌦️'
  if (code <= 99) return '⛈️'
  return '🌤️'
}

const getWeatherDescription = (code: number, language: string) => {
  const descriptions: { [key: number]: { es: string; en: string } } = {
    0: { es: 'Despejado', en: 'Clear sky' },
    1: { es: 'Mayormente despejado', en: 'Mainly clear' },
    2: { es: 'Parcialmente nublado', en: 'Partly cloudy' },
    3: { es: 'Nublado', en: 'Overcast' },
    45: { es: 'Neblina', en: 'Foggy' },
    48: { es: 'Niebla', en: 'Depositing rime fog' },
    51: { es: 'Llovizna ligera', en: 'Light drizzle' },
    53: { es: 'Llovizna moderada', en: 'Moderate drizzle' },
    55: { es: 'Llovizna intensa', en: 'Dense drizzle' },
    61: { es: 'Lluvia ligera', en: 'Slight rain' },
    63: { es: 'Lluvia moderada', en: 'Moderate rain' },
    65: { es: 'Lluvia intensa', en: 'Heavy rain' },
    80: { es: 'Chubascos ligeros', en: 'Slight rain showers' },
    81: { es: 'Chubascos moderados', en: 'Moderate rain showers' },
    82: { es: 'Chubascos violentos', en: 'Violent rain showers' },
    95: { es: 'Tormenta', en: 'Thunderstorm' },
    96: { es: 'Tormenta con granizo', en: 'Thunderstorm with hail' },
    99: { es: 'Tormenta severa', en: 'Severe thunderstorm' }
  }
  
  const desc = descriptions[code] || descriptions[0]
  return language === 'es' ? desc.es : desc.en
}

export function WeatherInfo() {
  const { language } = useI18n()
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${PUERTO_JIMENEZ_LAT}&longitude=${PUERTO_JIMENEZ_LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=America/Costa_Rica`
        
        const response = await fetch(url)
        const data = await response.json()
        
        setWeather(data)
      } catch (err) {
        console.error('Error fetching weather data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading || !weather) {
    return (
        <div className="soft-card p-4 md:p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 animate-fade-in-up">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-2xl md:text-3xl animate-pulse">🌤️</div>
            <div>
                <p className="text-xs md:text-sm text-gray-500">
                {language === 'es' ? 'Clima' : 'Weather'}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                {language === 'es' ? 'Cargando...' : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className="soft-card p-4 md:p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 animate-fade-in-up hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-3xl md:text-4xl">
            {getWeatherIcon(weather.current.weather_code)}
          </div>
          <div>
              <p className="text-xs md:text-sm text-gray-500 font-semibold">
              {language === 'es' ? 'Clima Actual' : 'Current Weather'}
            </p>
            <p className="text-sm font-medium text-gray-700">
              {getWeatherDescription(weather.current.weather_code, language)}
            </p>
          </div>
        </div>
        
          <div className="flex items-center gap-3 md:gap-4">
          <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-orange-600">
              {Math.round(weather.current.temperature_2m)}°
            </p>
            <p className="text-xs text-gray-500">
              {language === 'es' ? 'Temp' : 'Temp'}
            </p>
          </div>
          
            <div className="text-center border-l border-gray-300 pl-3 md:pl-4">
              <p className="text-base md:text-lg font-semibold text-blue-600">
              {weather.current.relative_humidity_2m}%
            </p>
            <p className="text-xs text-gray-500">
              {language === 'es' ? 'Humedad' : 'Humidity'}
            </p>
          </div>
          
            <div className="text-center border-l border-gray-300 pl-3 md:pl-4">
              <p className="text-base md:text-lg font-semibold text-teal-600">
              {Math.round(weather.current.wind_speed_10m)}
            </p>
            <p className="text-xs text-gray-500">km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
