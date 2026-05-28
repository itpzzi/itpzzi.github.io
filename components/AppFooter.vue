<template>
  <footer class="border-t border-slate-200 py-8 dark:border-slate-800">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-slate-600 dark:text-slate-400">
      <p>© {{ year }} {{ owner.name }}</p>
      <div class="flex gap-4">
        <a :href="owner.social.github" target="_blank" rel="noopener" class="hover:text-sky-600">GitHub</a>
        <a :href="owner.social.linkedin" target="_blank" rel="noopener" class="hover:text-sky-600">LinkedIn</a>
        <a :href="`mailto:${owner.email}`" class="hover:text-sky-600">{{ owner.email }}</a>
      </div>
      <p>{{ $t('footer.stack') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { owner } from '~/data/owner'

const year = new Date().getFullYear()
</script>
