import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'

import App from './App.vue'
import { router } from './router.js'

// App 是 Vue 應用程式最上層的根元件
const app = createApp(App)

// 裝上路由，App 裡的 <RouterView> 才知道該顯示哪一頁
app.use(router)

// 裝上 Pinia，元件裡才能用 useXxxStore()（第三堂）
app.use(createPinia())

// 將 Vue 應用程式顯示在 id="app" 的 HTML 元素中
app.mount('#app')

// 如果不需要另外設定 app，也可以直接簡寫成：
// createApp(App).use(router).use(createPinia()).mount('#app');
