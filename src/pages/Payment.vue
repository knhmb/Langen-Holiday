<template>
  <!-- <the-header></the-header> -->
  <section class="payment">
    <Banner />
    <Banks />
  </section>
  <!-- <the-footer></the-footer> -->
</template>

<script>
// import TheHeader from "../components/header/TheHeader.vue";
// import TheFooter from "../components/TheFooter.vue";
import Banner from "../components/payment/Banner.vue";
import Banks from "../components/payment/Banks.vue";

export default {
  components: {
    // TheHeader,
    // TheFooter,
    Banner,
    Banks,
  },
};
</script>