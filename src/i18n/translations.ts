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
      line1: "Your brand,",
      line2: "built",
      line3: "to grow.",
      title: "Photography",
      description: "Product & brand photography for businesses",
      kicker: "Our work, by industry",
      sub: "Select an industry below to filter the gallery — or scroll through everything we've shot.",
      type1: "Product Photography",
      type1Desc: "Clean, compelling shots for e-commerce, packaging and ads.",
      type2: "Brand & Campaign",
      type2Desc: "Lifestyle and editorial imagery that tells your brand's story.",
      type3: "Social Media Content",
      type3Desc: "Ready-to-post visuals optimised for Instagram, Meta ads and more.",
    },
    // Videography
    videography: {
      title: "Videography",
      description: "Brand films, ads & social content for businesses",
      kicker: "Our work, by format",
      sub: "Click any format card to filter the grid, or scroll through all video types we produce.",
      video1: "Brand Film",
      video2: "Product / Ad",
      placeholder: "Paste your YouTube/Vimeo embed or use an iframe above",
      addEmbed: "Add your video embed here",
      type1: "Brand Films",
      type1Desc: "Short cinematic films that introduce your brand and build trust.",
      type2: "Product Videos",
      type2Desc: "Scroll-stopping videos for ads, landing pages and e-commerce.",
      type3: "Social Reels",
      type3Desc: "Fast-paced short-form content built for Instagram, TikTok and Meta ads.",
    },
    // About
    about: {
      title: "The people behind the work",
      lead: "We're a small, focused creative studio based in Warsaw. No account managers, no outsourcing — the person you talk to is the person who builds your brand.",
      p1: "Artin Studio was started because too many small businesses were settling for stock photos and generic templates. We believed they deserved better — real identity, real craft, built to last.",
      p2: "We care deeply about commercial outcomes, not just aesthetics. That means every logo, every shoot, every page we build has a clear purpose: make your business easier to trust, choose and remember.",
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
      title: "Let's build something",
      description: "Ready to get started, or just curious what it would cost? Drop us a message — we'll come back with a clear plan and a flat-rate quote. No commitment.",
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
      about: "Studio",
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
      description: "Fotografia produktowa i brandingowa dla firm",
      kicker: "Nasze realizacje według branży",
      sub: "Wybierz branżę, aby przefiltrować galerię — lub przewiń, żeby zobaczyć wszystko, co fotografowaliśmy.",
      type1: "Fotografia produktowa",
      type1Desc: "Czyste, przyciągające uwagę zdjęcia do e-commerce, opakowań i reklam.",
      type2: "Marka i kampania",
      type2Desc: "Zdjęcia lifestylowe i edytorskie, które opowiadają historię Twojej marki.",
      type3: "Treści na media społecznościowe",
      type3Desc: "Gotowe do publikacji materiały wizualne zoptymalizowane pod Instagram, reklamy Meta i inne.",
    },
    // Videography
    videography: {
      title: "Wideo",
      description: "Filmy brandingowe, reklamy i treści społecznościowe dla firm",
      kicker: "Nasze realizacje według formatu",
      sub: "Kliknij kartę formatu, aby przefiltrować siatkę — lub przewiń, żeby zobaczyć wszystkie typy wideo, które produkujemy.",
      video1: "Film brandingowy",
      video2: "Produkt / Reklama",
      placeholder: "Wklej embed YouTube/Vimeo lub użyj iframe powyżej",
      addEmbed: "Dodaj swój embed wideo tutaj",
      type1: "Filmy brandingowe",
      type1Desc: "Krótkie filmy kinematograficzne, które prezentują markę i budują zaufanie.",
      type2: "Filmy produktowe",
      type2Desc: "Przyciągające uwagę filmy do reklam, landing page'y i e-commerce.",
      type3: "Rolki społecznościowe",
      type3Desc: "Dynamiczne krótkie treści stworzone pod Instagram, TikTok i reklamy Meta.",
    },
    // About
    about: {
      title: "Ludzie za tą pracą",
      lead: "Jesteśmy małym, skoncentrowanym studiem kreatywnym z Warszawy. Żadnych account managerów, żadnego outsourcingu — osoba, z którą rozmawiasz, to ta sama, która buduje Twoją markę.",
      p1: "Artin Studio powstało, bo zbyt wiele małych firm godziło się na zdjęcia stockowe i generyczne szablony. Uwierzyliśmy, że zasługują na coś lepszego — prawdziwą tożsamość, prawdziwe rzemiosło, zbudowane na lata.",
      p2: "Zależy nam na efektach biznesowych, nie tylko estetyce. Każde logo, każda sesja, każda strona, którą budujemy, ma jasny cel: ułatwić Twojemu biznesowi zdobycie zaufania, wyróżnienie się i zapamiętanie.",
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
      title: "Zacznijmy budować",
      description: "Gotowy do startu, czy tylko chcesz wiedzieć ile to kosztuje? Napisz do nas — odpiszemy z jasnym planem i wyceną ryczałtową. Żadnych zobowiązań.",
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
      about: "Студія",
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
      description: "Предметна та брендова фотографія для бізнесу",
      kicker: "Наші роботи за галуззю",
      sub: "Оберіть галузь, щоб відфільтрувати галерею — або прокрутіть, щоб переглянути все, що ми знімали.",
      type1: "Предметна фотографія",
      type1Desc: "Чіткі, привабливі знімки для e-commerce, пакування та реклами.",
      type2: "Бренд і кампанія",
      type2Desc: "Лайфстайл та редакційні зображення, що розповідають історію вашого бренду.",
      type3: "Контент для соцмереж",
      type3Desc: "Готові до публікації матеріали, оптимізовані під Instagram, рекламу Meta тощо.",
    },
    // Videography
    videography: {
      title: "Відео",
      description: "Брендові фільми, реклама та контент для соцмереж",
      kicker: "Наші роботи за форматом",
      sub: "Натисніть на картку формату, щоб відфільтрувати сітку — або прокрутіть, щоб переглянути всі типи відео, які ми знімаємо.",
      video1: "Брендовий фільм",
      video2: "Продукт / Реклама",
      placeholder: "Вставте embed YouTube/Vimeo або використайте iframe вище",
      addEmbed: "Додайте ваше відео тут",
      type1: "Брендові фільми",
      type1Desc: "Короткі кінематографічні фільми, що представляють бренд і будують довіру.",
      type2: "Відео про продукти",
      type2Desc: "Виразні відео для реклами, лендингів та e-commerce.",
      type3: "Ролики для соцмереж",
      type3Desc: "Динамічний короткий контент для Instagram, TikTok та реклами Meta.",
    },
    // About
    about: {
      title: "Люди за цією роботою",
      lead: "Ми невелика, сфокусована креативна студія у Варшаві. Без зайвих менеджерів, без аутсорсингу — людина, з якою ви спілкуєтесь, і є людиною, яка будує ваш бренд.",
      p1: "Artin Studio виникла тому, що занадто багато малих бізнесів задовольнялися стоковими фото і шаблонами. Ми вірили, що вони заслуговують на краще — справжню ідентичність, справжнє ремесло, побудоване надовго.",
      p2: "Нас хвилюють комерційні результати, не лише естетика. Кожен логотип, кожна зйомка, кожна сторінка, яку ми будуємо, має чітку мету: зробити ваш бізнес легшим для довіри, вибору і запам'ятовування.",
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
      title: "Побудуємо щось разом",
      description: "Готові почати або просто хочете дізнатися вартість? Напишіть нам — ми відповімо з чітким планом і фіксованою ціною. Жодних зобов'язань.",
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
