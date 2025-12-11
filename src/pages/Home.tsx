function Home() {
  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-12 text-center text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative z-10 space-y-4">
          <div className="text-6xl mb-4">🌴🦜🌺</div>
          <h1 className="font-display text-6xl font-black drop-shadow-lg">
            Bienvenido a Puerto Jiménez
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto font-medium">
            🌿 Puerta de entrada al Parque Nacional Corcovado • 2.5% de la biodiversidad mundial • Península de Osa 🌊
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">🦥 Vida Silvestre</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">🏖️ 21 Playas</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">🌳 Ecoturismo</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            🚌 Cómo llegar
          </h2>
          <p className="text-gray-600">Múltiples opciones para llegar a tu paraíso tropical</p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <article className="soft-card p-8 space-y-4 border-l-4 border-orange-500">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl text-white text-3xl shadow-lg">
                🚌
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">Autobús</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">San José → Puerto Jiménez</p>
                <p className="text-slate-600">Salida: 12:00 mediodía</p>
                <p className="text-slate-600">Llegada: ~19:00 (7 horas)</p>
                <p className="text-slate-600">Precio: ₡8.500 – ₡9.000 (~$14-$16)</p>
                <p className="text-xs text-slate-500 mt-1">En temporada alta puede haber salida extra 6:00-8:00</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Puerto Jiménez → San José</p>
                <p className="text-slate-600">Salida: 12:00 mediodía</p>
                <p className="text-slate-600">Llegada: ~19:00 (7 horas)</p>
                <p className="text-slate-600">Precio: ₡8.500 – ₡9.000 (~$14-$16)</p>
                <p className="text-xs text-slate-500 mt-1">En festivos puede haber salida temprano 5:00-6:00</p>
              </div>
              <p className="text-xs text-slate-500 border-t border-slate-200 pt-2">Llegar temprano, el bus se llena rápido. Autotransportes Blanco Lobo.</p>
            </div>
          </article>

          <article className="soft-card p-8 space-y-4 border-l-4 border-cyan-500">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl text-white text-3xl shadow-lg">
                ⛴️
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">Ferry</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">Lunes a Viernes</p>
                <p className="text-slate-600"><strong>PJZ → Golfito:</strong> 07:45 • 10:00 • 11:00 • 12:30 • 15:00</p>
                <p className="text-slate-600"><strong>Golfito → PJZ:</strong> 06:30 • 08:45 • 11:00 • 13:00 • 16:20</p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-900">Sábado</p>
                <p className="text-slate-600"><strong>PJZ → Golfito:</strong> 07:00 • 09:30 • 14:00</p>
                <p className="text-slate-600"><strong>Golfito → PJZ:</strong> 08:00 • 11:00 • 15:00</p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-900">Domingo</p>
                <p className="text-slate-600"><strong>PJZ → Golfito:</strong> 07:00 • 07:30</p>
                <p className="text-slate-600"><strong>Golfito → PJZ:</strong> 10:00 • 14:00 • 15:00</p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="text-slate-600">Duración: 30-60 min</p>
                <p className="text-slate-600">Precio: ₡4.000 (~$8) por tramo</p>
              </div>
              <p className="text-xs text-slate-500">Salidas extras en temporada alta. Pueden suspender por clima fuerte.</p>
            </div>
          </article>

          <article className="soft-card rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white text-3xl shadow-lg">
                ✈️
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">Avión</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">San José → Puerto Jiménez</p>
                <p className="text-slate-600"><strong>Temp. alta:</strong> 05:45 • 06:30 • 07:40 • 08:00 • 09:30 • 11:00</p>
                <p className="text-slate-600"><strong>Temp. baja:</strong> 05:45 • 07:40 • 08:00</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Puerto Jiménez → San José</p>
                <p className="text-slate-600"><strong>Temp. alta:</strong> 06:30 • 07:30 • 09:00 • 11:20 • 12:00</p>
                <p className="text-slate-600"><strong>Temp. baja:</strong> 06:30 • 09:00 • 11:20</p>
              </div>
              <div className="border-t border-slate-200 pt-2">
                <p className="text-slate-600">Duración: 45-55 min</p>
                <p className="text-slate-600">Precio: $90-$170 (baja) • $150-$320+ (alta)</p>
              </div>
              <p className="text-xs text-slate-500">Reservar con anticipación. Revisar peso de equipaje (SANSA es estricta).</p>
            </div>
          </article>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="soft-card p-8 space-y-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white text-2xl shadow-lg">
              📍
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900">Datos útiles</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Clima</span>
              <span className="font-semibold text-slate-900">Tropical lluvioso</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Temp. promedio</span>
              <span className="font-semibold text-slate-900">24-32°C</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Temporada seca</span>
              <span className="font-semibold text-slate-900">Diciembre - Abril</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Temporada verde</span>
              <span className="font-semibold text-slate-900">Mayo - Noviembre</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Moneda</span>
              <span className="font-semibold text-slate-900">Colón (₡) / USD acepta</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Cajeros ATM</span>
              <span className="font-semibold text-slate-900">Disponibles en el pueblo</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-slate-600">Emergencias</span>
              <span className="font-semibold text-slate-900">911</span>
            </div>
          </div>
        </article>

        <article className="soft-card p-8 space-y-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white text-2xl shadow-lg">
              💡
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900">Consejos rápidos</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Llevar efectivo (colones), no todos aceptan tarjetas</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Reservar tours a Corcovado con anticipación (cupo limitado)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Traer repelente, bloqueador y ropa ligera</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>El internet puede ser lento en zonas remotas</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Consultar horarios de marea para tours de kayak</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Las sodas cierran temprano (8-9 pm)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>Alquilar 4x4 si planeas explorar playas remotas</span>
            </li>
          </ul>
        </article>
      </div>

      <div className="soft-card p-10 space-y-6 bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50 border-2 border-emerald-200">
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl">🌟</span>
          <h2 className="font-display text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Por qué visitar Puerto Jiménez</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🦋</div>
            <h3 className="font-bold text-lg text-emerald-700">Biodiversidad única</h3>
            <p className="text-sm text-gray-700">Hogar del 2.5% de la biodiversidad mundial. Parque Nacional Corcovado, uno de los ecosistemas más diversos del planeta.</p>
          </div>
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🏖️</div>
            <h3 className="font-bold text-lg text-cyan-700">Playas vírgenes</h3>
            <p className="text-sm text-gray-700">21 playas desde tranquilas hasta salvajes. Desde Golfo Dulce hasta el Pacífico abierto, cada una con su propia personalidad.</p>
          </div>
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-bold text-lg text-emerald-700">Vida local auténtica</h3>
            <p className="text-sm text-gray-700">Pueblo tranquilo con cultura costarricense auténtica. Pesca artesanal, sodas familiares y ritmo de vida pausado.</p>
          </div>
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🐬</div>
            <h3 className="font-bold text-lg text-blue-700">Aventuras marinas</h3>
            <p className="text-sm text-gray-700">Delfines, ballenas jorobadas, snorkel, kayak en manglares y bioluminiscencia nocturna en aguas calmadas.</p>
          </div>
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">♻️</div>
            <h3 className="font-bold text-lg text-green-700">Turismo sostenible</h3>
            <p className="text-sm text-gray-700">Comunidad comprometida con conservación. Lodges ecológicos, guías locales certificados y respeto por la naturaleza.</p>
          </div>
          <div className="space-y-2 p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🌳</div>
            <h3 className="font-bold text-lg text-emerald-700">Acceso directo a Corcovado</h3>
            <p className="text-sm text-gray-700">Punto de entrada principal al parque. Opciones de día completo o expediciones con pernocta en estación Sirena.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <a href="/turismo" className="group soft-card p-8 transition-all hover:scale-105 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
          <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl text-white text-4xl inline-block shadow-lg mb-4">
            🏖️
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900">Lugares turísticos</h3>
          <p className="mt-3 text-sm text-gray-700">21 playas, Parque Nacional Corcovado, manglares, ríos, cascadas y refugios de vida silvestre.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:gap-3 transition-all">
            Ver todos los lugares →
          </span>
        </a>
        <a href="/servicios" className="group soft-card p-8 transition-all hover:scale-105 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
          <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl text-white text-4xl inline-block shadow-lg mb-4">
            🏪
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900">Servicios</h3>
          <p className="mt-3 text-sm text-gray-700">Restaurantes, hoteles, supermercados, salud, ferreterías, veterinarias y todo lo necesario.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:gap-3 transition-all">
            Ver directorio completo →
          </span>
        </a>
        <a href="/cultura" className="group soft-card p-8 transition-all hover:scale-105 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200">
          <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white text-4xl inline-block shadow-lg mb-4">
            🎭
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900">Cultura</h3>
          <p className="mt-3 text-sm text-gray-700">Tradiciones locales, gastronomía, música, pesca artesanal, cacao, café y vida comunitaria.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:gap-3 transition-all">
            Conocer la cultura →
          </span>
        </a>
      </div>
    </div>
  )
}

export default Home
