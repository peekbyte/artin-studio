export const languages = {
  en: "English",
  pl: "Polski",
  uk: "Українська",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const langFlags: Record<Lang, string> = {
  en: "🇬🇧",
  pl: "🇵🇱",
  uk: "🇺🇦",
};

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      photography: "Photography",
      videography: "Videography",
      about: "About",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "Creative Studio · Branding & Growth",
      title: "Your brand,<br/><span class='hero-line2'>built to move.</span>",
      description: "Photography, video, brand identity and marketing strategy — everything a growing business needs, in one studio.",
      viewPhotography: "See Our Work",
      watchVideos: "View Services",
    },
    // Photography
    photography: {
      title: "Photography",
      description: "Product shots and portraits — two ways I see the world.",
    },
    // Videography
    videography: {
      title: "Videography",
      description: "Short films, reels, and motion work.",
      video1: "Video 1",
      video2: "Video 2",
      placeholder: "Paste your YouTube/Vimeo embed or use an iframe above",
      addEmbed: "Add your video embed here",
    },
    // About
    about: {
      title: "About Me",
      p1: "I'm an amateur photographer and videographer based in Poland. What started as a curiosity for how light and composition tell a story has turned into a constant chase for the right moment — in both stills and motion.",
      p2: "I focus on product photography for brands and small businesses, and portrait work that feels natural and honest. On the video side, I love short-form content, reels, and anything that moves.",
      p3: "Every project is a chance to learn and push what I can do with the gear I have. If you have an idea or want to collaborate, say hello.",
      photoPlaceholder: "Add your photo here",
    },
    // Contact
    contact: {
      title: "Let's work together",
      description: "Have a project in mind? Reach out through social media or send me a message.",
      instagram: "Instagram",
      youtube: "YouTube",
      myGear: "My Gear",
      orSendMessage: "Or send me a direct message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
    },
    // Services
    services: {
      sectionTitle: "What we do",
      sectionDesc: "Everything a business needs to launch, grow and stand out — photography, video, branding, web and marketing, all under one roof.",
      photoTitle: "Photography",
      photoDesc: "Product shots, portraits and brand imagery that make your business look its best — online and in print.",
      videoTitle: "Videography",
      videoDesc: "Reels, brand films and video campaigns that move your audience and keep your brand in their mind.",
      brandTitle: "Branding",
      brandDesc: "Visual identity, logo design and brand systems built to communicate who you are and built to grow.",
      webTitle: "Web & Digital",
      webDesc: "Websites, online shops and web apps built to convert visitors into customers and represent your brand online.",
      marketTitle: "Marketing",
      marketDesc: "Content strategy, social campaigns and a clear roadmap to turn your audience into paying customers.",
      process: "How we work",
      step1: "Discover",
      step1Desc: "We learn your goals, audience and market position.",
      step2: "Create",
      step2Desc: "Photography, video and brand identity — all aligned.",
      step3: "Launch",
      step3Desc: "Every asset delivered, ready for your brand to go live.",
      step4: "Grow",
      step4Desc: "Ongoing content strategy to build momentum over time.",
      cta: "Start a project",
    },
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Creative Branding Studio",
      designedBy: "Designed & developed by",
    },
  },
  pl: {
    // Navigation
    nav: {
      home: "Strona główna",
      services: "Usługi",
      photography: "Fotografia",
      videography: "Wideo",
      about: "O mnie",
      contact: "Kontakt",
    },
    // Hero
    hero: {
      subtitle: "Studio Kreatywne · Branding i Wzrost",
      title: "Twoja marka,<br/><span class='hero-line2'>stworzona by ruszyć.</span>",
      description: "Fotografia, wideo, identyfikacja wizualna i marketing — wszystko, czego potrzebuje rozwijający się biznes, w jednym studiu.",
      viewPhotography: "Zobacz nasze prace",
      watchVideos: "Zobacz usługi",
    },
    // Photography
    photography: {
      title: "Fotografia",
      description: "Zdjęcia produktowe i portrety — dwa sposoby, w jakie widzę świat.",
    },
    // Videography
    videography: {
      title: "Wideo",
      description: "Krótkie filmy, rolki i prace w ruchu.",
      video1: "Film 1",
      video2: "Film 2",
      placeholder: "Wklej embed YouTube/Vimeo lub użyj iframe powyżej",
      addEmbed: "Dodaj swój embed wideo tutaj",
    },
    // About
    about: {
      title: "O mnie",
      p1: "Jestem amatorskim fotografem i filmowcem mieszkającym w Polsce. To, co zaczęło się jako ciekawość, jak światło i kompozycja opowiadają historię, zamieniło się w ciągłe poszukiwanie odpowiedniego momentu — zarówno w kadrach, jak i w ruchu.",
      p2: "Skupiam się na fotografii produktowej dla marek i małych firm oraz na portretach, które wyglądają naturalnie i szczerze. Po stronie wideo uwielbiam krótkie treści, rolki i wszystko, co się porusza.",
      p3: "Każdy projekt to szansa na naukę i rozwijanie tego, co mogę zrobić ze sprzętem, który mam. Jeśli masz pomysł lub chcesz współpracować, napisz do mnie.",
      photoPlaceholder: "Dodaj swoje zdjęcie tutaj",
    },
    // Contact
    contact: {
      title: "Pracujmy razem",
      description: "Masz projekt w głowie? Skontaktuj się przez media społecznościowe lub wyślij mi wiadomość.",
      instagram: "Instagram",
      youtube: "YouTube",
      myGear: "Mój sprzęt",
      orSendMessage: "Lub wyślij mi bezpośrednią wiadomość",
      name: "Imię",
      namePlaceholder: "Twoje imię",
      email: "Email",
      emailPlaceholder: "ty@przyklad.pl",
      message: "Wiadomość",
      messagePlaceholder: "Opowiedz mi o swoim projekcie...",
      send: "Wyślij wiadomość",
    },
    // Services
    services: {
      sectionTitle: "Co robimy",
      sectionDesc: "Wszystko, czego potrzebuje biznes, aby wystartować, rozwinąć się i wybić się — fotografia, wideo, branding, strony internetowe i marketing pod jednym dachem.",
      photoTitle: "Fotografia",
      photoDesc: "Zdjęcia produktowe, portrety i fotografia brandingowa, które wyróżnią Twój biznes.",
      videoTitle: "Wideo",
      videoDesc: "Rolki, filmy brandingowe i kampanie wideo, które trafiają do odbiorcy i zostają w pamięci.",
      brandTitle: "Branding",
      brandDesc: "Identyfikacja wizualna, logo i system marki gotowe na wzrost Twojego biznesu.",
      webTitle: "Web i Cyfrowe",
      webDesc: "Strony internetowe, sklepy online i aplikacje webowe zbudowane tak, by zamieniać odwiedzających w klientów.",
      marketTitle: "Marketing",
      marketDesc: "Strategia treści, kampanie w mediach społecznościowych i plan zamiany obserwujących w klientów.",
      process: "Jak pracujemy",
      step1: "Odkrywamy",
      step1Desc: "Poznajemy Twoje cele, grupę docelową i rynek.",
      step2: "Tworzymy",
      step2Desc: "Fotografia, wideo i identyfikacja — wszystko spójne z marką.",
      step3: "Wdrażamy",
      step3Desc: "Wszystkie materiały gotowe, marka wychodzi na świat.",
      step4: "Rozwijamy",
      step4Desc: "Strategia treści, która buduje momentum z czasem.",
      cta: "Zacznij projekt",
    },
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Kreatywne Studio Brandingowe",
      designedBy: "Zaprojektowane i wykonane przez",
    },
  },
  uk: {
    // Navigation
    nav: {
      home: "Головна",
      services: "Послуги",
      photography: "Фотографія",
      videography: "Відео",
      about: "Про мене",
      contact: "Контакт",
    },
    // Hero
    hero: {
      subtitle: "Креативна студія · Брендинг і Зростання",
      title: "Ваш бренд,<br/><span class='hero-line2'>створений рухатися.</span>",
      description: "Фотографія, відео, фірмовий стиль і маркетинг — усе необхідне для бізнесу, що росте, в одній студії.",
      viewPhotography: "Переглянути роботи",
      watchVideos: "Переглянути послуги",
    },
    // Photography
    photography: {
      title: "Фотографія",
      description: "Предметні зйомки та портрети — два способи бачити світ.",
    },
    // Videography
    videography: {
      title: "Відео",
      description: "Короткі фільми, ролики та рухомі роботи.",
      video1: "Відео 1",
      video2: "Відео 2",
      placeholder: "Вставте embed YouTube/Vimeo або використайте iframe вище",
      addEmbed: "Додайте ваше відео тут",
    },
    // About
    about: {
      title: "Про мене",
      p1: "Я фотограф-аматор і відеограф з Польщі. Те, що почалося як цікавість до того, як світло і композиція розповідають історію, перетворилося на постійне полювання за правильним моментом — як у фото, так і в русі.",
      p2: "Я спеціалізуюся на предметній фотографії для брендів і малого бізнесу, а також на портретах, які виглядають природно і щиро. З відео я люблю короткий контент, ролики та все, що рухається.",
      p3: "Кожен проект — це можливість навчитися і розвинути те, що я можу зробити з технікою, яка у мене є. Якщо у вас є ідея або ви хочете співпрацювати, напишіть мені.",
      photoPlaceholder: "Додайте своє фото тут",
    },
    // Contact
    contact: {
      title: "Давайте працювати разом",
      description: "Є проект на думці? Зверніться через соціальні мережі або надішліть мені повідомлення.",
      instagram: "Instagram",
      youtube: "YouTube",
      myGear: "Моє обладнання",
      orSendMessage: "Або надішліть мені пряме повідомлення",
      name: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      email: "Email",
      emailPlaceholder: "ви@приклад.ua",
      message: "Повідомлення",
      messagePlaceholder: "Розкажіть про ваш проект...",
      send: "Надіслати повідомлення",
    },
    // Services
    services: {
      sectionTitle: "Що ми робимо",
      sectionDesc: "Усе, що потрібно бізнесу для запуску, зростання і виділення — фото, відео, брендинг, веб та маркетинг під одним дахом.",
      photoTitle: "Фотографія",
      photoDesc: "Предметні зйомки, портрети та брендова фотографія, що виділяють ваш бізнес.",
      videoTitle: "Відеографія",
      videoDesc: "Короткі ролики, брендові фільми та відеокампанії, що залишаються в пам'яті.",
      brandTitle: "Брендинг",
      brandDesc: "Фірмовий стиль, логотип та бренд-система, що комунікують хто ви є і ростуть разом із вами.",
      webTitle: "Веб і Цифрове",
      webDesc: "Сайти, інтернет-магазини та веб-додатки, створені з метою перетворювати відвідувачів на клієнтів.",
      marketTitle: "Маркетинг",
      marketDesc: "Контент-стратегія та соцмережі, що перетворюють підписників на клієнтів.",
      process: "Як ми працюємо",
      step1: "Досліджуємо",
      step1Desc: "Вивчаємо ваші цілі, аудиторію та ринок.",
      step2: "Створюємо",
      step2Desc: "Фото, відео та стиль — все узгоджено з брендом.",
      step3: "Запускаємо",
      step3Desc: "Всі матеріали готові, бренд виходить у світ.",
      step4: "Розвиваємо",
      step4Desc: "Контент-стратегія, що підтримує зростання з часом.",
      cta: "Розпочати проект",
    },
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Креативна Брендингова Студія",
      designedBy: "Розроблено та створено",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

export function getTranslations(lang: Lang) {
  return translations[lang] || translations[defaultLang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
