export type Item = {
  title: string
  area: string
  summary: string
  detail: string
}

export type TouristCategory = {
  category: string
  icon: string
  places: Array<{
    name: string
    description: string
    lat?: number
    lng?: number
  }>
}

export const touristSpots: TouristCategory[] = [
  {
    category: 'Playas',
    icon: '🏖️',
    places: [
      { name: 'Playa Preciosa (Platanares)', description: 'Amplia, tranquila, perfecta para caminatas y avistamiento de aves.', lat: 8.5167, lng: -83.3000 },
      { name: 'Playa Pan Dulce', description: 'Famosa por su oleaje suave y apto para surfistas principiantes.', lat: 8.4667, lng: -83.2833 },
      { name: 'Playa Matapalo (Cabo Matapalo)', description: 'Playa salvaje rodeada de selva, excelente para naturaleza y surf.', lat: 8.3950, lng: -83.2700 },
      { name: 'Playa Sombrero', description: 'Popular para surf y para pasar el día en un ambiente natural.', lat: 8.4200, lng: -83.2750 },
      { name: 'Playa Tamales', description: 'Playa aislada y silenciosa, perfecta para ver atardeceres.', lat: 8.4500, lng: -83.2800 },
      { name: 'Playa Carate', description: 'Amplia, salvaje y punto de acceso al Parque Nacional Corcovado.', lat: 8.4217, lng: -83.4467 },
      { name: 'Playa Carbonera', description: 'Tranquila y poco visitada, ideal para caminatas largas.', lat: 8.4300, lng: -83.4300 },
      { name: 'Playa Río Oro', description: 'Playa extensa junto al río, excelente para avistamiento de fauna.', lat: 8.4100, lng: -83.4200 },
      { name: 'Playa Piro', description: 'Aislada y rodeada de selva, perfecta para desconectar.', lat: 8.3800, lng: -83.4100 },
      { name: 'Playa Pejeperro', description: 'Con olas fuertes y paisaje virgen, recomendada para exploradores.', lat: 8.3600, lng: -83.4000 },
      { name: 'Playa Puntarenitas', description: 'Pequeña y acogedora, con aguas calmadas dentro del Golfo Dulce.', lat: 8.5400, lng: -83.3100 },
      { name: 'Playa Sándalo', description: 'Playa aislada al sur de la península, ideal para quienes buscan naturaleza virgen.', lat: 8.3400, lng: -83.3800 },
      { name: 'Playa Blanca (Golfo Dulce)', description: 'Aguas mansas y arena clara, excelente para bañarse.', lat: 8.6100, lng: -83.3300 },
      { name: 'Playa San Josecito', description: 'Muy apreciada por snorkel, aguas claras y arrecifes cercanos.', lat: 8.6000, lng: -83.3400 },
      { name: 'Playa Cocalito', description: 'Playa remota con arena oscura y un ambiente selvático.', lat: 8.5800, lng: -83.3500 },
      { name: 'Playa Caletas', description: 'Aislada, con oleaje suave y buenas zonas sombreadas.', lat: 8.5700, lng: -83.3600 },
      { name: 'Playa Rincón', description: 'Especial para kayak, pesca y ver delfines en el Golfo Dulce.', lat: 8.5600, lng: -83.3400 },
      { name: 'Playa Mogos', description: 'Cálida y tranquila, rodeada de manglares y naturaleza.', lat: 8.5300, lng: -83.3200 },
      { name: 'Playa Zancudo', description: 'Larguísima y plana, perfecta para caminar kilómetros (cercana).', lat: 8.3800, lng: -83.1400 },
      { name: 'Playa Pavones', description: 'Famosa por tener una de las olas izquierdas más largas del mundo.', lat: 8.2667, lng: -83.1333 },
    ],
  },
  {
    category: 'Parque Nacional Corcovado',
    icon: '🌳',
    places: [
      { name: 'Estación Sirena', description: 'Corazón del parque, con la mayor concentración de fauna.', lat: 8.4783, lng: -83.6167 },
      { name: 'Estación La Leona', description: 'Entrada popular para caminatas por playa y selva.', lat: 8.4300, lng: -83.4467 },
      { name: 'Estación San Pedrillo', description: 'Entrada norte del parque, famosa por cascadas y senderos.', lat: 8.6217, lng: -83.7583 },
      { name: 'Estación Los Patos', description: 'Ruta más selvática del parque, rodeada de bosque primario.', lat: 8.5300, lng: -83.5500 },
      { name: 'Sendero a Corcovado (Punta de Lanza)', description: 'Punto de partida hacia la selva del Parque Nacional Corcovado.', lat: 8.4500, lng: -83.4800 },
    ],
  },
  {
    category: 'Áreas Marinas y Manglares',
    icon: '🐬',
    places: [
      { name: 'Golfo Dulce', description: 'Área marina calmada donde se observan delfines, aves y fauna marina.', lat: 8.5500, lng: -83.3300 },
      { name: 'Manglares de Puerto Jiménez', description: 'Ecosistema ideal para tours de kayak y observación de aves.', lat: 8.5334, lng: -83.3187 },
      { name: 'Estuario Cañaza', description: 'Zona de manglares perfecta para kayak y observación de vida marina y aves.', lat: 8.5200, lng: -83.3000 },
    ],
  },
  {
    category: 'Ríos y Cascadas',
    icon: '💧',
    places: [
      { name: 'Río Nuevo', description: 'Zona para caminatas cortas y encuentros con fauna de río.' },
      { name: 'Río Tigre', description: 'Lugar popular para caminatas, observación de aves y pozas naturales.' },
      { name: 'Cascada Río Tigre', description: 'Pequeñas cascadas en zona de selva accesibles desde senderos locales.' },
      { name: 'Cabo Matapalo Cascadas', description: 'Pequeñas cascadas naturales rodeadas de vegetación tropical.' },
      { name: 'Cascada San Pedrillo', description: 'Una de las más conocidas dentro del parque, accesible por sendero.' },
    ],
  },
  {
    category: 'Lagunas y Humedales',
    icon: '🦆',
    places: [
      { name: 'Laguna Pejeperro', description: 'Humedal natural donde se observa vida silvestre y paisaje tranquilo.' },
      { name: 'Laguna Piro', description: 'Humedal natural donde se observa mucha vida silvestre.' },
      { name: 'Laguna Chocuaco', description: 'Humedal tranquilo ideal para observar aves acuáticas.' },
    ],
  },
  {
    category: 'Senderos y Miradores',
    icon: '🥾',
    places: [
      { name: 'Sendero El Ñeque', description: 'Sendero corto para ver fauna pequeña como ñeques y aves.' },
      { name: 'Mirador de Cabo Matapalo', description: 'Punto natural con vistas al Golfo Dulce y al Pacífico.' },
    ],
  },
  {
    category: 'Refugios y Reservas',
    icon: '🦜',
    places: [
      { name: 'Refugio de Vida Silvestre Golfo Dulce', description: 'Zona protegida para observación de aves y fauna salvaje.' },
      { name: 'Reserva Forestal Golfito', description: 'Bosque lluvioso con senderos y vistas panorámicas (cercano).' },
    ],
  },
]

