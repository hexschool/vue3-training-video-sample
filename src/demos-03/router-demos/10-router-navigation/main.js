import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import UserView from './views/UserView.vue'
import ProductsView from './views/ProductsView.vue'
import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/users/:id', name: 'user', component: UserView },
  { path: '/products', component: ProductsView },
  { path: '/dashboard', component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
