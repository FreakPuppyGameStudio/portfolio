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
    id: 'motus',
    group: 'software',
    name: 'MOTUS',
    category: 'Mobile Prototype / Usage-Based Insurance',
    status: 'Academic prototype',
    version: '',
    badge: 'progress',
    cover: 'MOTUS',
    description: 'Academic prototype of a usage-based automotive insurance app. It includes the core GPS and sensor module, a driving-score engine, a UBI simulator and synthetic test data. Testing and calibration are in progress.',
    features: ['GPS and sensor module', 'Driving-score engine', 'UBI simulator', 'Synthetic test data'],
    tech: ['Flutter', 'Dart'],
    links: [
      { label: 'Download', href: 'https://drive.google.com/file/d/1U2z1uNYUwE8FSkBnWR71BH-bPkbYhvb0/view?usp=sharing', primary: true },
      { label: 'GitHub', href: PROFILE.github }
    ],
    note: 'The download opens in Google Drive.',
    install: null
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


const RESUME = {
  href: 'downloads/Santiago_Morales_Resume.pdf',
  label: 'Download resume (PDF)'
};

const CERTIFICATES = [
  {
    title: 'Elements of AI',
    issuer: 'University of Helsinki / MinnaLearn',
    date: 'October 21, 2025',
    detail: '2 ECTS credits online course',
    image: 'certificates/elements-of-ai.jpeg'
  },
  {
    title: 'PY101x: Python: learn to program',
    issuer: 'UPValenciaX (Universitat Politècnica de València) via edX',
    date: 'May 17, 2025',
    detail: 'Verified certificate · 32 hours',
    image: 'certificates/py101x-python.jpeg'
  },
  {
    title: 'Curso de Hacking Ético: de 0 a Hackear Aplicaciones',
    issuer: 'BIG School',
    date: '28/10/2026',
    detail: 'Certificate of attendance · 6 hours',
    image: 'certificates/hacking-etico-big-school.jpeg'
  }
];

const MOMENTS = [
  {
    image: 'moments/swifties-society.jpeg',
    title: 'Swifties Society',
    meta: 'Fall 2026 · Student organization',
    caption: 'Student organization focused on SwiftUI and Apple development.'
  },
  {
    image: 'moments/hackztecs.jpeg',
    title: 'Hackztecs',
    meta: 'Fall 2026 · Student organization',
    caption: 'Student organization focused on cybersecurity.'
  },
  {
    image: 'moments/expo-artes-2025.jpeg',
    title: 'Expo Artes 2025',
    meta: '2025 · Final art exhibition',
    caption: 'Presented RE:ME: The Demo and Danny, a psychological horror platformer made for the event.'
  }
];

const BADGE_LABELS = { progress: 'In development', ok: 'Available', old: 'Outdated' };

