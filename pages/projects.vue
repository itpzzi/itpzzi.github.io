<template>
  <section class="space-y-12">
    <div class="space-y-5">
      <h1 class="text-3xl font-bold">{{ $t('projects.title') }}</h1>
      <p class="text-slate-600 dark:text-slate-300">{{ $t('projects.subtitle') }}</p>
      <div class="grid gap-4 md:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>

    <div class="space-y-5 border-t border-slate-200 pt-8 dark:border-slate-800">
      <h2 class="text-2xl font-bold">{{ $t('projects.legacyTitle') }}</h2>
      <p class="text-slate-600 dark:text-slate-300">{{ $t('projects.legacySubtitle') }}</p>

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="project in sortedLegacyProjects"
          :key="project.id"
          class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p class="text-xs text-slate-500">{{ $t('projects.publishedAt') }}: {{ formatDate(project.publishedAt) }}</p>
          <h3 class="mt-2 text-lg font-semibold">{{ project.title }}</h3>
          <p v-if="project.summary" class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ project.summary }}</p>

          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tag in project.tags"
              :key="`${project.id}-${tag}`"
              class="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {{ tag }}
            </li>
          </ul>

          <div class="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <a :href="project.detailsUrl" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:underline">
              {{ $t('projects.details') }}
            </a>
            <a :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">
              {{ $t('projects.demo') }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '~/stores/portfolio'
import { legacyProjects } from '~/data/legacyProjects'

const { projects } = storeToRefs(usePortfolioStore())
const { locale } = useI18n()

const sortedLegacyProjects = computed(() =>
  [...legacyProjects].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
)

const formatDate = (publishedAt: string) =>
  new Date(publishedAt).toLocaleDateString(locale.value === 'pt-BR' ? 'pt-BR' : 'en-US')

useSeoMeta({
  title: 'Projects',
  description: 'Projetos de portfolio para vagas Front-end e Full Stack'
})
</script>
