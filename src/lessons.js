/**
 * 四堂課的清冊。總覽頁、各堂清單、路由表都從這一份長出來。
 *
 * 每一堂自己的範例清冊還是各自一個檔（demos.js、demos-02.js…），這裡只把
 * 它們掛上堂次與日期：範例清冊回答「這一堂有哪幾支」，這份回答「有哪幾堂」，
 * 兩件事分開放，加一支範例不用碰到這裡。
 *
 * id 就是網址的第一段（/lesson-2/…），也拿來組 route name，所以不能重複、
 * 也不要改——改了就是改掉已經貼給學生的連結。
 *
 * demos 是空陣列的那幾堂（還沒上到）在總覽上照樣列出來，只是點不進去：
 * 路由表不會替它們產生任何一筆 route，見 router.js。
 */
import { DEMOS as LESSON_1_DEMOS } from './demos.js'
import { DEMOS as LESSON_2_DEMOS } from './demos-02.js'
import { DEMOS as LESSON_3_DEMOS } from './demos-03.js'
import { DEMOS as LESSON_4_DEMOS } from './demos-04.js'

export const LESSONS = [
  {
    id: 'lesson-1',
    week: 1,
    title: 'JS 地基 ＋ Vue.js 核心入門',
    date: '9/22(二) 19:00 - 21:00',
    demos: LESSON_1_DEMOS,
    // 純 JS 那半邊只有第一堂有，是另一個 HTML 入口（src/demos/plain-js/index.html）
    plainJs: '/src/demos/plain-js/',
  },
  {
    id: 'lesson-2',
    week: 2,
    title: 'Composition API 核心',
    date: '9/29(二) 19:00 - 21:00',
    demos: LESSON_2_DEMOS,
  },
  {
    id: 'lesson-3',
    week: 3,
    title: 'Vite ＋ Vue Router ＋ 元件',
    date: '10/6(二) 19:00 - 21:00',
    demos: LESSON_3_DEMOS,
  },
  {
    id: 'lesson-4',
    week: 4,
    title: '進階 API ＋ Router ＋ Form 驗證',
    date: '10/13(二) 19:00 - 21:00',
    demos: LESSON_4_DEMOS,
  },
]

export const lessonById = (id) => LESSONS.find((lesson) => lesson.id === id)

/**
 * 範例的 route name。不同堂的 slug 可能撞名（兩堂都有 01-xxx），
 * 所以前面加上堂次；上一支／下一支、清單都用這一支組，不要各自拼字串。
 */
export const demoRouteName = (lessonId, slug) => `${lessonId}/${slug}`
