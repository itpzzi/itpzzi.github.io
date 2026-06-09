<template>
  <section class="space-y-8">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold">{{ $t('blog.title') }}</h1>
      <p class="text-slate-600 dark:text-slate-300">{{ $t('blog.subtitle') }}</p>
    </div>

    <p v-if="!posts?.length" class="text-slate-500">{{ $t('blog.noArticles') }}</p>

    <ol class="relative space-y-8 border-s border-sky-200/60 ps-6 dark:border-sky-900/60">
      <li
        v-for="post in posts"
        :key="post.path"
        class="relative"
      >
        <span class="absolute -start-[33px] top-6 inline-flex h-4 w-4 rounded-full border-2 border-sky-200 bg-sky-500 dark:border-slate-900" />

        <NuxtLink
          :to="postLink(post.path)"
          class="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div class="relative h-36">
            <img :src="getCardVisual(getBlogSlug(post.path)).coverImage" :alt="post.title" class="h-full w-full object-cover" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-sky-950/60 to-sky-500/20" />
          </div>

          <div class="space-y-2 p-5">
            <p class="text-xs text-slate-500">{{ post.date }}</p>
            <h2 class="text-lg font-semibold hover:text-sky-600">{{ post.title }}</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ post.description }}</p>
            <span class="inline-block pt-1 text-sm font-medium text-sky-600">{{ $t('blog.readMore') }}</span>
          </div>
        </NuxtLink>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { getBlogSlug, selectLocalizedBlogPosts, type BlogPostEntry } from '~/utils/blog-fallback'
import { getCardVisual } from '~/data/cardVisuals'

const { locale } = useI18n()
const localePath = useLocalePath()

const { data: posts } = await useAsyncData(
  'blog-list',
  async () => {
    const allPosts = await queryCollection('blog').order('date', 'DESC').all()
    return selectLocalizedBlogPosts(allPosts as BlogPostEntry[], locale.value)
  },
  { watch: [locale] }
)

const postLink = (postPath: string) => localePath(`/blog/${getBlogSlug(postPath)}`)

useSeoMeta({
  title: 'Blog',
  description: 'Articles about Vue.js, Python, AI and software engineering.',
})
</script>
