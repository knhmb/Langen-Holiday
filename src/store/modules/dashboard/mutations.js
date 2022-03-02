export default {
  SET_THEME(state, payload) {
    state.themes = payload;
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
  SET_DASHBOARD_BANNER(state, payload) {
    state.dashboardBanner = payload;
  },
  SET_CHEUNG_BANNER(state, payload) {
    state.cheungBanner = payload;
  },
  SET_LANTAU_BANNER(state, payload) {
    state.lantauBanner = payload;
  },
  SET_LAMMA_BANNER(state, payload) {
    state.lammaBanner = payload;
  },
  SET_HOTEL_BANNER(state, payload) {
    state.hotelBanner = payload;
  },
  SET_DAYNIGHT_BANNER(state, payload) {
    state.dayNightBanner = payload;
  },
  SET_ROOM_TYPE(state, payload) {
    state.roomTypes = payload;
  },
  SET_CONTACT_CONTENT(state, payload) {
    state.contactContent = payload;
  },
};
