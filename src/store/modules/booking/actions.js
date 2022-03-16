import axios from "axios";
import moment from "moment";

export default {
  async getHotel(context, payload) {
    await axios
      .get(
        `/api/hotel/${payload.hotelId}/${payload.checkInDate}/${payload.checkOutDate}/${payload.roomQty}`
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
  getDate(_, payload) {
    axios
      .get(
        `/api/hotel/check-availability/${payload.hotelId}/${payload.firstDayOfCurrentMonth}/${payload.lastDayOfNextMonth}/${payload.roomQty}`
      )
      .then((res) => {
        console.log(res);
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
            });
        }
      });
  },
};
