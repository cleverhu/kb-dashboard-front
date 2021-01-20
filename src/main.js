import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(ElementUI);


import dashboard from './component/Dashboard.vue'
import doc from './component/Doc.vue'
import kbList from './component/KbList.vue'

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/dashboard',
      component: dashboard
    },
    {
      path: '/kbList',
      component: kbList
    },
    {
      path: '/doc',
      component: doc
    },
  ]
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
