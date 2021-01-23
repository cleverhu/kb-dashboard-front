import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(ElementUI);
Vue.use(mavonEditor)

import dashboard from './component/Dashboard.vue'
import edit from './component/Edit.vue'
import kbList from './component/KbList.vue'
import manger from './component/Manger.vue'
import detail from './component/Detail'

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: dashboard
    },
    {
      path: '/kbList',
      component: kbList
    },
    {
      path: '/edit',
      component: edit,
      name: "edit",
      meta: {
        show: true,
      }
    },
    {
      path: '/manger',
      component: manger,
      name: "manger",
    },
    {
      path: '/detail',
      component: detail,
      name: "detail",
      meta: {
        document: true,
      }
    }
  ]
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
