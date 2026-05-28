<template>
  <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-lg font-semibold">{{ project.title }}</h3>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ $t(`projects.items.${project.id}.description`) }}</p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
      >
        {{ tech }}
      </li>
    </ul>
    <a :href="project.link" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-sm font-medium text-sky-600">
      {{ $t('projects.viewProject') }}
    </a>
  </article>
</template>

<script setup lang="ts">
import type { PortfolioProject } from '~/stores/portfolio'

defineProps<{
  project: PortfolioProject
}>()
</script>
