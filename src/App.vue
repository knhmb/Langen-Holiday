<template>
  <the-header v-if="headerVisible"></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    headerVisible() {
      return this.$store.getters.headerVisible;
    },
  },
  created() {
    this.$store.dispatch("auth/tryAutoLogin");
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans HK", sans-serif;
  min-width: 100%;
  /* position: relative; */
  /* position: absolute;
  left: 0;
  right: 0; */
}
</style>
