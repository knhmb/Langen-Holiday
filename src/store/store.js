import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import authModule from "./modules/auth/index";
import dashboardModule from "./modules/dashboard/index";
import searchModule from "./modules/search/index";
import bookingModule from "./modules/booking/index";

const store = createStore({
  state() {
    return {
      headerVisible: true,
      dateSelected: "",
      responses: {},
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
    search: searchModule,
    booking: bookingModule,
  },
});

export default store;
