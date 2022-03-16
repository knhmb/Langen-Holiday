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
};
