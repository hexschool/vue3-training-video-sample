/**
 * 路由。要的東西只有一件：重新整理之後還停在同一支範例上。
 *
 * 原本這份導覽是用一個 active ref 配 <component :is> 切換的，網址從頭到尾
 * 都是 /。上課途中重新整理（或改了程式碼讓 Vite 重新載入整頁）就會彈回清單，
 * 講到第 12 支的時候得再點一次進去。網址列就是「我現在在哪一支」的唯一存放處，
 * 交給瀏覽器保管，重新整理與上一頁才會自己成立。
 *
 * 用 createWebHistory 不用 hash：網址是 /lesson-1/12-v-model 而不是
 * /#/lesson-1/12-v-model，貼給學生的時候看得出貼的是哪一支。代價是伺服器要把未知路徑
 * 回退到 index.html——dev server 與 vite preview 預設就會做，靜態部署要自己設。
 *
 * 一支範例一筆 route，不是 /:lesson/:slug 一筆吃全部：這樣打錯的 slug 直接落到
 * 最後那筆 catch-all 被導回總覽，不必在元件裡再自己驗一次「這個 slug 存在嗎」。
 * 路由表本身就是那份驗證。
 */
import { createRouter, createWebHistory } from 'vue-router'

import { LESSONS, demoRouteName } from './lessons.js'
import HomeView from './views/HomeView.vue'
import LessonView from './views/LessonView.vue'
import DemoView from './views/DemoView.vue'

/**
 * 每一堂兩種頁：清單（/lesson-2）與單支範例（/lesson-2/01-ref）。
 * 還沒有範例的那幾堂整個跳過，連清單頁都不產生——網址打進去會落到
 * catch-all 回總覽，不會看到一頁空白清單。
 */
const lessonRoutes = LESSONS.filter((lesson) => lesson.demos.length > 0).flatMap((lesson) => [
  {
    path: `/${lesson.id}`,
    name: lesson.id,
    component: LessonView,
    props: { lessonId: lesson.id },
  },

  // name 用 堂次/slug：上一支／下一支只要 { name } 就能連過去，
  // 不用在元件裡再拼一次網址字串。
  // 沒有 comp 的是外部範例（只有 href，見 demos-03.js），不在這個網站裡，不產生 route。
  ...lesson.demos.filter((demo) => demo.comp).map((demo) => ({
    path: `/${lesson.id}/${demo.slug}`,
    name: demoRouteName(lesson.id, demo.slug),
    component: DemoView,
    props: { lessonId: lesson.id, slug: demo.slug },
  })),
])

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },

    ...lessonRoutes,

    // 拆成四堂之前，第一堂的範例網址是 /demos/<slug>，那些連結已經貼給學生了。
    // 導到新位址；slug 打錯的話新位址不存在，會再被下面的 catch-all 接走。
    { path: '/demos/:slug', redirect: (to) => `/lesson-1/${to.params.slug}` },

    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],

  /**
   * 換頁回到最上面——從清單底下點進去時，捲軸還留在剛才的位置，
   * 範例的標題會在畫面外。但按上一頁時還原原本的位置：那時候使用者要回到的是
   * 「剛才看的地方」，不是那一頁的開頭。
   */
  scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
})
