const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0]
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPagesRepo = Boolean(
  repositoryOwner
  && repositoryName
  && repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`
)
const githubPagesBaseUrl = isUserOrOrgPagesRepo ? '/' : repositoryName ? `/${repositoryName}/` : '/'

export default defineNuxtConfig({
  devServer: { port: 3000 },

  ssr: true,

  devtools: { enabled: true },
  
  typescript: {
    strict: true,
    typeCheck: false
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/content',
  ],

  // i18n configuration
  i18n: {
    restructureDir: '',
    langDir: 'locales',
    locales: [
      { code: 'pt-BR', language: 'pt-BR', file: 'pt-BR.json', name: 'Português (Brasil)' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },

  // Color mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  // Image optimization
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // CSS and styling
  css: ['~/assets/css/main.css'],

  // PostCSS (moved from postcss.config.js to silence Nuxt warning)
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  // Nuxt app configuration
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || (isGitHubPages ? githubPagesBaseUrl : '/'),
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Ítalo Ferreira',
      meta: [
        { name: 'description', content: 'Portfolio de Ítalo Ferreira — Desenvolvedor Full Stack com foco em Vue.js e Python.' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/projects', '/about', '/pt-BR', '/pt-BR/blog', '/pt-BR/projects', '/pt-BR/about'],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  // Compatibility dates
  compatibilityDate: '2024-12-01'
})
