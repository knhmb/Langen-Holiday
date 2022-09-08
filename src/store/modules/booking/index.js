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
      childrenAgeText: [],
      selectedServices: [],
      petQty: "",
      discountData: {},
    };
  },
  getters,
  mutations,
  actions,
};
