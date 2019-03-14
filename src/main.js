import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import store from './store'
import Vuelidate from 'vuelidate'
import SvgSprite from 'vue-svg-sprite'


Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.directive('truncate', function (el, binding) {
  let text = el.innerHTML;
  let truncated= text.slice(0, binding.value);
  el.innerHTML = truncated + "...";
});


Vue.use(SvgSprite, {
  url: '../src/static/sprite.svg',
  class: 'svg-sprite',
});


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});

