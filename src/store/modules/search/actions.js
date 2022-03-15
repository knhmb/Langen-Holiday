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
  filterIslandSearch(context, payload) {
    axios
      .get(
        `/api/hotel?filter=itemcategory%3A${payload.slug}%2CstayingDate%3A${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : "%2CguestQty%3A" + payload.guestQty}${
          payload.roomQty === 0 ? "" : "%2CroomQty%3A" + payload.roomQty
        }${
          payload.isHavePets === "false"
            ? ""
            : "%2CisHavePets%3A" + payload.isHavePets
        }${
          payload.location.length > 0 ? "%2Clocation%3A" + payload.location : ""
        }${
          payload.roomType.length > 0 ? "%2CroomType%3A" + payload.roomType : ""
        }`
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
  // test() {
  //   axios
  //     .get(`/api/hotel?filter=theme%3Ahoteltheme-spa-suite`, {params: {filter: ''}})
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
};
