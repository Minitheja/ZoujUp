export type Lang = "en" | "fr" | "es";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      howItWorks: "How it Works",
      features: "Features",
      faq: "FAQs",
      contact: "Contact",
      joinWaitlist: "Join the waitlist",
    },

    // Hero
    hero: {
      headline1: "Stop random chats.",
      headline2: "Start structured language practice.",
      subheadline: "Guided conversations with native speakers.",
      body: "No ghosting. No small talk. No dating vibe. \nJust real speaking practice.",
      cta: "Join the waitlist",
      earlyAccessTitle:
        "We're onboarding our first 100 users to ensure high-quality matches from day one.",
      earlyAccessSub: "Early users get priority access + extra matches at launch.",
    },

    // Process
    process: {
      title: "How it",
      titleAccent: "works",
      subtitle: "A simple, focused process to get you speaking in seconds.",
      steps: [
        { title: "1. Get matched instantly", desc: "No swiping. No endless profiles." },
        {
          title: "2. Practice a guided session with structured prompts",
          desc: "Balanced speaking time — each partner speaks the language they want to learn.",
        },
        { title: "3. Continue only if it clicks", desc: "No pressure. No wasted time." },
      ],
    },

    // Difference
    difference: {
      title: "Why ZoujUp is",
      titleAccent: "different",
      items: [
        {
          title: "1. You've tried other apps.",
          desc: "You know how it goes. Endless swiping and ghosting.",
        },
        {
          title: "2. You match → it dies.",
          desc: "Conversations go nowhere. It feels like dating.",
        },
        {
          title: "3. ZoujUp is different.",
          desc: "Every session is guided, structured, and balanced. Short enough to fit your day. Effective enough to matter.",
        },
      ],
      footerText: "No swiping. No random chats. No dating vibe. Just real practice.",
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about ZoujUp.",
      items: [
        {
          q: "Which languages can I practice?",
          a: "At launch: Moroccan Arabic (Darija) 🇲🇦, French 🇫🇷, English 🇬🇧, and Spanish 🇪🇸. More languages coming soon.\nCan’t find your language? Request it below — we build based on community demand. Request yours below.",
        },
        {
          q: "Is ZoujUp free to use?",
          a: "Yes. ZoujUp offers a free plan to get you started, with premium plans available for those who want to practice more. Full pricing details will be available at launch.",
        },
        {
          q: "Is ZoujUp different from other language apps?",
          a: "Yes — completely. ZoujUp is not a chat app. Every session is guided, timed, and balanced. No open browsing, no random messaging, no dating vibe. Just real structured practice.",
        },
        {
          q: "Is it safe and professional?",
          a: "Yes. There are no open profiles to browse and chat only unlocks after a mutual session validation. Zero tolerance for inappropriate behavior — accounts are permanently banned",
        },
      ],
    },

    // CTA
    cta: {
      title: "Join the waitlist",
      placeholder: "Enter your email address",
      button: "Join the waitlist",
      note: "Limited early access (100 users). No credit card. Cancel anytime.",
      alert: "Thanks for joining! We'll notify you when a spot opens.",
      legal: "By joining, you agree to our Privacy Policy. We will never share your email.",
      nativeLang: "My native language",
      practiceLang: "Language I want to practice",
      langOptions: [
        "Moroccan Arabic (Darija)",
        "French",
        "English",
        "Spanish",
        "Other (coming soon)",
      ],
    },

    // Contact
    contact: {
      title: "Get in",
      titleAccent: "Touch",
      subtitle: "Have questions or feedback? We'd love to hear from you. Our team is here to support your language learning journey.",
      cardTitle: "Email Us",
      cardDesc: "For general inquiries, support, or partnership opportunities, reach out to us at:",
    },

    // Footer
    footer: {
      tagline: "Practice your language with someone who needs yours. Not an AI. Not random chat. A real human, a real conversation.",
      company: "Company",
      support: "Support",
      crafted: "",
      companyLinks: ["Home", "About", "How it Works", "Features"],
      supportLinks: ["FAQs", "Privacy Policy", "Contact"],
    },
  },

  fr: {
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      howItWorks: "Comment ça marche",
      features: "Fonctionnalités",
      faq: "FAQs",
      contact: "Contact",
      joinWaitlist: "Rejoindre la liste",
    },

    // Hero
    hero: {
      headline1: "Fini les discussions aléatoires.",
      headline2: "Place à la vraie pratique linguistique.",
      subheadline: "Conversations guidées avec des locuteurs natifs.",
      body: "Pas de ghosting. Pas de bavardages. pas d'ambiance appli de rencontres. \nJuste de la vraie pratique orale.",
      cta: "Rejoindre la liste",
      earlyAccessTitle:
        "Nous accueillons nos 100 premiers utilisateurs pour garantir des mises en relation de qualité.",
      earlyAccessSub:
        "Les premiers utilisateurs obtiennent un accès prioritaire + des sessions bonus au lancement.",
    },

    // Process
    process: {
      title: "Comment ça",
      titleAccent: "marche",
      subtitle: "Un processus simple et ciblé pour vous faire parler en quelques secondes.",
      steps: [
        {
          title: "1. Mise en relation instantanément",
          desc: "Pas de swipe. Pas de profils interminables.",
        },
        {
          title: "2. Pratiquez une séance guidée avec des invites structurées.",
          desc: "Temps de parole équilibré — chaque partenaire parle la langue qu'il souhaite apprendre.",
        },
        { title: "3. Continuez uniquement si le courant passe", desc: "Sans pression. Sans temps perdu." },
      ],
    },

    // Difference
    difference: {
      title: "Pourquoi ZoujUp est",
      titleAccent: "différent",
      items: [
        {
          title: "1. Vous avez déjà essayé d'autres applis.",
          desc: "Vous savez comment ça se passe. Swipe infini and ghosting.",
        },
        {
          title: "2. Vous matchez → ça meurt.",
          desc: "Les conversations ne mènent nulle part. On se croirait sur une appli de rencontres.",
        },
        {
          title: "3. ZoujUp est différent.",
          desc: "Chaque session est guidée, structurée et équilibrée. Assez courte pour s'adapter à votre journée. Assez efficace pour compter.",
        },
      ],
      footerText:
        "Pas de swipe. Pas de discussions aléatoires. Pas de feeling dating. Juste de la vraie pratique.",
    },

    // FAQ
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur ZoujUp.",
      items: [
        {
          q: "Quelles langues puis-je pratiquer ?",
          a: "Au lancement : arabe marocain (Darija) 🇲🇦, français 🇫🇷, anglais 🇬🇧 et espagnol 🇪🇸. D'autres langues arrivent bientôt.\nVous ne trouvez pas votre langue ? Écrivez-nous à contact@zoujup.com - nous construisons en fonction de la demande de la communauté.",
        },
        {
          q: "ZoujUp est-il gratuit ?",
          a: "Oui. ZoujUp propose un forfait gratuit pour vous permettre de commencer, avec des forfaits premium disponibles pour ceux qui souhaitent s'entraîner davantage. Les détails complets des tarifs seront disponibles lors du lancement.",
        },
        {
          q: "ZoujUp est-il différent des autres applications de langues ?",
          a: "Oui — complètement. ZoujUp n'est pas une application de chat. Chaque session est guidée, chronométrée et équilibrée. Pas de navigation libre, pas de messagerie aléatoire, pas de feeling dating. Juste une vraie pratique structurée.",
        },
        {
          q: "Est-ce sûr et professionnel ?",
          a: "Oui. Il n'y a pas de profils ouverts à parcourir et le chat ne se débloque qu'après une validation mutuelle de la session. Tolérance zéro pour les comportements inappropriés — les comptes sont bannis définitivement.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Rejoignez la liste d'attente",
      placeholder: "Entrez votre adresse e-mail",
      button: "Rejoindre la liste",
      note: "Accès anticipé limité (100 utilisateurs). Sans carte bancaire. Annulation à tout moment.",
      alert: "Merci de vous être inscrit ! Nous vous préviendrons dès qu'une place se libère.",
      legal: "En vous inscrivant, vous acceptez notre Politique de Confidentialité. Nous ne partagerons jamais votre e-mail.",
      nativeLang: "Ma langue maternelle",
      practiceLang: "Langue que je souhaite pratiquer",
      langOptions: [
        "Arabe marocain (Darija)",
        "Français",
        "Anglais",
        "Espagnol",
        "Autre (bientôt disponible)",
      ],
    },

    // Contact
    contact: {
      title: "Nous",
      titleAccent: "Contacter",
      subtitle: "Des questions ou des retours ? Nous serions ravis de vous entendre. Notre équipe est là pour soutenir votre apprentissage des langues.",
      cardTitle: "Écrivez-nous",
      cardDesc: "Pour toute question générale, support ou opportunité de partenariat, contactez-nous à :",
    },

    // Footer
    footer: {
      tagline: "Pratique ta langue avec quelqu'un qui a besoin de la tienne.Pas une IA. Pas du chat aléatoire. Un vrai humain, une vraie conversation.",
      company: "Entreprise",
      support: "Support",
      crafted: "",
      companyLinks: ["Accueil", "À propos", "Comment ça marche", "Fonctionnalités"],
      supportLinks: ["FAQs", "Confidentialité", "Contact"],
    },
  },

  es: {
    // Navbar
    nav: {
      home: "Inicio",
      about: "Acerca de",
      howItWorks: "Cómo funciona",
      features: "Características",
      faq: "FAQs",
      contact: "Contacto",
      joinWaitlist: "Únete a la lista",
    },

    // Hero
    hero: {
      headline1: "Basta de chats aleatorios.",
      headline2: "Empieza una práctica de idiomas estructurada.",
      subheadline: "Conversaciones guiadas con hablantes nativos.",
      body: "Sin ghosting. Sin charlas triviales. Sin vibras de citas. \nSolo práctica real de conversación.",
      cta: "Únete a la lista",
      earlyAccessTitle:
        "Estamos incorporando a nuestros primeros 100 usuarios para asegurar coincidencias de alta calidad desde el primer día.",
      earlyAccessSub:
        "Los primeros usuarios obtienen acceso prioritario + sesiones extra en el lanzamiento.",
    },

    // Process
    process: {
      title: "Cómo",
      titleAccent: "funciona",
      subtitle: "Un proceso simple y enfocado para que empieces a hablar en segundos.",
      steps: [
        { title: "1. Encuentra un compañero al instante.", desc: "Sin swipes. Sin perfiles infinitos." },
        {
          title: "2. Practica una sesión guiada con instrucciones estructuradas.",
          desc: "Tiempo de habla equilibrado — cada compañero habla el idioma que desea aprender.",
        },
        { title: "3. Continúa solo si os entendéis.", desc: "Sin presión. Sin perder el tiempo." },
      ],
    },

    // Difference
    difference: {
      title: "Por qué ZoujUp es",
      titleAccent: "diferente",
      items: [
        {
          title: "1. Has probado otras apps.",
          desc: "Ya sabes cómo va. Deslizar sin fin y ghosting.",
        },
        {
          title: "2. Conectas → la conversación muere.",
          desc: "No llega a nada. Parece una app de citas.",
        },
        {
          title: "3. ZoujUp es diferente.",
          desc: "Cada sesión es guiada, estructurada y equilibrada. Lo suficientemente corta para tu día. Lo suficientemente efectiva para importar.",
        },
      ],
      footerText: "Sin deslizar. Sin chats aleatorios. Sin vibras de citas. Solo práctica real.",
    },

    // FAQ
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre ZoujUp.",
      items: [
        {
          q: "¿Qué idiomas puedo practicar?",
          a: "En el lanzamiento: árabe marroquí (Darija) 🇲🇦, francés 🇫🇷, inglés 🇬🇧 y español 🇪🇸. Próximamente habrá más idiomas.\n¿No encuentras tu idioma? Solicítalo a continuación: construimos según la demanda de la comunidad. Solicita el tuyo abajo.",
        },
        {
          q: "¿Es ZoujUp gratuito?",
          a: "Sí. ZoujUp ofrece un plan gratuito para que puedas empezar, con planes premium disponibles para aquellos que quieran practicar más. Los detalles completos de los precios estarán disponibles en el lanzamiento.",
        },
        {
          q: "¿Es ZoujUp diferente de otras aplicaciones de idiomas?",
          a: "Sí, completamente. ZoujUp no es una aplicación de chat. Cada sesión es guiada, cronometrada y equilibrada. Sin navegación abierta, sin mensajería aleatoria, sin vibras de citas. Solo práctica estructurada real.",
        },
        {
          q: "¿Es seguro y profesional?",
          a: "Sí. No hay perfiles abiertos para explorar y el chat solo se desbloquea tras una validación mutua de la sesión. Tolerancia cero para comportamientos inapropiados: las cuentas se banean permanentemente.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Únete a la lista de espera",
      placeholder: "Introduce tu correo electrónico",
      button: "Únete a la lista",
      note: "Acceso temprano limitado (100 usuarios). Sin tarjeta de crédito. Cancela en cualquier momento.",
      alert: "¡Gracias por unirte! Te avisaremos cuando haya un lugar disponible.",
      legal: "Al unirte, aceptas nuestra Política de Privacidad. Nunca compartiremos tu correo electrónico.",
      nativeLang: "Mi idioma nativo",
      practiceLang: "Idioma que quiero practicar",
      langOptions: [
        "Árabe marroquí (Darija)",
        "Francés",
        "Inglés",
        "Español",
        "Otro (próximamente)",
      ],
    },

    // Contact
    contact: {
      title: "Contácta",
      titleAccent: "nos",
      subtitle: "¿Tienes preguntas o comentarios? Nos encantaría escucharte. Nuestro equipo está aquí para apoyar tu aprendizaje de idiomas.",
      cardTitle: "Escríbenos",
      cardDesc: "Para consultas generales, soporte u oportunidades de colaboración, contáctanos en:",
    },

    // Footer
    footer: {
      tagline: "Practica idiomas con personas reales. Hecho para hablantes.",
      company: "Compañía",
      support: "Soporte",
      crafted: "",
      companyLinks: ["Inicio", "Acerca de", "Cómo funciona", "Características"],
      supportLinks: ["FAQs", "Política de Privacidad", "Contacto"],
    },
  },
} as const;

export type Translations = typeof translations.en;
