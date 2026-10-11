/**
 * 第二堂（Composition API 核心）的範例清冊。格式跟 demos.js 一樣：
 * slug 就是 demos-02/ 底下的檔名（去掉 .vue），from 是講義的章節名。
 *
 * 只收講義裡完整、能直接跑的 SFC，照講義逐字貼。只有片段的段落
 * （function 與箭頭函式兩種寫法）沒有對應的範例，硬湊一支出來就對不上講義了。
 * 例外是 05：「ref 與 reactive 如何選擇」講義只有片段，另外補了一支串 JSONPlaceholder
 * 把整筆替換的差異跑給學生看。GitHub Pages 部署那段是操作步驟，也不在這裡。
 *
 * demos-02/ 底下沒有編號的檔案（LifecycleDemo.vue、components/）是範例
 * 自己 import 的子元件，不是獨立的一支，所以不在清冊上。路徑照講義擺，
 * 範例裡的 import 才能跟講義一字不差。
 */
import Env from './demos-02/01-env.vue'
import PlainVsReactive from './demos-02/02-plain-vs-reactive.vue'
import Reactive from './demos-02/03-reactive.vue'
import Ref from './demos-02/04-ref.vue'
import RefVsReactiveReplace from './demos-02/05-ref-vs-reactive-replace.vue'
import OnMounted from './demos-02/06-on-mounted.vue'
import ComputedFilter from './demos-02/07-computed-filter.vue'
import ComputedScore from './demos-02/08-computed-score.vue'
import ComputedSetter from './demos-02/09-computed-setter.vue'
import WatchBasic from './demos-02/10-watch-basic.vue'
import WatchOptions from './demos-02/11-watch-options.vue'
import WatchMultiple from './demos-02/12-watch-multiple.vue'
import WatchEffect from './demos-02/13-watch-effect.vue'
import WatchCleanup from './demos-02/14-watch-cleanup.vue'
import StopWatch from './demos-02/15-stop-watch.vue'
import Lifecycle from './demos-02/16-lifecycle.vue'
import KeepAlive from './demos-02/17-keep-alive.vue'

export const DEMOS = [
  { slug: '01-env', title: 'Vite 環境變數', from: '課程 API 申請與串接 ／ Vite 環境變數配置', comp: Env },
  { slug: '02-plain-vs-reactive', title: '一般變數與響應式變數', from: 'setup、reactive、ref 基礎', comp: PlainVsReactive },
  { slug: '03-reactive', title: 'reactive 基礎', from: 'setup、reactive、ref 基礎', comp: Reactive },
  { slug: '04-ref', title: 'ref 基礎', from: 'setup、reactive、ref 基礎', comp: Ref },
  { slug: '05-ref-vs-reactive-replace', title: 'ref 與 reactive 整筆替換', from: 'ref 與 reactive 如何選擇', comp: RefVsReactiveReplace },
  { slug: '06-on-mounted', title: '多個 onMounted', from: '方法（Method）定義', comp: OnMounted },
  { slug: '07-computed-filter', title: 'computed 篩選商品', from: 'computed 與 Getter / Setter', comp: ComputedFilter },
  { slug: '08-computed-score', title: 'computed 取代 v-if 判斷', from: 'computed 與 Getter / Setter', comp: ComputedScore },
  { slug: '09-computed-setter', title: 'computed Getter / Setter', from: 'computed 與 Getter / Setter', comp: ComputedSetter },
  { slug: '10-watch-basic', title: 'watch 基礎：ref 與 Getter', from: 'watch 與 watchEffect', comp: WatchBasic },
  { slug: '11-watch-options', title: 'watch 的 immediate 與 deep', from: 'watch 與 watchEffect', comp: WatchOptions },
  { slug: '12-watch-multiple', title: 'watch 多個來源', from: 'watch 與 watchEffect', comp: WatchMultiple },
  { slug: '13-watch-effect', title: 'watchEffect', from: 'watch 與 watchEffect', comp: WatchEffect },
  { slug: '14-watch-cleanup', title: 'onWatcherCleanup', from: 'Watch 與 WatchEffect 的清理與停止', comp: WatchCleanup },
  { slug: '15-stop-watch', title: '停止 watch', from: 'Watch 與 WatchEffect 的清理與停止', comp: StopWatch },
  { slug: '16-lifecycle', title: '生命週期', from: 'Vue 生命週期完整解析', comp: Lifecycle },
  { slug: '17-keep-alive', title: 'KeepAlive 與 onActivated', from: 'Vue 生命週期完整解析', comp: KeepAlive },
]
