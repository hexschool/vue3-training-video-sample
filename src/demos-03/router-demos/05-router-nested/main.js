import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import UserView from './views/UserView.vue';
import ProfileView from './views/ProfileView.vue';
import SettingsView from './views/SettingsView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/users',
    component: UserView,
    children: [
      {
        path: 'profile',
        component: ProfileView,
      },
      {
        path: 'settings',
        component: SettingsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
