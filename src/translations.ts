export type Language = 'en' | 'ru' | 'es' | 'fr' | 'de' | 'ja' | 'zh';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    games: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
  };
  projects: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
  };
  games: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    telegram: string;
    roblox: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      games: 'Games',
      contact: 'Contact'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'Game & Web Developer',
      description: 'Creating immersive games and cutting-edge websites. Bringing ideas to life through code and creativity.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Web applications built with modern technologies',
      card1Title: 'Interactive Web Apps',
      card1Desc: 'Building responsive and dynamic web applications with modern technologies',
      card2Title: 'Custom Solutions',
      card2Desc: 'Tailored web solutions for businesses and creative projects'
    },
    games: {
      title: 'Games',
      subtitle: 'Interactive gaming experiences on Roblox',
      card1Title: 'Roblox Games',
      card1Desc: 'Creative and engaging Roblox game experiences',
      card2Title: 'Game Development',
      card2Desc: 'Innovative gameplay mechanics and immersive worlds'
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Get in touch through my social channels',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. All rights reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      projects: 'Проекты',
      games: 'Игры',
      contact: 'Контакты'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'Разработчик игр и веб-сайтов',
      description: 'Создаю захватывающие игры и современные веб-сайты. Воплощаю идеи в жизнь через код и креативность.',
      viewProjects: 'Смотреть проекты',
      getInTouch: 'Связаться'
    },
    projects: {
      title: 'Проекты',
      subtitle: 'Веб-приложения, созданные с современными технологиями',
      card1Title: 'Интерактивные веб-приложения',
      card1Desc: 'Создание адаптивных и динамичных веб-приложений с современными технологиями',
      card2Title: 'Индивидуальные решения',
      card2Desc: 'Веб-решения для бизнеса и креативных проектов'
    },
    games: {
      title: 'Игры',
      subtitle: 'Интерактивный игровой опыт на Roblox',
      card1Title: 'Игры Roblox',
      card1Desc: 'Креативные и увлекательные игровые впечатления в Roblox',
      card2Title: 'Разработка игр',
      card2Desc: 'Инновационные игровые механики и захватывающие миры'
    },
    contact: {
      title: 'Давайте свяжемся',
      subtitle: 'Свяжитесь со мной через социальные сети',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. Все права защищены.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      games: 'Juegos',
      contact: 'Contacto'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'Desarrollador de juegos y web',
      description: 'Creando juegos inmersivos y sitios web de vanguardia. Dando vida a ideas a través de código y creatividad.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Ponerse en contacto'
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Aplicaciones web construidas con tecnologías modernas',
      card1Title: 'Aplicaciones web interactivas',
      card1Desc: 'Construcción de aplicaciones web responsivas y dinámicas con tecnologías modernas',
      card2Title: 'Soluciones personalizadas',
      card2Desc: 'Soluciones web a medida para empresas y proyectos creativos'
    },
    games: {
      title: 'Juegos',
      subtitle: 'Experiencias de juego interactivas en Roblox',
      card1Title: 'Juegos de Roblox',
      card1Desc: 'Experiencias de juego creativas y atractivas en Roblox',
      card2Title: 'Desarrollo de juegos',
      card2Desc: 'Mecánicas de juego innovadoras y mundos inmersivos'
    },
    contact: {
      title: 'Conectemos',
      subtitle: 'Ponte en contacto a través de mis redes sociales',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. Todos los derechos reservados.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      games: 'Jeux',
      contact: 'Contact'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'Développeur de jeux et web',
      description: 'Créer des jeux immersifs et des sites web de pointe. Donner vie aux idées grâce au code et à la créativité.',
      viewProjects: 'Voir les projets',
      getInTouch: 'Entrer en contact'
    },
    projects: {
      title: 'Projets',
      subtitle: 'Applications web construites avec des technologies modernes',
      card1Title: 'Applications web interactives',
      card1Desc: 'Construction d\'applications web réactives et dynamiques avec des technologies modernes',
      card2Title: 'Solutions personnalisées',
      card2Desc: 'Solutions web sur mesure pour les entreprises et projets créatifs'
    },
    games: {
      title: 'Jeux',
      subtitle: 'Expériences de jeu interactives sur Roblox',
      card1Title: 'Jeux Roblox',
      card1Desc: 'Expériences de jeu créatives et engageantes sur Roblox',
      card2Title: 'Développement de jeux',
      card2Desc: 'Mécaniques de jeu innovantes et mondes immersifs'
    },
    contact: {
      title: 'Connectons-nous',
      subtitle: 'Entrez en contact via mes réseaux sociaux',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. Tous droits réservés.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      games: 'Spiele',
      contact: 'Kontakt'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'Spiele- und Webentwickler',
      description: 'Erstelle immersive Spiele und modernste Websites. Erwecke Ideen durch Code und Kreativität zum Leben.',
      viewProjects: 'Projekte ansehen',
      getInTouch: 'Kontakt aufnehmen'
    },
    projects: {
      title: 'Projekte',
      subtitle: 'Webanwendungen mit modernen Technologien erstellt',
      card1Title: 'Interaktive Web-Apps',
      card1Desc: 'Erstellen responsiver und dynamischer Webanwendungen mit modernen Technologien',
      card2Title: 'Individuelle Lösungen',
      card2Desc: 'Maßgeschneiderte Weblösungen für Unternehmen und kreative Projekte'
    },
    games: {
      title: 'Spiele',
      subtitle: 'Interaktive Spielerlebnisse auf Roblox',
      card1Title: 'Roblox-Spiele',
      card1Desc: 'Kreative und fesselnde Roblox-Spielerlebnisse',
      card2Title: 'Spieleentwicklung',
      card2Desc: 'Innovative Spielmechanik und immersive Welten'
    },
    contact: {
      title: 'Lass uns verbinden',
      subtitle: 'Kontaktiere mich über meine sozialen Kanäle',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. Alle Rechte vorbehalten.'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      projects: 'プロジェクト',
      games: 'ゲーム',
      contact: '連絡先'
    },
    hero: {
      title: 'a1rblake',
      subtitle: 'ゲーム＆ウェブ開発者',
      description: '没入感のあるゲームと最先端のウェブサイトを作成。コードと創造性でアイデアを実現。',
      viewProjects: 'プロジェクトを見る',
      getInTouch: 'お問い合わせ'
    },
    projects: {
      title: 'プロジェクト',
      subtitle: '最新技術で構築されたウェブアプリケーション',
      card1Title: 'インタラクティブなウェブアプリ',
      card1Desc: '最新技術でレスポンシブで動的なウェブアプリケーションを構築',
      card2Title: 'カスタムソリューション',
      card2Desc: 'ビジネスとクリエイティブプロジェクトのためのカスタマイズされたウェブソリューション'
    },
    games: {
      title: 'ゲーム',
      subtitle: 'Robloxでのインタラクティブなゲーム体験',
      card1Title: 'Robloxゲーム',
      card1Desc: 'Robloxでクリエイティブで魅力的なゲーム体験',
      card2Title: 'ゲーム開発',
      card2Desc: '革新的なゲームプレイメカニクスと没入感のある世界'
    },
    contact: {
      title: 'つながりましょう',
      subtitle: 'ソーシャルチャンネルでお問い合わせください',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. 無断転載禁止。'
    }
  },
  zh: {
    nav: {
      home: '首页',
      projects: '项目',
      games: '游戏',
      contact: '联系'
    },
    hero: {
      title: 'a1rblake',
      subtitle: '游戏和网页开发者',
      description: '创建沉浸式游戏和尖端网站。通过代码和创意将想法变为现实。',
      viewProjects: '查看项目',
      getInTouch: '联系我'
    },
    projects: {
      title: '项目',
      subtitle: '使用现代技术构建的网络应用',
      card1Title: '互动网络应用',
      card1Desc: '使用现代技术构建响应式和动态网络应用程序',
      card2Title: '定制解决方案',
      card2Desc: '为企业和创意项目量身定制的网络解决方案'
    },
    games: {
      title: '游戏',
      subtitle: 'Roblox上的互动游戏体验',
      card1Title: 'Roblox游戏',
      card1Desc: '在Roblox上创造性和引人入胜的游戏体验',
      card2Title: '游戏开发',
      card2Desc: '创新的游戏机制和沉浸式世界'
    },
    contact: {
      title: '让我们联系',
      subtitle: '通过我的社交渠道联系',
      telegram: 'Telegram',
      roblox: 'Roblox'
    },
    footer: {
      rights: '© 2025 a1rblake. 保留所有权利。'
    }
  }
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  zh: '中文'
};
