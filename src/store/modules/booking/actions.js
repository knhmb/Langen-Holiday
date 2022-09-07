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
        context.commit("SET_ROOM_QTY", payload.roomQty, { root: true });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDate(context, payload) {
    axios
      .get(
        `/api/hotel/check-availability/${payload.hotelId}/${payload.firstDayOfCurrentMonth}/${payload.lastDayOfNextMonth}/${payload.roomQty}/${payload.hasDayNightSessions}`
      )
      .then((res) => {
        console.log(res);
        context.commit("UPDATE_DATES", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async changedService(context, payload) {
    const checkService = payload.service === "" ? "-" : payload.service;
    const response = await axios.get(
      `/api/hotel/enquire-price/${payload.hotelId}/${payload.roomQty}/${
        payload.checkInDate
      }/${payload.checkOutDate}/${payload.timeslotids}${
        checkService === "" ? "" : "/" + checkService
      }`
    );
    console.log(response);
    context.commit("UPDATE_HOTEL", response.data.item);

    // if(response.data.statusCode === 400)
    // axios
    //   .get(
    //     `/api/hotel/enquire-price/${payload.hotelId}/${payload.roomQty}/${
    //       payload.checkInDate
    //     }/${payload.checkOutDate}/${payload.timeslotids}${
    //       checkService === "" ? "" : "/" + checkService
    //     }`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     context.commit("UPDATE_HOTEL", res.data.item);
    //   })
    //   .catch((err) => {
    //     const date = new Date();
    //     const today = moment(date).format("YYYYMMDD");
    //     let tomorrow = moment(date.setDate(date.getDate() + 1)).format(
    //       "YYYYMMDD"
    //     );
    //     console.log(tomorrow);
    //     if (payload.timeslotids === "") {
    //       tomorrow = today;
    //     }

    //     // console.log(err);
    //     if (err.response.data.statusCode === 400) {
    //       axios
    //         .get(
    //           `/api/hotel/enquire-price/${payload.hotelId}/${
    //             payload.roomQty
    //           }/${today}/${tomorrow}/${payload.timeslotids}${
    //             checkService === "" ? "" : "/" + checkService
    //           }`
    //         )
    //         .then((res) => {
    //           console.log("Second API Call");
    //           context.commit("UPDATE_HOTEL", res.data.item);
    //           console.log(moment(date.setDate(date.getDate() - 1)));
    //           console.log(moment(date.setDate(date.getDate() + 1)));
    //           context.commit(
    //             "CHANGE_DATE",
    //             {
    //               start: date.setDate(date.getDate() - 1),
    //               end: date.setDate(date.getDate() + 1),
    //             },
    //             { root: true }
    //           );
    //         })
    //         .catch((err) => {
    //           // const error = new Error(err);
    //           throw err;
    //         });
    //     }
    //   });
  },
  async secondChangedService(context, payload) {
    const date = new Date();
    const today = moment(date).format("YYYYMMDD");
    let tomorrow = moment(date.setDate(date.getDate() + 1)).format("YYYYMMDD");
    if (payload.timeslotids === "") {
      tomorrow = today;
    }

    const checkService = payload.service === "" ? "-" : payload.service;

    const response = await axios.get(
      `/api/hotel/enquire-price/${payload.hotelId}/${
        payload.roomQty
      }/${today}/${tomorrow}/${payload.timeslotids}${
        checkService === "" ? "" : "/" + checkService
      }`
    );

    console.log("Second API Call");
    context.commit("UPDATE_HOTEL", response.data.item);
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

    // console.log(err);
    // axios
    //   .get(
    //     `/api/hotel/enquire-price/${payload.hotelId}/${
    //       payload.roomQty
    //     }/${today}/${tomorrow}/${payload.timeslotids}${
    //       checkService === "" ? "" : "/" + checkService
    //     }`
    //   )
    //   .then((res) => {
    //     console.log("Second API Call");
    //     context.commit("UPDATE_HOTEL", res.data.item);
    //     console.log(moment(date.setDate(date.getDate() - 1)));
    //     console.log(moment(date.setDate(date.getDate() + 1)));
    //     context.commit(
    //       "CHANGE_DATE",
    //       {
    //         start: date.setDate(date.getDate() - 1),
    //         end: date.setDate(date.getDate() + 1),
    //       },
    //       { root: true }
    //     );
    //   })
  },
  // changedService(context, payload) {
  //   const checkService = payload.service === "" ? "-" : payload.service;
  //   axios
  //     .get(
  //       `/api/hotel/enquire-price/${payload.hotelId}/${payload.roomQty}/${
  //         payload.checkInDate
  //       }/${payload.checkOutDate}/${payload.timeslotids}${
  //         checkService === "" ? "" : "/" + checkService
  //       }`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       context.commit("UPDATE_HOTEL", res.data.item);
  //     })
  //     .catch((err) => {
  //       const date = new Date();
  //       const today = moment(date).format("YYYYMMDD");
  //       let tomorrow = moment(date.setDate(date.getDate() + 1)).format(
  //         "YYYYMMDD"
  //       );
  //       console.log(tomorrow);
  //       if (payload.timeslotids === "") {
  //         tomorrow = today;
  //       }

  //       // console.log(err);
  //       if (err.response.data.statusCode === 400) {
  //         axios
  //           .get(
  //             `/api/hotel/enquire-price/${payload.hotelId}/${
  //               payload.roomQty
  //             }/${today}/${tomorrow}/${payload.timeslotids}${
  //               checkService === "" ? "" : "/" + checkService
  //             }`
  //           )
  //           .then((res) => {
  //             console.log("Second API Call");
  //             context.commit("UPDATE_HOTEL", res.data.item);
  //             console.log(moment(date.setDate(date.getDate() - 1)));
  //             console.log(moment(date.setDate(date.getDate() + 1)));
  //             context.commit(
  //               "CHANGE_DATE",
  //               {
  //                 start: date.setDate(date.getDate() - 1),
  //                 end: date.setDate(date.getDate() + 1),
  //               },
  //               { root: true }
  //             );
  //           })
  //           .catch((err) => {
  //             // const error = new Error(err);
  //             throw err;
  //           });
  //       }
  //     });
  // },
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
  async applyCoupon(context, payload) {
    await axios
      .post("/api/coupon/apply-coupon", payload)
      .then((res) => {
        console.log(res);
        context.commit("SET_DISCOUNT", res.data.item);
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(t("invalid_coupon"));
        throw error;
      });
  },
  async makeReservation(_, payload) {
    const accessToken = localStorage.getItem("accessToken");

    await axios
      .post(
        "/api/reservation",
        payload,
        accessToken ? { headers: { authorization: accessToken } } : ""
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
