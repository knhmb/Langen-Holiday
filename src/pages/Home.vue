<template>
  <!-- <the-header></the-header> -->
  <Carousel />
  <Booking />
  <top-places></top-places>
  <Activities />
  <!-- <the-footer></the-footer> -->
</template>

<script>
// import TheHeader from "../components/header/TheHeader.vue";
import Carousel from "../components/home/Carousel.vue";
import TopPlaces from "../components/home/TopPlaces.vue";
import Booking from "../components/home/Booking.vue";
import Activities from "../components/home/Activities.vue";
// import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    // TheHeader,
    Carousel,
    TopPlaces,
    Booking,
    Activities,
    // TheFooter,
  },
  created() {
    this.$store.commit("booking/RESET_DISCOUNT_DATA");
    this.$store.commit("booking/RESET_ADULTS_AND_CHILDREN");
    this.$store.dispatch("resetDate");
    this.$store.dispatch("displayHeader", true);
    this.$store.commit("AUTHENTICATED_TO_RESERVE", false);
    // this.$store.dispatch("resetIsHavePets");
  },
};
</script>