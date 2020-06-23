import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    approveStatus: false
  },
  mutations: {
    setApprove (state, data) {
      state.approveStatus = data
    }
  },
  actions: {
    setGoodsCode ({ commit }, data) {
      console.log('set goods code', data)
    },
    setApprove ({ commit }, data) {
      commit('setApprove', data)
    }
  },
  getters: {}
})