export type ServiceCategory = {
  category: string
  icon: string
  items: string[]
}

export const serviceSpots: ServiceCategory[] = [
  {
    category: 'Restaurantes',
    icon: '🍽️',
    items: [
      'Soda Jiménez',
      'Marisquería Corcovado',
      'Aventuras Café',
      'Pizzamail.it',
      'Los Delfines',
      'Driza Bar & Grill',
    ],
  },
  {
    category: 'Supermercados',
    icon: '🛒',
    items: [
      'BM Puerto Jiménez',
      'BM Corcovado',
      'Mercado Prolos',
      'Abarrotes locales',
    ],
  },
  {
    category: 'Hoteles / Lodges',
    icon: '🏨',
    items: [
      'Blue Osa Yoga Retreat & Spa',
      'Lapa Rios Lodge',
      'Botánika Osa Peninsula',
      'Cabañas y hostales locales',
    ],
  },
  {
    category: 'Turismo / Tours',
    icon: '🌴',
    items: [
      'Operadores de tours a Corcovado',
      'Tours de pesca deportiva',
      'Tours de kayak y senderismo',
    ],
  },
  {
    category: 'Salud',
    icon: '🏥',
    items: [
      'EBAIS Puerto Jiménez',
      'Hospital de Golfito (referencia)',
      'Clínicas médicas locales',
    ],
  },
  {
    category: 'Clínicas dentales',
    icon: '🦷',
    items: [
      'Consultorios dentales locales',
    ],
  },
  {
    category: 'Ferreterías',
    icon: '🔨',
    items: [
      'Materiales Puerto Jiménez',
      'Depósito Jiménez',
    ],
  },
  {
    category: 'Veterinarias',
    icon: '🐾',
    items: [
      'Clínica Veterinaria OsaVet',
    ],
  },
  {
    category: 'Gasolineras',
    icon: '⛽',
    items: [
      'Bomba Osa',
    ],
  },
  {
    category: 'Otros servicios',
    icon: '🏪',
    items: [
      'Farmacias locales',
      'Talleres mecánicos',
      'Tiendas de conveniencia',
      'Panaderías locales',
      'Cajeros automáticos',
      'Aeropuerto de Puerto Jiménez',
    ],
  },
]

