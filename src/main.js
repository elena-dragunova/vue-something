import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import store from './store';


Vue.use(VueRouter);

Vue.directive('truncate', function (el, binding) {
  let text = el.innerHTML;
  let truncated= text.slice(0, binding.value);
  el.innerHTML = truncated + "...";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

