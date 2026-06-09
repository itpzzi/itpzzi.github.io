<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
      <NuxtLink :to="localePath('/')" class="text-lg font-semibold">{{ owner.handle }}</NuxtLink>

      <ul class="flex items-center gap-5 text-sm">
        <li v-for="item in menuItems" :key="item.to" class="hidden sm:block">
          <NuxtLink class="hover:text-sky-600 dark:hover:text-sky-400" :to="localePath(item.to)">
            {{ $t(item.label) }}
          </NuxtLink>
        </li>
        <li class="flex items-center gap-1">
          <NuxtLink
            :to="localeLink('pt-BR')"
            class="rounded-md border px-2 py-1 text-xs font-medium"
            :class="locale === 'pt-BR' ? 'border-sky-600 text-sky-600' : 'border-slate-300 hover:border-sky-500 dark:border-slate-700'"
          >
            PT
          </NuxtLink>
          <NuxtLink
            :to="localeLink('en')"
            class="rounded-md border px-2 py-1 text-xs font-medium"
            :class="locale === 'en' ? 'border-sky-600 text-sky-600' : 'border-slate-300 hover:border-sky-500 dark:border-slate-700'"
          >
            EN
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <div class="flex gap-4 overflow-x-auto border-t border-slate-100 px-4 py-2 text-xs sm:hidden dark:border-slate-800">
      <NuxtLink v-for="item in menuItems" :key="item.to" class="whitespace-nowrap hover:text-sky-600" :to="localePath(item.to)">
        {{ $t(item.label) }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { owner } from '~/data/owner'

const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const menuItems = [
  { to: '/', label: 'menu.home' },
  { to: '/projects', label: 'menu.projects' },
  { to: '/about', label: 'menu.about' },
  { to: '/blog', label: 'menu.blog' },
]

const localeLink = (nextLocale: 'pt-BR' | 'en') => switchLocalePath(nextLocale)
</script>
