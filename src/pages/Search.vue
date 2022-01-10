<template>
  <the-header></the-header>
  <section class="search">
    <left-section></left-section>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import LeftSection from "../components/search/LeftSection.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    LeftSection,
    TheFooter,
  },
};
</script>

<style scoped>
.search {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
</style>