export type Language = 'es' | 'en'

export const translations = {
  es: {
    // Header
    header: {
      title: 'Puerto Jiménez',
      subtitle: 'Península de Osa · Costa Rica',
      nav: {
        home: 'Inicio',
        tourism: 'Turismo',
        services: 'Servicios',
        culture: 'Cultura'
      }
    },

    // Footer
    footer: {
      title: 'Puerto Jiménez',
      subtitle: 'Corcovado • Golfo Dulce • Cultura local',
      rights: 'Hecho con 💚 desde la Península de Osa',
      developedBy: 'programado por'
    },

    // Home Page
    home: {
      hero: {
        title: 'Bienvenido a Puerto Jiménez',
        description: '🌿 Puerta de entrada al Parque Nacional Corcovado • 2.5% de la biodiversidad mundial • Península de Osa 🌊',
        badges: {
          wildlife: '🦥 Vida Silvestre',
          beaches: '🏖️ 21 Playas',
          ecotourism: '🌳 Ecoturismo'
        }
      },
      tourOperators: {
        eyebrow: 'Operadores locales',
        title: 'Tour Operadores Recomendados',
        subtitle: 'Estas opciones te ayudan a coordinar tours en Corcovado, transporte y logística de forma directa con equipos locales.',
        visitCta: 'Visitar operador',
        operators: {
          jaguar: {
            description: 'Especialistas en experiencias guiadas dentro y alrededor de Corcovado, con opciones de aventura para diferentes niveles.'
          },
          guia: {
            description: 'Operador con enfoque en guías certificados y rutas personalizadas para explorar selva, playas y fauna.'
          },
          sirena: {
            description: 'Alternativa ideal para pesca o tour de pesca en la zona, perfecta para quienes quieren una experiencia completa en una sola jornada.'
          }
        }
      },
      ui: {
        destinationLabel: 'Destino',
        destinationValue: 'Península de Osa, Costa Rica',
        focusLabel: 'Enfoque',
        focusValue: 'Naturaleza, logística y servicios locales',
        styleLabel: 'Estilo',
        styleValue: 'Serio, claro y usable',
        howToGetHereEyebrow: 'Cómo llegar',
        routeLabels: {
          land: 'Ruta terrestre',
          sea: 'Ruta marítima',
          air: 'Ruta aérea'
        },
        locationTitle: 'Ubicación',
        locationCity: 'Puerto Jiménez, Puntarenas, Costa Rica'
      },
      howToGetHere: {
        title: 'Cómo llegar',
        subtitle: 'Múltiples opciones para llegar a tu paraíso tropical',
        bus: {
          title: 'Autobús',
          sjToPj: {
            title: 'San José → Puerto Jiménez',
            departure: 'Salida: 12:00 mediodía',
            arrival: 'Llegada: ~19:00 (7 horas)',
            price: 'Precio: ₡8.500 – ₡9.000 (~$14-$16)',
            note: 'En temporada alta puede haber salida extra 6:00-8:00'
          },
          pjToSj: {
            title: 'Puerto Jiménez → San José',
            departure: 'Salida: 5:00 am',
            arrival: 'Llegada: ~19:00 (7 horas)',
            price: 'Precio: ₡8.500 – ₡9.000 (~$14-$16)',
            note: 'En festivos puede haber salida temprano 5:00-6:00'
          },
          footer: 'Llegar temprano, el bus se llena rápido. Autotransportes Blanco Lobo.'
        },
        ferry: {
          title: 'Lancha',
          weekdays: {
            title: 'Lunes a Viernes',
            pjToGolfito: 'PJZ → Golfito: 07:45 • 10:00 • 11:00 • 12:30 • 15:00',
            golfitoToPj: 'Golfito → PJZ: 06:30 • 08:45 • 11:00 • 13:00 • 16:20'
          },
          saturday: {
            title: 'Sábado',
            pjToGolfito: 'PJZ → Golfito: 07:00 • 09:30 • 14:00',
            golfitoToPj: 'Golfito → PJZ: 08:00 • 11:00 • 15:00'
          },
          sunday: {
            title: 'Domingo',
            pjToGolfito: 'PJZ → Golfito: 07:00 • 07:30',
            golfitoToPj: 'Golfito → PJZ: 10:00 • 14:00 • 15:00'
          },
          duration: 'Duración: 30-60 min',
          price: 'Precio: ₡4.000 (~$8) por tramo',
          note: 'Salidas extras en temporada alta. Pueden suspender por clima fuerte.'
        },
        plane: {
          title: 'Avioneta',
          sjToPj: {
            title: 'San José → Puerto Jiménez',
            highSeason: 'Temp. alta: 05:45 • 06:30 • 07:40 • 08:00 • 09:30 • 11:00',
            lowSeason: 'Temp. baja: 05:45 • 07:40 • 08:00'
          },
          pjToSj: {
            title: 'Puerto Jiménez → San José',
            highSeason: 'Temp. alta: 06:30 • 07:30 • 09:00 • 11:20 • 12:00',
            lowSeason: 'Temp. baja: 06:30 • 09:00 • 11:20'
          },
          duration: 'Duración: 45-55 min',
          price: 'Precio: $90-$170 (baja) • $150-$320+ (alta)',
          note: 'Reservar con anticipación en',
          link: 'https://www.flysansa.com/'
        }
      },
      usefulInfo: {
        title: 'Datos útiles',
        climate: 'Clima',
        climateValue: 'Tropical lluvioso',
        avgTemp: 'Temp. promedio',
        avgTempValue: '24-32°C',
        drySeason: 'Temporada seca',
        drySeasonValue: 'Diciembre - Abril',
        greenSeason: 'Temporada verde',
        greenSeasonValue: 'Mayo - Noviembre',
        currency: 'Moneda',
        currencyValue: 'Colón (₡) / USD acepta',
        atm: 'Cajeros ATM',
        atmValue: 'Disponibles en el pueblo',
        emergency: 'Emergencias',
        emergencyValue: '911'
      },
      quickTips: {
        title: 'Consejos rápidos',
        tips: [
          'Llevar efectivo (colones), no todos aceptan tarjetas',
          'Reservar tours a Corcovado con anticipación (cupo limitado)',
          'Traer repelente, bloqueador y ropa ligera',
          'El internet puede ser lento en zonas remotas',
          'Consultar horarios de marea para tours de kayak',
          'Las sodas cierran temprano (8-9 pm)',
          'Alquilar 4x4 si planeas explorar playas remotas'
        ]
      },
      whyVisit: {
        title: '🌟 Por qué visitar Puerto Jiménez',
        reasons: [
          {
            title: 'Biodiversidad única',
            description: 'Hogar del 2.5% de la biodiversidad mundial. Parque Nacional Corcovado, uno de los ecosistemas más diversos del planeta.'
          },
          {
            title: 'Playas vírgenes',
            description: '21 playas desde tranquilas hasta salvajes. Desde Golfo Dulce hasta el Pacífico abierto, cada una con su propia personalidad.'
          },
          {
            title: 'Vida local auténtica',
            description: 'Pueblo tranquilo con cultura costarricense auténtica. Pesca artesanal, sodas familiares y ritmo de vida pausado.'
          },
          {
            title: 'Aventuras marinas',
            description: 'Delfines, ballenas jorobadas, snorkel, kayak en manglares y bioluminiscencia nocturna en aguas calmadas.'
          },
          {
            title: 'Turismo sostenible',
            description: 'Comunidad comprometida con conservación. Lodges ecológicos, guías locales certificados y respeto por la naturaleza.'
          },
          {
            title: 'Acceso directo a Corcovado',
            description: 'Punto de entrada principal al parque. Opciones de día completo o expediciones con pernocta en estación Sirena.'
          }
        ]
      },
      sections: {
        tourism: {
          title: 'Lugares turísticos',
          description: '21 playas, Parque Nacional Corcovado, manglares, ríos, cascadas y refugios de vida silvestre.',
          cta: 'Ver todos los lugares →'
        },
        services: {
          title: 'Servicios',
          description: 'Restaurantes, hoteles, supermercados, salud, ferreterías, veterinarias y todo lo necesario.',
          cta: 'Ver directorio completo →'
        },
        culture: {
          title: 'Cultura',
          description: 'Tradiciones locales, gastronomía, música, pesca artesanal, cacao, café y vida comunitaria.',
          cta: 'Conocer la cultura →'
        }
      }
    },

    // Tourism Page
    tourism: {
      header: {
        badge: 'Lugares turísticos',
        title: 'Naturaleza y aventura en Osa',
        description: 'Playas vírgenes, selva tropical, manglares y la biodiversidad más rica de Costa Rica.',
        tags: {
          beaches: '21 playas',
          corcovado: 'Parque Nacional Corcovado',
          mangroves: 'Manglares y esteros'
        }
      },
      ui: {
        eyebrow: 'Explorar',
        badgeLabel: 'Categoría',
        focusLabel: 'Enfoque',
        focusValue: 'Senderos, playas y áreas protegidas',
        toneLabel: 'Tono',
        toneValue: 'Informativo y cercano',
        mapLabel: 'Mapa'
      },
      sites: 'sitios',
      categories: {
        beaches: 'Playas',
        corcovado: 'Parque Nacional Corcovado',
        marine: 'Áreas Marinas y Manglares',
        rivers: 'Ríos y Cascadas',
        lagoons: 'Lagunas y Humedales',
        trails: 'Senderos y Miradores',
        refuges: 'Refugios y Reservas'
      }
    },

    // Services Page
    services: {
      header: {
        badge: 'Servicios',
        title: 'Todo lo útil en Puerto Jiménez',
        description: 'Directorio completo de comercios, salud, hospedaje, logística y más para planificar tu viaje.',
        tags: {
          restaurants: 'Restaurantes y sodas',
          hotels: 'Hoteles y lodges',
          health: 'Salud y supermercados'
        }
      },
      ui: {
        eyebrow: 'Directorio',
        badgeLabel: 'Categoría',
        focusLabel: 'Enfoque',
        focusValue: 'Hospedaje, comida y servicios esenciales',
        toneLabel: 'Tono',
        toneValue: 'Práctico y estructurado',
        mapLabel: 'Mapa'
      },
      options: 'opciones',
      categories: {
        restaurants: 'Restaurantes',
        supermarkets: 'Supermercados',
        hotels: 'Hoteles / Lodges',
        tourism: 'Turismo / Tours',
        health: 'Salud',
        dental: 'Clínicas dentales',
        hardware: 'Ferreterías',
        veterinary: 'Veterinarias',
        gas: 'Gasolineras',
        other: 'Otros servicios'
      }
    },

    // Culture Page
    culture: {
      header: {
        badge: 'Cultura local',
        title: 'Cultura de Puerto Jiménez',
        subtitle: 'Vida comunitaria entre selva y mar',
        description: 'Puerto Jiménez tiene una cultura profundamente marcada por la naturaleza, la vida comunitaria y la mezcla entre tradición rural y apertura al turismo. La gente del pueblo es conocida por ser amable, relajada y acostumbrada a convivir diariamente con el entorno selvático de la Península de Osa.',
        tags: {
          gastronomy: 'Gastronomía local',
          fishing: 'Pesca artesanal',
          music: 'Música y tradiciones'
        }
      },
      ui: {
        eyebrow: 'Patrimonio',
        badgeLabel: 'Categoría',
        focusLabel: 'Enfoque',
        focusValue: 'Historia, arte y vida cotidiana',
        toneLabel: 'Tono',
        toneValue: 'Respetuoso y editorial'
      },
      aspectsTitle: 'Aspectos culturales',
      experiencesTitle: 'Experiencias culturales',
      experiencesSubtitle: 'Actividades para conectar con tradiciones y saberes locales',
      sections: {
        dailyLife: {
          title: 'Vida cotidiana',
          content: 'La vida gira en torno al mar, la pesca artesanal, la agricultura y el turismo ecológico. Es común ver pescadores saliendo al amanecer, familias trabajando en pequeñas tiendas o sodas, y guías locales compartiendo historias de la selva, del Golfo Dulce o del Parque Nacional Corcovado.'
        },
        traditions: {
          title: 'Tradiciones y comunidad',
          content: 'La comunidad mantiene costumbres sencillas: ferias del agricultor, actividades deportivas en la plaza, celebraciones patronales y encuentros en sodas o frente a la playa para conversar. La solidaridad entre vecinos y el respeto por la naturaleza definen el ambiente cálido y auténtico del pueblo.'
        },
        gastronomy: {
          title: 'Gastronomía local',
          content: 'La cocina refleja la mezcla cultural: arroz con mariscos, pescado fresco, patacones, casados, empanadas y refrescos naturales preparados con frutas locales. Todo se sirve de manera sencilla, con ese estilo casero característico de la zona rural costarricense.'
        },
        music: {
          title: 'Música y expresiones',
          content: 'La música típica —como cumbia, boleros, calipso puntarenense y música campesina— forma parte de reuniones familiares y fiestas locales. Estas expresiones culturales crean un ambiente festivo y familiar en celebraciones comunitarias.'
        },
        ancestral: {
          title: 'Conocimiento ancestral',
          content: 'La relación con la naturaleza es tan fuerte que muchos habitantes manejan conocimientos tradicionales sobre plantas, animales y clima. La presencia de comunidades indígenas cercanas y antiguos trabajadores de fincas bananeras y madereras influyó en la identidad única del pueblo.'
        },
        rhythm: {
          title: 'Ritmo de vida',
          content: 'Puerto Jiménez se caracteriza por su tranquilidad, historias de la vida en la selva y un ritmo de vida más pausado que en el resto del país. Cada visitante siente ese ambiente cálido, auténtico y cercano que define al pueblo.'
        }
      }
    }
  },
  en: {
    // Header
    header: {
      title: 'Puerto Jiménez',
      subtitle: 'Osa Peninsula · Costa Rica',
      nav: {
        home: 'Home',
        tourism: 'Tourism',
        services: 'Services',
        culture: 'Culture'
      }
    },

    // Footer
    footer: {
      title: 'Puerto Jiménez',
      subtitle: 'Corcovado • Golfo Dulce • Local Culture',
      rights: 'Made with 💚 from the Osa Peninsula',
      developedBy: 'developed by'
    },

    // Home Page
    home: {
      hero: {
        title: 'Welcome to Puerto Jiménez',
        description: '🌿 Gateway to Corcovado National Park • 2.5% of the world\'s biodiversity • Osa Peninsula 🌊',
        badges: {
          wildlife: '🦥 Wildlife',
          beaches: '🏖️ 21 Beaches',
          ecotourism: '🌳 Ecotourism'
        }
      },
      tourOperators: {
        eyebrow: 'Local operators',
        title: 'Recommended Tour Operators',
        subtitle: 'These options help you coordinate Corcovado tours, transport, and logistics directly with local teams.',
        visitCta: 'Visit operator',
        operators: {
          jaguar: {
            description: 'Specialized in guided experiences in and around Corcovado, with adventure options for different travel styles.'
          },
          guia: {
            description: 'Operator focused on certified guides and custom routes to explore rainforest, beaches, and wildlife.'
          },
          sirena: {
            description: 'Day-tour alternative focused on Sirena, ideal for travelers who want a complete experience in one day.'
          }
        }
      },
      ui: {
        destinationLabel: 'Destination',
        destinationValue: 'Osa Peninsula, Costa Rica',
        focusLabel: 'Focus',
        focusValue: 'Nature, logistics, and local services',
        styleLabel: 'Style',
        styleValue: 'Serious, clear, and usable',
        howToGetHereEyebrow: 'How to get here',
        routeLabels: {
          land: 'Land route',
          sea: 'Sea route',
          air: 'Air route'
        },
        locationTitle: 'Location',
        locationCity: 'Puerto Jiménez, Puntarenas, Costa Rica'
      },
      howToGetHere: {
        title: 'How to Get Here',
        subtitle: 'Multiple options to reach your tropical paradise',
        bus: {
          title: 'Bus',
          sjToPj: {
            title: 'San José → Puerto Jiménez',
            departure: 'Departure: 12:00 noon',
            arrival: 'Arrival: ~19:00 (7 hours)',
            price: 'Price: ₡8,500 – ₡9,000 (~$14-$16)',
            note: 'High season may have extra departure 6:00-8:00'
          },
          pjToSj: {
            title: 'Puerto Jiménez → San José',
            departure: 'Departure: 5:00 am',
            arrival: 'Arrival: ~19:00 (7 hours)',
            price: 'Price: ₡8,500 – ₡9,000 (~$14-$16)',
            note: 'Holidays may have early departure 5:00-6:00'
          },
          footer: 'Arrive early, the bus fills up quickly. Autotransportes Blanco Lobo.'
        },
        ferry: {
          title: 'Water Taxi',
          weekdays: {
            title: 'Monday to Friday',
            pjToGolfito: 'PJZ → Golfito: 07:45 • 10:00 • 11:00 • 12:30 • 15:00',
            golfitoToPj: 'Golfito → PJZ: 06:30 • 08:45 • 11:00 • 13:00 • 16:20'
          },
          saturday: {
            title: 'Saturday',
            pjToGolfito: 'PJZ → Golfito: 07:00 • 09:30 • 14:00',
            golfitoToPj: 'Golfito → PJZ: 08:00 • 11:00 • 15:00'
          },
          sunday: {
            title: 'Sunday',
            pjToGolfito: 'PJZ → Golfito: 07:00 • 07:30',
            golfitoToPj: 'Golfito → PJZ: 10:00 • 14:00 • 15:00'
          },
          duration: 'Duration: 30-60 min',
          price: 'Price: ₡4,000 (~$8) one way',
          note: 'Extra departures in high season. May suspend due to bad weather.'
        },
        plane: {
          title: 'Small Plane',
          sjToPj: {
            title: 'San José → Puerto Jiménez',
            highSeason: 'High season: 05:45 • 06:30 • 07:40 • 08:00 • 09:30 • 11:00',
            lowSeason: 'Low season: 05:45 • 07:40 • 08:00'
          },
          pjToSj: {
            title: 'Puerto Jiménez → San José',
            highSeason: 'High season: 06:30 • 07:30 • 09:00 • 11:20 • 12:00',
            lowSeason: 'Low season: 06:30 • 09:00 • 11:20'
          },
          duration: 'Duration: 45-55 min',
          price: 'Price: $90-$170 (low) • $150-$320+ (high)',
          note: 'Book in advance at',
          link: 'https://www.flysansa.com/'
        }
      },
      usefulInfo: {
        title: 'Useful Information',
        climate: 'Climate',
        climateValue: 'Tropical rainforest',
        avgTemp: 'Avg. temperature',
        avgTempValue: '24-32°C',
        drySeason: 'Dry season',
        drySeasonValue: 'December - April',
        greenSeason: 'Green season',
        greenSeasonValue: 'May - November',
        currency: 'Currency',
        currencyValue: 'Colón (₡) / USD accepted',
        atm: 'ATMs',
        atmValue: 'Available in town',
        emergency: 'Emergency',
        emergencyValue: '911'
      },
      quickTips: {
        title: 'Quick Tips',
        tips: [
          'Bring cash (colones), not all places accept cards',
          'Book Corcovado tours in advance (limited capacity)',
          'Bring repellent, sunscreen and light clothing',
          'Internet may be slow in remote areas',
          'Check tide schedules for kayak tours',
          'Sodas close early (8-9 pm)',
          'Rent 4x4 if you plan to explore remote beaches'
        ]
      },
      whyVisit: {
        title: '🌟 Why Visit Puerto Jiménez',
        reasons: [
          {
            title: 'Unique Biodiversity',
            description: 'Home to 2.5% of the world\'s biodiversity. Corcovado National Park, one of the most diverse ecosystems on the planet.'
          },
          {
            title: 'Pristine Beaches',
            description: '21 beaches from calm to wild. From Golfo Dulce to the open Pacific, each with its own personality.'
          },
          {
            title: 'Authentic Local Life',
            description: 'Quiet town with authentic Costa Rican culture. Artisanal fishing, family sodas and a slower pace of life.'
          },
          {
            title: 'Marine Adventures',
            description: 'Dolphins, humpback whales, snorkeling, mangrove kayaking and nocturnal bioluminescence in calm waters.'
          },
          {
            title: 'Sustainable Tourism',
            description: 'Community committed to conservation. Eco-lodges, certified local guides and respect for nature.'
          },
          {
            title: 'Direct Access to Corcovado',
            description: 'Main gateway to the park. Full-day options or expeditions with overnight stays at Sirena Station.'
          }
        ]
      },
      sections: {
        tourism: {
          title: 'Tourist Attractions',
          description: '21 beaches, Corcovado National Park, mangroves, rivers, waterfalls and wildlife refuges.',
          cta: 'See all places →'
        },
        services: {
          title: 'Services',
          description: 'Restaurants, hotels, supermarkets, health, hardware stores, veterinarians and everything you need.',
          cta: 'View complete directory →'
        },
        culture: {
          title: 'Culture',
          description: 'Local traditions, gastronomy, music, artisanal fishing, cacao, coffee and community life.',
          cta: 'Discover the culture →'
        }
      }
    },

    // Tourism Page
    tourism: {
      header: {
        badge: 'Tourist Attractions',
        title: 'Nature and Adventure in Osa',
        description: 'Pristine beaches, tropical rainforest, mangroves and the richest biodiversity in Costa Rica.',
        tags: {
          beaches: '21 beaches',
          corcovado: 'Corcovado National Park',
          mangroves: 'Mangroves and estuaries'
        }
      },
      ui: {
        eyebrow: 'Explore',
        badgeLabel: 'Category',
        focusLabel: 'Focus',
        focusValue: 'Trails, beaches, and protected areas',
        toneLabel: 'Tone',
        toneValue: 'Informative and grounded',
        mapLabel: 'Map'
      },
      sites: 'sites',
      categories: {
        beaches: 'Beaches',
        corcovado: 'Corcovado National Park',
        marine: 'Marine Areas and Mangroves',
        rivers: 'Rivers and Waterfalls',
        lagoons: 'Lagoons and Wetlands',
        trails: 'Trails and Viewpoints',
        refuges: 'Refuges and Reserves'
      }
    },

    // Services Page
    services: {
      header: {
        badge: 'Services',
        title: 'Everything Useful in Puerto Jiménez',
        description: 'Complete directory of businesses, health, lodging, logistics and more to plan your trip.',
        tags: {
          restaurants: 'Restaurants and sodas',
          hotels: 'Hotels and lodges',
          health: 'Health and supermarkets'
        }
      },
      ui: {
        eyebrow: 'Directory',
        badgeLabel: 'Category',
        focusLabel: 'Focus',
        focusValue: 'Stay, food, and essentials',
        toneLabel: 'Tone',
        toneValue: 'Practical and structured',
        mapLabel: 'Map'
      },
      options: 'options',
      categories: {
        restaurants: 'Restaurants',
        supermarkets: 'Supermarkets',
        hotels: 'Hotels / Lodges',
        tourism: 'Tourism / Tours',
        health: 'Health',
        dental: 'Dental clinics',
        hardware: 'Hardware stores',
        veterinary: 'Veterinarians',
        gas: 'Gas stations',
        other: 'Other services'
      }
    },

    // Culture Page
    culture: {
      header: {
        badge: 'Local Culture',
        title: 'Culture of Puerto Jiménez',
        subtitle: 'Community life between jungle and sea',
        description: 'Puerto Jiménez has a culture deeply marked by nature, community life and the blend of rural tradition and openness to tourism. The town\'s people are known for being friendly, relaxed and accustomed to living daily with the jungle environment of the Osa Peninsula.',
        tags: {
          gastronomy: 'Local gastronomy',
          fishing: 'Artisanal fishing',
          music: 'Music and traditions'
        }
      },
      ui: {
        eyebrow: 'Heritage',
        badgeLabel: 'Category',
        focusLabel: 'Focus',
        focusValue: 'History, arts, and daily life',
        toneLabel: 'Tone',
        toneValue: 'Respectful and editorial'
      },
      aspectsTitle: 'Cultural Aspects',
      experiencesTitle: 'Cultural Experiences',
      experiencesSubtitle: 'Activities to connect with local traditions and knowledge',
      sections: {
        dailyLife: {
          title: 'Daily Life',
          content: 'Life revolves around the sea, artisanal fishing, agriculture and ecotourism. It\'s common to see fishermen leaving at dawn, families working in small stores or sodas, and local guides sharing stories of the jungle, Golfo Dulce or Corcovado National Park.'
        },
        traditions: {
          title: 'Traditions and Community',
          content: 'The community maintains simple customs: farmers\' markets, sports activities in the plaza, patron saint celebrations and gatherings at sodas or by the beach to chat. Solidarity among neighbors and respect for nature define the warm and authentic atmosphere of the town.'
        },
        gastronomy: {
          title: 'Local Gastronomy',
          content: 'The cuisine reflects the cultural mix: rice with seafood, fresh fish, patacones, casados, empanadas and natural refreshments made with local fruits. Everything is served simply, with that homemade style characteristic of rural Costa Rica.'
        },
        music: {
          title: 'Music and Expressions',
          content: 'Typical music—such as cumbia, boleros, Puntarenas calypso and country music—is part of family gatherings and local festivities. These cultural expressions create a festive and familiar atmosphere in community celebrations.'
        },
        ancestral: {
          title: 'Ancestral Knowledge',
          content: 'The relationship with nature is so strong that many residents have traditional knowledge about plants, animals and climate. The presence of nearby indigenous communities and former banana and timber plantation workers influenced the unique identity of the town.'
        },
        rhythm: {
          title: 'Pace of Life',
          content: 'Puerto Jiménez is characterized by its tranquility, stories of jungle life and a slower pace of life than the rest of the country. Every visitor feels that warm, authentic and close atmosphere that defines the town.'
        }
      }
    }
  }
}