export type CultureSection = {
  title: string
  icon: string
  content: string
}

export type CultureActivity = {
  name: string
  location: string
  description: string
}

export const cultureIntro = {
  title: 'Cultura de Puerto Jiménez',
  subtitle: 'Vida comunitaria entre selva y mar',
  description: 'Puerto Jiménez tiene una cultura profundamente marcada por la naturaleza, la vida comunitaria y la mezcla entre tradición rural y apertura al turismo. La gente del pueblo es conocida por ser amable, relajada y acostumbrada a convivir diariamente con el entorno selvático de la Península de Osa.',
}

export const cultureSections: CultureSection[] = [
  {
    title: 'Vida cotidiana',
    icon: '🌅',
    content: 'La vida gira en torno al mar, la pesca artesanal, la agricultura y el turismo ecológico. Es común ver pescadores saliendo al amanecer, familias trabajando en pequeñas tiendas o sodas, y guías locales compartiendo historias de la selva, del Golfo Dulce o del Parque Nacional Corcovado.',
  },
  {
    title: 'Tradiciones y comunidad',
    icon: '🎉',
    content: 'La comunidad mantiene costumbres sencillas: ferias del agricultor, actividades deportivas en la plaza, celebraciones patronales y encuentros en sodas o frente a la playa para conversar. La solidaridad entre vecinos y el respeto por la naturaleza definen el ambiente cálido y auténtico del pueblo.',
  },
  {
    title: 'Gastronomía local',
    icon: '🍽️',
    content: 'La cocina refleja la mezcla cultural: arroz con mariscos, pescado fresco, patacones, casados, empanadas y refrescos naturales preparados con frutas locales. Todo se sirve de manera sencilla, con ese estilo casero característico de la zona rural costarricense.',
  },
  {
    title: 'Música y expresiones',
    icon: '🎵',
    content: 'La música típica —como cumbia, boleros, calipso puntarenense y música campesina— forma parte de reuniones familiares y fiestas locales. Estas expresiones culturales crean un ambiente festivo y familiar en celebraciones comunitarias.',
  },
  {
    title: 'Conocimiento ancestral',
    icon: '🌿',
    content: 'La relación con la naturaleza es tan fuerte que muchos habitantes manejan conocimientos tradicionales sobre plantas, animales y clima. La presencia de comunidades indígenas cercanas y antiguos trabajadores de fincas bananeras y madereras influyó en la identidad única del pueblo.',
  },
  {
    title: 'Ritmo de vida',
    icon: '⏰',
    content: 'Puerto Jiménez se caracteriza por su tranquilidad, historias de la vida en la selva y un ritmo de vida más pausado que en el resto del país. Cada visitante siente ese ambiente cálido, auténtico y cercano que define al pueblo.',
  },
]

export const cultureActivities: CultureActivity[] = [
  {
    name: 'Cacao y chocolate artesanal',
    location: 'Fincas locales',
    description: 'Del árbol a la barra con productores de la zona. Degustaciones, tostado y molienda artesanal en visitas de 2 horas.',
  },
  {
    name: 'Pesca artesanal',
    location: 'Muelle y Golfo Dulce',
    description: 'Salidas cortas con pescadores locales. Aprende técnicas tradicionales y degusta el fileteado del día.',
  },
  {
    name: 'Café de altura',
    location: 'La Palma',
    description: 'Microbeneficios con catas y métodos filtrados. Recorrido breve por proceso de beneficio y cata guiada.',
  },
  {
    name: 'Feria del agricultor',
    location: 'Parque central',
    description: 'Feria quincenal con productos locales, artesanías de madera y semillas, música en vivo y alimentos caseros.',
  },
  {
    name: 'Cocina tradicional',
    location: 'Sodas locales',
    description: 'Aprende a preparar casados, patacones y ceviches con recetas familiares transmitidas por generaciones.',
  },
  {
    name: 'Artesanías en madera',
    location: 'Talleres locales',
    description: 'Tallado tradicional con maderas de la región. Piezas únicas hechas por artesanos independientes.',
  },
]

export const quickFacts = [
  { label: 'Corcovado', value: 'Permiso + guía' },
  { label: 'Golfo Dulce', value: 'Kayak / delfines' },
  { label: 'Servicios', value: 'Hospedaje y traslados' },
  { label: 'Cultura', value: 'Cacao, café, pesca' },
]