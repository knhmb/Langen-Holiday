import axios from "axios";

export default {
  async getAccount(context) {
    await axios
      .get("/api/account", {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        context.commit("GET_ACCOUNT", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getWishlist(context) {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("/api/wishlist", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        context.commit("STORE_WISHLIST", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
