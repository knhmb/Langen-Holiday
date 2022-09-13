<template>
  <the-header v-if="headerVisible"></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
// import VuePdfEmbed from "vue-pdf-embed";

export default {
  components: {
    TheHeader,
    TheFooter,
    // VuePdfEmbed,
  },
  data() {
    return {
      // source1: "pdf/lantau-island-recommendations.pdf",
    };
  },
  // watch: {
  //   pdf() {
  //     this.source1 = `pdf/${this.pdf}.pdf`;
  //     console.log(this.source1);
  //   },
  // },
  computed: {
    headerVisible() {
      return this.$store.getters.headerVisible;
    },
    pdf() {
      return this.$store.getters.pdf;
    },
    isPdf() {
      return this.$store.getters.isPdf;
    },
  },
  // mounted() {
  //   this.loadPdf();
  // },
  created() {
    this.$store.dispatch("auth/tryAutoLogin");
    localStorage.setItem("lang", "zh");
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
