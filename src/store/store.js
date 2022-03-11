import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import authModule from "./modules/auth/index";
import dashboardModule from "./modules/dashboard/index";
import searchModule from "./modules/search/index";
import bookingModule from "./modules/booking/index";

import moment from "moment";

const date = new Date();
const today = moment(date).format("YYYYMMDD");
const tomorrow = moment(date.setDate(date.getDate() + 1)).format("YYYYMMDD");

const store = createStore({
  state() {
    return {
      headerVisible: true,
      dateSelected: {
        start: today,
        end: tomorrow,
      },
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
