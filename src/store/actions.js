import moment from "moment";

export default {
  hideHeader(context, payload) {
    context.commit("HIDE_HEADER", payload);
  },
  displayHeader(context, payload) {
    context.commit("DISPLAY_HEADER", payload);
  },
  changeDate(context, payload) {
    context.commit("CHANGE_DATE", payload);
  },
  changeService(context, payload) {
    context.commit("CHANGE_SERVICE", payload);
  },
  resetDate(context) {
    const date = new Date();
    const today = moment(date).format("YYYYMMDD");
    const tomorrow = moment(date.setDate(date.getDate() + 1)).format(
      "YYYYMMDD"
    );
    const data = {
      start: today,
      end: tomorrow,
    };

    context.commit("RESET_DATE", data);
  },
};
