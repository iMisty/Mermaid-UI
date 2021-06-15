/*
 * @Author: Miya
 * @Date: 2021-04-20 21:11:41
 * @LastEditTime: 2021-06-16 05:19:31
 * @LastEditors: Miya
 * @Description: 
 * @FilePath: \Mermaid-UI\example\router\router.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home';
import Test from '../view/Test';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: Test
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
