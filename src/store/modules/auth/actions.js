import axios from "axios";

export default {
  login(context, payload) {
    axios
      .post("/api/authenticate", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log(payload);
    // context.commit("LOGIN");
  },
  logout(context) {
    context.commit("LOGOUT");
  },
  async register(context, payload) {
    await axios
      .post("/api/account", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (
          err.response.data.trace === "error.account.username-already-exist"
        ) {
          const error = new Error("Username Already Exists!");
          throw error;
        }
      });
    // console.log(payload);
    // context.commit("REGISTER", payload);
  },
};
