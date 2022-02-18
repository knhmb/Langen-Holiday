import axios from "axios";

export default {
  setThemes(context) {
    axios
      .get("/api/codex?filter=codextypecode:HTLTHEME&sort=%2BdisplayOrder", {
        headers: {
          "Accept-Language-Code": "en-US",
        },
      })
      .then((res) => {
        // console.log(res);
        context.commit("SET_THEME", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setHeaderItems(context) {
    axios
      .get("/api/codex?filter=codextypecode:HDRITEMCAT&sort=%2BdisplayOrder")
      .then((res) => {
        // console.log(res);
        context.commit("SET_HEADER_ITEMS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setSubItems(context, subItem) {
    axios
      .get(
        `/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:${subItem}&sort=%2BdisplayOrder`,
        {
          headers: {
            "Accept-Language-Code": "en-US",
          },
        }
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SUB_ITEMS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
