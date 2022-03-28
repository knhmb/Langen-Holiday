export default {
  GET_ACCOUNT(state, payload) {
    state.account = payload;
  },
  STORE_WISHLIST(state, payload) {
    state.wishlist = payload;
  },
  SET_HOTEL_COMMENTS(state, payload) {
    state.hotelComments = payload;
  },
  SET_RESERVATIONS(state, payload) {
    state.reservations = payload;
  },
  SET_RESERVATION_DETAIL(state, payload) {
    state.reservationDetail = payload;
  },
};
