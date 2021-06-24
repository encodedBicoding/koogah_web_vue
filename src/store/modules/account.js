import axios from "axios";
import Vue from "vue";

axios.defaults.baseURL = "https://core.koogahapis.com/v1/";
let ref = window.sessionStorage.getItem("ref");
let hasRef = ref === null ? false : true;

const state = {
  auth: {},
};

const actions = {
  register({ commit }, credentials) {
    return axios
      .post(
        `user/courier/signup?fromApp=web${hasRef ? `&&ref=${ref}` : ""}`,
        credentials
      )
      .then((resp) => {
        Vue.$toast.success(resp.data.message);
        commit("SetDispatcher", resp.data.config.data);
      });
    // .catch((err) => {
    //   Vue.$toast.error(err)

    // })
  },
  async uploadPicture(profile, data) {
    try {
      const response = await axios.put("profile/courier/upload/single", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  SetDispatcher(state, payload) {
    state.auth = payload;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  // getters,
};
