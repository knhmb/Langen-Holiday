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
};
