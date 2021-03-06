import Vue from 'vue'
import App from './App'
import MpvueRoterPatch from 'mpvue-router-patch'
import store from './store'
import './assets/global.css';
import './assets/iconfont.less';

Vue.prototype.$store = store;
Vue.mixin({
    data() {
        return {

        }
    },
    computed: {
        $route: function () {
            return this.$router.currentRoute
        },
        isMP(){
            return true;
        },
    },
    methods: {
        go: function (path) {
            this.$router.push(path);
        },
        replace: function (path) {
            this.$router.replace(path);
        },
        toast(title) {
            wx.showToast({
                title: title,
                icon: "none"
            });
        }
    },
    onLoad() {
        // if (this.$initData$) {
        //   Object.assign(this, JSON.parse(this.$initData$))
        // } else {
        //   this.$initData$ = JSON.stringify(this.$data)
        // }
    },
    onUnload() {
        if (this.$options.data)
            Object.assign(this, this.$options.data())
    },
    created: function () {
        // if(this.extConfig&&this.extConfig.sId)
        // {

        // }else
        // {
        //     let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
        //     this.extConfig=extConfig;
        // }
        // console.log(this.extConfig)
    }
});
Vue.use(MpvueRoterPatch);//在Vue实例中使用$Router访问Vuex
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)


app.$mount()
