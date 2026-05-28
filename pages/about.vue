<template>
  <div class="space-y-16">
    <!-- About -->
    <section class="space-y-6">
      <h1 class="text-3xl font-bold">{{ $t('about.title') }}</h1>
      <p class="max-w-3xl text-slate-600 dark:text-slate-300">{{ $t('about.bio') }}</p>

      <ul class="grid gap-3 sm:grid-cols-2">
        <li class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h2 class="font-semibold">{{ $t('about.focusTitle') }}</h2>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ $t('about.focusText') }}</p>
        </li>
        <li class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h2 class="font-semibold">{{ $t('about.stackTitle') }}</h2>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ $t('about.stackText') }}</p>
        </li>
      </ul>
    </section>

    <section id="contact" class="space-y-5">
      <h2 class="text-3xl font-bold">{{ $t('contact.title') }}</h2>
      <p class="text-slate-600 dark:text-slate-300">{{ $t('contact.subtitle') }}</p>

      <p v-if="sent" class="rounded-md bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
        {{ $t('contact.sent') }}
      </p>

      <p v-if="submitError" class="rounded-md bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-900/20 dark:text-rose-300">
        {{ submitError }}
      </p>

      <form v-else class="max-w-xl space-y-4" @submit="onSubmit">
        <input v-model="honey" type="text" name="company" autocomplete="off" class="hidden" tabindex="-1" aria-hidden="true">
        <div>
          <label class="mb-1 block text-sm font-medium">{{ $t('contact.name') }}</label>
          <input v-model="name" type="text" class="w-full rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <p v-if="errors.name" class="mt-1 text-sm text-rose-600">{{ errors.name }}</p>
        </div>
        <div>
          <label class="mb-1 block text-sm font-medium">{{ $t('contact.email') }}</label>
          <input v-model="email" type="email" class="w-full rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <p v-if="errors.email" class="mt-1 text-sm text-rose-600">{{ errors.email }}</p>
        </div>
        <div>
          <label class="mb-1 block text-sm font-medium">{{ $t('contact.message') }}</label>
          <textarea v-model="message" rows="5" class="w-full rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
          <p v-if="errors.message" class="mt-1 text-sm text-rose-600">{{ errors.message }}</p>
        </div>
        <button type="submit" :disabled="isSubmitting" class="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70">
          {{ isSubmitting ? $t('contact.sending') : $t('contact.submit') }}
        </button>
      </form>
    </section>

    <section class="space-y-4 pt-2">
      <h2 class="text-xl font-semibold">{{ $t('about.skillsTitle') }}</h2>
      <div class="grid gap-3 lg:grid-cols-2">
        <article v-for="group in owner.skillGroups" :key="group.id" class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-semibold">{{ group.icon }} {{ $t(`about.skills.items.${group.id}.title`) }}</h3>
            <span class="text-xs text-slate-500">{{ $t(`about.skills.items.${group.id}.purpose`) }}</span>
          </div>
          <hr class="my-3 border-slate-200 dark:border-slate-800">
          <ul class="flex flex-wrap gap-2">
            <li v-for="itemId in group.itemIds" :key="itemId" class="rounded bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
              {{ $t(`about.skills.catalog.${itemId}`) }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <hr class="border-slate-200 dark:border-slate-800">

    <section class="space-y-5">
      <h2 class="text-3xl font-bold">{{ $t('about.experienceTitle') }}</h2>
      <ol class="space-y-4">
        <li v-for="job in owner.experience" :key="job.id" class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-semibold">{{ $t(`about.experience.items.${job.id}.role`) }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300">{{ $t(`about.experience.items.${job.id}.company`) }} · {{ $t(`about.experience.items.${job.id}.location`) }}</p>
            </div>
            <p class="text-sm text-slate-500">{{ formatPeriod(job.from, job.to) }}</p>
          </div>
          <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li v-for="highlightId in job.highlightIds" :key="highlightId">{{ $t(`about.experience.highlights.${highlightId}`) }}</li>
          </ul>
        </li>
      </ol>
    </section>

    <hr class="border-slate-200 dark:border-slate-800">

    <section class="space-y-5">
      <h2 class="text-3xl font-bold">{{ $t('about.backgroundTitle') }}</h2>
      <div class="grid gap-4 lg:grid-cols-3">
        <article class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h3 class="font-semibold">🎓 {{ $t('about.educationTitle') }}</h3>
          <p class="mt-2 text-sm">{{ $t('about.education.degree') }}</p>
          <p class="text-sm text-slate-600 dark:text-slate-300">{{ $t('about.education.institution') }}</p>
          <p class="mt-2 text-xs text-slate-500">{{ $t('about.education.location') }} · {{ owner.education.from }} - {{ owner.education.to }}</p>
        </article>
        <article class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h3 class="font-semibold">🏆 {{ $t('about.achievementsTitle') }}</h3>
          <ul class="mt-2 space-y-2 text-sm">
            <li v-for="achievementId in owner.achievementIds" :key="achievementId">
              <p class="font-medium">{{ $t(`about.achievements.items.${achievementId}.title`) }}</p>
              <p class="text-slate-600 dark:text-slate-300">{{ $t(`about.achievements.items.${achievementId}.description`) }}</p>
            </li>
          </ul>
        </article>
        <article class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h3 class="font-semibold">🌍 {{ $t('about.languagesTitle') }}</h3>
          <ul class="mt-2 space-y-2 text-sm">
            <li v-for="language in owner.languages" :key="language.id" class="flex items-center justify-between gap-2">
              <span>{{ $t(`about.languages.items.${language.id}`) }}</span>
              <span class="text-slate-500">{{ $t(`about.languages.levels.${language.levelId}`) }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { owner } from '~/data/owner'
const { t } = useI18n()

const sent = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')
const honey = ref('')

const schema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Informe um nome válido.'),
    email: z.string().email('Informe um e-mail válido.'),
    message: z.string().min(10, 'A mensagem deve ter ao menos 10 caracteres.'),
  })
)

const { defineField, handleSubmit, errors } = useForm({ validationSchema: schema })
const [name] = defineField('name')
const [email] = defineField('email')
const [message] = defineField('message')

const onSubmit = handleSubmit(async (values) => {
  if (honey.value) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${owner.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        _subject: 'Portfolio contact form',
        _captcha: 'false',
        _template: 'table',
      }),
    })

    if (!response.ok) {
      throw new Error(`formsubmit_http_${response.status}`)
    }

    sent.value = true
  } catch {
    submitError.value = t('contact.error')
  } finally {
    isSubmitting.value = false
  }
})

function formatPeriod(from: string, to: string) {
  return `${from} - ${to === 'present' ? t('about.present') : to}`
}

useSeoMeta({
  title: 'About',
  description: t('about.seoDescription'),
})
</script>

