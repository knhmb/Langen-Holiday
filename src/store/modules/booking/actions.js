import axios from "axios";

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
  changedService(_, payload) {
    const checkService = payload.service === "" ? "''" : payload.service;
    axios
      .get(
        `/api/hotel/enquire-price/${payload.hotelId}/${payload.checkInDate}/${payload.checkOutDate}/${checkService}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
