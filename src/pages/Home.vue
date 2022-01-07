<template>
  <the-header></the-header>
  <Carousel />
  <Booking />
  <top-places></top-places>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import Carousel from "../components/home/Carousel.vue";
import TopPlaces from "../components/home/TopPlaces.vue";
import Booking from "../components/home/Booking.vue";

export default {
  components: {
    TheHeader,
    Carousel,
    TopPlaces,
    Booking,
  },
};
</script>