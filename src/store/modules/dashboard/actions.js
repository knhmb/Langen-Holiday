import axios from "axios";

export default {
  setThemes(context) {
    axios
      .get("/api/codex?filter=codextypecode:HTLTHEME&sort=+displayOrder")
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
      .get("/api/codex?filter=codextypecode:HDRITEMCAT&sort=+displayOrder")
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
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:cheung-chau-island&sort=+displayOrder"
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
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:lantau-island&sort=+displayOrder"
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
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:lamma-island&sort=+displayOrder"
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
        "/api/codex?filter=codextypecode:HDRITEMSUBCAT,parentCodexSlug:day-n-night-time&sort=+displayOrder"
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
      .get("/api/codex?filter=codextypecode:PROMOBANNER&sort=+displayOrder")
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
      .get("/api/codex?filter=slug:cheung-chau-island")
      .then((res) => {
        context.commit("SET_CHEUNG_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setLantauBanner(context) {
    axios
      .get("/api/codex?filter=slug:lantau-island")
      .then((res) => {
        context.commit("SET_LANTAU_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setLammaBanner(context) {
    axios
      .get("/api/codex?filter=slug:lamma-island")
      .then((res) => {
        context.commit("SET_LAMMA_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setHotelBanner(context) {
    axios
      .get("/api/codex?filter=slug:hotel-recommendations")
      .then((res) => {
        context.commit("SET_HOTEL_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setDayNightBanner(context) {
    axios
      .get("/api/codex?filter=slug:day-n-night-time")
      .then((res) => {
        context.commit("SET_DAYNIGHT_BANNER", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  searchHotel(context, payload) {
    axios
      .get(
        `/api/hotel?search=${payload.search}&filter=stayingDate:${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty}${
          payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty
        },${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }&sort=xxx&page=xx&pagesize=xxx`
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
  filterSearch(context, payload) {
    axios
      .get(
        `/api/hotel?search=${payload.theme}&filter=stayingDate:${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty}${
          payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty
        },${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }&sort=xxx&page=xx&pagesize=xxx`
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
  sortSearch(context, payload) {
    axios
      .get(
        `/api/hotel?search=${payload.theme}&filter=stayingDate:${
          payload.stayingDate
        }${payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty}${
          payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty
        },${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }&sort=${payload.sort}&page=xx&pagesize=xxx`
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
  setRoomType(context) {
    axios
      .get("/api/codex?filter=codextypecode:HTLRMTYPE&sort=+displayOrder")
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
        `/api/hotel?filter=stayingDate:${payload.stayingDate},guestQty:${
          payload.guestQty
        },roomQty:${payload.roomQty},isHavePets:${payload.isHavePets},${
          payload.location.length > 0 ? "location:" + payload.location : ""
        },${payload.roomType.length > 0 ? "roomType:" + payload.roomType : ""}`
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
  filterTheme(context, payload) {
    axios
      .get(
        `/api/hotel?filter=theme:${payload.theme},stayingDate:${
          payload.stayingDate
        },guestQty:${payload.guestQty},roomQty:${payload.roomQty},isHavePets:${
          payload.isHavePets
        }${payload.location.length > 0 ? ",location:" + payload.location : ""}${
          payload.roomType.length > 0 ? ",roomType:" + payload.roomType : ""
        }`
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
      .get("/api/hotel?filter=topfive:true")
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
  sortHotel(context, payload) {
    axios
      .get(
        `/api/hotel?filter=stayingDate:${payload.stayingDate}${
          payload.guestQty === 0 ? "" : ",guestQty:" + payload.guestQty
        }${payload.roomQty === 0 ? "" : ",roomQty:" + payload.roomQty}${
          payload.isHavePets === "false"
            ? ""
            : ",isHavePets:" + payload.isHavePets
        }${payload.location.length > 0 ? ",location:" + payload.location : ""}${
          payload.roomType.length > 0 ? ",roomType:" + payload.roomType : ""
        }&sort=${payload.sort}`
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
  sortTheme(context, payload) {
    axios
      .get(
        `/api/hotel?filter=theme:${payload.theme},stayingDate:${payload.stayingDate},guestQty:${payload.guestQty},roomQty:${payload.roomQty},isHavePets:${payload.isHavePets},location:${payload.location},roomType:${payload.roomType}&sort=${payload.sort}`
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
  setLastLocation(context) {
    axios
      .get("/api/codex?filter=codextypecode:RGN")
      .then((res) => {
        console.log(res);
        context.commit("SET_LAST_LOCATION", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
