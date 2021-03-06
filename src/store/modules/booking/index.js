import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      selectedHotel: [],
      numberOfChildren: "",
      numberOfAdults: "",
      childrenAge: [],
      selectedServices: [],
      petQty: "",
    };
  },
  getters,
  mutations,
  actions,
};
