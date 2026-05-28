<template>
  <section class="space-y-5">
    <h1 class="text-3xl font-bold">{{ $t('projects.title') }}</h1>
    <p class="text-slate-600 dark:text-slate-300">{{ $t('projects.subtitle') }}</p>
    <div class="grid gap-4 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '~/stores/portfolio'
const { projects } = storeToRefs(usePortfolioStore())

useSeoMeta({
  title: 'Projects',
  description: 'Projetos de portfolio para vagas Front-end e Full Stack'
})
</script>
