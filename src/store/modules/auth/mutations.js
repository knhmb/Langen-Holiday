export default {
  LOGIN(state) {
    state.isLoggedIn = true;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
  },
};
