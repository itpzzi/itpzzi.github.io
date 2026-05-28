<template>
  <article class="mx-auto max-w-3xl space-y-6">
    <NuxtLink :to="localePath('/blog')" class="text-sm text-sky-600 hover:underline">← Blog</NuxtLink>

    <template v-if="post">
      <header class="space-y-2">
        <p class="text-xs text-slate-400">{{ post.date }}</p>
        <h1 class="text-4xl font-bold leading-tight">{{ post.title }}</h1>
        <p class="text-slate-500">{{ post.description }}</p>
      </header>
      <hr class="border-slate-200 dark:border-slate-800" />
      <ContentRenderer :value="post" class="prose prose-slate max-w-none dark:prose-invert" />
    </template>

    <p v-else class="text-slate-500">{{ $t('blog.notFound') }}</p>
  </article>
</template>

<script setup lang="ts">
import { resolveLocalizedBlogPostBySlug, type BlogPostEntry } from '~/utils/blog-fallback'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: post } = await useAsyncData(
  () => `blog-${String(route.params.slug)}-${locale.value}`,
  async () => {
    const allPosts = await queryCollection('blog').all()
    return resolveLocalizedBlogPostBySlug(allPosts as BlogPostEntry[], String(route.params.slug), locale.value)
  },
  {
    watch: [() => route.params.slug, locale],
  }
)

if (post.value) {
  useSeoMeta({
    title: post.value.title,
    description: post.value.description,
  })
}
</script>
