import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import authModule from "./modules/auth/index";
import dashboardModule from "./modules/dashboard/index";
import searchModule from "./modules/search/index";

const store = createStore({
  state() {
    return {
      headerVisible: true,
      dateSelected: "",
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
    search: searchModule,
  },
});

export default store;
