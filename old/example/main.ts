/*
 * @Author: Miya
 * @Date: 2020-12-29 15:04:19
 * @LastEditTime: 2021-01-12 16:09:59
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\main.ts
 * @Version: 1.0
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './style/normalize.less';

// import MermaidAlerts from '@/components/alerts/index';
// import MermaidModel from '@/components/model/index';

// Vue.prototype.$alerts = MermaidAlerts;
// Vue.prototype.$model = MermaidModel;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
