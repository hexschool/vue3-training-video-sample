import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import ProfileView from './views/ProfileView.vue';
import SettingsView from './views/SettingsView.vue';
import HelpView from './views/HelpView.vue';

const routes = [
  {
    path: '/',
    components: {
      default: HomeView,
      sidebar: ProfileView,
    },
  },
  {
    path: '/settings',
    components: {
      default: SettingsView,
      sidebar: HelpView,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
