/**
 * 第三堂（Vite ＋ Vue Router ＋ 元件）的範例清冊，格式同 demos-02.js。
 *
 * Vue Router（03–12）與元件（13–19）這兩段的程式不在這個導覽網站裡：路由的重點是 main.js
 * 建立 router、App.vue 放 RouterView 的專案結構；元件那段的全域註冊也寫在 main.js。放進來就得
 * 另外包一層，跟講義對不上。所以它們是 demos-03/router-demos/、demos-03/component-demos/ 底下的
 * 獨立小專案，用 pnpm router:all 一次全開。
 *
 * 清單上還是照講義順序列出來，只是那幾筆沒有 comp、改放 href（start.js 的 port：5180 + 編號），
 * 點了另開分頁到那支範例自己的 Dev Server。router.js 只替有 comp 的產生 route，
 * DemoView 的上一支／下一支也會跳過它們。
 *
 * 01 是 vite.config 那一節：範例在沒設定時也能跑，上課時手動改 vite.config.js 示範
 * alias 與 proxy，講完改回原樣。Pinia 移到第四堂。
 */
import ViteConfig from './demos-03/01-vite-config.vue'
import AxiosEnv from './demos-03/02-axios-env.vue'

export const DEMOS = [
  { slug: '01-vite-config', title: 'alias 與 proxy', from: 'Vite 專案結構與進階設定', comp: ViteConfig },
  { slug: '02-axios-env', title: 'Axios Instance 與環境變數', from: 'Vite 整合 Axios 與環境變數', comp: AxiosEnv },
  { slug: '03-router-basic', title: '基礎路由設定', from: 'Vue Router', href: 'http://localhost:5183/' },
  { slug: '04-hash-history', title: 'Hash Router 示範', from: 'Vue Router', href: 'http://localhost:5184/' },
  { slug: '05-router-nested', title: '巢狀路由', from: 'Vue Router', href: 'http://localhost:5185/' },
  { slug: '06-router-named-views', title: '具名視圖', from: 'Vue Router', href: 'http://localhost:5186/' },
  { slug: '07-route-params', title: '動態路由：useRoute', from: 'Vue Router', href: 'http://localhost:5187/' },
  { slug: '08-route-props-true', title: '動態路由：props: true', from: 'Vue Router', href: 'http://localhost:5188/' },
  { slug: '09-route-props-function', title: '動態路由：props 函式', from: 'Vue Router', href: 'http://localhost:5189/' },
  { slug: '10-router-navigation', title: '路由導航方法', from: 'Vue Router', href: 'http://localhost:5190/' },
  { slug: '11-router-add-route', title: '動態新增路由', from: 'Vue Router', href: 'http://localhost:5191/' },
  { slug: '12-router-not-found', title: '404 頁面與重新導向', from: 'Vue Router', href: 'http://localhost:5192/' },
  { slug: '13-component-registration', title: '區域註冊與全域註冊', from: '元件註冊', href: 'http://localhost:5193/' },
  { slug: '14-props', title: 'Props 傳入子元件', from: '父組件 Props 傳入子組件', href: 'http://localhost:5194/' },
  { slug: '15-props-validation', title: 'Props 型別驗證', from: '父組件 Props 傳入子組件型別驗證', href: 'http://localhost:5195/' },
  { slug: '16-emit', title: 'Emit 通知父元件', from: '子組件 Emit 向父組件傳遞事件', href: 'http://localhost:5196/' },
  { slug: '17-slot', title: '預設 Slot', from: '父組件向子組件傳遞內容（Slot 與 Slot Props）', href: 'http://localhost:5197/' },
  { slug: '18-named-slot', title: '具名 Slot', from: '父組件向子組件傳遞內容（Slot 與 Slot Props）', href: 'http://localhost:5198/' },
  { slug: '19-slot-props', title: 'Slot Props', from: '父組件向子組件傳遞內容（Slot 與 Slot Props）', href: 'http://localhost:5199/' },
]
