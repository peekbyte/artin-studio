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
      title: "Why Artin Studio?",
      lead: "We're a small creative studio that does the work big agencies charge ten times more for — branding, photography, video, websites and online shops, all under one roof.",
      p1: "We started because small businesses deserve great creative work too. Not stock photos, not generic templates — real brand identity built to last.",
      p2: "Every project we take on gets the same attention: we dig into your business, understand your audience, and build something that actually works — visually and commercially.",
      cta: "Start a project",
      val1Title: "One studio, everything",
      val1Desc: "Brand, photos, video, web — no need to juggle five different freelancers.",
      val2Title: "Built for business",
      val2Desc: "Every creative decision is tied to a commercial goal. Looks great and converts.",
      val3Title: "Fast & focused",
      val3Desc: "Clear process, tight timelines, no endless revision cycles.",
      val4Title: "Honest pricing",
      val4Desc: "Transparent quotes, no hidden fees, no surprise invoices.",
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
      title: "Dlaczego Artin Studio?",
      lead: "Jesteśmy małym studiem kreatywnym, które robi to, za co duże agencje biorą dziesięć razy więcej — branding, fotografia, wideo, strony internetowe i sklepy online pod jednym dachem.",
      p1: "Zaczęliśmy, bo małe firmy też zasługują na świetną pracę kreatywną. Nie zdjęcia stockowe, nie szablony — prawdziwa tożsamość marki zbudowana na lata.",
      p2: "Do każdego projektu podchodzimy z taką samą uwagą: zagłębiamy się w Twój biznes, rozumiemy Twoją grupę docelową i tworzymy coś, co naprawdę działa — wizualnie i komercyjnie.",
      cta: "Zacznij projekt",
      val1Title: "Jedno studio, wszystko",
      val1Desc: "Marka, zdjęcia, wideo, web — nie musisz żonglować pięcioma freelancerami.",
      val2Title: "Stworzone dla biznesu",
      val2Desc: "Każda decyzja kreatywna jest powiązana z celem biznesowym. Wygląda świetnie i konwertuje.",
      val3Title: "Szybko i konkretnie",
      val3Desc: "Jasny proces, krótkie terminy, bez nieskończonych rund poprawek.",
      val4Title: "Uczciwe ceny",
      val4Desc: "Przejrzyste wyceny, bez ukrytych kosztów i niespodziewanych faktur.",
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
      title: "Чому Artin Studio?",
      lead: "Ми невелика креативна студія, яка робить те, за що великі агенції беруть у десять разів більше — брендинг, фотографія, відео, сайти та інтернет-магазини під одним дахом.",
      p1: "Ми почали, бо малий бізнес теж заслуговує на якісну творчу роботу. Не стокові фото, не шаблони — справжня фірмова ідентичність, побудована на роки.",
      p2: "До кожного проекту ми підходимо однаково уважно: вивчаємо ваш бізнес, розуміємо аудиторію та будуємо щось, що справді працює — візуально і комерційно.",
      cta: "Розпочати проект",
      val1Title: "Одна студія — всі послуги",
      val1Desc: "Бренд, фото, відео, веб — не потрібно шукати п'ять різних фрілансерів.",
      val2Title: "Для бізнесу",
      val2Desc: "Кожне творче рішення пов'язане з бізнес-метою. Виглядає чудово і конвертує.",
      val3Title: "Швидко і по суті",
      val3Desc: "Чіткий процес, стислі терміни, без нескінченних раундів правок.",
      val4Title: "Чесні ціни",
      val4Desc: "Прозорі кошториси, без прихованих витрат і несподіваних рахунків.",
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
