// Fuente única de datos. Edita aquí; el índice y las páginas de detalle se generan desde este archivo.
const PROFILE = {
  name: 'Santiago Morales Itzcoatl',
  github: 'https://github.com/FreakPuppyGameStudio',
  itch: 'https://dxgpanic-studios.itch.io/',
  email: 'santimoritz68@gmail.com'
};

const PROJECTS = [
  // ---------- SOFTWARE ----------
  {
    id: 'fpd',
    group: 'software',
    name: 'Finovra Phishing Detector',
    category: 'Cybersecurity / Software Development',
    status: 'In development',
    version: 'v0.9.0',
    badge: 'progress',
    cover: 'FPD',
    description: 'A cybersecurity tool designed to analyze URLs, domains and suspicious patterns to help identify potential phishing threats.',
    features: ['URL analysis', 'Suspicious pattern detection', 'Phishing indicators', 'Security analysis'],
    tech: ['C17', 'GTK4', 'SQLite', 'CMake'],
    links: [
      { label: 'Download', href: 'downloads/FPD.zip', download: true, primary: true },
      { label: 'GitHub', href: PROFILE.github }
    ],
    note: 'The download is a password-protected ZIP.',
    install: null
  },
  {
    id: 'keypaste',
    group: 'software',
    name: 'KeyPaste',
    category: 'Productivity / Browser Extension',
    status: 'Released',
    version: 'v1.0.1',
    badge: 'ok',
    cover: 'KeyPaste',
    description: 'A desktop productivity tool that allows users to assign custom text snippets to the numeric keys of their keyboard and quickly paste them into selected text fields.',
    features: ['Custom text shortcuts', 'Numeric keyboard shortcuts (0–9)', 'Quick text insertion', 'Manual shortcut configuration'],
    tech: ['JavaScript', 'Chrome Extension (Manifest V3)'],
    links: [
      { label: 'Download', href: 'downloads/keypaste-extension-v1_0_1.zip', download: true, primary: true },
      { label: 'GitHub', href: PROFILE.github }
    ],
    note: '',
    install: [
      'Download and unzip keypaste-extension-v1_0_1.zip.',
      'Open chrome://extensions (or brave://extensions) in your browser.',
      'Turn on Developer mode.',
      'Click "Load unpacked" and select the unzipped keypaste-extension folder.'
    ]
  },
  {
    id: 'creacarti',
    group: 'software',
    name: 'Creacarti',
    category: 'Web / Education',
    status: 'Online',
    version: '',
    badge: 'ok',
    cover: 'Creacarti',
    description: 'A website from DXGPANIC Studios with web-based IDEs for learning to program in C/C++, Java, COBOL and Web3.',
    features: ['Web-based IDEs', 'Programming languages: C/C++, Java, COBOL', 'Web3 content'],
    tech: ['HTML', 'Web'],
    links: [
      { label: 'Visit website', href: 'https://creacarti.online/', primary: true }
    ],
    note: '',
    install: null
  },

  // ---------- OUTDATED ----------
  {
    id: 'typetela',
    group: 'outdated',
    name: 'TypeTela',
    category: 'Sustainability / Circular Economy',
    status: 'Outdated',
    version: '',
    badge: 'old',
    cover: 'TYPETELA',
    description: 'TypeTela is a technology platform focused on textile sustainability and the circular economy. Its goal is to make it easier to identify and recycle garments by analyzing photographs to assess the composition and recyclability of fabrics. It also includes a map of registered collection points to connect users with places where they can drop off unused clothing and textiles. In the long term, it seeks to drive a reuse model that turns collected materials into new garments and products.',
    features: ['Fabric analysis from photographs', 'Composition and recyclability assessment', 'Map of registered collection points', 'Long-term reuse model'],
    tech: [],
    links: [
      { label: 'Open Drive folder', href: 'https://drive.google.com/drive/folders/1EPYGW_kVX3GyWIsGaoLiexbS9YFH1fSL?usp=sharing', primary: true }
    ],
    note: '',
    install: null
  },
  {
    id: 'sosmap',
    group: 'outdated',
    name: 'SOSMAP',
    category: 'Geolocation / Emergency Information',
    status: 'Outdated',
    version: '',
    badge: 'old',
    cover: 'SOSMAP',
    description: 'SOSMAP is a geolocation platform designed to make it easier to access information about services and help points in emergency situations. Its purpose is to connect people with nearby resources through an interactive map, allowing them to locate assistance sites and consult relevant information for acting in different situations. It aims to make support information more accessible, organized and easy to find.',
    features: ['Interactive map', 'Locate nearby assistance points', 'Information for different emergency situations'],
    tech: [],
    links: [
      { label: 'Open Drive folder', href: 'https://drive.google.com/drive/folders/1B2JREuMPchOwGFAVkRrdwVua0ZIGrRfk?usp=sharing', primary: true }
    ],
    note: '',
    install: null
  },
  {
    id: 'munsecretary',
    group: 'outdated',
    name: 'MUNSecretary',
    category: 'Software',
    status: 'Outdated',
    version: '',
    badge: 'old',
    cover: 'MUNSECRETARY',
    description: 'Project repository on GitHub. Marked as outdated.',
    features: [],
    tech: [],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/FreakPuppyGameStudio/munsecretary', primary: true }
    ],
    note: '',
    install: null
  },

  // ---------- GAMES (DXGPANIC Studios) ----------
  {
    id: 'please-dont-die',
    group: 'game',
    name: 'PLEASE, DON\'T DIE',
    category: 'Indie Game / Horror / Management',
    status: 'Published on itch.io',
    version: '',
    badge: 'ok',
    cover: 'PLEASE, DON\'T DIE',
    description: 'An experimental terminal-based management game where the player must manage a critical situation involving a hospitalized patient.',
    features: [],
    tech: [],
    links: [{ label: 'View on itch.io', href: 'https://dxgpanic-studios.itch.io/please-dont-die', primary: true }],
    note: '',
    install: null
  },
  {
    id: 'kid-os',
    group: 'game',
    name: 'KID_OS',
    category: 'Indie Game / Simulation / Experimental',
    status: 'Published on itch.io',
    version: '',
    badge: 'ok',
    cover: 'KID_OS',
    description: 'A retro-inspired terminal experience built around a humorous narrative and interactive computer simulation.',
    features: [],
    tech: [],
    links: [{ label: 'View on itch.io', href: 'https://dxgpanic-studios.itch.io/kid-os', primary: true }],
    note: '',
    install: null
  },
  {
    id: 'dont-text-her',
    group: 'game',
    name: 'DON\'T TEXT HER',
    category: 'Indie Game',
    status: 'Published on itch.io',
    version: '',
    badge: 'ok',
    cover: 'DON\'T TEXT HER',
    description: 'An independent experimental game project.',
    features: [],
    tech: [],
    links: [{ label: 'View on itch.io', href: 'https://dxgpanic-studios.itch.io/dont-text-her', primary: true }],
    note: '',
    install: null
  },
  {
    id: 'probabilitat',
    group: 'game',
    name: 'PROBABILITAT',
    category: 'Indie Game',
    status: 'Published on itch.io',
    version: '',
    badge: 'ok',
    cover: 'PROBABILITAT',
    description: 'An independent game project exploring interactive gameplay.',
    features: [],
    tech: [],
    links: [{ label: 'View on itch.io', href: 'https://dxgpanic-studios.itch.io/probabilitat', primary: true }],
    note: '',
    install: null
  },
  {
    id: 'reme',
    group: 'game',
    name: 'RE:ME (The Demo)',
    category: 'Indie Game / Visual Novel',
    status: 'Playable demo',
    version: '',
    badge: 'ok',
    cover: 'RE:ME',
    description: 'An independent visual novel project presented through a playable demo.',
    features: [],
    tech: [],
    links: [{ label: 'Play demo on itch.io', href: 'https://dxgpanic-studios.itch.io/reme-the-demo', primary: true }],
    note: '',
    install: null
  },
  {
    id: '1life',
    group: 'game',
    name: '1LIFE',
    category: 'Indie Game',
    status: 'Published on itch.io',
    version: '',
    badge: 'ok',
    cover: '1LIFE',
    description: 'An independent video game project.',
    features: [],
    tech: [],
    links: [{ label: 'View on itch.io', href: 'https://dxgpanic-studios.itch.io/1life', primary: true }],
    note: '',
    install: null
  }
];

const BADGE_LABELS = { progress: 'In development', ok: 'Available', old: 'Outdated' };
