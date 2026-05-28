import { defineStore } from 'pinia'
import { ref } from 'vue'
import { owner } from '~/data/owner'

export type PortfolioProject = typeof owner.projects[number]

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref([...owner.projects])
  return { projects }
})
