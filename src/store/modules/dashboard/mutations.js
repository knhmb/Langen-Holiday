export default {
  SET_THEME(state, payload) {
    // console.log(payload);
    state.themes = payload;
    // console.log(state.themes);
  },
  SET_HEADER_ITEMS(state, payload) {
    state.headerItems = payload;
  },
  SET_SUB_ITEMS_CHEUNG(state, payload) {
    state.cheungChauIslandItems = payload;
  },
  SET_SUB_ITEMS_LANTAU(state, payload) {
    state.lantauIslandItems = payload;
  },
  SET_SUB_ITEMS_LAMMA(state, payload) {
    state.lammaIslandItems = payload;
  },
  SET_SUB_ITEMS_DAY_NIGHT(state, payload) {
    state.dayNightItems = payload;
  },
};
