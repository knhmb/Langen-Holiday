import axios from "axios";
import moment from "moment";
import i18n from "../../../i18n.js";

const { t } = i18n.global;

export default {
  async getHotel(context, payload) {
    const today = moment(payload.checkInDate).format("YYYYMMDD");
    const tomorrow = moment(payload.checkOutDate).format("YYYYMMDD");
    await axios
      .get(
        `/api/hotel/${payload.hotelId}/${today}/${tomorrow}/${payload.roomQty}`
      )
      .then((res) => {
        console.log(res);
        context.commit("SET_HOTEL", res.data.item);
        context.commit(
          "CHANGE_DATE",
          { start: payload.checkInDate, end: payload.checkOutDate },
          {
            root: true,
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDate(context, payload) {
    axios
      .get(
        `/api/hotel/check-availability/${payload.hotelId}/${payload.firstDayOfCurrentMonth}/${payload.lastDayOfNextMonth}/${payload.roomQty}`
      )
      .then((res) => {
        console.log(res);
        context.commit("UPDATE_DATES", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  changedService(context, payload) {
    const checkService = payload.service === "" ? "" : payload.service;
    axios
      .get(
        `/api/hotel/enquire-price/${payload.hotelId}/${1}/${
          payload.checkInDate
        }/${payload.checkOutDate}${
          checkService === "" ? "" : "/" + checkService
        }`
      )
      .then((res) => {
        console.log(res);
        context.commit("UPDATE_HOTEL", res.data.item);
      })
      .catch((err) => {
        const date = new Date();
        const today = moment(date).format("YYYYMMDD");
        const tomorrow = moment(date.setDate(date.getDate() + 1)).format(
          "YYYYMMDD"
        );
        console.log(err);
        if (err.response.data.statusCode === 400) {
          axios
            .get(
              `/api/hotel/enquire-price/${
                payload.hotelId
              }/${1}/${today}/${tomorrow}${
                checkService === "" ? "" : "/" + checkService
              }`
            )
            .then((res) => {
              console.log("Second API Call");
              context.commit("UPDATE_HOTEL", res.data.item);
              console.log(moment(date.setDate(date.getDate() - 1)));
              console.log(moment(date.setDate(date.getDate() + 1)));
              context.commit(
                "CHANGE_DATE",
                {
                  start: date.setDate(date.getDate() - 1),
                  end: date.setDate(date.getDate() + 1),
                },
                { root: true }
              );
            });
        }
      });
  },
  updateChildren(context, payload) {
    context.commit("UPDATE_CHILDREN", payload);
  },
  updateAdults(context, payload) {
    context.commit("UPDATE_ADULTS", payload);
  },
  storeChildrenAge(context, payload) {
    context.commit("STORE_CHILDREN_AGE", payload);
  },
  storeSelectedServices(context, payload) {
    context.commit("STORE_SELECTED_SERVICES", payload);
  },
  updatePetQty(context, payload) {
    context.commit("UPDATE_PET_QTY", payload);
  },
  async applyCoupon(_, payload) {
    await axios
      .post("/api/coupon/apply-coupon", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(t("invalid_coupon"));
        throw error;
      });
  },
  makeReservation() {
    axios
      .post("/api/reservation")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
