/**
 * 第四堂（進階 API ＋ Router ＋ Form 驗證）的範例清冊，格式同 demos-03.js。
 *
 * 單一元件就能跑完的（Template Ref 取 DOM、自訂指令、VeeValidate）放在 demos-04/ 底下，
 * 直接在這個導覽網站裡看。
 *
 * 有父子元件、或要在 main.js 裡 app.use() 的（Template Ref 取元件、Teleport、元件 v-model、
 * plugins、Pinia、購物車）照第三堂的做法，是 demos-04/component-demos/ 底下的獨立小專案：
 * 檔案結構才能跟講義的 components/、stores/、plugins/ 對得上。pnpm router:all 會跟第三堂的
 * 一起打開，port 是 5200 + 編號。
 *
 * Teleport 的兩支也拆成獨立專案：04 要搬到 index.html 裡的 #toast-root，05 的 .overlay 是
 * position: fixed 蓋滿整個視窗，放進導覽網站會把網站本身蓋掉。
 */
import TemplateRefFocus from './demos-04/01-template-ref-focus.vue'
import TemplateRefScroll from './demos-04/02-template-ref-scroll.vue'
import DirectiveFocus from './demos-04/08-directive-focus.vue'
import DirectiveGlow from './demos-04/09-directive-glow.vue'
import VeeDefineField from './demos-04/13-vee-define-field.vue'
import VeeValidationSchema from './demos-04/14-vee-validation-schema.vue'
import VeeComplete from './demos-04/15-vee-complete.vue'

export const DEMOS = [
  { slug: '01-template-ref-focus', title: 'Template Ref：自動聚焦', from: 'useTemplateRef() 取得 DOM', comp: TemplateRefFocus },
  { slug: '02-template-ref-scroll', title: 'Template Ref：捲動到指定區塊', from: 'useTemplateRef() 取得 DOM', comp: TemplateRefScroll },
  { slug: '03-template-ref-component', title: 'Template Ref：呼叫子元件方法', from: 'useTemplateRef() 取得 DOM', href: 'http://localhost:5203/' },
  { slug: '04-teleport-basic', title: 'Teleport 基本語法', from: 'Teleport 內建元件', href: 'http://localhost:5204/' },
  { slug: '05-teleport-stacking', title: 'Teleport 與 Stacking Context', from: 'Teleport 內建元件', href: 'http://localhost:5205/' },
  { slug: '06-component-v-model', title: '元件 v-model：defineModel()', from: '元件 v-model', href: 'http://localhost:5206/' },
  { slug: '07-multiple-v-model', title: '多個 v-model', from: '元件 v-model', href: 'http://localhost:5207/' },
  { slug: '08-directive-focus', title: '自訂指令 v-focus', from: '自訂指令 directive', comp: DirectiveFocus },
  { slug: '09-directive-glow', title: '自訂指令 v-glow 滑鼠光暈', from: '自訂指令 directive', comp: DirectiveGlow },
  { slug: '10-plugin-basic', title: 'Plugin 基本應用', from: 'plugins', href: 'http://localhost:5210/' },
  { slug: '11-plugin-i18n', title: '翻譯 Plugin', from: 'plugins', href: 'http://localhost:5211/' },
  { slug: '12-pinia', title: 'Pinia：多個元件共用購物車', from: 'Pinia 狀態管理', href: 'http://localhost:5212/' },
  { slug: '13-vee-define-field', title: 'useForm 與 defineField', from: 'VeeValidate 表單驗證', comp: VeeDefineField },
  { slug: '14-vee-validation-schema', title: 'validationSchema 驗證規則', from: 'VeeValidate 表單驗證', comp: VeeValidationSchema },
  { slug: '15-vee-complete', title: 'VeeValidate 完整範例', from: 'VeeValidate 表單驗證', comp: VeeComplete },
  { slug: '16-cart', title: '購物車實戰', from: '購物車實戰', href: 'http://localhost:5216/' },
]
