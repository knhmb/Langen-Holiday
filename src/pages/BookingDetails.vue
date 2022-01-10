<template>
  <the-header></the-header>
  <section class="booking-details">
    <Carousel />
    <booking-info></booking-info>
    <service-detail></service-detail>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import Carousel from "../components/booking-details/Carousel.vue";
import BookingInfo from "../components/booking-details/BookingInfo.vue";
import ServiceDetail from "../components/booking-details/ServiceDetail.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    Carousel,
    BookingInfo,
    ServiceDetail,
  },
};
</script>

<style scoped>
.booking-details {
  margin-bottom: 3rem;
}
</style>