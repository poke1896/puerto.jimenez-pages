import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

interface WeatherData {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    weather_code: number
    wind_speed_10m: number
  }
  daily: {
    uv_index_max: number[]
    precipitation_probability_max: number[]
    sunrise: string[]
    sunset: string[]
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

const formatHour = (isoDate: string, language: string) => {
  const date = new Date(isoDate)
  return date.toLocaleTimeString(language === 'es' ? 'es-CR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: language !== 'es'
  })
}

const getDailySuggestion = (
  weatherCode: number,
  uvIndex: number,
  rainProbability: number,
  language: string
) => {
  if (rainProbability >= 65) {
    return language === 'es'
      ? 'Plan recomendado: actividades bajo techo o tours cortos con capa impermeable.'
      : 'Recommended plan: indoor activities or short tours with a rain jacket.'
  }

  if (uvIndex >= 8) {
    return language === 'es'
      ? 'Plan recomendado: tours de selva temprano o al atardecer, evita sol fuerte al mediodia.'
      : 'Recommended plan: rainforest tours early or at sunset, avoid strong midday sun.'
  }

  if (weatherCode <= 3) {
    return language === 'es'
      ? 'Plan recomendado: ideal para playa, kayak o caminata larga hoy.'
      : 'Recommended plan: ideal day for beach, kayaking, or a long hike.'
  }

  return language === 'es'
    ? 'Plan recomendado: combina actividades de naturaleza con pausas en sombra.'
    : 'Recommended plan: combine nature activities with shaded breaks.'
}

export function WeatherInfo() {
  const { language } = useI18n()
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${PUERTO_JIMENEZ_LAT}&longitude=${PUERTO_JIMENEZ_LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=uv_index_max,precipitation_probability_max,sunrise,sunset&forecast_days=1&timezone=America/Costa_Rica`
        
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
      <div className="glass-card glass-card--warm p-4 md:p-6 animate-fade-in-up">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-2xl md:text-3xl animate-pulse">🌤️</div>
            <div>
                <p className="text-xs md:text-sm text-sand/70">
                {language === 'es' ? 'Clima' : 'Weather'}
              </p>
              <p className="text-sm font-semibold text-slate-200">
                {language === 'es' ? 'Cargando...' : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const uvToday = Math.round(weather.daily.uv_index_max[0] ?? 0)
  const rainProbToday = Math.round(weather.daily.precipitation_probability_max[0] ?? 0)
  const sunrise = weather.daily.sunrise[0] ? formatHour(weather.daily.sunrise[0], language) : '--:--'
  const sunset = weather.daily.sunset[0] ? formatHour(weather.daily.sunset[0], language) : '--:--'
  const suggestion = getDailySuggestion(
    weather.current.weather_code,
    uvToday,
    rainProbToday,
    language
  )

  return (
    <div className="glass-card glass-card--warm animate-fade-in-up p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-3xl md:text-4xl">
            {getWeatherIcon(weather.current.weather_code)}
          </div>
          <div>
            <p className="text-xs font-semibold text-sand/70 md:text-sm">
              {language === 'es' ? 'Clima Actual' : 'Current Weather'}
            </p>
            <p className="text-sm font-medium text-slate-200">
              {getWeatherDescription(weather.current.weather_code, language)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-sun md:text-3xl">
              {Math.round(weather.current.temperature_2m)}°
            </p>
            <p className="text-xs text-sand/70">{language === 'es' ? 'Temp' : 'Temp'}</p>
          </div>

          <div className="border-l border-white/10 pl-3 text-center md:pl-4">
            <p className="text-base font-semibold text-sea md:text-lg">
              {weather.current.relative_humidity_2m}%
            </p>
            <p className="text-xs text-sand/70">
              {language === 'es' ? 'Humedad' : 'Humidity'}
            </p>
          </div>

          <div className="border-l border-white/10 pl-3 text-center md:pl-4">
            <p className="text-base font-semibold text-sea md:text-lg">
              {Math.round(weather.current.wind_speed_10m)}
            </p>
            <p className="text-xs text-sand/70">km/h</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand/70">UV max</p>
            <p className="mt-1 text-base font-bold text-sun">{uvToday}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand/70">
              {language === 'es' ? 'Lluvia' : 'Rain chance'}
            </p>
            <p className="mt-1 text-base font-bold text-sea">{rainProbToday}%</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand/70">
              {language === 'es' ? 'Amanecer' : 'Sunrise'}
            </p>
            <p className="mt-1 text-base font-bold text-sand">{sunrise}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand/70">
              {language === 'es' ? 'Atardecer' : 'Sunset'}
            </p>
            <p className="mt-1 text-base font-bold text-sun">{sunset}</p>
          </div>
        </div>

      <div className="mt-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand/70">
          {language === 'es' ? 'Tip para hoy' : 'Today tip'}
        </p>
        <p className="mt-1 text-sm text-slate-200">{suggestion}</p>
      </div>
    </div>
  )
}
