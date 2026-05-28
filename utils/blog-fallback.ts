export type BlogLocale = 'en' | 'pt-BR'

export interface BlogPostEntry {
  path: string
  title: string
  description: string
  date: string
  lang?: BlogLocale
  translationKey?: string
}

export interface BlogFallbackStrategy {
  getLocalePriority(activeLocale: string): string[]
}

export class EnglishDefaultBlogFallbackStrategy implements BlogFallbackStrategy {
  getLocalePriority(activeLocale: string): string[] {
    return Array.from(new Set([activeLocale, 'en', 'pt-BR']))
  }
}

const defaultFallbackStrategy = new EnglishDefaultBlogFallbackStrategy()

export const getBlogSlug = (path: string): string => {
  const segments = path.split('/').filter(Boolean)
  return segments[segments.length - 1] || ''
}

const getPostLang = (post: BlogPostEntry): string => post.lang || 'en'

const getTranslationGroupKey = (post: BlogPostEntry): string => post.translationKey || getBlogSlug(post.path)

const pickByFallback = (
  variants: BlogPostEntry[],
  activeLocale: string,
  fallback: BlogFallbackStrategy
): BlogPostEntry | undefined => {
  const priority = fallback.getLocalePriority(activeLocale)

  for (const localeCode of priority) {
    const match = variants.find((variant) => getPostLang(variant) === localeCode)
    if (match) {
      return match
    }
  }

  return variants[0]
}

export const selectLocalizedBlogPosts = (
  allPosts: BlogPostEntry[],
  activeLocale: string,
  fallback: BlogFallbackStrategy = defaultFallbackStrategy
): BlogPostEntry[] => {
  const groups = new Map<string, BlogPostEntry[]>()

  for (const post of allPosts) {
    const key = getTranslationGroupKey(post)
    const variants = groups.get(key) || []
    variants.push(post)
    groups.set(key, variants)
  }

  return [...groups.values()]
    .map((variants) => pickByFallback(variants, activeLocale, fallback))
    .filter((post): post is BlogPostEntry => Boolean(post))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const resolveLocalizedBlogPostBySlug = (
  allPosts: BlogPostEntry[],
  slug: string,
  activeLocale: string,
  fallback: BlogFallbackStrategy = defaultFallbackStrategy
): BlogPostEntry | null => {
  const matchedPost = allPosts.find((post) => getBlogSlug(post.path) === slug)
  if (!matchedPost) {
    return null
  }

  const groupKey = getTranslationGroupKey(matchedPost)
  const variants = allPosts.filter((post) => getTranslationGroupKey(post) === groupKey)

  return pickByFallback(variants, activeLocale, fallback) || matchedPost
}
