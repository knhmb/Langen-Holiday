import axios from "axios";

export default {
  getAccount(context) {
    axios
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
};