// ---------- Medios y enlaces por proyecto ----------
// images: galería. coverImg: portada en la tarjeta. videos: URLs de YouTube.
const MEDIA = {
  'fpd': {
    coverImg: 'media/finovrafishingdetector1.png',
    images: ['media/finovrafishingdetector1.png', 'media/finovrafishingdetector2.png', 'media/finovrafishingdetector3.png'],
    videos: ['https://www.youtube.com/watch?v=-Us8feM7WXE'],
    links: [
      { label: 'Download', href: 'downloads/FPD.zip', download: true, primary: true },
      { label: 'GitHub', href: 'https://github.com/FreakPuppyGameStudio/FINOVRA-PHISHING-DETECTOR' }
    ],
    note: 'The download is a password-protected ZIP.'
  },
  'motus': {
    coverImg: 'media/motus1.jpeg',
    images: ['media/motus1.jpeg', 'media/motus2.jpeg', 'media/motus3.jpeg', 'media/motus4.jpeg']
  },
  'typetela': {
    coverImg: 'media/typetela1.jpeg',
    images: ['media/typetela1.jpeg', 'media/typetela2.jpeg', 'media/typetela3.jpeg'],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/FreakPuppyGameStudio/Typetela', primary: true },
      { label: 'Open Drive folder', href: 'https://drive.google.com/drive/folders/1EPYGW_kVX3GyWIsGaoLiexbS9YFH1fSL?usp=sharing' }
    ]
  },
  'sosmap': {
    videos: ['https://www.youtube.com/shorts/SRfhiMVqJAs'],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/FreakPuppyGameStudio/SOSMAP', primary: true },
      { label: 'Open Drive folder', href: 'https://drive.google.com/drive/folders/1B2JREuMPchOwGFAVkRrdwVua0ZIGrRfk?usp=sharing' }
    ]
  },
  'munsecretary': {
    coverImg: 'media/munlogo.png',
    images: ['media/mun1.png', 'media/mun2.png', 'media/mun3.png'],
    links: [
      { label: 'Play on itch.io', href: 'https://santiagoitzcoatl.itch.io/mun-secretary-program', primary: true },
      { label: 'GitHub repository', href: 'https://github.com/FreakPuppyGameStudio/munsecretary' }
    ]
  },
  'please-dont-die': {
    coverImg: 'media/pleasedontdielogo.png',
    images: ['media/pleasedontdie1.png', 'media/pleasedontdie2.png', 'media/pleasedontdie3.png']
  },
  'kid-os': {
    coverImg: 'media/kidoslogo.png',
    images: ['media/kidos.png', 'media/kidos2.png', 'media/kidos3.png', 'media/kidos4.png']
  },
  'dont-text-her': {
    coverImg: 'media/donttextherlogo.png',
    images: ['media/donttexther1.png', 'media/donttexther2.png', 'media/donttexther3.png', 'media/donttexther4.png']
  },
  'probabilitat': {
    coverImg: 'media/probabilitat1.png',
    images: ['media/probabilitat.png', 'media/probabilitat1.png', 'media/probabilitat2.png']
  },
  'reme': {
    coverImg: 'media/remelogo.png',
    images: ['media/reme1.png', 'media/reme2.png', 'media/reme3.png']
  },
  '1life': {
    coverImg: 'media/1livelogo.png',
    videos: ['https://youtu.be/MFYSLJHaNGY']
  }
};

PROJECTS.forEach(p => {
  const m = MEDIA[p.id];
  if (m) Object.assign(p, m);
});

// Tema visual según el tipo de proyecto
function themeOf(p) {
  if (p.group === 'outdated') return 'outdated';
  if (p.group === 'game') return 'game';
  if (p.id === 'creacarti') return 'web';
  if ((p.category || '').toLowerCase().includes('cybersecurity')) return 'security';
  return 'software';
}

// Medios actualizados (segundo lote de capturas y logos)
const MEDIA_UPDATES = {
  'keypaste': { images: ['media/keypaste-screenshot.png'] },
  'creacarti': {
    coverImg: 'media/creacarti-logo.jpg',
    images: ['media/creacarti-1.png', 'media/creacarti-2.png']
  },
  'probabilitat': {
    coverImg: 'media/probabilitat-logo.png',
    images: ['media/probabilitat.png', 'media/probabilitat1.png', 'media/probabilitat2.png']
  },
  'typetela': {
    coverImg: 'media/typetela-logo.png',
    images: ['media/typetela1.jpeg', 'media/typetela2.jpeg', 'media/typetela3.jpeg']
  },
  'fpd': { coverImg: 'media/fpd-logo.jpg' }
};
PROJECTS.forEach(p => {
  const m = MEDIA_UPDATES[p.id];
  if (m) Object.assign(p, m);
});

// Logos de MOTUS y KeyPaste
PROJECTS.forEach(p => {
  if (p.id === 'motus') p.coverImg = 'media/motus-logo.jpg';
  if (p.id === 'keypaste') p.coverImg = 'media/keypaste-logo.jpg';
});
