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
        context.commit("SET_SUB_ITEMS_DAY_NIGHT", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setDashboardBanner(context) {
    axios
      .get("/api/codex?filter=codextypecode%3APROMOBANNER&sort=%2BdisplayOrder")
      .then((res) => {
        console.log(res);
        context.commit("SET_DASHBOARD_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setCheungBanner(context) {
    axios
      .get("/api/codex?filter=slug%3Acheung-chau-island")
      .then((res) => {
        context.commit("SET_CHEUNG_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setLantauBanner(context) {
    axios
      .get("/api/codex?filter=slug%3Alantau-island")
      .then((res) => {
        context.commit("SET_LANTAU_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setLammaBanner(context) {
    axios
      .get("/api/codex?filter=slug%3Alamma-island")
      .then((res) => {
        context.commit("SET_LAMMA_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setHotelBanner(context) {
    axios
      .get("/api/codex?filter=slug%3Ahotel-recommendations")
      .then((res) => {
        context.commit("SET_HOTEL_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setDayNightBanner(context) {
    axios
      .get("/api/codex?filter=slug%3Aday-n-night-time")
      .then((res) => {
        context.commit("SET_DAYNIGHT_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
