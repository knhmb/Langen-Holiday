<template>
  <!-- <the-header></the-header> -->
  <section class="booking-details">
    <Carousel />
    <booking-info></booking-info>
    <service-detail></service-detail>
    <date-selection></date-selection>
    <booking-alert></booking-alert>
    <Services />
    <read-more></read-more>
    <Comment />
  </section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
// import TheHeader from "../components/header/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import Carousel from "../components/booking-details/Carousel.vue";
import BookingInfo from "../components/booking-details/BookingInfo.vue";
import ServiceDetail from "../components/booking-details/ServiceDetail.vue";
import DateSelection from "../components/booking-details/DateSelection.vue";
import BookingAlert from "../components/booking-details/BookingAlert.vue";
import Services from "../components/booking-details/Services.vue";
import ReadMore from "../components/booking-details/ReadMore.vue";
import Comment from "../components/booking-details/Comment.vue";
import moment from "moment";

export default {
  components: {
    // TheHeader,
    // TheFooter,
    Carousel,
    BookingInfo,
    ServiceDetail,
    DateSelection,
    BookingAlert,
    Services,
    ReadMore,
    Comment,
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    dateSelected() {
      return this.$store.getters.dateSelected;
    },
  },
  methods: {
    async fetchHotel() {
      const data = {
        hotelId: this.$route.params.id,
        checkInDate: this.dateSelected.start,
        checkOutDate: this.dateSelected.end,
        roomQty: 1,
      };
      console.log(data);
      console.log(moment(data.checkInDate).format("YYYYMMDD"));
      console.log(moment(data.checkOutDate).format("YYYYMMDD"));
      await this.$store.dispatch("booking/getHotel", data).then(() => {
        console.log(this.selectedHotel);
      });
    },
  },
  created() {
    // this.fetchHotel();
    this.$store.commit("booking/RESET_ADULTS_AND_CHILDREN");
    this.$store.commit("RESET_TIMESLOT");
  },
  // computed: {
  //   dateSelected() {
  //     return this.$store.getters.dateSelected;
  //   },
  // },
  // beforeUnmount() {
  //   this.$store.dispatch("resetDate");
  // },
};
</script>

<style scoped>
.booking-details {
  margin-bottom: 4rem;
}
</style>