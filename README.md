# Vue.js 四堂課範例

這裡放的是四堂 Vue 課的範例程式，每一支都可以跟講義對著看。

| 堂次 | 主題 | 日期 |
| --- | --- | --- |
| 1 | JS 地基 ＋ Vue.js 核心入門 | 9/22(二) 19:00 - 21:00 |
| 2 | Composition API 核心 | 9/29(二) 19:00 - 21:00 |
| 3 | Vite ＋ Vue Router ＋ 元件 | 10/6(二) 19:00 - 21:00 |
| 4 | 進階 API ＋ Router ＋ Form 驗證 | 10/13(二) 19:00 - 21:00 |

## 先把專案跑起來

電腦要先裝好 Node.js（20.11 以上）和 pnpm。第一次拿到專案，先在專案資料夾裡裝套件：

```bash
pnpm install
```

接著要**自己建立三個環境變數檔**：`.env`、`.env.development`、`.env.production`。專案裡有準備範本（`.env.example` 這類檔案），照下面[環境變數](#環境變數)那一段複製一份、改個檔名就好。沒建的話，第 2 堂第 01 支和第 3 堂第 02 支會抓不到資料。

都準備好之後，常用的指令就這幾個：

| 指令 | 做什麼 | 打開的網址 |
| --- | --- | --- |
| `pnpm dev` | 開範例網站，大部分範例都在這裡看 | `http://localhost:5173` |
| `pnpm router:all` | 把第 3、4 堂的「獨立範例」全部打開（下面會說明） | 每支一個 port，見各堂表格 |
| `pnpm mock-api` | 開一個假的後端，第 3 堂第 01 支會用到 | `http://localhost:3001` |

指令要停下來，在終端機按 `Ctrl + C`。

> **port 是什麼？** 可以想成同一台電腦上的「門牌號碼」。`localhost:5173` 和 `localhost:5187` 是兩個不同的網站，所以可以同時開著。

## 範例分成三種

1. **在範例網站裡看的**：執行 `pnpm dev`，打開 `http://localhost:5173`，從清單點進去就好。大部分範例都是這種。
2. **獨立範例**：第 3、4 堂有些範例要示範「整個專案怎麼組起來」，例如 `main.js` 怎麼設定路由、怎麼裝 Pinia，塞進範例網站反而看不清楚，所以每支都是自己一個小專案。要先執行 `pnpm router:all` 才打得開。在範例網站的清單上，箭頭是 `↗` 的就是這種，點了會開新分頁。
3. **純 JS 頁**：只有第 1 堂有，示範「不用 Vue 的話要怎麼寫」。一樣先 `pnpm dev`，再從第 1 堂頁面上方的連結進去。

上課時建議開兩個終端機，一個跑 `pnpm dev`，一個跑 `pnpm router:all`，這樣每一支都點得開。

## 檔案放在哪裡

```text
vue-lesson-01/
├── index.html                  # 範例網站的首頁
├── vite.config.js              # Vite 設定（第 3 堂會講）
├── .env.example 等三個範本      # 複製後改名成 .env 等環境變數檔（第 2 堂會講）
└── src/
    ├── main.js                 # 範例網站的進入點
    ├── App.vue
    ├── router.js               # 範例網站的路由
    ├── lessons.js              # 四堂課的清單
    ├── views/                  # 範例網站的首頁、清單頁、範例頁
    │
    ├── demos.js                # 第 1 堂有哪些範例
    ├── demos/                  # 第 1 堂
    │   ├── 01-counter.vue … 16-mouse-modifiers.vue
    │   └── plain-js/           # 純 JS 頁
    │       ├── index.html
    │       ├── main.js
    │       ├── 01-value-vs-reference.js … 04-es-module.js
    │       └── math.js
    │
    ├── demos-02.js             # 第 2 堂有哪些範例
    ├── demos-02/               # 第 2 堂
    │   ├── 01-env.vue … 17-keep-alive.vue
    │   ├── LifecycleDemo.vue   # 第 16 支用到的子元件
    │   └── components/         # 第 17 支用到的子元件
    │
    ├── demos-03.js             # 第 3 堂有哪些範例
    ├── demos-03/               # 第 3 堂
    │   ├── 01-vite-config.vue
    │   ├── 01-vite-config/components/
    │   ├── 02-axios-env.vue
    │   ├── api/axios.js
    │   ├── mock-api/server.js  # pnpm mock-api 跑的就是這支
    │   ├── router-demos/       # 獨立範例 03～12（路由）
    │   └── component-demos/    # 獨立範例 13～19（元件）
    │
    ├── demos-04.js             # 第 4 堂有哪些範例
    └── demos-04/               # 第 4 堂
        ├── 01-template-ref-focus.vue 等 5 支
        └── component-demos/    # 獨立範例 03～12、16、17
```

幾個找檔案的小技巧：

- **網址就是檔名**。網址 `/lesson-2/04-ref` 對應的檔案是 `src/demos-02/04-ref.vue`。
- **開頭兩碼數字就是講義的順序**。
- 沒有數字開頭的檔案，是某支範例用到的子元件，不會單獨出現在清單上。

每個獨立範例的資料夾長得都差不多，建議照這個順序打開來看：

```text
07-route-params/
├── index.html      # 1. 頁面上有一個 <div id="app">，Vue 會掛在這裡
├── main.js         # 2. 建立 Vue app，設定路由、Pinia、Plugin 都在這
├── App.vue         # 3. 最外層的元件
├── views/          # 4. 各個頁面
└── components/     # 5. 頁面裡用到的小元件
```

## 第 1 堂：JS 地基 ＋ Vue.js 核心入門

**怎麼開**：`pnpm dev`，打開 `http://localhost:5173/lesson-1`。純 JS 頁在這一頁最上面的連結。

**純 JS 頁**（`src/demos/plain-js/`）

| # | 檔案 | 主題 |
| --- | --- | --- |
| 1 | `01-value-vs-reference.js` | 值與參考 |
| 2 | `02-promise.js` | Promise |
| 3 | `03-axios.js` | Axios：`.then` 與 `async/await` |
| 4 | `04-es-module.js` | ES Module |

**Vue 範例**（`src/demos/`）

| # | 檔案 | 主題 |
| --- | --- | --- |
| 01 | `01-counter.vue` | 計數器 |
| 02 | `02-mvvm.vue` | MVVM 架構 |
| 03 | `03-vue-starter.vue` | Vue 起手式 |
| 04 | `04-single-data.vue` | 單筆資料與雙向綁定 |
| 05 | `05-multiple-data.vue` | 多筆資料與雙向綁定 |
| 06 | `06-interpolation.vue` | 文字插值 |
| 07 | `07-v-html.vue` | v-html |
| 08 | `08-v-bind.vue` | v-bind |
| 09 | `09-class-style.vue` | class / style 綁定 |
| 10 | `10-v-for.vue` | v-for |
| 11 | `11-v-if.vue` | v-if / v-show |
| 12 | `12-v-model.vue` | v-model |
| 13 | `13-v-on.vue` | v-on |
| 14 | `14-event-modifiers.vue` | 事件修飾符 |
| 15 | `15-key-modifiers.vue` | 鍵盤修飾符 |
| 16 | `16-mouse-modifiers.vue` | 滑鼠按鍵修飾符 |

**要注意**

- 純 JS 頁按「執行」之後，畫面上不會有變化，結果都印在 Console。先按 `F12`（Mac 是 `Cmd + Option + I`）打開開發者工具，切到 Console 再按。
- 第 2 支要等 3 秒才會看到結果；第 3 支會連到網路上的 API，大約等 2 秒，沒網路就會失敗。
- 純 JS 頁的網址長這樣：`/src/demos/plain-js/#02-promise`，`#` 後面就是目前在看哪一支。

## 第 2 堂：Composition API 核心

**怎麼開**：`pnpm dev`，打開 `http://localhost:5173/lesson-2`。

| # | 檔案 | 主題 |
| --- | --- | --- |
| 01 | `01-env.vue` | Vite 環境變數 |
| 02 | `02-plain-vs-reactive.vue` | 一般變數與響應式變數 |
| 03 | `03-reactive.vue` | reactive |
| 04 | `04-ref.vue` | ref |
| 05 | `05-ref-vs-reactive-replace.vue` | ref 與 reactive 整筆替換 |
| 06 | `06-on-mounted.vue` | 多個 onMounted |
| 07 | `07-computed-filter.vue` | computed 篩選商品 |
| 08 | `08-computed-score.vue` | computed 取代 v-if 判斷 |
| 09 | `09-computed-setter.vue` | computed Getter / Setter |
| 10 | `10-watch-basic.vue` | watch：ref 與 Getter |
| 11 | `11-watch-options.vue` | watch 的 immediate 與 deep |
| 12 | `12-watch-multiple.vue` | watch 多個來源 |
| 13 | `13-watch-effect.vue` | watchEffect |
| 14 | `14-watch-cleanup.vue` | onWatcherCleanup |
| 15 | `15-stop-watch.vue` | 停止 watch |
| 16 | `16-lifecycle.vue` | 生命週期 |
| 17 | `17-keep-alive.vue` | KeepAlive 與 onActivated |

**要注意**

- watch、生命週期、KeepAlive 這幾支，重點都印在 Console，記得打開開發者工具一起看。
- 第 01 支會顯示環境變數，值是從 `.env` 檔讀來的，說明在最下面的[環境變數](#環境變數)。
- 改了 `.env` 檔，要先 `Ctrl + C` 停掉 `pnpm dev` 再重開，畫面才會更新。

## 第 3 堂：Vite ＋ Vue Router ＋ 元件

**怎麼開**

- 第 01、02 支：`pnpm dev`，打開 `http://localhost:5173/lesson-3`。
- 第 03～19 支：另開一個終端機執行 `pnpm router:all`，再打開表格裡的網址。

| # | 位置 | 主題 | 網址 |
| --- | --- | --- | --- |
| 01 | `demos-03/01-vite-config.vue` | alias 與 proxy | `localhost:5173/lesson-3/01-vite-config` |
| 02 | `demos-03/02-axios-env.vue` | Axios 與環境變數 | `localhost:5173/lesson-3/02-axios-env` |
| 03 | `router-demos/03-router-basic/` | 基礎路由 | `localhost:5183` |
| 04 | `router-demos/04-hash-history/` | Hash 模式 | `localhost:5184` |
| 05 | `router-demos/05-router-nested/` | 巢狀路由 | `localhost:5185` |
| 06 | `router-demos/06-router-named-views/` | 具名視圖 | `localhost:5186` |
| 07 | `router-demos/07-route-params/` | 動態路由：useRoute | `localhost:5187` |
| 08 | `router-demos/08-route-props-true/` | 動態路由：props: true | `localhost:5188` |
| 09 | `router-demos/09-route-props-function/` | 動態路由：props 函式 | `localhost:5189` |
| 10 | `router-demos/10-router-navigation/` | 用程式切換頁面 | `localhost:5190` |
| 11 | `router-demos/11-router-add-route/` | 動態新增路由 | `localhost:5191` |
| 12 | `router-demos/12-router-not-found/` | 404 頁面與轉址 | `localhost:5192` |
| 13 | `component-demos/13-component-registration/` | 區域與全域註冊 | `localhost:5193` |
| 14 | `component-demos/14-props/` | Props | `localhost:5194` |
| 15 | `component-demos/15-props-validation/` | Props 型別檢查 | `localhost:5195` |
| 16 | `component-demos/16-emit/` | Emit | `localhost:5196` |
| 17 | `component-demos/17-slot/` | Slot | `localhost:5197` |
| 18 | `component-demos/18-named-slot/` | 具名 Slot | `localhost:5198` |
| 19 | `component-demos/19-slot-props/` | Slot Props | `localhost:5199` |

**要注意**

- 第 01 支要自己動手改 `vite.config.js`。專案預設沒有設定 alias 和 proxy，上課時再一步步加上去，講完改回原樣。
- **alias**：在 `vite.config.js` 加上 `@` 指向 `src` 之後，把 `UserList.vue` 的 import 換成註解裡那行 `@/...` 的寫法。改回原樣時順序反過來：先把 import 換回相對路徑，再刪掉 alias，不然整頁會壞。
- **proxy**：要多開一個 `pnpm mock-api`。畫面上有兩顆按鈕：
  - 「直接打 3001」一定會失敗，這是故意的。瀏覽器不讓 5173 的網頁直接去拿 3001 的資料（這就是 CORS），Console 會看到紅字。
  - 「透過 Dev Server 打」在還沒設定 proxy 時，會顯示「proxy 還沒設定」。在 `vite.config.js` 把 `/api` 轉到 `http://localhost:3001` 之後再按就會成功：請求先送到 5173，再由 Vite 幫你轉給 3001，瀏覽器就不會擋。
- 改完 `vite.config.js` 要重開 `pnpm dev` 才會生效。
- **第 03 支在 `/about` 按重新整理會看到 404，這是故意的**。它模擬「網站放上伺服器後，重新整理就找不到頁面」的狀況。第 04 支用 hash 模式（網址裡有 `#`），同樣的操作就不會出錯，兩支可以對照看。
- 第 07～09 支會連到網路上抓假的使用者資料，要有網路。

## 第 4 堂：進階 API ＋ Router ＋ Form 驗證

**怎麼開**

- 網址是 `5173` 開頭的：`pnpm dev`，打開 `http://localhost:5173/lesson-4`。
- 其他的：另開一個終端機執行 `pnpm router:all`，再打開表格裡的網址。

| # | 位置 | 主題 | 網址 |
| --- | --- | --- | --- |
| 01 | `demos-04/01-template-ref-focus.vue` | Template Ref：自動聚焦 | `localhost:5173/lesson-4/01-template-ref-focus` |
| 02 | `demos-04/02-template-ref-scroll.vue` | Template Ref：捲到指定位置 | `localhost:5173/lesson-4/02-template-ref-scroll` |
| 03 | `component-demos/03-template-ref-component/` | Template Ref：呼叫子元件的方法 | `localhost:5203` |
| 04 | `component-demos/04-teleport-basic/` | Teleport 基本用法 | `localhost:5204` |
| 05 | `component-demos/05-teleport-stacking/` | Teleport 與圖層順序 | `localhost:5205` |
| 06 | `component-demos/06-component-v-model/` | 元件的 v-model | `localhost:5206` |
| 07 | `component-demos/07-multiple-v-model/` | 多個 v-model | `localhost:5207` |
| 08 | `component-demos/08-directive-focus/` | 自訂指令 v-focus：區域與全域註冊 | `localhost:5208` |
| 09 | `component-demos/09-directive-glow/` | 自訂指令 v-glow | `localhost:5209` |
| 10 | `component-demos/10-plugin-basic/` | Plugin 基本用法 | `localhost:5210` |
| 11 | `component-demos/11-plugin-toast/` | Toast 通知 Plugin | `localhost:5211` |
| 12 | `component-demos/12-pinia/` | Pinia 共用購物車 | `localhost:5212` |
| 13 | `demos-04/13-vee-define-field.vue` | useForm 與 defineField | `localhost:5173/lesson-4/13-vee-define-field` |
| 14 | `demos-04/14-vee-validation-schema.vue` | 驗證規則 | `localhost:5173/lesson-4/14-vee-validation-schema` |
| 15 | `demos-04/15-vee-complete.vue` | 表單驗證完整範例 | `localhost:5173/lesson-4/15-vee-complete` |
| 16 | `component-demos/16-cart/` | 購物車實戰 | `localhost:5216` |
| 17 | `component-demos/17-cart-practice/` | 購物車實戰（挖空練習） | `localhost:5217` |

**要注意**

- 第 04、05 支（Teleport）：打開開發者工具的 Elements 分頁，看元素實際被放到哪裡，比只看畫面更容易懂。第 04 支有兩組按鈕：一組切換 `to`（搬到 `#toast-root` 或 `body`），一組切換 `disabled`（搬或不搬）。
- 第 08、10～12、16 支：先從 `main.js` 開始看。自訂指令的全域註冊（`app.directive()`）、Plugin 和 Pinia（`app.use()`）都寫在那裡。
- 第 08 支（自訂指令）：同一頁對照兩種註冊方式。`LocalFocus.vue` 自己 import 指令（區域註冊），`GlobalFocus.vue` 沒有 import，靠 `main.js` 的 `app.directive()`（全域註冊）。
- 獨立範例畫面上的綠色虛線框，標的是「這一塊來自哪個檔案」，方便對照程式碼。
- 第 16、17 支的商品圖是網路上的假圖，沒網路會破圖。
- 第 17 支是第 16 支的挖空版，給現場 coding 用：畫面先用寫死的資料排好版，程式裡的 `TODO 步驟 1～8` 照講義順序標出要補的地方，補完就會跟第 16 支一樣。

## 環境變數

環境變數就是「寫在 `.env` 檔裡、讓程式讀取的設定值」。像 API 網址這種東西，開發時和正式上線時常常不一樣，寫在 `.env` 檔裡，要換的時候改檔案就好，不用去翻程式碼。

### 自己建立這三個檔案

這三個檔案沒有放在專案裡，但專案最外層有準備好範本，檔名結尾多了 `.example`：

| 範本 | 複製後改名成 |
| --- | --- |
| `.env.example` | `.env` |
| `.env.development.example` | `.env.development` |
| `.env.production.example` | `.env.production` |

最快的做法是在專案資料夾裡執行：

```bash
cp .env.example .env
cp .env.development.example .env.development
cp .env.production.example .env.production
```

不想打指令的話，也可以在 VS Code 左邊的檔案列表，對範本按右鍵「複製」再「貼上」，然後把檔名結尾的 `.example` 刪掉。

> 檔名開頭是點的檔案，在 Mac 的 Finder 裡預設看不到（按 `Cmd + Shift + .` 可以顯示），用 VS Code 操作比較方便。

範本裡的值直接就能用，不用改。檔案裡 `#` 開頭的是說明文字，程式不會讀；其他每一行的寫法是「`名字=值`」，等號兩邊不要加空白，值也不用加引號。

### 每個變數是什麼意思

| 變數 | 意思 | 哪支範例用到 |
| --- | --- | --- |
| `VITE_APP_NAME` | 網站名稱，會顯示在畫面標題 | 第 2 堂第 01 支 |
| `VITE_JSONPLACEHOLDER_URL` | 一個免費的練習用 API 網址，可以拿到假的使用者資料 | 第 3 堂第 02 支 |
| `VITE_API_URL` | 「後端 API 的網址」。開發時指向自己電腦（`localhost:3000`），上線時指向課程的正式 API | 第 2 堂第 01 支 |

### 三個檔案有什麼不同

- `.env`：不管什麼情況都會讀，放「開發、上線都一樣」的設定。
- `.env.development`：跑 `pnpm dev`（開發中）時才會讀。
- `.env.production`：跑 `pnpm build`（準備上線）時才會讀。

所以 `VITE_API_URL` 在兩個檔案裡各寫一次、值不一樣：開發時拿到 `http://localhost:3000`，上線時拿到正式網址，程式碼完全不用改。

### 要注意

- 名字一定要用 `VITE_` 開頭，程式裡才讀得到。
- 這些值最後會被打包進網頁，打開網頁的人都看得到，所以**密碼、金鑰不能放在這裡**。

## 想自己加一支範例

**加在範例網站裡**

1. 在對應的資料夾新增檔案，例如 `src/demos-02/18-my-demo.vue`。
2. 打開 `src/demos-02.js`，上面 import 進來，再在 `DEMOS` 裡加一行：
   ```js
   { slug: '18-my-demo', title: '我的範例', from: '講義章節', comp: MyDemo },
   ```

存檔後清單就會多一支，網址、上一支／下一支都會自動接好。

**加成獨立範例**

1. 照上面「每個獨立範例的資料夾」的樣子，建一個資料夾，名字要用兩碼數字開頭，例如 `20-my-demo/`。
2. 在清單檔加一行，把 `comp` 換成 `href`，填它的網址。

`pnpm router:all` 會自己找到新資料夾，不用改 `package.json`。

已經發給學生的網址不要改，也就是 `lessons.js` 裡的 `id` 和既有範例的檔名都不要動，改了舊連結就會失效。

## 遇到問題

| 狀況 | 怎麼辦 |
| --- | --- |
| 點 `↗` 的範例，瀏覽器說連不上 | 還沒執行 `pnpm router:all` |
| 獨立範例出現 504 錯誤，或畫面一片空白 | 一定要用 `pnpm router:all` 開，不要自己進資料夾執行 `vite`；還是不行就刪掉 `node_modules/.vite` 開頭的資料夾再重開 |
| 改了 `.env` 或 `vite.config.js` 沒反應 | `Ctrl + C` 停掉，再重新執行一次 |
| 圖片破掉、資料抓不到 | 檢查網路，有些範例會連到外部網站拿資料 |
| 終端機出現「port 被佔用，已停掉 PID …」 | 正常。上次沒關掉的範例會被自動關掉再重開 |
