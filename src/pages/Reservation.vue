<template>
  <top-header></top-header>
  <section class="reservation">
    <reservation-left-section @form="changedForm"></reservation-left-section>
    <List :booking-info="bookingInfo" />
  </section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import TopHeader from "../components/header/TopHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import ReservationLeftSection from "../components/reservation/ReservationLeftSection.vue";
import List from "../components/reservation/List.vue";

export default {
  components: {
    TopHeader,
    // TheFooter,
    ReservationLeftSection,
    List,
  },
  data() {
    return {
      bookingInfo: {},
    };
  },
  methods: {
    changedForm(value) {
      this.bookingInfo = value;
    },
  },
  created() {
    this.$store.dispatch("hideHeader", false);
    console.log(this.$route);
  },
  beforeUnmount() {
    this.$store.dispatch("displayHeader", true);
    this.$store.commit("AUTHENTICATED_TO_RESERVE", false);
  },
};
</script>

<style scoped>
.reservation {
  color: #999;
  margin-top: 2rem;
}
</style>