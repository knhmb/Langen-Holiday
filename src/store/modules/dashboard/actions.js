import axios from "axios";

export default {
  setThemes(context) {
    axios
      .get("/api/codex?filter=codextypecode:HTLTHEME&sort=%2BdisplayOrder")
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
  setSubItemsCheung(context) {
    axios
      .get(
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:cheung-chau-island&sort=%2BdisplayOrder"
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SUB_ITEMS_CHEUNG", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setSubItemsLantau(context) {
    axios
      .get(
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:lantau-island&sort=%2BdisplayOrder"
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SUB_ITEMS_LANTAU", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setSubItemsLamma(context) {
    axios
      .get(
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:lamma-island&sort=%2BdisplayOrder"
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SUB_ITEMS_LAMMA", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setSubItemsDayAndNight(context) {
    axios
      .get(
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:day-n-night-time&sort=%2BdisplayOrder"
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_SUB_ITEMS_DAY_NIGHT", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
