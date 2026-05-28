export interface LegacyProject {
  id: string
  title: string
  summary?: string
  publishedAt: string
  detailsUrl: string
  demoUrl: string
  tags: string[]
}

export const legacyProjects: LegacyProject[] = [
  {
    id: 'dio-covid19',
    title: 'Dio-Covid19: Desenvolvendo uma PWA com React para mapear os dados do Covid19 pelo mundo',
    summary: 'Fazendo a requisicao de APIs para mostrar dados e noticias sobre o virus ao redor do mundo.',
    publishedAt: '2020-07-31',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/dio-covid19',
    demoUrl: 'https://dio-covid19.web.app/',
    tags: ['React', 'Tailwind.css', 'StyledComponents', 'PWA', 'API', 'JavaScript'],
  },
  {
    id: 'untitled-game-duck',
    title: 'UntitledGameDuck: Um jogo de simulacao de vida em JavaScript + React + Grommet',
    publishedAt: '2020-06-28',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/untitled-game-duck',
    demoUrl: 'https://untitled-game-duck.web.app/',
    tags: ['React', 'Grommet', 'AfterEffects', 'JavaScript', 'Game', 'Figma'],
  },
  {
    id: 'stock-trader',
    title: 'Stock trader: Terceiro projeto do curso de Vue.js',
    publishedAt: '2020-03-07',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/stock-trader',
    demoUrl: 'https://portfolio-polazzi-projects-3.web.app/',
    tags: ['Bootstrap', 'Firebase', 'Vue.js', 'Vuex', 'Webpack'],
  },
  {
    id: 'calculator',
    title: 'Calculator: Quarto desafio do curso Vue.js',
    publishedAt: '2020-03-04',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/calculator',
    demoUrl: 'https://portfolio-polazzi-projects-4.firebaseapp.com/',
    tags: ['HTML5', 'Vue.js', 'CSS3', 'Vuetify', 'JavaScript'],
  },
  {
    id: 'ball-fighting',
    title: 'Ball Fighting - Jogo single e multi player programado em JavaScript com a interface em canvas e Vue.js',
    publishedAt: '2020-02-02',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/ball',
    demoUrl: 'https://ball-fighting.web.app/',
    tags: ['GeneticAlgorithm', 'Game', 'Vue.js', 'Vuetify', 'Canvas'],
  },
  {
    id: 'todo-list',
    title: 'Lista de tarefas: Segundo desafio do curso Vue.js',
    publishedAt: '2019-11-07',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/todo',
    demoUrl: 'https://portfolio-polazzi-projects-2.web.app/',
    tags: ['HTML5', 'Vue.js', 'CSS3', 'SPA', 'JavaScript'],
  },
  {
    id: 'the-monster',
    title: 'The Monster: Primeiro projeto do curso de Vue.js',
    publishedAt: '2019-10-21',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/monster',
    demoUrl: 'https://portfolio-polazzi-projects-1.web.app/',
    tags: ['HTML5', 'Vue.js', 'CSS3', 'Game', 'JavaScript'],
  },
  {
    id: 'product-landing-page',
    title: 'Product Landing Page: Segundo desafio do curso freeCodeCamp - Responsive Web Design Projects',
    publishedAt: '2019-06-07',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/landing-page',
    demoUrl: 'https://codepen.io/italopolazzi/full/qGzdPO',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'freeCodeCamp'],
  },
  {
    id: 'personal-portfolio-fcc',
    title: 'Personal Portfolio: Quinto desafio do curso freeCodeCamp - Responsive Web Design Projects',
    publishedAt: '2019-06-07',
    detailsUrl: 'https://italopolazzi.github.io/pt/projects/portfolio',
    demoUrl: 'https://portfolio-polazzi-projects-4.firebaseapp.com/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'freeCodeCamp', 'Webpack'],
  },
]
