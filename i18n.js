/**
 * OBEDIO Website Internationalization
 * EN (English) + SR (Serbian Cyrillic)
 */

const translations = {
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.owners': 'Owners',
    'nav.crew': 'Crew',
    'nav.integrators': 'Integrators',
    'nav.craftsmanship': 'Craftsmanship',
    'nav.story': 'Story',
    'nav.syts': 'SYTS 2026',
    'nav.contact': 'Contact',

    // Hero Animation - Key Phrases
    'hero.understood': 'Understood.',
    'hero.intelligence': 'THE INTELLIGENCE OF SERVICE',

    // Section: Product
    'product.label': 'The SmartButton',
    'product.headline': 'Press. Speak.<br><em>Understood.</em>',
    'product.description': 'The first luxury guest service button with real offline voice‑to‑text, instant translation in 30+ languages, and nine‑month battery life. Everything processed locally. Nothing leaves the vessel.',
    'product.scale': '72 × 72 mm  -  the width of your iPhone. Also available in 65 mm compact.',
    
    // Three Pillars
    'pillar.languages.label': 'Languages',
    'pillar.languages.desc': 'Guest speaks Turkish.<br>Crew reads English.<br>5 AIs cross-check every word.',
    'pillar.battery.label': 'Month Battery',
    'pillar.battery.desc': 'No nightly charging rounds.<br>No dead buttons during service.<br>Forget it exists.',
    'pillar.offline.label': 'Offline',
    'pillar.offline.desc': 'No internet. No WiFi. No cloud.<br>RF radio + WiFi hybrid with failover.<br>A request can never be lost.',

    // Ecosystem
    'ecosystem.label': 'The Ecosystem',
    'ecosystem.headline': 'One system. <em>Everything.</em>',
    'ecosystem.description': 'From the guest\'s fingertip to the crew\'s wrist. Every device, every platform, one source. No cloud. No subscriptions. Entirely on‑premises.',
    'ecosystem.smartbutton': 'SmartButton',
    'ecosystem.smartbutton.desc': 'Guest cabin, sundeck, salon. 9‑month battery.',
    'ecosystem.panels': 'Panels',
    'ecosystem.panels.desc': 'Crew interface + built‑in RF repeater. Dual purpose.',
    'ecosystem.server': 'Local Server',
    'ecosystem.server.desc': 'On‑board AI. Translation. Routing. Full database.',
    'ecosystem.repeaters': 'Repeaters',
    'ecosystem.repeaters.desc': 'Extend RF coverage. Backup batteries. Mesh capable.',
    'ecosystem.applewatch': 'Apple Watch',
    'ecosystem.applewatch.desc': 'Full notifications. Shake gestures. Earpiece readout.',
    'ecosystem.wearos': 'Wear OS',
    'ecosystem.wearos.desc': '7‑day battery. Same features. Crew‑optimised.',
    'ecosystem.mobile': 'iPhone & Android',
    'ecosystem.mobile.desc': 'Full crew app. Profiles. Messaging. Duty roster.',
    'ecosystem.dashboard': 'iPad Dashboard',
    'ecosystem.dashboard.desc': 'Vessel map. All requests. Crew status. Real‑time.',
    'ecosystem.webapp': 'Web App',
    'ecosystem.webapp.desc': 'Browser‑based. Any device. Full functionality.',
    'ecosystem.messenger': 'Messenger',
    'ecosystem.messenger.desc': 'Offline crew chat. Nothing leaves the vessel.',

    // Parallax Break: Voice Intelligence
    'break.voice.title': 'Voice Intelligence',
    'break.voice.subtitle': 'Five AIs. One perfect transcription. Thirty languages.',

    // Section: Owners & Guests
    'owners.label': 'For Owners & Guests',
    'owners.headline': 'Time is the only luxury<br>you cannot buy back.',
    'owners.description': 'No apps. No instructions. No learning curve. Press the button, speak in your language. The light confirms someone is already on the way. That\'s it.',
    'owners.how.headline': 'Press. Speak. <em>Done.</em>',
    'owners.how.description': 'Press the button. Speak. The same switch powers the microphone - no power, no listening. Physically impossible to eavesdrop. Speak in any of 30+ languages. Your crew receives the request instantly, translated, in writing, on their watch. A light on the button confirms someone is on the way. One press. One trip. Zero friction.',
    'owners.language.headline': 'Speak your language.<br><em>Your crew reads theirs.</em>',
    'owners.language.description': 'Speak Turkish, Russian, Mandarin, or any of 30+ languages. Five independent AI models transcribe every word simultaneously - the system cross-references all five and delivers the most accurate result. Your crew receives it in English, instantly. Two-way: they reply, you hear it in your language. All processed on the vessel. Nothing leaves the ship.',
    'owners.privacy.headline': 'Privacy is not just a feature.<br><em>It is architecture.</em>',
    'owners.privacy.description': 'Your conversations are yours. The microphone is physically disconnected until you press the button. Not a software switch - a hardware circuit. For absolute privacy, the entire microphone module can be physically removed.',

    // Privacy Cards
    'privacy.hardware.title': 'Hardware Mic Switch',
    'privacy.hardware.desc': 'The microphone circuit is physically open until you press the button. No software can override this. The microphone literally cannot listen.',
    'privacy.module.title': 'Removable Module',
    'privacy.module.desc': 'Don\'t trust any microphone? Remove the entire module. The button still works for calls - just without voice. Your choice, always.',
    'privacy.encryption.title': 'End-to-End Encryption',
    'privacy.encryption.desc': 'Every message, every voice recording, every request. Encrypted from button to watch. No one in between can read it.',
    'privacy.cloud.title': 'Zero Cloud',
    'privacy.cloud.desc': 'No data leaves the vessel. No cloud servers. No subscriptions. No third party ever sees your requests. Everything processed and stored on board.',
    'privacy.messenger.title': 'Offline Messenger',
    'privacy.messenger.desc': 'Crew communication stays on the yacht. No internet required. No WhatsApp, no iMessage, no external servers. A private network that exists only on your vessel.',
    'privacy.ai.title': 'Local AI',
    'privacy.ai.desc': 'Voice recognition and translation run on the on-board server. Your words are processed by your own hardware. Nothing is sent anywhere.',

    // Emergency Block
    'emergency.headline': 'Not a feature. <em>A lifeline.</em>',
    'emergency.description': 'Guest with a medical condition shakes the button. Instant emergency broadcast to every device on board. Location, medical profile, allergies, conditions. Every crew member sees it immediately.',
    'emergency.timeline.shake': 'Guest shakes<br>the button',
    'emergency.timeline.broadcast': 'Every device<br>on board alerts',
    'emergency.timeline.response': 'Crew arrives<br>with full profile',
    'emergency.tagline': 'Seconds matter. OBEDIO delivers them.',

    // Room Control
    'owners.control.headline': 'One button.<br><em>The entire cabin.</em>',
    'owners.control.description': 'Not just a service call. OBEDIO controls your cabin. Lights, blinds, climate, scenes - all from the same button on your nightstand. No separate keypads. No learning different interfaces. One touch point for everything.',
    'owners.control.compatibility': 'Native Crestron integration. Control4 coming soon.',

    // Bespoke
    'owners.bespoke.headline': '<em>Truly bespoke.</em>',
    'owners.bespoke.description': 'Square. Round. 72 mm. 65 mm. Custom. Brass, steel, leather, black PVD. Every button is made to match your yacht - not the other way around. OBEDIO is not defined by its shape. It defines its own.',

    // Parallax Break: Intelligent Routing
    'break.routing.title': 'Intelligent Routing',
    'break.routing.subtitle': 'The right person. Every time. Automatically.',

    // Section: Crew
    'crew.label': 'For Crew',
    'crew.headline': 'Your Work - <em>Understood.</em>',
    'crew.description': 'Built by someone who was crew. Ten years as an ETO on superyachts. Every frustration, every workaround, every "why doesn\'t this exist" moment. That became OBEDIO.',

    // Hands-free Hero
    'crew.handsfree.headline': 'Completely <em>hands-free.</em>',
    'crew.handsfree.description': 'Earpiece connected to the watch. A guest request comes in. The watch detects the earpiece and reads the request directly into the crew member\'s ear. No screen. No stopping. No looking at your wrist. You hear "Please bring still water to the sun deck" - and you\'re already on your way. Shake your wrist to accept.',
    'crew.handsfree.step1': 'Guest speaks into the button',
    'crew.handsfree.step2': 'Earpiece reads the translated request',
    'crew.handsfree.step3': 'Shake wrist to accept',
    'crew.handsfree.step4': 'Button confirms to the guest',

    // Crew Pain Points
    'crew.pain.onetrip.title': 'One trip, not three.',
    'crew.pain.onetrip.desc': 'Guest speaks into the button in any language. You read the request on your watch, in your language. Tap once to accept. One trip.',
    'crew.pain.delegate.title': 'Shake to delegate.',
    'crew.pain.delegate.desc': 'Hands full, carrying a tray, mid-service. A call comes in. Shake your wrist. It re-delegates to the next crew member on duty. No screen, no tapping.',
    'crew.pain.roster.title': 'Auto duty roster.',
    'crew.pain.roster.desc': 'Everyone keeps their own device. The software knows your schedule. When your shift starts, calls route to you. When it ends, they stop.',
    'crew.pain.escalation.title': '3-level escalation.',
    'crew.pain.escalation.desc': 'Guest calls. No response? It rings again. Still nothing? Escalates to supervisor, then captain. Fully configurable. A request can never fall through.',
    'crew.pain.messenger.title': 'Offline Messenger.',
    'crew.pain.messenger.desc': 'Send and receive messages from your watch, iPhone, Android, or web app. Silently, discreetly. No internet required. Everything stays on the yacht. Replaces radios completely.',
    'crew.pain.battery.title': '7-day watch battery.',
    'crew.pain.battery.desc': 'Not another thing to charge. The optimised Wear OS watch lasts up to seven days. A reliable tool, not another liability.',

    // Crew Watch Feature
    'crew.watch.headline': 'Guest speaks Russian.<br><span class="gold-text">You read English.</span>',
    'crew.watch.description': 'Full request on the watch before you move. Translated. Five AIs cross-checked every word - you get the most accurate transcription possible. Guest profile with preferences, dietary restrictions, and location. You arrive prepared, not guessing. Still unsure? Play back the original audio.',

    // Management
    'crew.mgmt.label': 'Crew Management',
    'crew.mgmt.headline': 'Command the vessel.<br><em>From one screen.</em>',
    'crew.mgmt.description': 'Crewify management software. iPad dashboard. Interactive vessel map. Everything a chief stew, purser, or captain needs to run service operations.',
    'crew.mgmt.requests.headline': 'Live service requests.<br><em>Accept or delegate.</em>',
    'crew.mgmt.requests.description': 'Every guest request appears as a card with location photo, voice transcript, and priority level. Accept with one tap or delegate to the next crew member. Three levels of automatic escalation ensure nothing is ever missed.',
    'crew.mgmt.roster.headline': 'Crew roster.<br><em>Who\'s on, who\'s next.</em>',
    'crew.mgmt.roster.description': 'Full duty roster with shift scheduling calendar. Drag-and-drop crew assignment, autofill patterns, morning/afternoon/night shifts. Export, print, notify crew. Everything runs automatically once set up.',
    'crew.mgmt.profiles.headline': 'Guest profiles.<br><em>Know before you arrive.</em>',
    'crew.mgmt.profiles.description': 'Name, cabin, dietary restrictions, allergies, VIP status, check-in date. Every crew member sees who they\'re serving. Filter by onboard, expected, or VIP. Allergy alerts protect your guests.',
    'crew.mgmt.devices.headline': 'Device manager.<br><em>Every button, every watch.</em>',
    'crew.mgmt.devices.description': 'Monitor all SmartButtons, watches, repeaters, and mobile apps from one screen. Battery levels, signal strength, temperature, connection status, last seen. Configure every button\'s press actions, LED behaviour, and shake sensitivity.',
    'crew.mgmt.escalation.headline': '<em>Three levels. Fully configurable.</em>',
    'crew.mgmt.escalation.description': 'Level 1: Re-alert on-duty crew. Level 2: Notify supervisors and HODs. Level 3: Emergency broadcast to entire crew. Timeouts, roles, and sound intensity - all adjustable.',

    // Parallax Break: Integration
    'break.integration.title': 'Integration',
    'break.integration.subtitle': 'Crestron. KNX. Control4. Built to fit your stack.',

    // Section: Integrators
    'integrators.label': 'For Integrators',
    'integrators.headline': 'Install it.<br><em>Sleep well.</em>',
    'integrators.description': 'No 3 AM calls. Every layer has a failover. Designed by a Crestron-certified, KNX-certified engineer who spent a decade at sea and knows what breaks.',

    // Integrator Stats
    'integrators.stat.channels': 'Comm channels',
    'integrators.stat.frequencies': 'RF frequencies',
    'integrators.stat.ai': 'AI transcription engines',
    'integrators.stat.cloud': 'Cloud dependencies',

    // Button Configuration
    'integrators.config.headline': 'Every press.<br><em>Fully configurable.</em>',
    'integrators.config.description': 'Single press, double press, long press, touch, shake - each action is independently configurable per button. Voice recording, simple call, urgent call, emergency broadcast. LED colours, audio feedback, shake sensitivity. Six tabs of configuration, zero complexity for the guest.',

    // Panels
    'integrators.panels.headline': '<em>Panels with built-in repeater.</em>',
    'integrators.panels.description': 'Public area panels serve double duty: crew interface and RF repeater in one device. Place them in hallways, pantry, bridge. Fewer devices to install, fewer power points to plan, full coverage built in.',

    // Room Control
    'integrators.roomcontrol.headline': '<em>Everything from the nightstand.</em>',
    'integrators.roomcontrol.description': 'Lights, blinds, climate, scenes - and a service call. One button replaces the keypad and the call button. No reaching for a panel, no getting out of bed. Native Crestron and KNX integration. Control4 in development.',

    // Compatibility
    'integrators.compat.crestron': 'Crestron',
    'integrators.compat.crestron.status': '✓ Available',
    'integrators.compat.knx': 'KNX',
    'integrators.compat.knx.status': '✓ Available',
    'integrators.compat.control4': 'Control4',
    'integrators.compat.control4.status': 'Coming Soon',
    'integrators.compat.api': 'REST API',
    'integrators.compat.api.status': '✓ Open',

    // Tech Cards
    'tech.dual.title': 'Dual Communication',
    'tech.dual.desc': 'RF radio + WiFi. Voice-to-text uses WiFi. Everything else runs on RF. If one drops, the other takes over. Two independent channels, switching automatically.',
    'tech.frequency.title': 'Multi-Frequency RF',
    'tech.frequency.desc': 'Supports 433, 868, and 915 MHz. The system detects the vessel\'s location and switches to the correct regional frequency automatically. Install once, works everywhere.',
    'tech.failover.title': 'Server Failover',
    'tech.failover.desc': 'Primary server down? Backup takes over with full database replication. No backup? Repeaters form an emergency mesh network. Service continues.',
    'tech.ota.title': 'OTA Updates',
    'tech.ota.desc': 'Buttons, repeaters, server - all updated remotely. No truck rolls, no pulling the yacht out of charter. Push from shore, every device receives it.',
    'tech.power.title': 'Power Independent',
    'tech.power.desc': 'Buttons run nine months. Repeaters have backup batteries. If the yacht loses all power, buttons and repeaters continue on RF. Guest can still call.',
    'tech.ack.title': 'End-to-End Ack',
    'tech.ack.desc': 'Every call gets a unique ID. Button waits for server confirmation. Server confirms delivery to crew, confirms who accepted, sends feedback to guest. Full chain, no gaps.',

    // Bottom Line
    'integrators.bottomline': 'No internet? Works. No WiFi? Works. No power? Works. Server down? Works.<br>A guest request cannot be lost.',

    // Parallax Break: Craftsmanship
    'break.craftsmanship.title': 'Craftsmanship',
    'break.craftsmanship.subtitle': '10 bespoke finishes. Designed for the world\'s finest vessels.',

    // Section: Craftsmanship
    'craftsmanship.label': 'Craftsmanship',
    'craftsmanship.headline': '<em>Every button is bespoke.</em>',
    'craftsmanship.description': 'From a sketch on a post-it to a precision-machined instrument. Every OBEDIO button follows the same journey.',

    // Bespoke Steps - NOT TRANSLATED (as per instructions)
    // These remain as-is in English

    // Exploded View
    'craftsmanship.inside.label': 'What\'s Inside',
    'craftsmanship.inside.headline': '<em>Every component has a purpose.</em>',
    'craftsmanship.inside.description': 'PCB, battery, RF antenna, microphone module, LED diffuser, CNC-machined enclosure. Nothing is decorative. Everything is engineered.',

    // Finishes
    'craftsmanship.finishes.headline': '<em>10 finishes.</em> One standard: yours.',

    // Section: SYTS Barcelona
    'syts.headline': 'See you in <em>Barcelona.</em>',
    'syts.date': 'March 10 - 11, 2026',
    'syts.booth': 'Booth IH12',
    'syts.speaker': 'TECHTalks Speaker - March 11, 13:45',
    'syts.countdown.days': 'Days',
    'syts.countdown.hours': 'Hours',
    'syts.countdown.minutes': 'Minutes',
    'syts.cta': 'Book a Meeting',

    // Partners
    'partners.label': 'Partners',

    // Section: Story
    'story.label': 'The Story',
    'story.quote': '"Ten years at sea taught me one thing: the call system was always the weakest link."',
    'story.description': 'Every system I tried left the same problems unsolved. Dead batteries by dinner service. Three trips for a glass of water. Radios ruining the uniform. Language barriers that no one addressed. So I built the system I wished existed. Not from a boardroom - from the crew mess, from the engine room, from years of doing the work.',
    'story.founder': 'Branko Blagojević',
    'story.title': 'Founder - ETO, Crestron Certified, KNX Certified',
    'story.tagline': 'Built by crew. For crew.',
    'story.stat.years': 'Years at sea',
    'story.stat.languages': 'Languages',
    'story.stat.offline': 'Offline',
    'story.stat.cloud': 'Cloud dependency',

    // Section: Contact
    'contact.label': 'Contact',
    'contact.headline': '<em>Begin the conversation.</em>',
    'contact.cta': 'Get in Touch',

    // Footer
    'footer.copy': '© 2026 OBEDIO. The Intelligence of Service.'
  },

  sr: {
    // Navigation
    'nav.product': 'Proizvod',
    'nav.owners': 'Vlasnici',
    'nav.crew': 'Posada',
    'nav.integrators': 'Integratori',
    'nav.craftsmanship': 'Zanatstvo',
    'nav.story': 'Priča',
    'nav.syts': 'SYTS 2026',
    'nav.contact': 'Kontakt',

    // Hero Animation - Key Phrases
    'hero.understood': 'Understood.',
    'hero.intelligence': 'INTELIGENCIJA USLUGE',

    // Section: Product
    'product.label': 'SmartButton',
    'product.headline': 'Pritisni. Govori.<br><em>Understood.</em>',
    'product.description': 'Prvi luksuzni dugme za usluge gostiju sa pravom oflajn prepoznavanjem glasa, trenutnim prevodom na 30+ jezika i devet meseci rada baterije. Sve se obrađuje lokalno. Ništa ne napušta brod.',
    'product.scale': '72 × 72 mm - širina vašeg iPhone-a. Dostupno i u kompaktnoj varijanti od 65 mm.',
    
    // Three Pillars
    'pillar.languages.label': 'Jezici',
    'pillar.languages.desc': 'Gost govori turski.<br>Posada čita srpski.<br>5 AI sistema proverava svaku reč.',
    'pillar.battery.label': 'Meseci Baterija',
    'pillar.battery.desc': 'Bez noćnog punjenja.<br>Bez praznih dugmića tokom službe.<br>Zaboravite da postoji.',
    'pillar.offline.label': 'Oflajn',
    'pillar.offline.desc': 'Bez interneta. Bez WiFi-ja. Bez cloud-a.<br>RF radio + WiFi hibrid sa rezervom.<br>Zahtev ne može da se izgubi.',

    // Ecosystem
    'ecosystem.label': 'Ekosistem',
    'ecosystem.headline': 'Jedan sistem. <em>Sve.</em>',
    'ecosystem.description': 'Od prsta gosta do ruke posade. Svaki uređaj, svaka platforma, jedan izvor. Bez cloud-a. Bez pretplata. U potpunosti na brodu.',
    'ecosystem.smartbutton': 'SmartButton',
    'ecosystem.smartbutton.desc': 'Gostijska kabina, sundek, salon. 9 meseci baterija.',
    'ecosystem.panels': 'Paneli',
    'ecosystem.panels.desc': 'Interfejs za posadu + ugrađeni RF pojačavač. Dvojna namena.',
    'ecosystem.server': 'Lokalni Server',
    'ecosystem.server.desc': 'AI na brodu. Prevod. Rutiranje. Kompletna baza podataka.',
    'ecosystem.repeaters': 'Pojačavači',
    'ecosystem.repeaters.desc': 'Proširuju RF pokrivenost. Rezervne baterije. Mrežni rad.',
    'ecosystem.applewatch': 'Apple Watch',
    'ecosystem.applewatch.desc': 'Kompletna obaveštenja. Potresi. Čitanje u slušalicu.',
    'ecosystem.wearos': 'Wear OS',
    'ecosystem.wearos.desc': '7 dana baterija. Iste funkcije. Optimizovano za posadu.',
    'ecosystem.mobile': 'iPhone i Android',
    'ecosystem.mobile.desc': 'Kompletna aplikacija za posadu. Profili. Poruka. Raspored.',
    'ecosystem.dashboard': 'iPad Dashboard',
    'ecosystem.dashboard.desc': 'Mapa broda. Svi zahtevi. Status posade. Uživo.',
    'ecosystem.webapp': 'Veb Aplikacija',
    'ecosystem.webapp.desc': 'U brauzeru. Bilo koji uređaj. Puna funkcionalnost.',
    'ecosystem.messenger': 'Poruke',
    'ecosystem.messenger.desc': 'Oflajn komunikacija posade. Ništa ne napušta brod.',

    // Parallax Break: Voice Intelligence
    'break.voice.title': 'Glasovna Inteligencija',
    'break.voice.subtitle': 'Pet AI sistema. Jedan savršen prepis. Trideset jezika.',

    // Section: Owners & Guests
    'owners.label': 'Za Vlasnike i Goste',
    'owners.headline': 'Vreme je jedini luksuz<br>koji ne možete otkupiti.',
    'owners.description': 'Bez aplikacija. Bez uputstava. Bez učenja. Pritisnite dugme, govorite na svom jeziku. Svetlo potvrđuje da neko već dolazi. To je to.',
    'owners.how.headline': 'Pritisni. Govori. <em>Gotovo.</em>',
    'owners.how.description': 'Pritisnite dugme. Govorite. Isti prekidač uključuje mikrofon - nema struje, nema slušanja. Fizički nemoguće podsluškivati. Govorite na bilo kom od 30+ jezika. Vaša posada dobija zahtev trenutno, preveden, pismeno, na ruci. Svetlo na dugmetu potvrđuje da neko dolazi. Jedan pritisak. Jedna šetnja. Nula trenja.',
    'owners.language.headline': 'Govorite svoj jezik.<br><em>Posada čita svoj.</em>',
    'owners.language.description': 'Govorite turski, ruski, mandarinki, ili bilo koji od 30+ jezika. Pet nezavisnih AI modela istovremeno prepisuje svaku reč - sistem upoređuje svih pet i daje najprecizniji rezultat. Vaša posada dobija na srpskom, trenutno. U oba smera: oni odgovore, vi čujete na svom jeziku. Sve se obrađuje na brodu. Ništa ne napušta jahtu.',
    'owners.privacy.headline': 'Privatnost nije samo karakteristika.<br><em>To je arhitektura.</em>',
    'owners.privacy.description': 'Vaši razgovori su vaši. Mikrofon je fizički isključen dok ne pritisnete dugme. Nije softverski prekidač - hardversko kolo. Za apsolutnu privatnost, ceo mikrofonski modul se može fizički ukloniti.',

    // Privacy Cards
    'privacy.hardware.title': 'Hardverski Prekidač Mikrofona',
    'privacy.hardware.desc': 'Mikrofonsko kolo je fizički otvoreno dok ne pritisnete dugme. Nijedan softver ne može to da zaobiđe. Mikrofon doslovno ne može da sluša.',
    'privacy.module.title': 'Uklonjivi Modul',
    'privacy.module.desc': 'Ne verujete nijednom mikrofonu? Uklonite ceo modul. Dugme i dalje radi za pozive - samo bez glasa. Vaš izbor, uvek.',
    'privacy.encryption.title': 'Enkripcija Kraj-do-Kraj',
    'privacy.encryption.desc': 'Svaka poruka, svaki glasovni snimak, svaki zahtev. Enkriptovan od dugmeta do ruke. Niko između ne može da pročita.',
    'privacy.cloud.title': 'Nula Cloud',
    'privacy.cloud.desc': 'Podaci ne napuštaju brod. Nema cloud servera. Nema pretplata. Nema treće strane koje vide vaše zahteve. Sve se obrađuje i čuva na brodu.',
    'privacy.messenger.title': 'Oflajn Poruke',
    'privacy.messenger.desc': 'Komunikacija posade ostaje na jahti. Bez interneta. Bez WhatsApp-a, bez iMessage-a, bez spoljnih servera. Privatna mreža koja postoji samo na vašem brodu.',
    'privacy.ai.title': 'Lokalni AI',
    'privacy.ai.desc': 'Prepoznavanje glasa i prevod rade na serveru na brodu. Vaše reči obrađuje vaš hardver. Ništa se ne šalje nikuda.',

    // Emergency Block
    'emergency.headline': 'Nije karakteristika. <em>Spasilac.</em>',
    'emergency.description': 'Gost sa zdravstvenim stanjem potrese dugme. Trenutno hitno oglašavanje na svim uređajima na brodu. Lokacija, zdravstveni profil, alergije, stanja. Svaki član posade to vidi trenutno.',
    'emergency.timeline.shake': 'Gost potrese<br>dugme',
    'emergency.timeline.broadcast': 'Svaki uređaj<br>na brodu se oglasi',
    'emergency.timeline.response': 'Posada stiže<br>sa punim profilom',
    'emergency.tagline': 'Sekunde se računaju. OBEDIO ih isporučuje.',

    // Room Control
    'owners.control.headline': 'Jedno dugme.<br><em>Cela kabina.</em>',
    'owners.control.description': 'Nije samo poziv za uslugu. OBEDIO kontroliše vašu kabinu. Svetla, zavese, klimu, scene - sve sa istog dugmeta na noćnom stočiću. Bez zasebnih tastatura. Bez učenja različitih interfejsa. Jedna tačka kontakta za sve.',
    'owners.control.compatibility': 'Nativna Crestron integracija. Control4 uskoro.',

    // Bespoke
    'owners.bespoke.headline': '<em>Zaista po meri.</em>',
    'owners.bespoke.description': 'Kvadrat. Krug. 72 mm. 65 mm. Po meri. Mesing, čelik, koža, crni PVD. Svako dugme se pravi da odgovara vašoj jahti - a ne obrnuto. OBEDIO nije definisan svojim oblikom. On definiše svoj sopstveni.',

    // Parallax Break: Intelligent Routing
    'break.routing.title': 'Inteligentno Rutiranje',
    'break.routing.subtitle': 'Prava osoba. Svaki put. Automatski.',

    // Section: Crew
    'crew.label': 'Za Posadu',
    'crew.headline': 'Vaš posao - <em>Understood.</em>',
    'crew.description': 'Napravljen od strane nekoga ko je bio posada. Deset godina kao ETO na superjahtama. Svako nerviranje, svako zaobilaženje, svaki "zašto ovo ne postoji" trenutak. To je postalo OBEDIO.',

    // Hands-free Hero
    'crew.handsfree.headline': 'Potpuno <em>bez ruku.</em>',
    'crew.handsfree.description': 'Slušalica povezana sa rukom. Stiže zahtev gosta. Ruka prepoznaje slušalicu i čita zahtev direktno u uvo člana posade. Bez ekrana. Bez zaustavljanja. Bez gledanja na ruku. Čujete "Donesite negaziranu vodu na sundek" - i već ste na putu. Potresite ruku da prihvatite.',
    'crew.handsfree.step1': 'Gost govori u dugme',
    'crew.handsfree.step2': 'Slušalica čita prevedeni zahtev',
    'crew.handsfree.step3': 'Potresite ruku da prihvatite',
    'crew.handsfree.step4': 'Dugme potvrđuje gostu',

    // Crew Pain Points
    'crew.pain.onetrip.title': 'Jedna šetnja, ne tri.',
    'crew.pain.onetrip.desc': 'Gost govori u dugme na bilo kom jeziku. Čitate zahtev na ruci, na svom jeziku. Tapnite jednom da prihvatite. Jedna šetnja.',
    'crew.pain.delegate.title': 'Potresi da delegiraš.',
    'crew.pain.delegate.desc': 'Pune ruke, nosite poslužavnik, u sredini službe. Stiže poziv. Potresite ruku. Preležeguje se sledećem članu posade na dužnosti. Bez ekrana, bez tapkanja.',
    'crew.pain.roster.title': 'Auto raspored dužnosti.',
    'crew.pain.roster.desc': 'Svako zadržava svoj uređaj. Softver zna vaš raspored. Kada počne vaša smena, pozivi se rutiraju vama. Kada se završi, prestaju.',
    'crew.pain.escalation.title': '3 nivoa eskalacije.',
    'crew.pain.escalation.desc': 'Gost zove. Nema odgovora? Zvoni ponovo. I dalje ništa? Eskalira supervizoru, zatim kapetanu. Potpuno podesivo. Zahtev ne može da prođe nezapaženo.',
    'crew.pain.messenger.title': 'Oflajn Poruke.',
    'crew.pain.messenger.desc': 'Šaljite i primajte poruke sa ruke, iPhone-a, Android-a ili veb aplikacije. Tiho, diskretno. Bez interneta. Sve ostaje na jahti. U potpunosti zamenjuje racije.',
    'crew.pain.battery.title': '7 dana baterija ruke.',
    'crew.pain.battery.desc': 'Ne još jedna stvar za punjenje. Optimizovana Wear OS ruka traje do sedam dana. Pouzdan alat, ne još jedna odgovornost.',

    // Crew Watch Feature
    'crew.watch.headline': 'Gost govori ruski.<br><span class="gold-text">Vi čitate srpski.</span>',
    'crew.watch.description': 'Pun zahtev na ruci pre nego što krenete. Preveden. Pet AI sistema je proverilo svaku reč - dobijate najprecizniji prepis moguć. Profil gosta sa preferencama, dijetarnim ograničenjima i lokacijom. Stižete pripremljeni, ne nagađajući. Još uvek nesigurni? Reprodukujte originalni audio.',

    // Management
    'crew.mgmt.label': 'Upravljanje Posadom',
    'crew.mgmt.headline': 'Komandujte brodom.<br><em>Sa jednog ekrana.</em>',
    'crew.mgmt.description': 'Crewify softver za upravljanje. iPad kontrolna tabla. Interaktivna mapa broda. Sve što šef-stjuart, bursar ili kapetan treba za vođenje uslužnih operacija.',
    'crew.mgmt.requests.headline': 'Zahtevi uživo.<br><em>Prihvati ili delegiraj.</em>',
    'crew.mgmt.requests.description': 'Svaki zahtev gosta se pojavljuje kao kartica sa fotografijom lokacije, glasovnim prepisom i nivoom prioriteta. Prihvatite jednim tapom ili delegirajte sledećem članu posade. Tri nivoa automatske eskalacije osiguravaju da se ništa ne propusti.',
    'crew.mgmt.roster.headline': 'Raspored posade.<br><em>Ko je na dužnosti, ko je sledeći.</em>',
    'crew.mgmt.roster.description': 'Pun raspored dužnosti sa kalendarom smena. Prevuci-i-pusti dodelu posade, automatsko popunjavanje obrazaca, jutarnje/popodnevne/noćne smene. Izvezi, štampaj, obavesti posadu. Sve radi automatski kada se podesi.',
    'crew.mgmt.profiles.headline': 'Profili gostiju.<br><em>Znaj pre nego što stigneš.</em>',
    'crew.mgmt.profiles.description': 'Ime, kabina, dijetarna ograničenja, alergije, VIP status, datum prijave. Svaki član posade vidi koga služi. Filtriraj po na brodu, očekivanim ili VIP. Upozorenja o alergijama štite vaše goste.',
    'crew.mgmt.devices.headline': 'Upravljač uređaja.<br><em>Svako dugme, svaka ruka.</em>',
    'crew.mgmt.devices.description': 'Nadgledajte sva SmartButton dugmića, ruke, pojačavače i mobilne aplikacije sa jednog ekrana. Nivoi baterija, jačina signala, temperatura, status konekcije, poslednje viđeno. Podesite radnje pritiska svakog dugmeta, LED ponašanje i osetljivost na potresanje.',
    'crew.mgmt.escalation.headline': '<em>Tri nivoa. Potpuno podesivo.</em>',
    'crew.mgmt.escalation.description': 'Nivo 1: Ponovo upozori posadu na dužnosti. Nivo 2: Obavesti supervizore i šefove odeljenja. Nivo 3: Hitno oglašavanje celoj posadi. Vreme isteka, uloge i intenzitet zvuka - sve podesivo.',

    // Parallax Break: Integration
    'break.integration.title': 'Integracija',
    'break.integration.subtitle': 'Crestron. KNX. Control4. Napravljen da se uklopi u vaš stek.',

    // Section: Integrators
    'integrators.label': 'Za Integratore',
    'integrators.headline': 'Instaliraj.<br><em>Spavaj mirno.</em>',
    'integrators.description': 'Nema poziva u 3 ujutru. Svaki sloj ima rezervu. Dizajniran od strane Crestron-sertifikovanog, KNX-sertifikovanog inženjera koji je proveo dekadu na moru i zna šta se kvari.',

    // Integrator Stats
    'integrators.stat.channels': 'Komunikacioni kanali',
    'integrators.stat.frequencies': 'RF frekvencije',
    'integrators.stat.ai': 'AI prepisni sistemi',
    'integrators.stat.cloud': 'Cloud zavisnosti',

    // Button Configuration
    'integrators.config.headline': 'Svaki pritisak.<br><em>Potpuno podesiv.</em>',
    'integrators.config.description': 'Jednostruki pritisak, dvostruki pritisak, dugačak pritisak, dodir, potres - svaka radnja je nezavisno podesiva po dugmetu. Glasovno snimanje, prost poziv, hitan poziv, hitno oglašavanje. LED boje, audio povratna informacija, osetljivost na potresanje. Šest tabova podešavanja, nula složenosti za gosta.',

    // Panels
    'integrators.panels.headline': '<em>Paneli sa ugrađenim pojačavačem.</em>',
    'integrators.panels.description': 'Paneli za javne prostore služe dvojnoj svrsi: interfejs za posadu i RF pojačavač u jednom uređaju. Postavite ih u hodnicima, ostavama, na mostu. Manje uređaja za instalaciju, manje strujnih tačaka za planiranje, puna pokrivenost ugrađena.',

    // Room Control
    'integrators.roomcontrol.headline': '<em>Sve sa noćnog stočića.</em>',
    'integrators.roomcontrol.description': 'Svetla, zavese, klima, scene - i poziv za uslugu. Jedno dugme zamenjuje tastaturu i dugme za poziv. Bez dosezanja panela, bez ustajanja iz kreveta. Nativna Crestron i KNX integracija. Control4 u razvoju.',

    // Compatibility
    'integrators.compat.crestron': 'Crestron',
    'integrators.compat.crestron.status': '✓ Dostupno',
    'integrators.compat.knx': 'KNX',
    'integrators.compat.knx.status': '✓ Dostupno',
    'integrators.compat.control4': 'Control4',
    'integrators.compat.control4.status': 'Uskoro',
    'integrators.compat.api': 'REST API',
    'integrators.compat.api.status': '✓ Otvoren',

    // Tech Cards
    'tech.dual.title': 'Dvojna Komunikacija',
    'tech.dual.desc': 'RF radio + WiFi. Glas-u-tekst koristi WiFi. Sve ostalo radi na RF. Ako jedan otkaže, drugi preuzima. Dva nezavisna kanala, automatsko prebacivanje.',
    'tech.frequency.title': 'Višefrekventni RF',
    'tech.frequency.desc': 'Podržava 433, 868 i 915 MHz. Sistem otkriva lokaciju broda i automatski prebacuje na ispravnu regionalnu frekvenciju. Instaliraj jednom, radi svugde.',
    'tech.failover.title': 'Rezerva Servera',
    'tech.failover.desc': 'Glavni server nije radan? Rezerva preuzima sa punom replikacijom baze podataka. Nema rezerve? Pojačavači formiraju hitnu mrežu. Usluga se nastavlja.',
    'tech.ota.title': 'OTA Ažuriranja',
    'tech.ota.desc': 'Dugmići, pojačavači, server - sve se ažurira udaljeno. Nema kamiona, nema vađenja jahte iz čartera. Pošalji sa obale, svaki uređaj to primi.',
    'tech.power.title': 'Nezavisno od Struje',
    'tech.power.desc': 'Dugmići rade devet meseci. Pojačavači imaju rezervne baterije. Ako jahta izgubi svu struju, dugmići i pojačavači nastavljaju na RF. Gost i dalje može da zove.',
    'tech.ack.title': 'Potvrda Kraj-do-Kraj',
    'tech.ack.desc': 'Svaki poziv dobija jedinstveni ID. Dugme čeka potvrdu servera. Server potvrđuje isporuku posadi, potvrđuje ko je prihvatio, šalje povratnu informaciju gostu. Pun lanac, bez praznina.',

    // Bottom Line
    'integrators.bottomline': 'Nema interneta? Radi. Nema WiFi? Radi. Nema struje? Radi. Server nije radan? Radi.<br>Zahtev gosta se ne može izgubiti.',

    // Parallax Break: Craftsmanship
    'break.craftsmanship.title': 'Zanatstvo',
    'break.craftsmanship.subtitle': '10 besoke obrada. Dizajniran za najfinija plovila sveta.',

    // Section: Craftsmanship
    'craftsmanship.label': 'Zanatstvo',
    'craftsmanship.headline': '<em>Svako dugme je besoke.</em>',
    'craftsmanship.description': 'Od skice na stikeru do precizno obrađenog instrumenta. Svako OBEDIO dugme prati isti put.',

    // Bespoke Steps - NOT TRANSLATED (as per instructions)
    // These remain as-is in English

    // Exploded View
    'craftsmanship.inside.label': 'Šta je Unutra',
    'craftsmanship.inside.headline': '<em>Svaka komponenta ima svrhu.</em>',
    'craftsmanship.inside.description': 'PCB, baterija, RF antena, mikrofonski modul, LED difuzer, CNC-obrađeno kućište. Ništa nije dekorativno. Sve je inženjerski dizajnirano.',

    // Finishes
    'craftsmanship.finishes.headline': '<em>10 obrada.</em> Jedan standard: vaš.',

    // Section: SYTS Barcelona
    'syts.headline': 'Vidimo se u <em>Barseloni.</em>',
    'syts.date': '10 - 11. mart 2026.',
    'syts.booth': 'Štand IH12',
    'syts.speaker': 'TECHTalks Govornik - 11. mart, 13:45',
    'syts.countdown.days': 'Dana',
    'syts.countdown.hours': 'Sati',
    'syts.countdown.minutes': 'Minuta',
    'syts.cta': 'Zakaži Sastanak',

    // Partners
    'partners.label': 'Partneri',

    // Section: Story
    'story.label': 'Priča',
    'story.quote': '"Deset godina na moru me je naučilo jednoj stvari: sistem pozivanja je uvek bio najslabija karika."',
    'story.description': 'Svaki sistem koji sam probao ostavio je iste probleme nerešene. Prazne baterije do večernje službe. Tri odlaska za čašu vode. Racije koje kvaze uniformu. Jezičke barijere koje niko nije rešavao. Zato sam napravio sistem koji sam želeo da postoji. Ne iz konferencijske sale - iz posadske mese, iz mašinske, iz godina rada.',
    'story.founder': 'Branko Blagojević',
    'story.title': 'Osnivač - ETO, Crestron sertifikovan, KNX sertifikovan',
    'story.tagline': 'Napravljen od posade. Za posadu.',
    'story.stat.years': 'Godina na moru',
    'story.stat.languages': 'Jezika',
    'story.stat.offline': 'Oflajn',
    'story.stat.cloud': 'Cloud zavisnost',

    // Section: Contact
    'contact.label': 'Kontakt',
    'contact.headline': '<em>Počni razgovor.</em>',
    'contact.cta': 'Kontaktiraj nas',

    // Footer
    'footer.copy': '© 2026 OBEDIO. Inteligencija Usluge.'
  }
};

