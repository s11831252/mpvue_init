import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
export default new Vuex.Store({//store对象
  modules: {

  }, plugins: [//vuex持久化
    mpvue_Mode === 'WX' ? createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => { }
      }
    }) : createPersistedState()
  ]
})