<template>
  <div class="space-y-20">
    <!-- Hero -->
    <section class="space-y-5 pt-4">
      <p class="text-sm font-medium text-sky-600">{{ $t('home.greeting') }}</p>
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{{ $t('home.title') }}</h1>
      <p class="max-w-2xl text-lg text-slate-600 dark:text-slate-300">{{ $t('home.subtitle') }}</p>
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-sm text-slate-500">📍 {{ $t(`home.locations.${owner.locationId}`) }}</span>
        <span class="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
          ✓ {{ $t('home.available') }}
        </span>
      </div>
      <div class="flex flex-wrap gap-3">
        <NuxtLink :to="localePath('/projects')" class="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500">
          {{ $t('home.ctaProjects') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/about')" class="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:border-sky-500 dark:border-slate-700">
          {{ $t('home.ctaContact') }}
        </NuxtLink>
        <a :href="owner.social.github" target="_blank" rel="noopener" class="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:border-sky-500 dark:border-slate-700">GitHub</a>
        <a :href="owner.social.linkedin" target="_blank" rel="noopener" class="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:border-sky-500 dark:border-slate-700">LinkedIn</a>
      </div>
    </section>

    <!-- Stats
    <section class="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
        <p class="text-2xl font-bold text-sky-600">{{ stat.value }}</p>
        <p class="mt-0.5 text-xs text-slate-500">{{ $t(stat.label) }}</p>
      </div>
    </section> -->

    <!-- Featured Projects -->
    <section class="space-y-5">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">{{ $t('home.featuredTitle') }}</h2>
        <NuxtLink :to="localePath('/projects')" class="text-sm text-sky-600 hover:underline">{{ $t('home.seeAll') }} →</NuxtLink>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '~/stores/portfolio'
import { owner } from '~/data/owner'

const { projects } = storeToRefs(usePortfolioStore())
const localePath = useLocalePath()
const { t } = useI18n()

useSeoMeta({
  title: 'Home',
  description: t('home.seoDescription', { name: owner.name }),
})
</script>
