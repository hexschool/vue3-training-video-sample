/**
 * 純 JS 那半邊的接線：導覽 + 把每一段範例接到按鈕上。
 *
 * 每一段範例是一支自己的檔案、匯出一個函式，由這裡接到按鈕上——範例本身
 * 因此不必知道自己被誰觸發，跟講義裡「複製到 console 就能跑」的那一段
 * 幾乎一模一樣。
 *
 * 導覽的部分刻意跟 Vue 那半邊對著寫：那邊是 DEMOS 陣列 + v-for + RouterView，
 * 這裡是同一個 DEMOS 陣列，但清單要自己建節點、切換要自己改 hidden、
 * 網址要自己讀自己寫。兩邊放在一起看，就是這堂課最後要講的那件事。
 */
import { runValueVsReference } from './01-value-vs-reference.js'
import { runPromiseBasic } from './02-promise.js'
import { runAxios } from './03-axios.js'
import { runEsModule } from './04-es-module.js'

/**
 * 導覽的資料。順序要跟 index.html 裡 data-demo 的編號對得起來。
 *
 * slug 就是那一支範例的檔名（去掉 .js），跟 Vue 那半邊同一套規則：
 * 網址上看到 02-promise，要找檔案的人直接就知道是 src/demos/plain-js/02-promise.js。
 *
 * 出處寫在這裡而不是各支範例的檔頭：範例本身要保持跟講義一樣乾淨，
 * 而「這一支對應哪一節」是導覽要回答的問題。
 */
const DEMOS = [
  { slug: '01-value-vs-reference', title: '值與參考', from: '值與參考：物件、陣列的操作特性' },
  { slug: '02-promise', title: '使用 Promise 處理非同步任務', from: '使用 Promise 處理非同步任務' },
  { slug: '03-axios', title: 'Axios API 串接', from: 'Axios API 串接：Promise 與 async / await' },
  { slug: '04-es-module', title: 'ES Module', from: 'ES Module 模組化' },
]

// ===== 畫面元素 =====
const home = document.querySelector('#home')
const stage = document.querySelector('#stage')
const homeList = document.querySelector('#home-list')
const stageNum = document.querySelector('#stage-num')
const stageTitle = document.querySelector('#stage-title')
const stageFrom = document.querySelector('#stage-from')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const sections = document.querySelectorAll('[data-demo]')

// ===== 資料：正在看第幾支，答案在網址列裡 =====
/**
 * 這支檔案沒有 active 變數。原本有一個 `let active = null`，代價是重新整理
 * （或改了程式碼讓 Vite 重新載入整頁）就會彈回清單，講到第 3 支得再點一次進去。
 * 網址列是瀏覽器在保管的，把位置放進去，重新整理與上一頁才會自己成立。
 *
 * 用 hash 而不是 /src/demos/plain-js/02-promise 這種路徑：那種寫法要伺服器把未知路徑
 * 回退到這一頁，而 Vite 的回退只認根目錄那支 index.html——真的那樣接，
 * 重新整理會跳到 Vue 那半邊去。hash 不經過伺服器，靜態檔案直接就成立。
 *
 * null＝停在首頁清單，數字＝正在看第幾支。用 null 而不是 -1：這一格要嘛有值
 * 要嘛沒有，不是一個可以比大小的位置。網址上打錯的 slug 也算沒有，導回清單。
 */
function activeFromHash() {
  const slug = location.hash.slice(1) // '#02-promise' → '02-promise'
  const index = DEMOS.findIndex((demo) => demo.slug === slug)

  return index === -1 ? null : index
}

// ===== 首頁清單：Vue 那邊 v-for 一行的事，這裡要自己把節點建出來 =====
DEMOS.forEach((demo, index) => {
  const item = document.createElement('li')

  const button = document.createElement('button')
  button.type = 'button'
  button.addEventListener('click', () => open(index))

  // 一整列都是點擊範圍，所以編號、文字、箭頭都塞在同一顆 button 裡
  const num = document.createElement('span')
  num.className = 'home__num'
  num.textContent = index + 1

  const text = document.createElement('span')
  text.className = 'home__text'

  const title = document.createElement('span')
  title.className = 'home__title'
  title.textContent = demo.title

  const from = document.createElement('span')
  from.className = 'home__from'
  from.textContent = demo.from

  const go = document.createElement('span')
  go.className = 'home__go'
  go.setAttribute('aria-hidden', 'true')
  go.textContent = '→'

  text.append(title, from)
  button.append(num, text, go)
  item.append(button)
  homeList.append(item)
})

// ===== 畫面更新：只負責「把網址說的那一支呈現到畫面上」 =====
// 網址變了之後自己記得呼叫 render()——Vue 那半邊不必做的正是這一步。
function render() {
  const active = activeFromHash()
  const showingHome = active === null

  home.hidden = !showingHome
  stage.hidden = showingHome

  // 四支範例的節點一直都在，只是用 hidden 輪流顯示，不是切走再貼回來。
  sections.forEach((section) => {
    section.hidden = Number(section.dataset.demo) !== active
  })

  if (showingHome) return

  stageNum.textContent = `${active + 1}.`
  stageTitle.textContent = DEMOS[active].title
  stageFrom.textContent = `講義：${DEMOS[active].from}`

  // 第一支沒有上一支、最後一支沒有下一支，那兩顆就不要出現
  prevButton.hidden = active === 0
  if (!prevButton.hidden) prevButton.textContent = `← ${DEMOS[active - 1].title}`

  nextButton.hidden = active === DEMOS.length - 1
  if (!nextButton.hidden) nextButton.textContent = `${DEMOS[active + 1].title} →`
}

// ===== 事件：只負責「改網址」，畫面更新交給下面的 show() =====
// 所以點清單、點下一支、按瀏覽器的上一頁，三件事最後都收斂到同一個 show()。
function open(index) {
  location.hash = DEMOS[index].slug
}

function back() {
  // 不寫 location.hash = ''：那樣會在網址尾巴留一個光溜溜的 #。
  // pushState 不會觸發 hashchange，所以這一條自己叫 show()。
  history.pushState(null, '', location.pathname)
  show()
}

document.querySelector('#back').addEventListener('click', back)

// 上一支／下一支也去問網址「現在是第幾支」，不自己記一份。
prevButton.addEventListener('click', () => open(activeFromHash() - 1))
nextButton.addEventListener('click', () => open(activeFromHash() + 1))

// ===== 範例本身的執行鈕 =====
const RUNNERS = {
  'value-vs-reference': runValueVsReference,
  'promise-basic': runPromiseBasic,
  axios: runAxios,
  'es-module': runEsModule,
}

document.querySelectorAll('[data-run]').forEach((button) => {
  button.addEventListener('click', () => {
    const run = RUNNERS[button.dataset.run]
    if (!run) return

    console.clear()
    run()
  })
})

// ===== 網址變了就重畫 =====
function show() {
  render()
  // 換頁回到最上面：從清單底下點進去時，捲軸還留在剛才的位置，
  // 範例的標題會在畫面外。Vue 那半邊是 router 的 scrollBehavior 在做這件事。
  window.scrollTo(0, 0)
}

// 上一頁／下一頁換的也是 hash，所以這一條同時把瀏覽器的前後鍵接起來了。
window.addEventListener('hashchange', show)

// ===== 初始畫面 =====
// 這裡不捲到最上面：重新整理時讓瀏覽器自己還原原本的捲動位置。
render()
