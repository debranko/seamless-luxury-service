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
    'nav.product': 'Производ',
    'nav.owners': 'Власници',
    'nav.crew': 'Посада',
    'nav.integrators': 'Интегратори',
    'nav.craftsmanship': 'Занатство',
    'nav.story': 'Прича',
    'nav.syts': 'SYTS 2026',
    'nav.contact': 'Контакт',

    // Hero Animation - Key Phrases
    'hero.understood': 'Разумем.',
    'hero.intelligence': 'ИНТЕЛИГЕНЦИЈА УСЛУГЕ',

    // Section: Product
    'product.label': 'SmartButton',
    'product.headline': 'Притисни. Говори.<br><em>Разумем.</em>',
    'product.description': 'Први луксузни дугме за услуге гостију са правом офлајн препознавањем гласа, тренутним преводом на 30+ језика и девет месеци рада батерије. Све се обрађује локално. Ништа не напушта брод.',
    'product.scale': '72 × 72 mm - ширина вашег iPhone-а. Доступно и у компактној варијанти од 65 mm.',
    
    // Three Pillars
    'pillar.languages.label': 'Језици',
    'pillar.languages.desc': 'Гост говори турски.<br>Посада чита српски.<br>5 AI система проверава сваку реч.',
    'pillar.battery.label': 'Месеци Батерија',
    'pillar.battery.desc': 'Без ноћног пуњења.<br>Без празних дугмића током службе.<br>Заборавите да постоји.',
    'pillar.offline.label': 'Офлајн',
    'pillar.offline.desc': 'Без интернета. Без WiFi-ја. Без cloud-а.<br>RF радио + WiFi хибрид са резервом.<br>Захтев не може да се изгуби.',

    // Ecosystem
    'ecosystem.label': 'Екосистем',
    'ecosystem.headline': 'Један систем. <em>Све.</em>',
    'ecosystem.description': 'Од прста госта до руке посаде. Сваки уређај, свака платформа, један извор. Без cloud-а. Без претплата. У потпуности на броду.',
    'ecosystem.smartbutton': 'SmartButton',
    'ecosystem.smartbutton.desc': 'Гостијска кабина, сундек, салон. 9 месеци батерија.',
    'ecosystem.panels': 'Панели',
    'ecosystem.panels.desc': 'Интерфејс за посаду + уграђени RF појачавач. Двојна намена.',
    'ecosystem.server': 'Локални Сервер',
    'ecosystem.server.desc': 'AI на броду. Превод. Рутирање. Комплетна база података.',
    'ecosystem.repeaters': 'Појачавачи',
    'ecosystem.repeaters.desc': 'Проширују RF покривеност. Резервне батерије. Мрежни рад.',
    'ecosystem.applewatch': 'Apple Watch',
    'ecosystem.applewatch.desc': 'Комплетна обавештења. Потреси. Читање у слушалицу.',
    'ecosystem.wearos': 'Wear OS',
    'ecosystem.wearos.desc': '7 дана батерија. Исте функције. Оптимизовано за посаду.',
    'ecosystem.mobile': 'iPhone и Android',
    'ecosystem.mobile.desc': 'Комплетна апликација за посаду. Профили. Порука. Распоред.',
    'ecosystem.dashboard': 'iPad Dashboard',
    'ecosystem.dashboard.desc': 'Мапа брода. Сви захтеви. Статус посаде. Уживо.',
    'ecosystem.webapp': 'Веб Апликација',
    'ecosystem.webapp.desc': 'У браузеру. Било који уређај. Пуна функционалност.',
    'ecosystem.messenger': 'Порукe',
    'ecosystem.messenger.desc': 'Офлајн комуникација посаде. Ништа не напушта брод.',

    // Parallax Break: Voice Intelligence
    'break.voice.title': 'Гласовна Интелигенција',
    'break.voice.subtitle': 'Пет AI система. Један савршен препис. Тридесет језика.',

    // Section: Owners & Guests
    'owners.label': 'За Власнике и Госте',
    'owners.headline': 'Време је једини луксуз<br>који не можете откупити.',
    'owners.description': 'Без апликација. Без упутстава. Без учења. Притисните дугме, говорите на свом језику. Светло потврђује да неко већ долази. То је то.',
    'owners.how.headline': 'Притисни. Говори. <em>Готово.</em>',
    'owners.how.description': 'Притисните дугме. Говорите. Исти прекидач укључује микрофон - нема струје, нема слушања. Физички немогуће подслушкивати. Говорите на било ком од 30+ језика. Ваша посада добија захтев тренутно, преведен, писмено, на руци. Светло на дугмету потврђује да неко долази. Један притисак. Једна шетња. Нула трења.',
    'owners.language.headline': 'Говорите свој језик.<br><em>Посада чита свој.</em>',
    'owners.language.description': 'Говорите турски, руски, мандаринки, или било који од 30+ језика. Пет независних AI модела истовремено преписује сваку реч - систем упоређује свих пет и даје најпрецизнији резултат. Ваша посада добија на српском, тренутно. У оба смера: они одговоре, ви чујете на свом језику. Све се обрађује на броду. Ништа не напушта јахту.',
    'owners.privacy.headline': 'Приватност није само карактеристика.<br><em>То је архитектура.</em>',
    'owners.privacy.description': 'Ваши разговори су ваши. Микрофон је физички искључен док не притиснете дугме. Није софтверски прекидач - хардверско коло. За апсолутну приватност, цео микрофонски модул се може физички уклонити.',

    // Privacy Cards
    'privacy.hardware.title': 'Хардверски Прекидач Микрофона',
    'privacy.hardware.desc': 'Микрофонско коло је физички отворено док не притиснете дугме. Ниједан софтвер не може то да заобиђе. Микрофон дословно не може да слуша.',
    'privacy.module.title': 'Уклоњиви Модул',
    'privacy.module.desc': 'Не верујете ниједном микрофону? Уклоните цео модул. Дугме и даље ради за позиве - само без гласа. Ваш избор, увек.',
    'privacy.encryption.title': 'Енкрипција Крај-до-Крај',
    'privacy.encryption.desc': 'Свака порука, сваки гласовни снимак, сваки захтев. Енкриптован од дугмета до руке. Нико између не може да прочита.',
    'privacy.cloud.title': 'Нула Cloud',
    'privacy.cloud.desc': 'Подаци не напуштају брод. Нема cloud сервера. Нема претплата. Нема треће стране које виде ваше захтеве. Све се обрађује и чува на броду.',
    'privacy.messenger.title': 'Офлајн Порукe',
    'privacy.messenger.desc': 'Комуникација посаде остаје на јахти. Без интернета. Без WhatsApp-а, без iMessage-а, без спољних сервера. Приватна мрежа која постоји само на вашем броду.',
    'privacy.ai.title': 'Локални AI',
    'privacy.ai.desc': 'Препознавање гласа и превод раде на серверу на броду. Ваше речи обрађује ваш хардвер. Ништа се не шаље никуда.',

    // Emergency Block
    'emergency.headline': 'Није карактеристика. <em>Спасилац.</em>',
    'emergency.description': 'Гост са здравственим стањем потресе дугме. Тренутно хитно оглашавање на свим уређајима на броду. Локација, здравствени профил, алергије, стања. Сваки члан посаде то види тренутно.',
    'emergency.timeline.shake': 'Гост потресе<br>дугме',
    'emergency.timeline.broadcast': 'Сваки уређај<br>на броду се огласи',
    'emergency.timeline.response': 'Посада стиже<br>са пуним профилом',
    'emergency.tagline': 'Секунде се рачунају. OBEDIO их испоручује.',

    // Room Control
    'owners.control.headline': 'Једно дугме.<br><em>Цела кабина.</em>',
    'owners.control.description': 'Није само позив за услугу. OBEDIO контролише вашу кабину. Светла, завесе, климу, сцене - све са истог дугмета на ноћном сточићу. Без засебних тастатура. Без учења различитих интерфејса. Једна тачка контакта за све.',
    'owners.control.compatibility': 'Нативна Crestron интеграција. Control4 ускоро.',

    // Bespoke
    'owners.bespoke.headline': '<em>Заиста по мери.</em>',
    'owners.bespoke.description': 'Квадрат. Круг. 72 mm. 65 mm. По мери. Месинг, челик, кожа, црни PVD. Свако дугме се прави да одговара вашој јахти - а не обрнуто. OBEDIO није дефинисан својим обликом. Он дефинише свој сопствени.',

    // Parallax Break: Intelligent Routing
    'break.routing.title': 'Интелигентно Рутирање',
    'break.routing.subtitle': 'Права особа. Сваки пут. Аутоматски.',

    // Section: Crew
    'crew.label': 'За Посаду',
    'crew.headline': 'Ваш посао - <em>Разумем.</em>',
    'crew.description': 'Направљен од стране некога ко је био посада. Десет година као ETO на суперјахтама. Свако нервирање, свако заобилажење, сваки "зашто ово не постоји" тренутак. То је постало OBEDIO.',

    // Hands-free Hero
    'crew.handsfree.headline': 'Потпуно <em>без руку.</em>',
    'crew.handsfree.description': 'Слушалица повезана са руком. Стиже захтев госта. Рука препознаје слушалицу и чита захтев директно у уво члана посаде. Без екрана. Без заустављања. Без гледања на руку. Чујете "Донесите неgazирану воду на сундек" - и већ сте на путу. Потресите руку да прихватите.',
    'crew.handsfree.step1': 'Гост говори у дугме',
    'crew.handsfree.step2': 'Слушалица чита преведени захтев',
    'crew.handsfree.step3': 'Потресите руку да прихватите',
    'crew.handsfree.step4': 'Дугме потврђује госту',

    // Crew Pain Points
    'crew.pain.onetrip.title': 'Једна шетња, не три.',
    'crew.pain.onetrip.desc': 'Гост говори у дугме на било ком језику. Читате захтев на руци, на свом језику. Тапните једном да прихватите. Једна шетња.',
    'crew.pain.delegate.title': 'Потреси да делегираш.',
    'crew.pain.delegate.desc': 'Пуне руке, носите послужавник, у средини службе. Стиже позив. Потресите руку. Прележегује се следећем члану посаде на дужности. Без екрана, без тапкања.',
    'crew.pain.roster.title': 'Ауто распоред дужности.',
    'crew.pain.roster.desc': 'Свако задржава свој уређај. Софтвер зна ваш распоред. Када почне ваша смена, позиви се рутирају вама. Када се заврши, престају.',
    'crew.pain.escalation.title': '3 нивоа ескалације.',
    'crew.pain.escalation.desc': 'Гост зове. Нема одговора? Звони поново. И даље ништа? Ескалира супервизору, затим капетану. Потпуно подесиво. Захтев не може да прође незапажено.',
    'crew.pain.messenger.title': 'Офлајн Порукe.',
    'crew.pain.messenger.desc': 'Шаљите и примајте поруке са руке, iPhone-а, Android-а или веб апликације. Тихо, дискретно. Без интернета. Све остаје на јахти. У потпуности замењује рације.',
    'crew.pain.battery.title': '7 дана батерија руке.',
    'crew.pain.battery.desc': 'Не још једна ствар за пуњење. Оптимизована Wear OS рука траје до седам дана. Поуздан алат, не још једна одговорност.',

    // Crew Watch Feature
    'crew.watch.headline': 'Гост говори руски.<br><span class="gold-text">Ви читате српски.</span>',
    'crew.watch.description': 'Пун захтев на руци пре него што кренете. Преведен. Пет AI система је проверило сваку реч - добијате најпрецизнији препис могућ. Профил госта са преференцама, дијетарним ограничењима и локацијом. Стижете припремљени, не нагађајући. Још увек несигурни? Репродукујте оригинални аудио.',

    // Management
    'crew.mgmt.label': 'Управљање Посадом',
    'crew.mgmt.headline': 'Командујте бродом.<br><em>Са једног екрана.</em>',
    'crew.mgmt.description': 'Crewify софтвер за управљање. iPad контролна табла. Интерактивна мапа брода. Све што шеф-стјуарт, бурсар или капетан треба за вођење услужних операција.',
    'crew.mgmt.requests.headline': 'Захтеви уживо.<br><em>Прихвати или делегирај.</em>',
    'crew.mgmt.requests.description': 'Сваки захтев госта се појављује као картица са фотографијом локације, гласовним преписом и нивоом приоритета. Прихватите једним тапом или делегирајте следећем члану посаде. Три нивоа аутоматске ескалације осигуравају да се ништа не пропусти.',
    'crew.mgmt.roster.headline': 'Распоред посаде.<br><em>Ко је на дужности, ко је следећи.</em>',
    'crew.mgmt.roster.description': 'Пун распоред дужности са календаром смена. Превуци-и-пусти доделу посаде, аутоматско попуњавање образаца, јутарње/поподневне/ноћне смене. Извези, штампај, обавести посаду. Све ради аутоматски када се подеси.',
    'crew.mgmt.profiles.headline': 'Профили гостију.<br><em>Знај пре него што стигнеш.</em>',
    'crew.mgmt.profiles.description': 'Име, кабина, дијетарна ограничења, алергије, VIP статус, датум пријаве. Сваки члан посаде види кога служи. Филтрирај по на броду, очекиваним или VIP. Упозорења о алергијама штите ваше госте.',
    'crew.mgmt.devices.headline': 'Управљач уређаја.<br><em>Свако дугме, свака рука.</em>',
    'crew.mgmt.devices.description': 'Надгледајте сва SmartButton дугмића, руке, појачаваче и мобилне апликације са једног екрана. Нивои батерија, јачина сигнала, температура, статус конекције, последње виђено. Подесите радње притиска сваког дугмета, LED понашање и осетљивост на потресање.',
    'crew.mgmt.escalation.headline': '<em>Три нивоа. Потпуно подесиво.</em>',
    'crew.mgmt.escalation.description': 'Ниво 1: Поново упозори посаду на дужности. Ниво 2: Обавести супервизоре и шефове одељења. Ниво 3: Хитно оглашавање целој посади. Време истека, улоге и интензитет звука - све подесиво.',

    // Parallax Break: Integration
    'break.integration.title': 'Интеграција',
    'break.integration.subtitle': 'Crestron. KNX. Control4. Направљен да се уклопи у ваш стек.',

    // Section: Integrators
    'integrators.label': 'За Интеграторе',
    'integrators.headline': 'Инсталирај.<br><em>Спавај мирно.</em>',
    'integrators.description': 'Нема позива у 3 ујутру. Сваки слој има резерву. Дизајниран од стране Crestron-сертификованог, KNX-сертификованог инжењера који је провео декаду на мору и зна шта се квари.',

    // Integrator Stats
    'integrators.stat.channels': 'Комуникациони канали',
    'integrators.stat.frequencies': 'RF фреквенције',
    'integrators.stat.ai': 'AI преписни системи',
    'integrators.stat.cloud': 'Cloud зависности',

    // Button Configuration
    'integrators.config.headline': 'Сваки притисак.<br><em>Потпуно подесив.</em>',
    'integrators.config.description': 'Једноструки притисак, двоструки притисак, дугачак притисак, додир, потрес - свака радња је независно подесива по дугмету. Гласовно снимање, прост позив, хитан позив, хитно оглашавање. LED боје, аудио повратна информација, осетљивост на потресање. Шест табова подешавања, нула сложености за госта.',

    // Panels
    'integrators.panels.headline': '<em>Панели са уграђеним појачавачем.</em>',
    'integrators.panels.description': 'Панели за јавне просторе служе двојној сврси: интерфејс за посаду и RF појачавач у једном уређају. Поставите их у ходницима, оставама, на мосту. Мање уређаја за инсталацију, мање струјних тачака за планирање, пуна покривеност уграђена.',

    // Room Control
    'integrators.roomcontrol.headline': '<em>Све са ноћног сточића.</em>',
    'integrators.roomcontrol.description': 'Светла, завесе, клима, сцене - и позив за услугу. Једно дугме замењује тастатуру и дугме за позив. Без досезања панела, без устајања из кревета. Нативна Crestron и KNX интеграција. Control4 у развоју.',

    // Compatibility
    'integrators.compat.crestron': 'Crestron',
    'integrators.compat.crestron.status': '✓ Доступно',
    'integrators.compat.knx': 'KNX',
    'integrators.compat.knx.status': '✓ Доступно',
    'integrators.compat.control4': 'Control4',
    'integrators.compat.control4.status': 'Ускоро',
    'integrators.compat.api': 'REST API',
    'integrators.compat.api.status': '✓ Отворен',

    // Tech Cards
    'tech.dual.title': 'Двојна Комуникација',
    'tech.dual.desc': 'RF радио + WiFi. Глас-у-текст користи WiFi. Све остало ради на RF. Ако један откаже, други преузима. Два независна канала, аутоматско пребацивање.',
    'tech.frequency.title': 'Вишефреквентни RF',
    'tech.frequency.desc': 'Подржава 433, 868 и 915 MHz. Систем открива локацију брода и аутоматски пребацује на исправну регионалну фреквенцију. Инсталирај једном, ради свугде.',
    'tech.failover.title': 'Резерва Сервера',
    'tech.failover.desc': 'Главни сервер није радан? Резерва преузима са пуном репликацијом базе података. Нема резерве? Појачавачи формирају хитну мрежу. Услуга се наставља.',
    'tech.ota.title': 'OTA Ажурирања',
    'tech.ota.desc': 'Дугмићи, појачавачи, сервер - све се ажурира удаљено. Нема камиона, нема вађења јахте из чартера. Пошаљи са обале, сваки уређај то прими.',
    'tech.power.title': 'Независно од Струје',
    'tech.power.desc': 'Дугмићи раде девет месеци. Појачавачи имају резервне батерије. Ако јахта изгуби сву струју, дугмићи и појачавачи настављају на RF. Гост и даље може да зове.',
    'tech.ack.title': 'Потврда Крај-до-Крај',
    'tech.ack.desc': 'Сваки позив добија јединствени ID. Дугме чека потврду сервера. Сервер потврђује испоруку посади, потврђује ко је прихватио, шаље повратну информацију госту. Пун ланац, без празнина.',

    // Bottom Line
    'integrators.bottomline': 'Нема интернета? Ради. Нема WiFi? Ради. Нема струје? Ради. Сервер није радан? Ради.<br>Захтев госта се не може изгубити.',

    // Parallax Break: Craftsmanship
    'break.craftsmanship.title': 'Занатство',
    'break.craftsmanship.subtitle': '10 бесоке обрада. Дизајниран за најфинија пловила света.',

    // Section: Craftsmanship
    'craftsmanship.label': 'Занатство',
    'craftsmanship.headline': '<em>Свако дугме је бесоке.</em>',
    'craftsmanship.description': 'Од скице на стикеру до прецизно обрађеног инструмента. Свако OBEDIO дугме прати исти пут.',

    // Bespoke Steps - NOT TRANSLATED (as per instructions)
    // These remain as-is in English

    // Exploded View
    'craftsmanship.inside.label': 'Шта је Унутра',
    'craftsmanship.inside.headline': '<em>Свака компонента има сврху.</em>',
    'craftsmanship.inside.description': 'PCB, батерија, RF антена, микрофонски модул, LED дифузер, CNC-обрађено кућиште. Ништа није декоративно. Све је инжењерски дизајнирано.',

    // Finishes
    'craftsmanship.finishes.headline': '<em>10 обрада.</em> Један стандард: ваш.',

    // Section: SYTS Barcelona
    'syts.headline': 'Видимо се у <em>Барселони.</em>',
    'syts.date': '10 - 11. март 2026.',
    'syts.booth': 'Штанд IH12',
    'syts.speaker': 'TECHTalks Говорник - 11. март, 13:45',
    'syts.countdown.days': 'Дана',
    'syts.countdown.hours': 'Сати',
    'syts.countdown.minutes': 'Минута',
    'syts.cta': 'Заказуј Састанак',

    // Section: Story
    'story.label': 'Прича',
    'story.quote': '"Десет година на мору ме је научило једној ствари: систем позивања је увек био најслабија карика."',
    'story.description': 'Сваки систем који сам пробао оставио је исте проблеме нерешене. Празне батерије до вечерње службе. Три одласка за чашу воде. Рације које квазе униформу. Језичке баријере које нико није решавао. Зато сам направио систем који сам желео да постоји. Не из конференцијске сале - из посадске месе, из машинске, из година рада.',
    'story.founder': 'Бранко Благојевић',
    'story.title': 'Оснивач - ETO, Crestron сертификован, KNX сертификован',
    'story.tagline': 'Направљен од посаде. За посаду.',
    'story.stat.years': 'Година на мору',
    'story.stat.languages': 'Језика',
    'story.stat.offline': 'Офлајн',
    'story.stat.cloud': 'Cloud зависност',

    // Section: Contact
    'contact.label': 'Контакт',
    'contact.headline': '<em>Почни разговор.</em>',
    'contact.cta': 'Контактирај нас',

    // Footer
    'footer.copy': '© 2026 OBEDIO. Интелигенција Услуге.'
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