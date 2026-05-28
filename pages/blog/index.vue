<template>
  <section class="space-y-8">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold">{{ $t('blog.title') }}</h1>
      <p class="text-slate-600 dark:text-slate-300">{{ $t('blog.subtitle') }}</p>
    </div>

    <p v-if="!posts?.length" class="text-slate-500">{{ $t('blog.noArticles') }}</p>

    <ul class="space-y-4">
      <li
        v-for="post in posts"
        :key="post.path"
        class="rounded-lg border border-slate-200 p-5 transition-colors hover:border-sky-400 dark:border-slate-800"
      >
        <NuxtLink :to="postLink(post.path)">
          <p class="mb-1 text-xs text-slate-400">{{ post.date }}</p>
          <h2 class="text-lg font-semibold hover:text-sky-600">{{ post.title }}</h2>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ post.description }}</p>
          <span class="mt-3 inline-block text-sm font-medium text-sky-600">{{ $t('blog.readMore') }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { getBlogSlug, selectLocalizedBlogPosts, type BlogPostEntry } from '~/utils/blog-fallback'

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
