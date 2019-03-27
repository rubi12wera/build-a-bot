import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pinDirective from './shared/pin-directive';


Vue.config.productionTip = false
//this directive should now be available to use in all components in our app
Vue.directive('pin', pinDirective);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
