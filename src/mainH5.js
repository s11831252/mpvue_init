import Vue from 'vue'
import App from './AppH5'
import store from './store'
import router from './routerH5'
import fts from './utils/autorem'

import Toast from './components/Toast';
import './assets/global.css';
import './assets/iconfont.less';
import './components/Toast/toast.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
let { swiper, swiperSlide } = VueAwesomeSwiper

import "swiper/dist/css/swiper.css";
import XiaoguiAPI from './api/XIaoguiAPI'
Vue.use(Toast);
Vue.prototype.$XiaoguiAPI = XiaoguiAPI //在实例中用调用封装的RestAPI
Vue.mixin({
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    isMP(){
        return false;
    },
    async launchOptions(){
      return {}
    }
  },
  methods: {
      go: function(path) {
        this.$router.push(path);
      },
      toast(title){
        this.$toast.center(title);
      },
    }
});
Vue.config.productionTip = false

const app =new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
  });
window.$app=app; //vue实例全局变量
