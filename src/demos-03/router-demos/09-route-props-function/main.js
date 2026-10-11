import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import UserView from './views/UserView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/users/:id',
    component: UserView,
    props: route => ({
      id: route.params.id,
      page: route.query.page,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
