<script setup>
/**
 * 單支範例。要看哪一堂的哪一支由網址決定（route 把 lessonId 與 slug 當 prop 傳進來），
 * 不是由這裡的狀態決定——所以重新整理還會停在同一支。
 */
import { computed } from 'vue'

import { lessonById, demoRouteName } from '../lessons.js'

const props = defineProps({
  lessonId: { type: String, required: true },
  slug: { type: String, required: true },
})

// 路由表裡只有清冊上的堂次與 slug（見 router.js），所以這裡一定找得到，
// 不必再處理「查不到」的情況。
const lesson = computed(() => lessonById(props.lessonId))
// 只有 comp 的才有自己的 route；只有 href 的外部範例（路由那段）上一支／下一支直接跳過。
const demos = computed(() => lesson.value.demos.filter((demo) => demo.comp))
const index = computed(() => demos.value.findIndex((demo) => demo.slug === props.slug))
const demo = computed(() => demos.value[index.value])
const prev = computed(() => demos.value[index.value - 1])
const next = computed(() => demos.value[index.value + 1])
</script>

<template>
  <div class="page stage">
    <RouterLink class="stage__back" :to="{ name: lesson.id }">← 返回第 {{ lesson.week }} 堂清單</RouterLink>

    <div class="stage__head">
      <h2><span class="stage__num">{{ Number(demo.slug.slice(0, 2)) }}.</span> {{ demo.title }}</h2>
      <p class="stage__from">講義：{{ demo.from }}</p>
    </div>
    <div class="stage__body">
      <component :is="demo.comp" :key="`${lesson.id}/${demo.slug}`" />
    </div>

    <nav class="stage__foot">
      <RouterLink v-if="prev" :to="{ name: demoRouteName(lesson.id, prev.slug) }">← {{ prev.title }}</RouterLink>
      <span v-else></span>

      <RouterLink v-if="next" :to="{ name: demoRouteName(lesson.id, next.slug) }">{{ next.title }} →</RouterLink>
      <span v-else></span>
    </nav>
  </div>
</template>
