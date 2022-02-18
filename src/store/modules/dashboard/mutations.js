export default {
  SET_THEME(state, payload) {
    // console.log(payload);
    state.themes = payload;
    // console.log(state.themes);
  },
  SET_HEADER_ITEMS(state, payload) {
    state.headerItems = payload;
  },
  SET_SUB_ITEMS(state, payload) {
    // console.log(payload);
    if (payload[0].parentCodexSlug === "cheung-chau-island") {
      state.cheungChauIslandItems = payload;
      console.log(state.cheungChauIslandItems);
    } else if (payload[0].parentCodexSlug === "lantau-island") {
      state.lantauIslandItems = payload;
    }
  },
};
