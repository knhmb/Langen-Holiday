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
        "/api/codex?filter=codextypecode%3AHDRITEMSUBCAT%2CparentCodexSlug%3Acheung-chau-island&sort=%2BdisplayOrder"
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
        "/api/codex?filter=codextypecode%3AHDRITEMSUBCAT%2CparentCodexSlug%3Alamma-island&sort=%2BdisplayOrder"
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
        // console.log(res);
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
  searchHotel(_, payload) {
    axios
      .get(
        `/api/hotel?search=${payload.search}&filter=stayingDate:${payload.stayingDate},guestQty:${payload.guestQty},roomQty:${payload.roomQty},isHavePets:${payload.isHavePets} &sort=xxx&page=xx&pagesize=xxx`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setRoomType(context) {
    axios
      .get("/api/codex?filter=codextypecode%3AHTLRMTYPE&sort=%2BdisplayOrder")
      .then((res) => {
        context.commit("SET_ROOM_TYPE", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  filterHotel(context, payload) {
    axios
      .get(
        `/api/hotel?filter=stayingDate%3A${payload.stayingDate}%2CguestQty%3A${payload.guestQty}%2CroomQty%3A${payload.roomQty}%2CisHavePets%3A${payload.isHavePets}%2Clocation%3A${payload.location}%2CroomType%3A${payload.roomType}&sort=${payload.sort}`
      )
      .then((res) => {
        console.log(res);
        context.commit("search/SET_SEARCH_ITEMS", res.data.items, {
          root: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getContactUs(context) {
    axios
      .get("/api/cms-page/contact-us")
      .then((res) => {
        console.log(res.data.item.content);
        context.commit("SET_CONTACT_CONTENT", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getTopPlaces(context) {
    axios
      .get("/api/hotel?filter=topfive%3Atrue")
      .then((res) => {
        console.log(res);
        context.commit("GET_TOP_PLACES", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPaymentContent(context) {
    axios
      .get("/api/cms-page/payment")
      .then((res) => {
        console.log(res);
        context.commit("GET_PAYMENT_CONTENT", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getTermsConditions(context) {
    axios
      .get("/api/cms-page/terms-and-conditions")
      .then((res) => {
        context.commit("GET_TERMSCONDITIONS", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getJoinContent(context) {
    axios
      .get("/api/cms-page/join")
      .then((res) => {
        context.commit("GET_JOIN_CONTENT", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
