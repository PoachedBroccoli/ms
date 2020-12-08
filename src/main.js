import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import serve from './service/api'
import Resource from 'vue-resource';

Vue.config.productionTip = false

Vue.prototype.$serve = serve
Vue.use(Resource); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
