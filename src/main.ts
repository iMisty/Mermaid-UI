/*
 * @Author: Miya
 * @Date: 2021-09-25 20:54:39
 * @LastEditTime: 2021-09-25 21:49:16
 * @LastEditors: Miya
 * @Description: Main.ts
 * @FilePath: \mermaidui2\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mmui from './components/index';

createApp(App)
  .use(router)
  .use(mmui)
  .mount('#app');
