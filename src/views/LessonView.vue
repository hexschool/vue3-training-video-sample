<script setup>
/**
 * 單堂的清單，不顯示任何範例。要看哪一堂由網址決定（route 把 lessonId 當 prop 傳進來）。
 *
 * 為什麼不是常駐側欄：這份東西是照著講義一段一段講的，同一時間只會看一支。
 * 側欄把另外 15 支的名字一直留在畫面上，講到第 3 支的時候那 15 個名字都是雜訊；
 * 而且投影時左邊那一欄就是白佔 260px。清單與範例輪流佔滿整個畫面，
 * 一次只有一件事。
 */
import { computed } from 'vue'

import { lessonById, demoRouteName } from '../lessons.js'

const props = defineProps({
  lessonId: { type: String, required: true },
})

// 路由表只替有範例的堂次產生這一頁（見 router.js），所以一定找得到。
const lesson = computed(() => lessonById(props.lessonId))
</script>

<template>
  <div class="page home">
    <div class="home__links">
      <RouterLink class="home__link" :to="{ name: 'home' }">← 四堂課總覽</RouterLink>

      <!-- 純 JS 那半邊是另一個 HTML 入口，不在這個 Vue 應用程式的路由表裡，
           所以用一般的 <a>：它要的就是整頁重新載入。 -->
      <a v-if="lesson.plainJs" class="home__link" :href="lesson.plainJs">→ 純 JavaScript 那半邊</a>
    </div>

    <h1>第 {{ lesson.week }} 堂：{{ lesson.title }}</h1>

    <ol class="home__list">
      <!-- 每一列是真的 <a>：滑過去看得到要去哪一支，中鍵可以另開分頁，
           右鍵可以複製連結。 -->
      <li v-for="demo in lesson.demos" :key="demo.slug">
        <!-- 只有 href 的是另一個 Dev Server 上的獨立範例（第三堂路由、元件與第四堂那幾段），要先 pnpm router:all。
             用一般的 <a> 另開分頁，箭頭換成 ↗ 讓人看得出點了會離開這個網站。 -->
        <a v-if="demo.href" :href="demo.href" target="_blank" rel="noopener">
          <span class="home__num">{{ Number(demo.slug.slice(0, 2)) }}</span>
          <span class="home__text">
            <span class="home__title">{{ demo.title }}</span>
            <span class="home__from">{{ demo.from }} · 另開分頁，需先執行 pnpm router:all</span>
          </span>
          <span class="home__go" aria-hidden="true">↗</span>
        </a>

        <RouterLink v-else :to="{ name: demoRouteName(lesson.id, demo.slug) }">
          <span class="home__num">{{ Number(demo.slug.slice(0, 2)) }}</span>
          <span class="home__text">
            <span class="home__title">{{ demo.title }}</span>
            <span class="home__from">{{ demo.from }}</span>
          </span>
          <span class="home__go" aria-hidden="true">→</span>
        </RouterLink>
      </li>
    </ol>
  </div>
</template>
