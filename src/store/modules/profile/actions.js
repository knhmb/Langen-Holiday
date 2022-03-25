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
  async setBookmark(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .post(
        "/api/wishlist",
        { hotelId: payload.hotelId },
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("dashboard/TOGGLE_BOOKMARK", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        const error = new Error("請登錄以使用此功能");
        throw error;
      });
  },
  async setBookmarkSearch(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .post(
        "/api/wishlist",
        { hotelId: payload.hotelId },
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("search/TOGGLE_BOOKMARK_SEARCH", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        // const error = new Error("請登錄以使用此功能");
        // throw error;
      });
  },
  async setBookmarkHotel(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .post(
        "/api/wishlist",
        { hotelId: payload.hotelId },
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("booking/TOGGLE_BOOKMARK_HOTEL", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        // const error = new Error("請登錄以使用此功能");
        // throw error;
      });
  },
  async removeBookmarkHotel(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .delete("/api/wishlist", {
        headers: {
          authorization: accessToken,
        },
        data: {
          hotelId: payload.hotelId,
        },
      })
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("booking/TOGGLE_BOOKMARK_HOTEL", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        // const error = new Error("請登錄以使用此功能");
        // throw error;
      });
  },
  async removeBookmark(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .delete("/api/wishlist", {
        headers: {
          authorization: accessToken,
        },
        data: {
          hotelId: payload.hotelId,
        },
      })
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("dashboard/TOGGLE_BOOKMARK", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        const error = new Error("請登錄以使用此功能");
        throw error;
      });
  },
  async removeBookmarkSearch(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .delete("/api/wishlist", {
        headers: {
          authorization: accessToken,
        },
        data: {
          hotelId: payload.hotelId,
        },
      })
      .then((res) => {
        console.log(res);
        const data = {
          value: payload.value,
          hotelId: payload.hotelId,
        };
        context.commit("search/TOGGLE_BOOKMARK_SEARCH", data, { root: true });
      })
      .catch((err) => {
        console.log(err);
        const error = new Error("請登錄以使用此功能");
        throw error;
      });
  },
  async removeWishlist(context, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .delete("/api/wishlist", {
        headers: {
          authorization: accessToken,
        },
        data: {
          id: payload.id,
        },
      })
      .then((res) => {
        console.log(res);
        context.dispatch("getWishlist");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getHotelComments(context) {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("/api/hotel-comments", {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        context.commit("SET_HOTEL_COMMENTS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async addComment(_, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .post("/api/hotel-comments", payload, {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateComment(_, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .put("/api/hotel-comments", payload, {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async deleteComment(_, payload) {
    const accessToken = localStorage.getItem("accessToken");
    await axios
      .delete("/api/hotel-comments", {
        headers: {
          authorization: accessToken,
        },
        data: {
          commentId: payload,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
