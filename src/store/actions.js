export default {
  hideHeader(context, payload) {
    context.commit("HIDE_HEADER", payload);
  },
  displayHeader(context, payload) {
    context.commit("DISPLAY_HEADER", payload);
  },
};