import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boxes: null,
    theme: 'light',
    header: 'Header',
    title: 'Navigation Title',
    numberBoxes: 4,
  },
  mutations: {
    UPDATE_BOXES(state, payload) {
      state.boxes = payload;
    },
    UPDATE_THEME(state, payload) {
      state.theme = payload;
    },
    UPDATE_HEADER(state, payload) {
      state.header = payload;
    },
    UPDATE_TITLE(state, payload) {
      state.title = payload;
    },
    UPDATE_NUMBER_BOXES(state, payload) {
      state.numberBoxes = parseInt(payload, 10);
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
    changeHeader(state, header) {
      this.commit('UPDATE_HEADER', header);
    },
    changeTitle(state, title) {
      this.commit('UPDATE_TITLE', title);
    },
    changeNumberBoxes(state, num) {
      this.commit('UPDATE_NUMBER_BOXES', num);
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
    numberBoxes(state) {
      return state.numberBoxes;
    },
  },
  modules: {
  },
});
