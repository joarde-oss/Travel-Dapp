export type Trip = {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  longDescription: string
  longDescriptionEn: string
  durationDays: number
  location: string
  locationEn: string
  highlights: string[]
  highlightsEn: string[]
  sustainability: string[]
  sustainabilityEn: string[]
  includes: string[]
  includesEn: string[]
  excludes: string[]
  excludesEn: string[]
  priceEth: string
  imageUrls: string[]
}

export const trips: Trip[] = [
  {
    id: 'coast-eco-01',
    name: 'Costa Verde Experience',
    nameEn: 'Costa Verde Experience',
    description: 'Weekend in resort eco-friendly con tour marino e cucina locale.',
    descriptionEn: 'Eco-friendly resort weekend with marine tour and local cuisine.',
    longDescription:
      'Due giorni di relax sul mare con un mix equilibrato tra natura e comfort. Soggiorni in un eco-resort certificato, partecipi a un tour in barca a basso impatto e scopri i sapori della costa con una cena a filiera corta.',
    longDescriptionEn:
      'Two days of seaside relaxation with a balanced mix of nature and comfort. Stay in a certified eco-resort, join a low-impact boat tour, and discover coastal flavors with a short-supply-chain dinner.',
    durationDays: 3,
    location: 'Riviera del Conero, Italia',
    locationEn: 'Conero Riviera, Italy',
    highlights: [
      'Tour marino con guida locale',
      'Degustazione di pescato sostenibile',
      'Spiagge a numero chiuso e calette protette',
      'Relax in spa naturale',
    ],
    highlightsEn: [
      'Guided marine tour',
      'Sustainable seafood tasting',
      'Limited-access beaches and protected coves',
      'Relax in a natural spa',
    ],
    sustainability: [
      'Partner certificati con politiche plastic-free',
      'Trasferimenti condivisi a basso impatto',
      'Supporto a cooperative di pescatori locali',
    ],
    sustainabilityEn: [
      'Certified partners with plastic-free policies',
      'Low-impact shared transfers',
      'Support for local fishing cooperatives',
    ],
    includes: [
      'Soggiorno in eco-resort con colazione',
      'Tour in barca a basso impatto',
      'Cena a filiera corta',
      'Assistenza locale 24/7',
    ],
    includesEn: [
      'Eco-resort stay with breakfast',
      'Low-impact boat tour',
      'Short-supply-chain dinner',
      '24/7 local assistance',
    ],
    excludes: [
      'Trasferimenti da/per la localita',
      'Bevande extra ai pasti',
      'Assicurazione viaggio',
    ],
    excludesEn: [
      'Transfers to/from the location',
      'Extra drinks at meals',
      'Travel insurance',
    ],
    priceEth: '0.08',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Baia%20Portonovo%20from%20Conero.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Riviera%20del%20Conero,%20Sirolo%20beach.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ancona-Vista%20Portonovo.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Portonovo%20-%20Riviera%20del%20Conero.jpg?width=1200',
    ],
  },
  {
    id: 'alp-escape-02',
    name: 'Alpi Slow Escape',
    nameEn: 'Alps Slow Escape',
    description: '3 notti in baita, trekking guidato e degustazione a km 0.',
    descriptionEn: '3 nights in a cabin, guided trekking, and farm-to-table tasting.',
    longDescription:
      'Un viaggio lento nel cuore delle Alpi con escursioni guidate, cucina di montagna e pernottamenti in una baita off-grid alimentata da fonti rinnovabili. Ideale per chi vuole respirare aria pulita e ritrovare il ritmo naturale.',
    longDescriptionEn:
      'A slow journey in the heart of the Alps with guided hikes, mountain cuisine, and nights in an off-grid cabin powered by renewables. Ideal for anyone seeking clean air and a natural rhythm.',
    durationDays: 4,
    location: 'Val di Funes, Alto Adige',
    locationEn: 'Val di Funes, South Tyrol',
    highlights: [
      'Trekking panoramico al tramonto',
      'Baita con energia rinnovabile',
      'Degustazione di prodotti a km 0',
      'Sessione di mindfulness in quota',
    ],
    highlightsEn: [
      'Sunset panoramic trek',
      'Cabin powered by renewable energy',
      'Farm-to-table tasting',
      'High-altitude mindfulness session',
    ],
    sustainability: [
      'Strutture a energia rinnovabile',
      'Cucina con fornitori locali',
      'Guide ambientali certificate',
    ],
    sustainabilityEn: [
      'Renewable-energy accommodations',
      'Cuisine sourced from local suppliers',
      'Certified environmental guides',
    ],
    includes: [
      '3 notti in baita con colazione',
      'Trekking guidato con guida ambientale',
      'Degustazione a km 0',
      'Kit escursione',
    ],
    includesEn: [
      '3 nights in a cabin with breakfast',
      'Guided trek with environmental guide',
      'Farm-to-table tasting',
      'Hiking kit',
    ],
    excludes: [
      'Trasporto da/per la valle',
      'Pranzi in rifugio',
      'Noleggio attrezzatura tecnica',
    ],
    excludesEn: [
      'Transport to/from the valley',
      'Mountain hut lunches',
      'Technical gear rental',
    ],
    priceEth: '0.12',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gruppo%20delle%20Odle%20from%20St%20Magdalena,%20Trentino-Alto%20Adige,%20Italy,%202025%20October.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/I11%20140%20Zanseralm,%20Zendleser%20Kofel.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/I11%20129%20St.%20Peter.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Maddalena%20Funes.jpg?width=1200',
    ],
  },
  {
    id: 'city-green-03',
    name: 'City Green Weekend',
    nameEn: 'City Green Weekend',
    description: "Città d'arte, bike tour e hotel a impatto ridotto.",
    descriptionEn: 'Art city, bike tour, and low-impact hotel.',
    longDescription:
      'Un weekend urbano pensato per chi ama la cultura senza rinunciare alla sostenibilità. Visite guidate a piedi e in bici, hotel con certificazioni green e degustazioni in locali che lavorano solo con produttori del territorio.',
    longDescriptionEn:
      'An urban weekend for culture lovers who value sustainability. Guided walks and bike tours, green-certified hotels, and tastings in venues that work only with local producers.',
    durationDays: 2,
    location: 'Bologna, Italia',
    locationEn: 'Bologna, Italy',
    highlights: [
      'Bike tour nei quartieri storici',
      'Musei con accesso dedicato',
      'Food tour con prodotti locali',
    ],
    highlightsEn: [
      'Bike tour through historic districts',
      'Museums with dedicated access',
      'Local food tour',
    ],
    sustainability: [
      'Mobilità dolce e trasporti pubblici',
      'Hotel con certificazione ambientale',
      'Supporto a botteghe indipendenti',
    ],
    sustainabilityEn: [
      'Soft mobility and public transport',
      'Eco-certified hotels',
      'Support for independent local shops',
    ],
    includes: [
      'Hotel green con colazione',
      'Bike tour guidato',
      'Pass musei selezionati',
      'Supporto concierge locale',
    ],
    includesEn: [
      'Green hotel with breakfast',
      'Guided bike tour',
      'Selected museum pass',
      'Local concierge support',
    ],
    excludes: [
      'Trasporto urbano extra',
      'Pasti non indicati',
      'Ingressi speciali non inclusi nel pass',
    ],
    excludesEn: [
      'Extra urban transport',
      'Meals not listed',
      'Special entries not included in the pass',
    ],
    priceEth: '0.001',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna,%20Piazza%20Re%20Enzo.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna,%20Piazza%20della%20Mercanzia%20%281%29.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna,%20Via%20degli%20Orefici%20%281%29.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna-piazza%20maggiore.jpg?width=1200',
    ],
  },
  {
    id: 'island-blue-04',
    name: 'Isola Blu Retreat',
    nameEn: 'Blue Island Retreat',
    description: '4 giorni tra calette segrete, snorkeling e yoga al tramonto.',
    descriptionEn: '4 days of hidden coves, snorkeling, and sunset yoga.',
    longDescription:
      'Una fuga su un’isola mediterranea con ritmi lenti e mare cristallino. Yoga serale, snorkeling guidato nelle aree marine protette e picnic con prodotti biologici selezionati dai mercati locali.',
    longDescriptionEn:
      'A Mediterranean island escape with slow rhythms and crystal-clear waters. Evening yoga, guided snorkeling in protected marine areas, and picnics with organic products from local markets.',
    durationDays: 5,
    location: 'Isola di Favignana, Italia',
    locationEn: 'Favignana Island, Italy',
    highlights: [
      'Sessioni di yoga al tramonto',
      'Snorkeling con biologo marino',
      'Cene con prodotti bio',
      'Escursione in e-bike',
    ],
    highlightsEn: [
      'Sunset yoga sessions',
      'Snorkeling with a marine biologist',
      'Organic dinners',
      'E-bike excursion',
    ],
    sustainability: [
      'Escursioni in aree marine protette',
      'Supporto a produttori biologici locali',
      'Riduzione delle emissioni con e-bike',
    ],
    sustainabilityEn: [
      'Excursions in protected marine areas',
      'Support for local organic producers',
      'Reduced emissions with e-bikes',
    ],
    includes: [
      'Alloggio 4 notti con colazione',
      'Snorkeling guidato',
      'Sessioni di yoga',
      'Noleggio e-bike per 1 giorno',
    ],
    includesEn: [
      '4-night stay with breakfast',
      'Guided snorkeling',
      'Yoga sessions',
      '1-day e-bike rental',
    ],
    excludes: [
      'Trasferimenti da/per l’isola',
      'Cene e bevande extra',
      'Attivita opzionali in barca',
    ],
    excludesEn: [
      'Transfers to/from the island',
      'Dinners and extra drinks',
      'Optional boat activities',
    ],
    priceEth: '0.15',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Favignana%20Cala%20Rossa%203%20-%20panoramio.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Favignana%20beach.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Favignana%20dall%27alto.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Favignana%20cala%20azzurra.jpg?width=1200',
    ],
  },
  {
    id: 'forest-quiet-05',
    name: 'Foresta e Silenzio',
    nameEn: 'Forest & Silence',
    description: 'Micro-avventura in foresta con rifugio in legno e sauna.',
    descriptionEn: 'Forest micro-adventure with wooden lodge and sauna.',
    longDescription:
      'Un rifugio immerso nel verde per staccare dal ritmo della città. Passeggiate nel bosco, sauna in legno e rituali di benessere ispirati alle tradizioni nordiche, con attenzione all’impatto ambientale.',
    longDescriptionEn:
      'A retreat surrounded by greenery to disconnect from city life. Forest walks, a wooden sauna, and wellness rituals inspired by Nordic traditions, with attention to environmental impact.',
    durationDays: 3,
    location: 'Foresta del Casentino, Toscana',
    locationEn: 'Casentino Forest, Tuscany',
    highlights: [
      'Percorsi nel bosco con guida',
      'Rifugio in legno con vista',
      'Sauna e rituali di benessere',
    ],
    highlightsEn: [
      'Guided forest trails',
      'Wooden lodge with a view',
      'Sauna and wellness rituals',
    ],
    sustainability: [
      'Rifugi costruiti con materiali locali',
      'Supporto a guide e artigiani del territorio',
      'Riduzione dei consumi con comfort essenziale',
    ],
    sustainabilityEn: [
      'Lodges built with local materials',
      'Support for local guides and artisans',
      'Reduced consumption with essential comfort',
    ],
    includes: [
      'Rifugio 2 notti con colazione',
      'Sessione sauna',
      'Passeggiata guidata nel bosco',
      'Tisane e wellness kit',
    ],
    includesEn: [
      '2-night lodge stay with breakfast',
      'Sauna session',
      'Guided forest walk',
      'Herbal teas and wellness kit',
    ],
    excludes: [
      'Trasporto da/per la foresta',
      'Massaggi e trattamenti extra',
      'Cene non incluse',
    ],
    excludesEn: [
      'Transport to/from the forest',
      'Extra massages and treatments',
      'Dinners not included',
    ],
    priceEth: '0.10',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Acquacheta%20waterfalls.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Al%20calar%20del%20sole%20nella%20faggeta.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Appenines-from-monte-Falterona2.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Wle%20parco%20delle%20foreste%20casentinesi%202.jpg?width=1200',
    ],
  },
  {
    id: 'desert-light-06',
    name: 'Deserto di Luce',
    nameEn: 'Desert of Light',
    description: 'Campo tendato, osservazione stelle e cena nomade.',
    descriptionEn: 'Tent camp, stargazing, and a nomad dinner.',
    longDescription:
      'Un’esperienza in un campo tendato nel deserto per riscoprire la bellezza del silenzio. Serate di osservazione astronomica, cucina tradizionale e passeggiate guidate tra dune e oasi.',
    longDescriptionEn:
      'An experience in a desert tent camp to rediscover the beauty of silence. Evenings of stargazing, traditional cuisine, and guided walks among dunes and oases.',
    durationDays: 4,
    location: 'Erg Chebbi, Marocco',
    locationEn: 'Erg Chebbi, Morocco',
    highlights: [
      'Osservazione stelle con guida',
      'Cena nomade sotto le dune',
      'Alba nel deserto',
    ],
    highlightsEn: ['Guided stargazing', 'Nomad dinner under the dunes', 'Desert sunrise'],
    sustainability: [
      'Campo a basso impatto energetico',
      'Collaborazione con comunità nomadi',
      'Acqua e risorse gestite in modo responsabile',
    ],
    sustainabilityEn: [
      'Low-impact energy camp',
      'Collaboration with nomad communities',
      'Water and resources managed responsibly',
    ],
    includes: [
      'Campo tendato con mezza pensione',
      'Osservazione stelle con guida',
      'Passeggiata all’alba',
      'Tè tradizionale',
    ],
    includesEn: [
      'Tent camp with half board',
      'Guided stargazing',
      'Sunrise walk',
      'Traditional tea',
    ],
    excludes: [
      'Volo o trasferimenti lunghi',
      'Bevande premium',
      'Attivita private su richiesta',
    ],
    excludesEn: [
      'Flights or long transfers',
      'Premium drinks',
      'Private activities on request',
    ],
    priceEth: '0.14',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Marokko%20Erg%20Chebbi.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Erg%20Chebbi9%20%28js%29.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/ErgChebbi.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dunes-Merzouga-Erg%20Chebi.JPG?width=1200',
    ],
  },
  {
    id: 'north-america-07',
    name: 'Northern Trails',
    nameEn: 'Northern Trails',
    description: 'Parchi nazionali, lodge panoramici e wildlife tour.',
    descriptionEn: 'National parks, scenic lodges, and wildlife tours.',
    longDescription:
      'Un itinerario tra laghi glaciali e foreste alpine nel Nord America. Soggiorni in lodge sostenibili, escursioni guidate all’alba e momenti di relax in acque termali naturali.',
    longDescriptionEn:
      'An itinerary among glacial lakes and alpine forests in North America. Stays in sustainable lodges, sunrise guided hikes, and relaxing moments in natural hot springs.',
    durationDays: 6,
    location: 'Banff & Jasper, Canada',
    locationEn: 'Banff & Jasper, Canada',
    highlights: [
      'Trekking tra laghi turchesi',
      'Wildlife tour con guide certificate',
      'Canoa a basso impatto',
      'Sorgenti termali naturali',
    ],
    highlightsEn: [
      'Trekking among turquoise lakes',
      'Wildlife tours with certified guides',
      'Low-impact canoeing',
      'Natural hot springs',
    ],
    sustainability: [
      'Pernottamenti in lodge eco-certificati',
      'Rimboschimento con partner locali',
      'Mobilità condivisa e mezzi ibridi',
    ],
    sustainabilityEn: [
      'Stays in eco-certified lodges',
      'Reforestation with local partners',
      'Shared mobility and hybrid vehicles',
    ],
    includes: [
      'Lodge 5 notti con colazione',
      'Escursione wildlife guidata',
      'Accesso a sorgenti termali',
      'Transfer locale condiviso',
    ],
    includesEn: [
      '5-night lodge stay with breakfast',
      'Guided wildlife tour',
      'Access to natural hot springs',
      'Shared local transfer',
    ],
    excludes: [
      'Voli internazionali',
      'Noleggio attrezzatura sportiva',
      'Pasti extra',
    ],
    excludesEn: [
      'International flights',
      'Sports equipment rental',
      'Extra meals',
    ],
    priceEth: '0.22',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Banff%20National%20Park%20Lake%20May%202024.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Banff%20National%20Park%202016Aug.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/A%20hazy%20morning%20on%20the%20south%20side%20of%20Jasper%20National%20Park.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Louise,%20Banff%20National%20Park%20%287853824758%29.jpg?width=1200',
    ],
  },
  {
    id: 'asia-zen-08',
    name: 'Asia Zen Escape',
    nameEn: 'Asia Zen Escape',
    description: 'Templi, risaie e soggiorni in eco-ryokan.',
    descriptionEn: 'Temples, rice fields, and eco-ryokan stays.',
    longDescription:
      'Un viaggio tra paesaggi iconici e cultura millenaria, con ritmi lenti e attenzione al benessere. Tra passeggiate nelle risaie, cerimonie del tè e pernottamenti in strutture a basso impatto.',
    longDescriptionEn:
      'A journey through iconic landscapes and timeless culture, with slow rhythms and a focus on wellbeing. Walks in rice fields, tea ceremonies, and stays in low-impact accommodations.',
    durationDays: 5,
    location: 'Kyoto & Uji, Giappone',
    locationEn: 'Kyoto & Uji, Japan',
    highlights: [
      'Cerimonia del tè con maestro locale',
      'Camminate tra risaie e villaggi storici',
      'Bagno termale tradizionale',
      'Degustazioni di cucina stagionale',
    ],
    highlightsEn: [
      'Tea ceremony with a local master',
      'Walks through rice fields and historic villages',
      'Traditional thermal bath',
      'Seasonal cuisine tastings',
    ],
    sustainability: [
      'Strutture con pratiche zero-waste',
      'Supporto ad artigiani e produttori locali',
      'Itinerari a piedi e in treno',
    ],
    sustainabilityEn: [
      'Accommodations with zero-waste practices',
      'Support for local artisans and producers',
      'Itineraries on foot and by train',
    ],
    includes: [
      'Eco-ryokan 4 notti con colazione',
      'Cerimonia del tè',
      'Passeggiate guidate',
      'Pass trasporti locali',
    ],
    includesEn: [
      '4-night eco-ryokan stay with breakfast',
      'Tea ceremony',
      'Guided walks',
      'Local transport pass',
    ],
    excludes: [
      'Voli internazionali',
      'Cene tradizionali',
      'Esperienze private extra',
    ],
    excludesEn: [
      'International flights',
      'Traditional dinners',
      'Extra private experiences',
    ],
    priceEth: '0.19',
    imageUrls: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-30%20A%20street%20in%20Kyoto.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Torii,%20Kyoto%20street%20-%20IMG%205705.JPG?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Daikiti%20tenbou.jpg?width=1200',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Byodo-in%20in%20Uji.jpg?width=1200',
    ],
  },
]
