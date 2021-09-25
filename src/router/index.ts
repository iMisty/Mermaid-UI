/*
 * @Author: Miya
 * @Date: 2021-09-25 20:54:39
 * @LastEditTime: 2021-09-25 23:16:25
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: \mermaidui2\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
