/**
 * 啟動 router-demos/ 底下的路由範例，以及 component-demos/ 底下的元件範例。
 *
 *   pnpm router:all  → node src/demos-03/router-demos/start.js        全部一起開
 *   node src/demos-03/router-demos/start.js 03                       只開 03-router-basic
 *
 * 每個資料夾是一個獨立的小專案，各自起一個 Vite Dev Server，port 是 5180 加上資料夾編號
 *（03-router-basic → 5183、13-component-registration → 5193）。兩個資料夾的編號接著講義
 * 順序排，不會重複。全部跑在這一個 Node 程序裡，按一次 Ctrl + C 就會一起停掉。
 *
 * router:all 也會把第四堂 demos-04/component-demos/ 的範例一起開起來，port 是 5200 加上編號
 *（03-template-ref-component → 5203），上課只要開一個終端機。第四堂的編號跟第三堂重複，
 * 所以帶編號啟動時只找第三堂。
 *
 * 為什麼不直接用 vite 指令啟動：
 * - configFile：從子資料夾啟動時，Vite 只會在那個資料夾找設定檔，找不到就不會載入
 *   @vitejs/plugin-vue，.vue 檔不會被編譯。所以指回專案根目錄的 vite.config.js。
 * - cacheDir：預設全部都會用專案根目錄的 node_modules/.vite，跟課程網站的 Dev Server
 *   搶同一份預先打包的快取，互相覆蓋後瀏覽器會一直收到 504（Outdated Optimize Dep）。
 *   每個範例各自一個快取資料夾就不會打架。vite 指令沒有這個參數，只能在這裡設定。
 *
 * 啟動前先把這次要用到的 port 全部檢查一遍，被佔用（例如上一次沒關掉、或別的終端機還開著）
 * 就把佔用的程序全部停掉，等所有 port 都空出來才開始啟動，確保執行一次指令就全部打開。
 */
import { execSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer } from 'vite'

// 這支檔案在 src/demos-03/router-demos/，往上三層才是專案根目錄（vite.config.js、node_modules 在那裡）
const projectDir = resolve(import.meta.dirname, '../../..')
const only = process.argv.slice(2)

// portBase：第三堂 5180、第四堂 5200，各自再加上資料夾編號。
// 第四堂只在不帶編號（router:all）時加進來，帶編號時只找第三堂，見檔頭說明。
const demosDirs = [
  { dir: resolve(import.meta.dirname, '..', 'router-demos'), portBase: 5180 },
  { dir: resolve(import.meta.dirname, '..', 'component-demos'), portBase: 5180 },
  ...(only.length === 0 ? [{ dir: resolve(projectDir, 'src/demos-04/component-demos'), portBase: 5200 }] : []),
]

/**
 * 這幾支關掉 Vite 的 SPA 回退（appType: 'mpa'）：找不到的路徑直接回 404，
 * 跟沒設定 rewrite 的一般 web server 一樣。
 *
 * Dev Server 預設會把 /about 這種找不到檔案的路徑回退到 index.html，所以 createWebHistory
 * 在本機重新整理永遠正常，學生會以為部署上去也一樣。03 關掉之後在 /about 重新整理就是 404；
 * 04 也關掉，才看得出 hash 模式在同樣沒有回退的伺服器上照樣正常——兩支條件一樣才能對照。
 * 其他範例保留回退，上課途中重新整理不會被打斷。
 */
const NO_FALLBACK = ['03-router-basic', '04-hash-history']

// 用 port 排序：第三堂照編號排完，才輪到第四堂
const demos = demosDirs
  .flatMap(({ dir, portBase }) => readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d\d-/.test(entry.name))
    .map((entry) => ({ name: entry.name, root: resolve(dir, entry.name), port: portBase + Number(entry.name.slice(0, 2)) })))
  .filter(({ name }) => only.length === 0 || only.includes(name.slice(0, 2)))
  .sort((a, b) => a.port - b.port)

if (demos.length === 0) {
  console.error(`找不到編號 ${only.join('、')} 的範例`)
  process.exit(1)
}

// 回傳正在監聽這個 port 的 PID（排除自己）；lsof 找不到時會以非 0 結束，當成沒有人佔用
const listeningPids = (port) => {
  try {
    return execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, { encoding: 'utf8' })
      .split('\n')
      .map(Number)
      .filter((pid) => pid && pid !== process.pid)
  } catch {
    return []
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// 程序可能在檢查完到送出訊號之間自己結束了，這時 kill 會丟 ESRCH，當成已經停掉
const kill = (pid, signal) => {
  try {
    process.kill(pid, signal)
  } catch {}
}

// 一次處理所有 port：先全部請它們正常結束（SIGTERM），等 3 秒還有沒放掉的就強制結束（SIGKILL）
const freePorts = async (ports) => {
  const busyPids = () => [...new Set(ports.flatMap(listeningPids))]

  const pids = busyPids()
  if (pids.length === 0) return

  for (const pid of pids) kill(pid, 'SIGTERM')
  console.log(`port 被佔用，已停掉 PID ${pids.join('、')}`)

  for (let i = 0; i < 30 && busyPids().length > 0; i++) await sleep(100)
  for (const pid of busyPids()) kill(pid, 'SIGKILL')
  for (let i = 0; i < 10 && busyPids().length > 0; i++) await sleep(100)
}

await freePorts(demos.map(({ port }) => port))

for (const { name, root, port } of demos) {
  const server = await createServer({
    configFile: resolve(projectDir, 'vite.config.js'),
    root,
    cacheDir: resolve(projectDir, 'node_modules/.vite-router-demos', name),
    appType: NO_FALLBACK.includes(name) ? 'mpa' : 'spa',
    logLevel: 'warn',
    server: { port, strictPort: true },
  })
  await server.listen()
  console.log(`http://localhost:${port}/  ${name}${NO_FALLBACK.includes(name) ? '（沒有 SPA 回退）' : ''}`)
}

console.log('\n按 Ctrl + C 停止')
