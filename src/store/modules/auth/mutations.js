export default {
  LOGIN(state, payload) {
    state.isLoggedIn = true;
    state.token = payload.token;
    state.userId = payload.userId;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.token = null;
    state.userId = null;
  },
};
