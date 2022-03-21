import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/layout.css'
import axios from 'axios'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.config.productionTip = false;
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
