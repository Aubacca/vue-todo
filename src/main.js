import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import todoService from './services/TodoService'

Vue.$todoService = todoService

Object.defineProperty(Vue.prototype, '$todoService', {
  get () {
    return todoService
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // todoService,
  render: h => h(App)
}).$mount('#app')
