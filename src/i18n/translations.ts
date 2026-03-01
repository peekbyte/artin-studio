export const languages = {
  en: "English",
  pl: "Polski",
  uk: "Українська",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      photography: "Photography",
      videography: "Videography",
      about: "About",
      contact: "Contact",
    },
    // Hero
    hero: {
      subtitle: "Photographer & Videographer",
      title: "Stories through<br/>light & motion",
      description: "Amateur photographer and videographer capturing product, portrait, and moving moments.",
      viewPhotography: "View Photography",
      watchVideos: "Watch Videos",
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
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Photography & Videography",
      designedBy: "Designed & developed by",
    },
  },
  pl: {
    // Navigation
    nav: {
      home: "Strona główna",
      photography: "Fotografia",
      videography: "Wideo",
      about: "O mnie",
      contact: "Kontakt",
    },
    // Hero
    hero: {
      subtitle: "Fotograf i Filmowiec",
      title: "Historie poprzez<br/>światło i ruch",
      description: "Amatorski fotograf i filmowiec uchwytujący produkty, portrety i momenty w ruchu.",
      viewPhotography: "Zobacz Fotografie",
      watchVideos: "Obejrzyj Filmy",
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
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Fotografia i Wideo",
      designedBy: "Zaprojektowane i wykonane przez",
    },
  },
  uk: {
    // Navigation
    nav: {
      home: "Головна",
      photography: "Фотографія",
      videography: "Відео",
      about: "Про мене",
      contact: "Контакт",
    },
    // Hero
    hero: {
      subtitle: "Фотограф і Відеограф",
      title: "Історії через<br/>світло і рух",
      description: "Фотограф-аматор і відеограф, який фіксує продукти, портрети та моменти в русі.",
      viewPhotography: "Переглянути Фотографії",
      watchVideos: "Дивитися Відео",
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
    // Footer
    footer: {
      copyright: "© 2026 Artin Studio · Фотографія та Відео",
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
