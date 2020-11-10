/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-12 17:57:06
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-10 12:02:17
 * @Description: file content
 * @FilePath: \Mermaid-UI\example\main.ts
 */
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
