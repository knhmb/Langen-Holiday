import axios from "axios";
import router from "../../../route.js";

export default {
  async login(context, payload) {
    await axios
      .post("/api/authenticate", payload)
      .then((response) => {
        console.log(response.data);
        console.log(response);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + 900 * 1000);

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("userData", JSON.stringify(response.data.item));
        localStorage.setItem("expirationDate", expirationDate);

        context.commit("LOGIN", {
          token: response.data.accessToken,
          userId: response.data.item.id,
        });

        // const dummy = localStorage.getItem("userData");
        // console.log(JSON.parse(dummy));
      })
      .catch((err) => {
        if (err.response.data.message === "error.account.invalid-username") {
          const error = new Error("Username is invalid");
          throw error;
        } else if (
          err.response.data.message === "error.account.invalid-password"
        ) {
          const error = new Error("Password is invalid");
          throw error;
        }
      });
  },
  tryAutoLogin(context) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }
    const expirationDate = localStorage.getItem("expirationDate");
    const now = new Date();
    if (now >= expirationDate) {
      return;
    }
    const userId = JSON.parse(localStorage.getItem("userData")).id;
    context.commit("LOGIN", {
      token: token,
      userId: userId,
    });
  },
  logout(context) {
    const refreshToken = localStorage.getItem("refreshToken");
    axios
      .delete("/api/authenticate", {
        headers: {
          authorization: refreshToken,
        },
        data: {
          authorization: refreshToken,
        },
      })
      .then(() => {
        localStorage.removeItem("userData");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        context.commit("LOGOUT");
        router.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async register(context, payload) {
    await axios
      .post("/api/account", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err.response.data.statusCode === 400) {
          const error = new Error("Username Already Exists!");
          throw error;
        }
      });
    // console.log(payload);
    // context.commit("REGISTER", payload);
  },
  async updateProfile(context, payload) {
    await axios
      .put("/api/account", payload)
      .then((res) => {
        console.log(res);
        let oldUsername = JSON.parse(localStorage.getItem("userData"));
        oldUsername.username = payload.username;
        localStorage.setItem("userData", JSON.stringify(oldUsername));
        console.log(oldUsername);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
