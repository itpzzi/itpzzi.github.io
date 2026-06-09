<template>
  <article
    class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur transition-colors hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-700"
  >
    <div class="relative h-40">
      <img
        :src="visual.coverImage"
        :alt="project.title"
        class="h-full w-full object-cover"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-sky-950/55 to-sky-400/20" />
    </div>

    <div class="space-y-4 p-5">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ project.title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-300">{{ $t(`projects.items.${project.id}.description`) }}</p>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
      >
        {{ tech }}
      </li>
    </ul>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block text-sm font-medium text-sky-600 hover:text-sky-500"
      >
        {{ $t('projects.viewProject') }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PortfolioProject } from '~/stores/portfolio'
import { computed } from 'vue'
import { getCardVisual } from '~/data/cardVisuals'

const props = defineProps<{
  project: PortfolioProject
  visualKey?: string
}>()

const visual = computed(() => getCardVisual(props.visualKey || String(props.project.id)))
</script>
