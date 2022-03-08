import axios from "axios";
import moment from "moment";

export default {
  getSearchItems(context, payload) {
    const date = new Date();
    const today = moment(date).format("YYYY-MM-DD").replaceAll("-", "");
    const tomorrow = moment(date.setDate(date.getDate() + 1))
      .format("YYYY-MM-DD")
      .replaceAll("-", "");
    axios
      .get(
        `/api/hotel?filter=itemcategory%3A${payload.slug}&stayingDate%3A${today}%7C${tomorrow}`
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SEARCH_ITEMS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async getSearchTheme(context, payload) {
    await axios
      .get(`/api/hotel?filter=theme%3A${payload}`)
      .then((res) => {
        console.log(res);
        context.commit("SET_SEARCH_ITEMS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
