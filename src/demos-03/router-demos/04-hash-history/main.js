import { createApp } from 'vue';
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

// 路由表
const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];

// createWebHashHistory：路由路徑放在網址的 # 後面，例如 /#/about
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
