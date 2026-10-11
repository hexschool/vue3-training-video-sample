<script setup>
/**
 * 首頁：四堂課的總覽。長得跟各堂清單一樣（同一組 class），只是一列是一堂。
 *
 * 還沒有範例的堂次照樣列出來，讓人看得到整個課程排到哪裡，
 * 但那一列不是連結——路由表根本沒有那一堂的頁面（見 router.js），
 * 看起來可以點卻點不進去的東西會讓人以為自己點錯了。
 */
import { LESSONS } from '../lessons.js'
</script>

<template>
  <div class="page home">
    <h1>Vue.js 四堂課</h1>

    <ol class="home__list">
      <li v-for="lesson in LESSONS" :key="lesson.id">
        <RouterLink v-if="lesson.demos.length" :to="{ name: lesson.id }">
          <span class="home__num">{{ lesson.week }}</span>
          <span class="home__text">
            <span class="home__title">{{ lesson.title }}</span>
            <span class="home__from">{{ lesson.date }} · {{ lesson.demos.length }} 支範例</span>
          </span>
          <span class="home__go" aria-hidden="true">→</span>
        </RouterLink>

        <div v-else class="home__upcoming">
          <span class="home__num">{{ lesson.week }}</span>
          <span class="home__text">
            <span class="home__title">{{ lesson.title }}</span>
            <span class="home__from">{{ lesson.date }} · 尚未開放</span>
          </span>
        </div>
      </li>
    </ol>
  </div>
</template>
