import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: NotFoundView,
  // },

  // 不做 404 頁面、直接導回首頁的話，把上面那筆換成這筆：
  {
    path: '/:pathMatch(.*)*',
    redirect: '/about',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