// Current language state
let currentLang = 'en';

/**
 * Get browser language preference, defaulting to EN
 */
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  // If browser language starts with 'sr', default to Serbian
  if (browserLang.toLowerCase().startsWith('sr')) {
    return 'sr';
  }
  return 'en';
}

/**
 * Get saved language from localStorage or detect browser preference
 */
function getSavedLanguage() {
  const saved = localStorage.getItem('obedio-language');
  if (saved && (saved === 'en' || saved === 'sr')) {
    return saved;
  }
  return detectBrowserLanguage();
}

/**
 * Save language to localStorage
 */
function saveLanguage(lang) {
  localStorage.setItem('obedio-language', lang);
}

/**
 * Apply translations to elements with data-i18n attribute
 */
function applyTextTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      element.textContent = translation;
    }
  });
}

/**
 * Apply HTML translations to elements with data-i18n-html attribute
 */
function applyHtmlTranslations() {
  const elements = document.querySelectorAll('[data-i18n-html]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    const translation = translations[currentLang][key];
    if (translation) {
      element.innerHTML = translation;
    }
  });
}

/**
 * Update language switcher UI
 */
function updateLanguageSwitcher() {
  const enLink = document.getElementById('lang-en');
  const srLink = document.getElementById('lang-sr');
  
  if (enLink && srLink) {
    enLink.classList.toggle('active', currentLang === 'en');
    srLink.classList.toggle('active', currentLang === 'sr');
  }
}

