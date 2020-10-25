/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-12 17:57:06
 * @LastEditors: Miya
 * @LastEditTime: 2020-10-25 21:36:57
 * @Description: file content
 * @FilePath: /Mermaid-UI/src/main.ts
 */
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
