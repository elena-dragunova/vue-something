import Vue from "vue";
import Vuex from "vuex";
import NewsService from "./NewsService";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    news: []
  },
  mutations: {
    loadNews(state, payload) {
      state.news = payload
    },
    deleteNews(state, id) {
      state.news = state.news.filter(item => item.id !== id)
    }
  },
  actions: {
    loadNews(context) {
      context.commit('loadNews');
    }
  },
  getters: {
    getNews: state => state.news
  }
});
