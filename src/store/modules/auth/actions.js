import axios from "axios";
import router from "../../../route.js";
import i18n from "../../../i18n.js";

const { t } = i18n.global;

export default {
  // async checkAccessTokenValidity() {
  //   await axios
  //     .get("/api/authenticate", {
  //       headers: {
  //         authorization: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       const error = new Error(t("token_invalid"));
  //       throw error;
  //     });
  // },
  async checkAccessTokenValidity() {
    await axios
      .get("/api/authenticate", {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("error");
        const error = new Error(t("token_invalid"));
        throw error;
        // context.dispatch("checkRefreshTokenValidity");
        // console.log("reached refresh");
      });
  },
  async checkRefreshTokenValidity() {
    await axios
      .put("/api/authenticate", {
        headers: {
          authorization: localStorage.getItem("refreshToken"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(t("token_expired"));
        throw error;
      });
  },
  async login(context, payload) {
    await axios
      .post("/api/authenticate", payload)
      .then((response) => {
        console.log(response.data);
        console.log(response);
        const now = new Date();
        const expiresIn = 900;
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("userData", JSON.stringify(response.data.item));
        localStorage.setItem("expirationDate", expirationDate);

        context.commit("LOGIN", {
          token: response.data.accessToken,
          userId: response.data.item.id,
        });
      })
      .catch((err) => {
        if (err.response.data.message === "error.account.invalid-username") {
          const error = new Error(t("invalid_username"));
          throw error;
        } else if (
          err.response.data.message === "error.account.invalid-password"
        ) {
          const error = new Error(t("invalid_password"));
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
        localStorage.removeItem("expirationDate");

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
          const error = new Error(t("username_already_exists"));
          throw error;
        }
      });
  },
  async updateProfile(context, payload) {
    const accessToken = localStorage.getItem("accessToken");

    await axios
      .put("/api/account", payload, {
        headers: {
          authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        // let oldUsername = JSON.parse(localStorage.getItem("userData"));
        // oldUsername.username = payload.username;
        // localStorage.setItem("userData", JSON.stringify(oldUsername));
        // console.log(oldUsername);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  async changePassword(_, payload) {
    await axios
      .post("/api/account/change-password", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(t("invalid_oldpassword"));
        throw error;
      });
  },
  async forgotPassword(_, payload) {
    await axios
      .post("/api/account/forget-password", payload)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        // console.log(err.response);
        const error = new Error(t("invalid_username"));
        throw error;
      });
  },
};
