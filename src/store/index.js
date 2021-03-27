import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boxes: null,
    theme: 'light',
  },
  mutations: {
    UPDATE_BOXES(state, payload) {
      state.boxes = payload;
    },
    UPDATE_THEME(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    fetchBoxes() {
      axios
        .get('/data.json')
        .then((response) => {
          this.commit('UPDATE_BOXES', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeTheme(state, theme) {
      if (this.getters.allowedThemes.includes(theme)) {
        this.commit('UPDATE_THEME', theme);
      }
    },
  },
  getters: {
    boxes(state) {
      return state.boxes;
    },
    theme(state) {
      return state.theme;
    },
    allowedThemes() {
      return ['light', 'dark'];
    },
  },
  modules: {
  },
});
