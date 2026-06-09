<template>
  <section class="space-y-5">
    <h1 class="text-3xl font-bold">{{ $t('projects.title') }}</h1>
    <p class="text-slate-600 dark:text-slate-300">{{ $t('projects.subtitle') }}</p>

    <ol class="relative space-y-8 border-s border-sky-200/60 ps-6 dark:border-sky-900/60">
      <li
        v-for="item in timelineItems"
        :key="item.id"
        class="relative"
      >
        <span class="absolute -start-[33px] top-6 inline-flex h-4 w-4 rounded-full border-2 border-sky-200 bg-sky-500 dark:border-slate-900" />

        <div v-if="item.kind === 'primary'" class="space-y-2">
          <p class="text-xs text-slate-500">{{ $t('projects.publishedAt') }}: {{ formatDate(item.publishedAt) }}</p>
          <ProjectCard :project="item.project" :visual-key="String(item.project.id)" />
        </div>

        <article
          v-else
          class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div class="relative h-36">
            <img :src="getCardVisual(item.project.id).coverImage" :alt="item.project.title" class="h-full w-full object-cover" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-sky-950/60 to-sky-500/20" />
          </div>

          <div class="space-y-4 p-5">
            <p class="text-xs text-slate-500">{{ $t('projects.publishedAt') }}: {{ formatDate(item.publishedAt) }}</p>
            <h3 class="text-lg font-semibold">{{ item.project.title }}</h3>
            <p v-if="item.project.summary" class="text-sm text-slate-600 dark:text-slate-300">{{ item.project.summary }}</p>

            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tag in item.project.tags"
                :key="`${item.project.id}-${tag}`"
                class="rounded bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
              >
                {{ tag }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-4 text-sm font-medium">
              <a :href="item.project.detailsUrl" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:underline">
                {{ $t('projects.details') }}
              </a>
              <a :href="item.project.demoUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">
                {{ $t('projects.demo') }}
              </a>
            </div>
          </div>
        </article>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '~/stores/portfolio'
import { legacyProjects, type LegacyProject } from '~/data/legacyProjects'
import { getCardVisual } from '~/data/cardVisuals'

const { projects } = storeToRefs(usePortfolioStore())
const { locale } = useI18n()

const projectTimelineMeta: Record<number, string> = {
  1: '2026-01-01',
  2: '2024-01-01',
  3: '2020-01-01',
  4: '2025-01-01',
}

type TimelinePrimaryItem = {
  id: string
  kind: 'primary'
  publishedAt: string
  project: (typeof projects.value)[number]
}

type TimelineLegacyItem = {
  id: string
  kind: 'legacy'
  publishedAt: string
  project: LegacyProject
}

type TimelineItem = TimelinePrimaryItem | TimelineLegacyItem

const timelineItems = computed<TimelineItem[]>(() => {
  const primaryItems: TimelinePrimaryItem[] = projects.value.map((project) => ({
    id: `primary-${project.id}`,
    kind: 'primary',
    publishedAt: projectTimelineMeta[project.id] ?? '1970-01-01',
    project,
  }))

  const legacyItems: TimelineLegacyItem[] = legacyProjects.map((project) => ({
    id: `legacy-${project.id}`,
    kind: 'legacy',
    publishedAt: project.publishedAt,
    project,
  }))

  return [...primaryItems, ...legacyItems].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
})

const formatDate = (publishedAt: string) =>
  new Date(publishedAt).toLocaleDateString(locale.value === 'pt-BR' ? 'pt-BR' : 'en-US')

useSeoMeta({
  title: 'Projects',
  description: 'Projetos de portfolio para vagas Front-end e Full Stack'
})
</script>
