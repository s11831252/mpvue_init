import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home/index'


import store from './store'
Vue.use(Router)
var routes = [
    {
        path:'/',
        redirect:'pages/home/index'
    },
    {
        path: 'pages/home/index',
        name: 'home',
        config: {
            navigationBarTitleText: '主页',
            enablePullDownRefresh: true,
            EnableNav:true,
        },
        alias: '/pages/home/index',
        component: home
    }
]

let router =new Router({routes:routes})
//路由跳转检查检查
router.beforeEach((to, from, next) => {
    //这里可以判断登录、验证等业务
    // if (!to.matched.some(record => record.meta.noAuth)) {
    //     
    //     if (false) { // 判断当前的token是否存在

    //     } else {
    //         next()
    //     }
    // } else {
    //      next()
    // }
    next() // 确保一定要调用 next()
  })
export default router
