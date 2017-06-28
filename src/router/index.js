import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello/Hello'
import Login from '@/views/login/login'
import Dashboard from '@/views/dashboard/dashboard'
// import Tablelist from '@/views/tablelist/tablelist'

// Layout引入（这里采用这种写法2，不再提示）
// import Layout from '../views/layout/Layout';  // 写法1，通过../层级查找
import Layout from '@/views/layout/Layout';  // 写法2，@默认指向src文件夹，在./build/webpack.base.conf.js的alias可以配置

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 注意
  // routes这里可以好多种结构写法，自己回头研究下吧
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
        // { path: '/tablelist', component: Tablelist, name: 'Tablelist' },
        { path: '/hello', component: Hello, name: 'Hello' }
      ]
    },
  ]
})
