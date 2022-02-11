import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userId: null,
      token: null,
    };
  },
  getters,
  mutations,
  actions,
};
