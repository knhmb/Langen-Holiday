import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      headerItems: [],
      themes: [],
      cheungChauIslandItems: [],
      lantauIslandItems: [],
      lammaIslandItems: [],
      dayNightItems: [],
      dashboardBanner: [],
      cheungBanner: [],
      lantauBanner: [],
      lammaBanner: [],
      hotelBanner: [],
      dayNightBanner: [],
      roomTypes: [],
      contactContent: [],
      paymentContent: {},
      termsConditionsContent: {},
      joinContent: {},
      topPlaces: [],
    };
  },
  getters,
  mutations,
  actions,
};
