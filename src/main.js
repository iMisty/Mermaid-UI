import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import './assets/global.css'
//import './assets/function'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
