---
title: "Vue 3 + Nuxt 3: o que mudou no ecossistema"
description: "Um panorama prático das principais mudanças do Vue 2/Nuxt 2 para Vue 3/Nuxt 3 — Composition API, Pinia, Vite e o que realmente importa no dia a dia."
date: "2026-05-10"
lang: "pt-BR"
translationKey: "vue3-nuxt3-ecosystem"
---

## Composition API é o novo padrão

O maior salto do Vue 2 para o Vue 3 foi a **Composition API** com `<script setup>`. O código fica mais legível, reutilizável e fácil de tipar com TypeScript.

```vue
<script setup lang="ts">
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

## Pinia substituiu o Vuex

O Vuex 4 ainda existe, mas o **Pinia** é o store oficial hoje. Sem mutations, sem namespaces verbosos — só `state`, `getters` e `actions`.

```ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
})
```

## Vite no lugar do Webpack

O Nuxt 3 usa **Vite** por padrão. HMR instantâneo, build mais rápido, melhor DX. A diferença é sentida especialmente em projetos grandes.

## O que ainda é válido do Vue 2

- Options API ainda funciona no Vue 3
- `v-model`, `v-for`, `v-if` — mesma API
- Ecosystem de componentes está migrando, mas Vuetify, Quasar e PrimeVue têm versões Vue 3

## Conclusão

A migração vale a pena. A curva de aprendizado é real, mas o ganho em produtividade e performance compensa.
