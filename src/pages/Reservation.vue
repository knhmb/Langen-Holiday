<template>
  <top-header></top-header>
  <section class="reservation">
    <reservation-left-section></reservation-left-section>
    <List />
  </section>
  <the-footer></the-footer>
</template>

<script>
import TopHeader from "../components/header/TopHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import ReservationLeftSection from "../components/reservation/ReservationLeftSection.vue";
import List from "../components/reservation/List.vue";

export default {
  components: {
    TopHeader,
    TheFooter,
    ReservationLeftSection,
    List,
  },
};
</script>

<style scoped>
.reservation {
  color: #999;
  margin-top: 2rem;
}
</style>