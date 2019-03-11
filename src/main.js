import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import store from './store'
import Vuelidate from 'vuelidate'


Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.directive('truncate', function (el, binding) {
  let text = el.innerHTML;
  let truncated= text.slice(0, binding.value);
  el.innerHTML = truncated + "...";
});

export const greetings= {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('привет из примеси!')
    }
  }
};



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  mixins: [greetings]
});

