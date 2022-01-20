<template>
  <the-header></the-header>
  <section class="join">
    <Banner />
    <base-container>
      <Header />
      <Form />
    </base-container>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import Header from "../components/join/Header.vue";
import Banner from "../components/join/Banner.vue";
import Form from "../components/join/JoinForm.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    Header,
    Banner,
    Form,
  },
};
</script>

<style scoped>
.join {
  margin: 1rem 0 5rem 0;
}
</style>