/**
 * Send language change message to hero-animation iframe
 */
function notifyHeroAnimation() {
  const heroIframe = document.querySelector('#hero-animation iframe');
  if (heroIframe && heroIframe.contentWindow) {
    heroIframe.contentWindow.postMessage({
      type: 'language-change',
      language: currentLang
    }, '*');
  }
}

/**
 * Switch to specified language
 */
function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'sr') return;
  
  currentLang = lang;
  saveLanguage(lang);
  
  // Update document language attribute
  document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
  
  // Apply translations
  applyTextTranslations();
  applyHtmlTranslations();
  
  // Update switcher UI
  updateLanguageSwitcher();
  
  // Notify hero animation iframe
  notifyHeroAnimation();
  
  console.log(`Language switched to: ${lang}`);
}

/**
 * Initialize i18n system
 */
function initializeI18n() {
  // Set initial language
  currentLang = getSavedLanguage();
  console.log(`Initial language: ${currentLang}`);
  
  // Apply initial translations
  switchLanguage(currentLang);
  
  // Set up language switcher event listeners
  const enLink = document.getElementById('lang-en');
  const srLink = document.getElementById('lang-sr');
  
  if (enLink) {
    enLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchLanguage('en');
    });
  }
  
  if (srLink) {
    srLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchLanguage('sr');
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
  initializeI18n();
}

// Export for global access
window.obedioI18n = {
  switchLanguage,
  currentLang: () => currentLang
};