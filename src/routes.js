import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Contacts from './components/Contacts'
import NewsItemDetail from "./components/NewsItemDetail";


export default new VueRouter ({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/about',
      component: About
    },

    {
      path: '/news',
      component: News,
    },
    {
      path: '/news/:id',
      component: NewsItemDetail
    },
    {
      path: '/contacts',
      component: Contacts
    },

  ],
  mode: 'history'
})
