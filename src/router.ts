import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Button from './components/Button.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
import Pill from './components/Pill.vue';
import Modal from './components/Modal.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: Button },
  { path: '/breadcrumbs', component: Breadcrumbs },
  { path: '/pill', component: Pill },
  { path: '/modal', component: Modal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
