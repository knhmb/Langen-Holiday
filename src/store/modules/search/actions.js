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
        `/api/hotel?filter=itemcategory:${payload.slug},stayingDate:${today}|${tomorrow}`
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
        `/api/hotel?filter=itemcategory:${payload.slug},stayingDate:${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty}${
          payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty
        }${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }${payload.location.length > 0 ? ",location:" + payload.location : ""}${
          payload.roomType.length > 0 ? ",roomType:" + payload.roomType : ""
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
  sortIslandSearch(context, payload) {
    axios
      .get(
        `/api/hotel?filter=itemcategory:${payload.slug},stayingDate:${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty}${
          payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty
        }${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }${payload.location.length > 0 ? ",location:" + payload.location : ""}${
          payload.roomType.length > 0 ? ",roomType:" + payload.roomType : ""
        }${payload.sort === "" ? "" : "&sort=" + payload.sort}`
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
      .get(`/api/hotel?filter=theme:${payload}`)
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
