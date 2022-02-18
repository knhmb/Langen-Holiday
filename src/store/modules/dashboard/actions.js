import axios from "axios";

export default {
  setThemes(context) {
    axios
      .get("/api/codex?filter=codextypecode:HTLTHEME&sort=%2BdisplayOrder")
      .then((res) => {
        console.log(res);
        context.commit("SET_THEME", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
