export default {
  SET_HOTEL(state, payload) {
    state.selectedHotel = payload;
  },
  UPDATE_HOTEL(state, payload) {
    if (!payload) {
      return;
    }
    state.selectedHotel.basicInfo.maxRoomBooking =
      payload.maxRoomBookingAllowed;
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
    state.petQty = "";
    console.log("reset");
  },
  STORE_SELECTED_SERVICES(state, payload) {
    state.selectedServices = payload;
    console.log(state.selectedServices);
  },
  RESET_SELECTED_SERVICES(state) {
    state.selectedServices = [];
  },
  UPDATE_PET_QTY(state, payload) {
    state.petQty = payload;
  },
  TOGGLE_BOOKMARK_HOTEL(state, payload) {
    state.selectedHotel.bookmarked = payload.value;
    // hotel.bookmarked = payload.value;
  },
  SET_DISCOUNT(state, payload) {
    state.discountData = payload;
  },
  RESET_DISCOUNT_DATA(state) {
    state.discountData = {};
  },
};
