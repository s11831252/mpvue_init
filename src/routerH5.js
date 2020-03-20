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
    if (!to.matched.some(record => record.meta.noAuth)) {
        //这里判断用户是否登录，验证store中的token是否已登录
        if (!store.getters.Logined) { // 判断当前的token是否存在
            next({
                path: '/pages/index/index',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
  })
export default router
