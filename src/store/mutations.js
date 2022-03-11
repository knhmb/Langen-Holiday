export default {
  HIDE_HEADER(state, payload) {
    state.headerVisible = payload;
  },
  DISPLAY_HEADER(state, payload) {
    state.headerVisible = payload;
  },
  CHANGE_DATE(state, payload) {
    state.dateSelected = payload;
  },
  CHANGE_SERVICE(state, payload) {
    state.responses = payload;
  },
};
