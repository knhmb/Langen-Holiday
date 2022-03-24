export default {
  SET_SEARCH_ITEMS(state, payload) {
    state.searchItems = payload;
    console.log("accessed");
  },
  TOGGLE_BOOKMARK_SEARCH(state, payload) {
    const hotel = state.searchItems.find(
      (item) => item.hotelId === payload.hotelId
    );
    hotel.bookmarked = payload.value;
  },
};
