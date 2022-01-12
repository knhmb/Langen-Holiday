<template>
  <the-header></the-header>
  <section class="contact-us">
    <Banner />
    <contact-info></contact-info>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import Banner from "../components/contact-us/Banner.vue";
import ContactInfo from "../components/contact-us/ContactInfo.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
    Banner,
    ContactInfo,
  },
};
</script>