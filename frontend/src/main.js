import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/layout.css'
import './style/main.css'
import './style/menu.css'
import './style/calendar.css'
import './style/addmenu.css'
import axios from 'axios'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
