export default {
  HIDE_HEADER(state, payload) {
    state.headerVisible = payload;
  },
  DISPLAY_HEADER(state, payload) {
    state.headerVisible = payload;
  },
  CHANGE_DATE(state, payload) {
    state.dateSelected = payload;
    console.log(state.dateSelected);
  },
  CHANGE_SERVICE(state, payload) {
    state.responses = payload;
  },
  RESET_DATE(state, payload) {
    state.dateSelected = payload;
  },
  SET_IS_HAVE_PETS(state, payload) {
    state.isHavePets = payload;
  },
  RESET_IS_HAVE_PETS(state) {
    state.isHavePets = "false";
    state.numberOfIndividuals = 0;
    state.numberOfRooms = 0;
  },
  INCREASE_POPULATION(state) {
    state.numberOfIndividuals++;
  },
  DECREASE_POPULATION(state) {
    state.numberOfIndividuals--;
  },
  INCREASE_ROOMS(state) {
    state.numberOfRooms++;
  },
  DECREASE_ROOMS(state) {
    state.numberOfRooms--;
  },
  RESET_RESPONSES(state) {
    state.responses = {};
  },
  TOGGLE_LOGIN_FORM(state, payload) {
    state.dialogFormVisible = payload;
  },
  SET_ROOM_QTY(state, payload) {
    state.numberOfRooms = payload;
  },
  SET_TIMESLOT(state, payload) {
    state.timeslotids = payload;
  },
  RESET_TIMESLOT(state) {
    state.timeslotids = "";
  },
  AUTHENTICATED_TO_RESERVE(state, payload) {
    state.authenticatedToReserve = payload;
  },
  TOGGLE_BUTTON(state, payload) {
    state.isButtonDisabled = payload;
  },
  SET_PDF(state, payload) {
    state.pdf = payload;
    // state.isPdf = true;
  },
  TOGGLE_ISPDF(state, payload) {
    state.isPdf = payload;
  },
  REMOVE_PDF(state) {
    state.pdf = null;
    // state.isPdf = false;
  },
};
