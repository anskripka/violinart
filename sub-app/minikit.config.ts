const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL || 'http://localhost:3000';  // Зміни на Vercel URL після деплою

export const minikitConfig = {
  accountAssociation: {  // Заповнимо після деплою (Крок 8)
    header: '',
    payload: '',
    signature: ''
  },
  baseBuilder: {
    ownerAddress: '0x494c7fdB753c15b69fea2293e1b76567cA94462d'  // Твій гаманець
  },
  miniapp: {
    version: '1',
    name: 'Tony\'s Violin Identity',  // Назва аппа
    subtitle: 'ENS & Social Profile',  // Підзаголовок
    description: 'Showcase my ENS name tonyviolin.base.eth, Coinbase verified badge, and socials (@tonyv on Farcaster, @SkrypkaAnton on X, anskripka on GitHub) from violinart.site.',  // Опис з ENS/socials
    primaryCategory: 'social',
    tags: ['ens', 'identity', 'profile', 'music', 'violin'],  // Теги
    iconUrl: `${ROOT_URL}/icon.png`,  // Твоя іконка
    splashImageUrl: `${ROOT_URL}/splash.png`,  // Твоє сплеш-зображення
    splashBackgroundColor: '#000000',  // Фон сплешу (чорний для темної теми)
    homeUrl: 'https://violinart.site',  // Твій сайт як головна
    heroImageUrl: 'https://violinart.site/hero.png',  // Додай hero.png на сайт (1200x630)
    screenshotUrls: ['https://violinart.site/screenshot-portrait.png'],  // Додай screenshot (1284x2778)
    webhookUrl: `${ROOT_URL}/api/webhook`,  // Опціонально, для вебхуків
    tagline: 'Own your digital violin on Base',  // Слоган
    ogTitle: 'Tony Violin | ENS Profile',
    ogDescription: 'View my Base ENS tonyviolin.base.eth and socials on violinart.site',
    ogImageUrl: 'https://violinart.site/og.png',  // Додай OG-ізображення
    noindex: false  // Для індексації
  }
} as const;
