import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(ElementUI);
Vue.use(mavonEditor)

Vue.prototype.axios = axios
{
  axios.interceptors.request.use(config => {
    config.headers.common['X-User'] = "10000";
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // http response 响应拦截器
  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response) {
      switch (error.response.status) {
        // 返回401，清除token信息并跳转到登录页面
        case 401:
          // alert("登录信息失效，请重新登录")
          localStorage.removeItem('token');
          router.push("/login").then()
      }
      // 返回接口返回的错误信息
      return Promise.reject(error.response.data);
    }
  });

}


import dashboard from './component/Dashboard.vue'
import edit from './component/Edit.vue'
import kbList from './component/KbList.vue'
import manger from './component/Manger.vue'
import mangerSourceKb from './component/MangerSourceKb.vue'
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
      component: kbList,
      meta: {
        isKbList: true,
      }
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
      path: '/manger-source-kb',
      component: mangerSourceKb,
      name: "mangerSourceKb",
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
