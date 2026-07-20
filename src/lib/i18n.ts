export type Lang = "en" | "fr" | "es" | "da";

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
      pill: "🚀 Coming September 2026",
      headline1: "Stop random chats.",
      headline2a: "Start structured",
      headline2b: "language practice.",
      subheadline: "The first speaking practice app built for under-served languages and the communities that bridge them — starting with Darija, French, English & Spanish. No ghosting, no small talk, no dating vibe. Just real practice with native speakers.",
      cta: "Join the waitlist",
      earlyAccessTitle:
        "We're onboarding our first 100 users to ensure high-quality matches from day one.",
      earlyAccessSub: "Early users get priority access + extra matches at launch.",
    },

    // Pains
    pains: {
      title: "What ZoujUp actually",
      titleAccent: "fixes",
      subtitle: "Real problems. Real solutions. No bullshit.",
      items: [
        { icon: "😤", q: "\"I studied for years and still freeze when I try to speak — and I have no one real to practice with.\"", a: "**ZoujUp is not study — it's speaking.** No flashcards. No grammar tests. Just real conversations with real people, anywhere in the world — and your partner needs your language as much as you need theirs. A few minutes of real conversation a day beats hours of passive study." },
        { icon: "💔", q: "\"Other language apps feel like dating apps. I came to learn, not to be hit on.\"", a: "**ZoujUp is anti-dating by design.** No browsing profiles. No swiping. No public messaging. Just structured sessions with a partner matched for your goal" },
        { icon: "⏰", q: "\"Tutors are expensive. Classes don't fit my schedule. I can't sustain it.\"", a: "**A few minutes a day. That's all it takes.** ZoujUp fits in your morning coffee, your commute, your lunch break. Your partner gets just as much value — they're learning your language." },
        { icon: "🌍", q: "\"I'm in the diaspora. I'm losing the language of my parents — and my kids will lose more.\"", a: "**Bring it back home — by giving someone what they need too.** ZoujUp pairs you with a Moroccan who wants to learn your French, English or Spanish. You teach each other. You leave with your Darija stronger. They leave with the global language they've been chasing. Both win. Imagine practicing with ZoujUp in the morning and using those same phrases again that very evening — at the dinner table, with your kids?" },        
      ],
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
          q: "When will ZoujUp launch?",
          a: "**September 2026**. But here’s the catch: **first 100 people on the waitlist unlock 1 month FREE at launch** — daily sessions, video calls, all languages. **Only 53 spots left**. Once we hit 100, this offer is gone forever. Don’t wait.",
        },
        {
          q: "Which languages can I practice?",
          a: "At launch: Moroccan Arabic (Darija) 🇲🇦, French 🇫🇷, English 🇬🇧, and Spanish 🇪🇸. More languages coming soon.\nCan’t find your language? Contact us at contact@zoujup.com — we build based on community demand.",
        },
        {
          q: "Is ZoujUp free to use?",
          a: "ZoujUp isn’t free, but every new user gets a 14-day free trial with full access to all features. At the end of your trial, you can choose the subscription plan that suits you best. To thank our early supporters, waitlist members will get their first month completely free when we launch.",
        },
        {
          q: "Is ZoujUp different from other language apps?",
          a: "Yes — completely. ZoujUp is not a chat app. Every session is guided, timed, and balanced. No open browsing, no random messaging, no dating vibe. Just real structured practice.",
        },
        {
          q: "Is it safe and professional?",
          a: "Yes. There are no open profiles to browse and chat only unlocks after a mutual session validation. Zero tolerance for inappropriate behavior — accounts are permanently banned",
        },
        {
          q: "Can I choose to practice only with women or only with men?",
          a: "Yes. During onboarding, you can set your partner preference: women only, men only, or no preference. ZoujUp respects your personal and cultural boundaries. Your practice partner will always match your preference.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Save your spot",
      benefit: "🎁 First 100 sign-ups: 1 month FREE — daily sessions, video calls, multi-language access",
      lead: "Tell us a bit about you. We'll be in touch before launch.",
      placeholder: "Your email address",
      button: "Count me in 🙌",
      note: "Limited early access (100 users). No credit card. Cancel anytime.",
      alert: "Thanks for joining! We'll notify you when a spot opens.",
      alreadyRegistered: "You're already on the list!",
      legalStart: "By joining, you agree to our",
      legalLinkText: "Privacy Policy",
      legalEnd: ". We will never share your email. ✊",
      nativeLang: "I speak fluently",
      practiceLang: "Language I want to practice",
      promoCodePlaceholder: "Promo code (optional)",
      langOptions: [
        "Moroccan Arabic (Darija)",
        "French",
        "English",
        "Spanish",
        "Other (coming soon)",
      ],
    },

    // Founder
    founder: {
      title: "Why I built ZoujUp",
      p1: "I’m Jihane — MRE, born between two worlds. I grew up understanding Darija but struggling to speak it back.",
      p2: " I built ZoujUp because I couldn’t find the app I needed. And I know I’m not alone.",
      signature: "— Jihane, Founder of ZoujUp",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },

    // Counter
    counter: {
      titleSuffix: "/ 100 people already signed up",
      subtitle: "When we hit 100, we close. First 100 get 1 month of unlimited access FREE.",
      percentSuffix: "% claimed — limited spots, no second chance",
    },

    // CTA Mid
    ctaMid1: {
      headline: "Ready to be part of the story?",
      button: "Count me in →",
    },
    ctaMid3: {
      headline: "Still here? You're ready.",
      button: "Reserve my spot →",
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
      questions: "Questions? Reach out:",
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
      faq: "Questions fréquentes",
      contact: "Contact",
      joinWaitlist: "Rejoindre la liste",
    },

    // Hero
    hero: {
      pill: "🚀 Lancement Septembre 2026",
      headline1: "Fini les discussions aléatoires.",
      headline2a: "Place à la vraie",
      headline2b: "pratique linguistique.",
      subheadline: "La première application de pratique orale conçue pour les langues sous-représentées et les communautés qui les relient — en commençant par la darija, le français, l'anglais et l'espagnol. Pas de ghosting, pas de blabla, pas d'ambiance appli de rencontre. Juste de la vraie pratique orale avec des natifs.",
      cta: "Rejoindre la liste",
      earlyAccessTitle:
        "Nous accueillons nos 100 premiers utilisateurs pour garantir des mises en relation de qualité.",
      earlyAccessSub:
        "Les premiers utilisateurs obtiennent un accès prioritaire + des sessions bonus au lancement.",
    },

    // Pains
    pains: {
      title: "Ce que ZoujUp",
      titleAccent: "règle vraiment",
      subtitle: "De vrais problèmes. De vraies solutions. Pas de bullshit.",
      items: [
        { icon: "😤", q: "\"J’ai étudié pendant des années et je bloque encore dès que j’essaie de parler — et je n’ai personne avec qui pratiquer.\"", a: "**ZoujUp, ce n’est pas de la théorie — c’est de la parole.** Pas de listes de mots à mémoriser. Pas de tests de grammaire. Juste de vraies conversations avec de vraies personnes, partout dans le monde — et l’échange est mutuel — il a autant besoin de toi que toi de lui. Quelques minutes de vraie conversation par jour valent mieux que des heures d’étude passive." },
        { icon: "💔", q: "\"Les autres applis de langues ressemblent à des applis de rencontre. Je suis venu ici pour apprendre, pas pour me faire draguer. \"", a: "**ZoujUp est conçu contre ça dès le départ.** Pas de profils à parcourir. Pas de swipe. Pas de messagerie publique. Juste des sessions structurées avec un partenaire de langue sélectionné selon ton objectif." },
        { icon: "⏰", q: "\"Les profs coûtent cher. Les cours ne correspondent pas à mon emploi du temps. Je n’arrive pas à tenir sur la durée.\"", a: "**Quelques minutes par jour. C’est tout ce qu’il faut.** ZoujUp s’intègre dans ton café du matin, ton trajet ou ta pause déjeuner. Et ton partenaire de langue y gagne autant que toi — il apprend ta langue pendant que tu apprends la sienne." },
        { icon: "🌍", q: "\"Je vis dans la diaspora. Je suis en train de perdre la langue de mes parents — et mes enfants la perdront encore plus vite. \"", a: "**Ne la laisse pas mourir.** Chaque session est une conversation de plus que tu peux avoir avec ta famille. Imagine pratiquer le matin avec ZoujUp et réutiliser ces phrases le soir même — à table, avec tes enfants." },
      ],
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
          title: "2. Une séance guidée. On vous donne le sujet. Vous parlez.",
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
          desc: "Vous savez comment ça se passe. Swipe infini et ghosting.",
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
        "Pas de swipe. Pas de discussions aléatoires. Pas d’ambiance appli de rencontres. Juste de la vraie pratique.",
    },

    // FAQ
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur ZoujUp.",
      items: [
        {
          q: "Quand ZoujUp sera-t-elle lancée ?",
          a: "**Septembre 2026**. Mais voici le plus intéressant : les **100 premières personnes sur la liste d’attente recevront 1 mois GRATUIT au lancement** — sessions quotidiennes, appels vidéo, toutes les langues. **Il ne reste plus que 53 places**. Une fois les 100 atteints, cette offre disparaît pour toujours. Ne tardez pas.",
        },
        {
          q: "Quelles langues puis-je pratiquer ?",
          a: "Au lancement : arabe marocain (Darija) 🇲🇦, français 🇫🇷, anglais 🇬🇧 et espagnol 🇪🇸. D'autres langues arrivent bientôt.\nVous ne trouvez pas votre langue ? Écrivez-nous à contact@zoujup.com - nous construisons en fonction de la demande de la communauté.",
        },
        {
          q: "ZoujUp est-il gratuit ?",
          a: "ZoujUp n’est pas gratuit, mais chaque nouvel utilisateur bénéficie d’un essai gratuit de 14 jours avec un accès complet à toutes les fonctionnalités. À la fin de l’essai, tu pourras choisir l’abonnement qui te convient le mieux. Pour remercier nos premiers membres, les personnes inscrites sur la liste d’attente bénéficieront d’un premier mois entièrement offert au lancement.",
        },
        {
          q: "ZoujUp est-il différent des autres applications de langues ?",
          a: "Oui — complètement. ZoujUp n'est pas une application de chat. Chaque session est guidée, chronométrée et équilibrée. Pas de navigation libre, pas de messagerie aléatoire, pas d’ambiance appli de rencontres. Juste une vraie pratique structurée.",
        },
        {
          q: "Est-ce sûr et professionnel ?",
          a: "Oui. Il n'y a pas de profils ouverts à parcourir et le chat ne se débloque qu'après une validation mutuelle de la session. Tolérance zéro pour les comportements inappropriés — les comptes sont bannis définitivement.",
        },
         {
          q: "Puis-je choisir de pratiquer uniquement avec des femmes ou uniquement avec des hommes ?",
          a: "Oui. Lors de l’inscription, tu peux définir ta préférence : femmes uniquement, hommes uniquement, ou sans préférence. ZoujUp respecte tes limites personnelles et culturelles. Ton partenaire de pratique correspondra toujours à ta préférence.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Réserve ta place",
      benefit: "🎁 Les 100 premiers : 1 mois OFFERT — sessions quotidiennes, appels vidéo, accès multi-langues",
      lead: "Parle-nous un peu de toi. On te recontacte avant le lancement.",
      placeholder: "Ton adresse email",
      button: "Compte sur moi 🙌",
      note: "Accès anticipé limité (100 utilisateurs). Sans carte bancaire. Annulation à tout moment.",
      alert: "Merci de vous être inscrit ! Nous vous préviendrons dès qu'une place se libère.",
      alreadyRegistered: "Tu es déjà sur la liste !",
      legalStart: "En t'inscrivant, tu acceptes notre",
      legalLinkText: "Politique de Confidentialité",
      legalEnd: ". On ne partagera jamais ton email. ✊",
      nativeLang: "Je parle couramment",
      practiceLang: "Langue que je souhaite pratiquer",
      promoCodePlaceholder: "Code promo (optionnel)",
      langOptions: [
        "Arabe marocain (Darija)",
        "Français",
        "Anglais",
        "Espagnol",
        "Autre (bientôt disponible)",
      ],
    },

    // Founder
    founder: {
      title: "Pourquoi j'ai créé ZoujUp",
      p1: "Je suis Jihane — MRE, née entre deux mondes. J’ai grandi en comprenant la darija mais en galèrant à le parler.",
      p2: "J’ai créé ZoujUp parce que je ne trouvais pas l’app dont j’avais besoin. Et je sais que je ne suis pas la seule.",
      signature: "— Jihane, Fondatrice de ZoujUp",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },

    // Counter
    counter: {
      titleSuffix: "/ 100 personnes déjà inscrites",
      subtitle: "Quand on atteint 100, on ferme. Les 100 premiers reçoivent 1 mois d'accès illimité OFFERT.",
      percentSuffix: "% prises — places limitées, pas de seconde chance",
    },

    // CTA Mid
    ctaMid1: {
      headline: "Prêt à faire partie de l'histoire ?",
      button: "Compte sur moi →",
    },
    ctaMid3: {
      headline: "Encore là ? Tu es prêt.",
      button: "Réserve ma place →",
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
      tagline: "Pratique ta langue avec quelqu'un qui a besoin de la tienne. Pas une IA. Pas du chat aléatoire. Un vrai humain, une vraie conversation.",
      questions: "Une question ? Écris-nous :",
      company: "Entreprise",
      support: "Support",
      crafted: "",
      companyLinks: ["Accueil", "À propos", "Comment ça marche", "Fonctionnalités"],
      supportLinks: ["Questions fréquentes", "Confidentialité", "Contact"],
    },
  },

  es: {
    // Navbar
    nav: {
      home: "Inicio",
      about: "Acerca de",
      howItWorks: "Cómo funciona",
      features: "Características",
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
      joinWaitlist: "Únete a la lista",
    },

    // Hero
    hero: {
      pill: "🚀 Lanzamiento Septiembre 2026",
      headline1: "Basta de chats aleatorios.",
      headline2a: "Empieza a practicar",
      headline2b: "de verdad.",
      subheadline: "La primera app de práctica oral diseñada para las lenguas menos representadas y las comunidades que las mantienen vivas — empezando por el Darija, el Francés, el Inglés y el Español. Sin ghosting, sin conversaciones vacías, sin ligoteos. Solo práctica de verdad.",
      cta: "Únete a la lista",
      earlyAccessTitle:
        "Estamos incorporando a nuestros primeros 100 usuarios para asegurar coincidencias de alta calidad desde el primer día.",
      earlyAccessSub:
        "Los primeros usuarios obtienen acceso prioritario + sesiones extra en el lanzamiento.",
    },

    // Pains
    pains: {
      title: "Lo que ZoujUp",
      titleAccent: "resuelve de verdad",
      subtitle: "Problemas reales. Soluciones reales. Sin bullshit.",
      items: [
        { icon: "😤", q: "\"Estudié durante años y todavía me bloqueo cuando intento hablar.\"", a: "**ZoujUp no es estudiar — es hablar.** Sin flashcards. Sin tests de gramática. Solo conversaciones reales con personas reales. Los estudios muestran que 15 minutos diarios de práctica oral superan horas de aprendizaje pasivo." },
        { icon: "💔", q: "\"Otras apps de idiomas parecen apps de citas. Vine a aprender, no a que intenten ligar conmigo.\"", a: "**ZoujUp es anti-dating por diseño.** Sin perfiles que navegar. Sin swipe. Sin mensajería pública. Solo sesiones estructuradas con un compañero emparejado para tu objetivo, anonimizado solo con nombre de pila." },
        { icon: "⏰", q: "\"Los tutores son caros. Las clases no encajan en mi horario. No puedo mantenerlo.\"", a: "**15 minutos. Eso es todo.** ZoujUp encaja en tu café de la mañana, tu trayecto al trabajo, tu pausa de almuerzo. Tu compañero recibe el mismo valor — está aprendiendo tu idioma." },
        { icon: "🌍", q: "\"Estoy en la diáspora. Estoy perdiendo el idioma de mis padres — y mis hijos perderán más.\"", a: "**Tráelo de vuelta a casa.** Cada sesión es una conversación más que puedes tener con tu familia. Algunos usuarios de ZoujUp practican por la mañana, luego usan esas frases la misma noche — en la mesa, con sus hijos." },
        { icon: "💼", q: "\"Estoy en Marruecos. Necesito inglés o francés para mi carrera — pero no tengo a nadie real con quien practicar aquí.\"", a: "**El mundo está al otro lado de la pantalla.** Practica con un nativo francés o inglés que de verdad quiere aprender Darija de ti. Acentos auténticos, expresiones reales, argot actual — no inglés de libro de un tutor que nunca ha vivido en Londres." },
      ],
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
          q: "¿Cuándo se lanzará ZoujUp?",
          a: "**Septiembre 2026**. Pero hay un detalle: las **primeras 100 personas en la lista de espera desbloquean 1 mes GRATIS al lanzamiento** — sesiones diarias, videollamadas, todos los idiomas. **Solo quedan 53 plazas**. Una vez que lleguemos a 100, esta oferta desaparece para siempre. No esperes.",
        },
        {
          q: "¿Qué idiomas puedo practicar?",
          a: "En el lanzamiento: árabe marroquí (Darija) 🇲🇦, francés 🇫🇷, inglés 🇬🇧 y español 🇪🇸. ¿No encuentras tu idioma? Escríbenos a contact@zoujup.com — construimos según la demanda de la comunidad.",
        },
        {
          q: "¿ZoujUp es gratis?",
          a: "ZoujUp no es gratis, pero cada nuevo usuario disfruta de una prueba gratuita de 14 días con acceso completo a todas las funciones. Al finalizar la prueba, podrás elegir el plan de suscripción que mejor se adapte a ti. Como agradecimiento a nuestros primeros usuarios, las personas inscritas en la lista de espera disfrutarán de su primer mes completamente gratis cuando lancemos la app.",
        },
        {
          q: "¿Es ZoujUp diferente de otras aplicaciones de idiomas?",
          a: "Sí, completamente. ZoujUp no es una aplicación de chat. Cada sesión es guiada, cronometrada y equilibrada. Sin navegación abierta, sin mensajería aleatoria, sin vibras de citas. Solo práctica estructurada real.",
        },
        {
          q: "¿Es seguro y profesional?",
          a: "Sí. No hay perfiles abiertos para explorar y el chat solo se desbloquea tras una validación mutua de la sesión. Tolerancia cero para comportamientos inapropiados: las cuentas se banean permanentemente.",
        },
         {
          q: "¿Puedo elegir practicar solo con mujeres o solo con hombres?",
          a: "Sí. Durante el registro, puedes establecer tu preferencia: solo mujeres, solo hombres, o sin preferencia. ZoujUp respeta tus límites personales y culturales. Tu compañero de práctica siempre coincidirá con tu preferencia.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Reserva tu lugar",
      benefit: "🎁 Los primeros 100: 1 mes GRATIS — sesiones diarias, videollamadas, acceso multi-idioma",
      lead: "Cuéntanos un poco sobre ti. Te contactaremos antes del lanzamiento.",
      placeholder: "Tu dirección de email",
      button: "Cuenta conmigo 🙌",
      note: "Acceso temprano limitado (100 usuarios). Sin tarjeta de crédito. Cancela en cualquier momento.",
      alert: "¡Gracias por unirte! Te avisaremos cuando haya un lugar disponible.",
      alreadyRegistered: "¡Ya estás en la lista!",
      legalStart: "Al unirte, aceptas nuestra",
      legalLinkText: "Política de Privacidad",
      legalEnd: ". Nunca compartiremos tu correo electrónico. ✊",
      nativeLang: "Hablo con fluidez",
      practiceLang: "Idioma que quiero practicar",
      promoCodePlaceholder: "Código promocional (opcional)",
      langOptions: [
        "Árabe marroquí (Darija)",
        "Francés",
        "Inglés",
        "Español",
        "Otro (próximamente)",
      ],
    },

    // Founder
    founder: {
      title: "Por qué creé ZoujUp",
      p1: "Soy Jihane — MRE, nacida entre dos mundos. Como muchos de vosotros, crecí entre dos idiomas y perdí algo de mi Darija por el camino.",
      p2: "Probé todas las apps de intercambio lingüístico. Ninguna funcionaba: ghosting constante, vibes de dating, conversaciones que no llevaban a ningún sitio. Así que construí la que me hubiera gustado tener — una que toma el Darija en serio, que respeta tu tiempo, y que te empareja con alguien que de verdad necesita tu idioma tanto como tú.",
      signature: "— Jihane, Fundadora de ZoujUp",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },

    // Counter
    counter: {
      titleSuffix: "/ 100 personas ya se han registrado",
      subtitle: "Cuando lleguemos a 100, cerramos. Los primeros 100 reciben 1 mes de acceso ilimitado GRATIS.",
      percentSuffix: "% ocupadas — plazas limitadas, sin segunda oportunidad",
    },

    // CTA Mid
    ctaMid1: {
      headline: "¿Listo para ser parte de la historia?",
      button: "Cuenta conmigo →",
    },
    ctaMid3: {
      headline: "¿Sigues aquí? Estás listo.",
      button: "Reservar mi lugar →",
    },

    // Contact
    contact: {
      title: "Contáctanos",
      titleAccent: "",
      subtitle: "¿Tienes preguntas o comentarios? Nos encantaría escucharte. Nuestro equipo está aquí para apoyar tu aprendizaje de idiomas.",
      cardTitle: "Escríbenos",
      cardDesc: "Para consultas generales, soporte u oportunidades de colaboración, contáctanos en:",
    },

    // Footer
    footer: {
      tagline: "Practica tu idioma con alguien que necesita el tuyo. No con una IA. No con un chat aleatorio. Con una persona real y una conversación real.",
      questions: "¿Preguntas? Escríbenos:",
      company: "Compañía",
      support: "Soporte",
      crafted: "",
      companyLinks: ["Inicio", "Acerca de", "Cómo funciona", "Características"],
      supportLinks: ["Preguntas Frecuentes", "Política de Privacidad", "Contacto"],
    },
  },
  da: {
    // Navbar
    nav: {
      home: "الصفحة الرئيسية",
      about: "علينا",
      howItWorks: "كيفاش خدام هاد التطبيق",
      features: "المميزات",
      faq: "الأسئلة المتكررة",
      contact: "تواصل معنا",
      joinWaitlist: "انضم للقائمة",
    },

    // Hero
    hero: {
      pill: "🚀 يجي سبتمبر 2026",
      headline1: "خلاص من المحادثات العشوائية.",
      headline2a: "ابدأ تمرين اللغة",
      headline2b: "بطريقة منظمة.",
      subheadline: "أول تطبيق للممارسة الشفهية مبني للغات الأقل خدمة والمجتمعات التي تجمعها — نبدأ بالدارجة، الفرنسية، الإنجليزية والإسبانية. لا غياب بلا جواب. لا هضرة خاوية. لا جو ديال تطبيقات التعارف. غير ممارسة حقيقية.",
      cta: "انضم للقائمة",
      earlyAccessTitle:
        "كانين نقبلو أول 100 مستخدم باش نضمنو مطابقات ذات جودة عالية من اليوم الأول.",
      earlyAccessSub: "أول الناس اللي يسجلو غادي يستافدو من أولوية فالدخول + حصص إضافية عند الإطلاق.",
    },

    // Pains
    pains: {
      title: "شنو كايحل زوج-اب",
      titleAccent: "فالحقيقة؟",
      subtitle: "مشاكل حقيقية. حلول حقيقية. بلا هضرة خاوية.",
      items: [
        {
          icon: "😤",
          q: "\"قريت سنين كاملة، ولكن ملي كنجي نهضر كنحبس… وما عنديش مع من نتدرب.\"",
          a: "**زوج-اب** ماشي تطبيق ديال الحفظ والنظري.** هنا الهدف هو الهضرة الحقيقية. ما كايناش لوائح كلمات تحفظهم، ولا تمارين قواعد مملة. كاينين غير ناس حقيقيين من العالم كامل، كتهضر معاهم وكيهضرو معاك. والأحسن التبادل متوازن — هو حتى هو محتاج يتعلم منك قد ما نتا محتاج تتعلم منو. شوية ديال الدقائق ديال الهضرة كل نهار، يقدرو يعلموك أكثر من ساعات ديال الدراسة الصامتة.",
        },
        {
          icon: "💔",
          q: "\"تطبيقات اللغات ولات بحال تطبيقات التعارف. جيت نتعلم، ماشي باش نتلاقى مع الناس.\"",
          a: "**زوج-اب** مبني من الأول باش يتفادى هاد الشي.** ما كاين لا سوايب لا تقليب فالبروفايلات، لا شاتات عشوائية. كاينة غير جلسات منظمة مع شريك لغة، كيتختار على حساب الهدف ديالك فالتعلم.",
        },
        {
          icon: "⏰",
          q: "\"الدروس غالية، والمواعيد ما كاتناسبنيش، وصعيب نستمر.\"",
          a: "**غير دقائق قليلة فالنهار… وهاد الشي كافي.** **زوج-اب** تقدر تستعمل مع قهوتك الصباحية، فالطريق، ولا فالراحة ديال الخدمة أو القراية. وزيد عليها: شريك اللغة حتى هو كيربح معاك — كيتعلم لغتك بينما نتا كتعلم لغتو.",
        },
        {
          icon: "🌍",
          q: "\"أنا عايش فالغربة، وبديت كنضيع لغة الوالدين ديالي… وولادي غادي يضيعوها أكثر.\"",
          a: "**ما تخليش اللغة تموت.** كل جلسة هي فرصة جديدة باش تبقى اللغة حية فداركم. تصور تتدرب الصباح فـ**زوج-اب**، وبالليل تستعمل نفس العبارات مع عائلتك، مع والديك، ولا حتى مع ولادك على المائدة.",
        },
      ],
    },

    // Process
    process: {
      title: "كيفاش",
      titleAccent: "خدام هاد التطبيق",
      subtitle: "عملية بسيطة ومركزة باش تبدأ تهدر في ثواني.",
      steps: [
        { title: "3. كملو غير إلا تفاهمتو", desc: "بلا ضغط. بلا تضييع للوقت." },
        {
          title: "2. جلسة موجهة. حنا كنعطيوكم الموضوع وانتوما كتهضرو",
          desc: "وقت الهدرة متوازن — كل واحد يهدر باللغة اللي بغا يتعلمها.",
        },
        { title: "1. تواصل فوري", desc: "لا سوايب. لا بروفايلات طوال بلا فايدة" },
        
      ],
    },

    // Difference
    difference: {
      title: "مختلف زوج-اب ",
      titleAccent: "علاش",
      items: [
        {
          title: "3. زوج-اب مختلف.",
          desc: "كل جلسة موجهة، منظمة ومتوازنة. قصيرة كفاية باش تناسب نهارك، وفعالة كفاية باش يكون عندها معنى.",
        },
        {
          title: "2. تواصلتي ←    بلافايدة",
          desc: "  المحادثات ما كتوصل لحتى نتيجة. كتحس براسك فشي تطبيق ديال التعارف.",
        },        
        {
          title: "1. جربتي تطبيقات أخرى.",
          desc: "وعارفين كيفاش كيدوز الأمر: سوايب بلا نهاية وغياب بلا جواب",
        },
      ],
      footerText: "لا سوايب. لا هضرة عشوائية. لا جو ديال تطبيقات التعارف.فقط ممارسة حقيقية للغات",
    },

    // FAQ
    faq: {
      title: "الأسئلة المتكررة",
      subtitle: "**زوج-اب** كلشي اللي خاصك تعرف على",
      items: [
        {
          q: "امتى غادي تطلق زوج-اب ؟",
          a: "**سبتمبر 2026**. ولكن كاينة هاد التفصيلة: **أول 100 شخص فالقائمة غادي يحصلو على شهر مجاني عند الإطلاق** — جلسات يومية، مكالمات فيديو، جميع اللغات. **باقي غير 53 مكان**. ملي نوصلو 100، هاد العرض غادي يولي تاريخ. ما تستناش.",
        },
        {
          q: "أنهي لغات يمكنني نتمرن عليها؟",
          a: "فالإطلاق غادي تلقاو: الدارجة المغربية 🇲🇦، الفرنسية 🇫🇷، الإنجليزية 🇬🇧 والإسبانية 🇪🇸. ولغات خرين جايين قريب. ما لقيتيش لغتك؟ كتب لينا ف contact@zoujup.com — حنا كنطورو التطبيق حسب طلبات الكوميونوتي.",
        },
        {
          q: "واش زوج-اب مجاني؟",
          a: "زوج-اب ماشي مجاني، ولكن كل مستخدم جديد كيستافد من تجربة مجانية لمدة 14 يوم مع الولوج الكامل لجميع المميزات. من بعد ما تسالي التجربة، كتختار الاشتراك اللي كيناسبك أكثر. وباش نشكرو الناس اللي دعمو زوج-اب من اللول، الناس اللي تسجلو فاللائحة ديال الانتظار غادي يستافدو من أول شهر مجاني بالكامل ملي يطلق التطبيق.",
        },
        {
          q: "واش زوج-اب مختلف على التطبيقات الاخرى ديال اللغات؟",
          a: "إييه، مختلف بزاف. **زوج-اب** ماشي تطبيق ديال الشات. كل حصة فيه موجهة، محددة فالوقت ومتوازنة. ماكاين لا تصفح عشوائي، لا رسائل عشوائية، لا إحساس ديال تطبيقات التعارف. غير ممارسة حقيقية ومنظمة للتعلم.",
        },       
        {
          q: "واش زوج-اب آمن واحترافي؟",
          a: "إييه. ماكايناش بروفايلات مفتوحة تقدر تقلب فيها، والشات ماكيتحلّش حتى كيكون تأكيد متبادل على الحصة. كاينة سياسة صارمة ضد أي سلوك غير لائق، وأي حساب خالف القوانين كيتحظر نهائياً.",
        },
        {
          q: "واش نقدر نختار نتدرب غير مع العيالات ولا غير مع الرجال؟",
          a: "إييه. ملي كتسجل، كتقدر تختار التفضيل ديالك: غير العيالات، غير الرجال، ولا ماعندك حتى تفضيل. **زوج-اب** كيحترم الحدود الشخصية والثقافية ديالك، وشريك الممارسة ديالك غادي يكون تيوافق ديما الاختيار ديالك.",
        },
      ],
    },

    // CTA
    cta: {
      title: "احجز مكانك",
      benefit: "🎁 أول 100: شهر مجاني — جلسات يومية ، مكالمات فيديو، وصول لجميع اللغات",
      lead: "أخبرنا قليلاً عنك. سنتواصل معك قبل الإطلاق.",
      placeholder: "عنوان الإيميل ديالك",
      button: "احسب عليا 🙌",
      note: "وصول مبكر محدود (100 مستخدم). بلا كارطة بنكية. إلغاء في أي وقت.",
      alert: "شكراً على الانضمام! غادي نعلموك ملي يتوفر مكان.",
      alreadyRegistered: "راك ديجا فاللائحة ديالنا!",
      legalStart: "بالانضمام، كتوافق على",
      legalLinkText: "سياسة الخصوصية",
      legalEnd: " ديالنا. ما غادي نشاركو الإيميل ديالك أبداً. ✊",
      nativeLang: "اللغة الأم ديالي",
      practiceLang: "اللغة اللي بغيت نتعلمها",
      promoCodePlaceholder: "كود بروموسيون (اختياري)",
      langOptions: [
        "الدارجة المغربية",
        "الفرنسية",
        "الإنجليزية",
        "الإسبانية",
        "أخرى (قريباً)",
      ],
    },

    // Founder
    founder: {
      title: "علاش صنعت زوج-اب ؟",
      p1: "أنا جهان — مغربية مقيمة بالخارج، تزاديت بين جوج ديال العوالم.",
      p2: "كبرت وأنا كنفهم الدارجة، ولكن كنلقى صعوبة نهضر بها. صنعت **زوج-اب** حيت ما لقيتش التطبيق اللي كنت محتاجاه. وعارفة بلي ماشي غير أنا اللي كنحس بهاد الشي.",
      signature: "— جهان، مؤسسة زوج-اب",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },

    // Counter
    counter: {
      titleSuffix: "/ 100 مكان محجوز من المؤسسين",
      subtitle: "لما نوصلو 100، نغلقو. أول 100 كيأخدو شهر كامل ديال وصول مجاني.",
      percentSuffix: "% محجوزة — أماكن محدودة، لا فرصة ثانية",
    },

    // CTA Mid
    ctaMid1: {
      headline: "واجد تكون جزء من القصة؟",
      button: "حسب عليا ←",
    },
    ctaMid3: {
      headline: "مازال هنا؟ واجد.",
      button: "احجز مكاني ←",
    },

    // Contact
    contact: {
      title: "تواصل",
      titleAccent: "معنا",
      subtitle: "عندك أسئلة أو ملاحظات؟ يسرنا نسمعك. الفريق ديالنا هنا باش يعاونك في رحلة تعلم اللغات.",
      cardTitle: "راسلنا",
      cardDesc: "للاستفسارات العامة أو الدعم أو فرص الشراكة، تواصل معنا على:",
    },

    // Footer
    footer: {
      tagline: "تمرن على لغتك مع شخص محتاج للغتك. ماشي ذكاء اصطناعي. ماشي شات عشوائي. إنسان حقيقي، محادثة حقيقية.",
      questions: "عندك أسئلة؟ راسلنا",
      company: "الشركة",
      support: "الدعم",
      crafted: "",
      companyLinks: ["الصفحة الرئيسية", "علينا", "كيفاش خدام هاد التطبيق", "المميزات"],
      supportLinks: ["الأسئلة المتكررة", "سياسة الخصوصية", "تواصل معنا"],
    },
  },
} as const;

export type Translations = typeof translations.en;
