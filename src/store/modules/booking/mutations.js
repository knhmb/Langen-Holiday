export default {
  SET_HOTEL(state, payload) {
    state.selectedHotel = payload;
  },
  UPDATE_HOTEL(state, payload) {
    if (!payload) {
      return;
    }
    state.selectedHotel.totalPrice = payload.totalPrice;
    state.selectedHotel.priceOfSelectedDate = payload.priceOfSelectedDate;
    state.selectedHotel.totalSelectedAddlServiceCharge =
      payload.totalSelectedAddlServiceCharge;
    console.log(state.selectedHotel);
  },
  UPDATE_DATES(state, payload) {
    state.selectedHotel.availableDates = payload;
  },
  UPDATE_CHILDREN(state, payload) {
    state.numberOfChildren = payload;
  },
  UPDATE_ADULTS(state, payload) {
    state.numberOfAdults = payload;
  },
  STORE_CHILDREN_AGE(state, payload) {
    // state.childrenAge.unshift(payload);
    state.childrenAge.splice(0, 1, payload);
    console.log(state.childrenAge);
  },
  RESET_ADULTS_AND_CHILDREN(state) {
    state.numberOfAdults = "";
    state.numberOfChildren = "";
    console.log("reset");
  },
};
