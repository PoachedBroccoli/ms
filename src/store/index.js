import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import music from './music'
import audio from './audio'
import yt from './yt'
import chat from './chat'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    music,
    audio,
    yt,
    chat
  }
})
