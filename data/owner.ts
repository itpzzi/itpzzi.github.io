/**
 * Single source of truth for personal portfolio data.
 * Update this file to reflect your current information across the entire app.
 */
export const owner = {
  name: 'Ítalo Ferreira',
  handle: 'itpzzi',
  email: 'itpzzi@gmail.com',
  locationId: 'beloHorizonteMgBr',
  social: {
    github: 'https://github.com/itpzzi',
    linkedin: 'https://linkedin.com/in/italopolazzi'
  },
  /**
   * Adapter pattern: UI content is resolved by locale keys using these stable IDs.
   * This avoids duplicated copy and keeps all translatable text in locales/*.json.
   */
  skillGroups: [
    {
      id: 'frontend',
      icon: '🖥️',
      itemIds: ['vue', 'nuxt', 'typescript', 'primevue', 'vuetify', 'materialUi', 'react'],
    },
    {
      id: 'backend',
      icon: '⚙️',
      itemIds: ['python', 'django', 'flask', 'nodejs', 'restApi', 'keycloak', 'cognito', 'saml'],
    },
    {
      id: 'data',
      icon: '🗄️',
      itemIds: ['postgresql', 'mongodb', 'sqlite', 'pytest', 'jest', 'sonarqube', 'cleanArchitecture', 'ddd'],
    },
    {
      id: 'platform',
      icon: '☁️',
      itemIds: ['docker', 'kubernetes', 'gcp', 'cicd', 'sentry', 'owasp', 'csp'],
    },
    {
      id: 'ai',
      icon: '🤖',
      itemIds: ['localLlms', 'ollama', 'gemma', 'clip', 'insightface', 'generativeAgents'],
    },
  ],
  experience: [
    {
      id: 'independentProjects',
      from: '09/2024',
      to: 'present',
      highlightIds: ['photohubLocal', 'simsModAgents', 'freelanceAutomation'],
    },
    {
      id: 'pontotel',
      from: '09/2020',
      to: '09/2024',
      highlightIds: ['djangoVuePerformance', 'qualityTestsTyping', 'frontendTechLead'],
    },
    {
      id: 'federalPoliceMg',
      from: '11/2017',
      to: '11/2018',
      highlightIds: ['intranetLightbase', 'fieldRemoteSupport', 'itAutomationInfra'],
    },
  ],
  education: {
    from: '02/2015',
    to: '12/2018',
  },
  achievementIds: ['technicalLeadership', 'appPerformance', 'codeQuality', 'academicHighlights'],
  languages: [
    { id: 'pt', levelId: 'native' },
    { id: 'en', levelId: 'advanced' },
    { id: 'de', levelId: 'intermediate' },
  ],
  /**
   * Project descriptions are kept in locale files (locales/pt-BR.json, locales/en.json)
   * under projects.items.<id> so they can be translated.
   * Only static, non-translatable data lives here.
   */
  projects: [
    {
      id: 4,
      title: 'PhotoHub Local',
      stack: ['Python', 'Vue 3', 'Vite', 'SQLite', 'CLIP', 'InsightFace', 'Pipeline'],
      link: 'https://github.com/itpzzi/bestimage_lab',
    },
    {
      id: 1,
      title: 'NarradorPorEventosSimsPensantes',
      stack: ['C#', '.NET', 'LLM', 'Ollama', 'Gemma', 'Generative AI'],
      link: 'https://github.com/itpzzi/NarradorPorEventosSimsPensantes',
    },
    {
      id: 2,
      title: 'BillingSystem',
      stack: ['Python', 'Excel', 'REST API', 'DDD', 'Clean Architecture'],
      link: 'https://github.com/itpzzi/BillingSystem',
    },
    {
      id: 3,
      title: 'Portfolio v2',
      stack: ['Nuxt 2', 'Vue 2', 'Vuetify', 'SSR', 'GitHub Pages'],
      link: 'https://italopolazzi.github.io',
    },
  ],
} as const
