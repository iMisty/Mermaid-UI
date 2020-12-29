/*
 * @Author: Miya
 * @Date: 2020-12-29 15:04:19
 * @LastEditTime: 2020-12-29 15:43:09
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\main.ts
 * @Version:
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './style/style.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
