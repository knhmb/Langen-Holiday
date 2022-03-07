import axios from "axios";

export default {
  getSearchItems(context, payload) {
    axios
      .get(
        `/api/hotel?filter=location%3A${payload.parentCodexSlug}%7C${payload.slug}`
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
