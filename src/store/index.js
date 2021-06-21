import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchData: []
  },
  mutations: {
    searchData(state, payload) {
      state.searchData = payload;
    }
  },
  actions: {
    searchData(mutations, payload) {
      mutations.commit("searchData", payload);
    }
  },
  getters: {
    searchData(state) {
      return state.searchData;
    }
  },

  modules: {}
});
