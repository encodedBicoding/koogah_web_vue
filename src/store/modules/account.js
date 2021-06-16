import axios from 'axios'
import Vue from 'vue';

axios.defaults.baseURL = "https://core.koogahapis.com/v1/";

const state = {
  auth: {}
}

const actions = {
  register({ commit }, credentials) {
    return axios.post("user/courier/signup", credentials).then((resp) => {
      console.log(resp.data.config.data)
      Vue.$toast.success(resp.data.message)
      commit("SetDispatcher", resp.data.config.data)
    })
    // .catch((err) => {
    //   Vue.$toast.error(err)

    // })
  }
}

const mutations = {
  SetDispatcher(state, payload) {
    state.auth = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  // getters,
}
