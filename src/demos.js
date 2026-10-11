/**
 * 第一堂的範例清冊。這一堂的導覽與路由都從這一份長出來（經由 lessons.js）：
 * 清單的順序、網址、上一支／下一支，全部是同一個陣列的三種讀法，所以加一支範例只要在這裡加一行。
 *
 * slug 就是檔名（去掉 .vue），不另外取名：網址上看到 01-counter，
 * 要找檔案的人直接就知道是 demos/01-counter.vue。講課時把網址唸出來
 * 等於把檔名唸出來，不需要中間再對照一張表。
 *
 * 出處寫在這份清冊裡而不是各支範例的檔頭：範例本身要保持跟講義一樣乾淨，
 * 而「這一支對應哪一節」是導覽要回答的問題。
 *
 * 一支範例一個檔案：講義的 52 段程式碼裡有一半以上都叫 count、message、
 * users、products。塞進同一支 SFC 的話，第一件事就是替它們全部改名
 * （count1、count2…），而那會讓範例跟講義對不起來——這份東西的用途
 * 就是照著講義逐字對照。
 */
import Counter from './demos/01-counter.vue'
import Mvvm from './demos/02-mvvm.vue'
import VueStarter from './demos/03-vue-starter.vue'
import SingleData from './demos/04-single-data.vue'
import MultipleData from './demos/05-multiple-data.vue'
import Interpolation from './demos/06-interpolation.vue'
import VHtml from './demos/07-v-html.vue'
import VBind from './demos/08-v-bind.vue'
import ClassStyle from './demos/09-class-style.vue'
import VFor from './demos/10-v-for.vue'
import VIf from './demos/11-v-if.vue'
import VModel from './demos/12-v-model.vue'
import VOn from './demos/13-v-on.vue'
import EventModifiers from './demos/14-event-modifiers.vue'
import KeyModifiers from './demos/15-key-modifiers.vue'
import MouseModifiers from './demos/16-mouse-modifiers.vue'

export const DEMOS = [
  { slug: '01-counter', title: 'Vue3 計數器', from: '關注點分離與前端程式結構', comp: Counter },
  { slug: '02-mvvm', title: 'MVVM 架構', from: 'MVVM 架構', comp: Mvvm },
  { slug: '03-vue-starter', title: 'Vue 起手式', from: 'Vue 起手式', comp: VueStarter },
  { slug: '04-single-data', title: '單筆資料與雙向綁定', from: '單筆資料呈現與雙向資料綁定', comp: SingleData },
  { slug: '05-multiple-data', title: '多筆資料與雙向綁定', from: '多筆資料呈現與雙向資料綁定', comp: MultipleData },
  { slug: '06-interpolation', title: '文字插值', from: '文字插值（Text Interpolation）', comp: Interpolation },
  { slug: '07-v-html', title: 'v-html', from: '指令 1：v-html', comp: VHtml },
  { slug: '08-v-bind', title: 'v-bind', from: '指令 2：v-bind', comp: VBind },
  { slug: '09-class-style', title: 'class / style 綁定', from: 'v-bind 搭配 Class 與 Style', comp: ClassStyle },
  { slug: '10-v-for', title: 'v-for', from: '指令 3：v-for', comp: VFor },
  { slug: '11-v-if', title: 'v-if / v-show', from: 'v-if 基本款 ／ 進階使用技巧 ／ v-if vs v-show', comp: VIf },
  { slug: '12-v-model', title: 'v-model', from: 'v-model 表單資料綁定 ／ 不同表單元素 ／ 進階用法', comp: VModel },
  { slug: '13-v-on', title: 'v-on', from: '事件處理：v-on 與常用修飾符', comp: VOn },
  { slug: '14-event-modifiers', title: '事件修飾符', from: 'v-on 事件修飾符', comp: EventModifiers },
  { slug: '15-key-modifiers', title: '鍵盤修飾符', from: 'v-on 鍵盤修飾符', comp: KeyModifiers },
  { slug: '16-mouse-modifiers', title: '滑鼠按鍵修飾符', from: 'v-on 滑鼠按鍵修飾符', comp: MouseModifiers },
]

