export default {
  SET_THEME(state, payload) {
    console.log(payload);
    state.themes = payload;
    console.log(state.themes);
  },
};
