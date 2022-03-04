export default {
  SET_SEARCH_ITEMS(state, payload) {
    state.searchItems = payload;
    console.log("accessed");
  },
};
