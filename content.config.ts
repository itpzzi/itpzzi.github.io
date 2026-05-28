import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        description: z.string(),
        lang: z.enum(['en', 'pt-BR']).optional(),
        translationKey: z.string().optional(),
      }),
    }),
  },
})
