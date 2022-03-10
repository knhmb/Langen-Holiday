import axios from "axios";
import moment from "moment";

export default {
  async getHotel(context, id) {
    const date = new Date();
    const today = moment(date).format("YYYY-MM-DD").replaceAll("-", "");
    const tomorrow = moment(date.setDate(date.getDate() + 1))
      .format("YYYY-MM-DD")
      .replaceAll("-", "");

    await axios
      .get(`/api/hotel/${id}/${today}/${tomorrow}/1`)
      .then((res) => {
        console.log(res);
        context.commit("SET_HOTEL", res.data.item);
        context.commit(
          "CHANGE_DATE",
          { start: today, end: tomorrow },
          {
            root: true,
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDate(_, payload) {
    axios
      .get(
        `/api/hotel/check-availability/${payload.hotelId}/${payload.firstDayOfCurrentMonth}/${payload.lastDayOfNextMonth}/${payload.roomQty}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
