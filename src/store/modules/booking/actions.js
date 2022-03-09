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
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
