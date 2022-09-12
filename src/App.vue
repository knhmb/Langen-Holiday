<template>
  <the-header v-if="headerVisible"></the-header>
  <router-view v-if="!isPdf"></router-view>
  <template v-if="isPdf">
    <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
  </template>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { VuePdf, createLoadingTask } from "vue3-pdfjs/esm";
// import { VuePdfPropsType } from "vue3-pdfjs/components/vue-pdf/vue-pdf-props"; // Prop type definitions can also be imported
// import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

export default {
  components: {
    TheHeader,
    TheFooter,
    VuePdf,
  },
  data() {
    return {
      pdfSrc: `pdf/lantau-island-recommendations.pdf`,
      numOfPages: 0,
    };
  },
  watch: {
    pdf() {
      this.pdfSrc = `pdf/${this.pdf}.pdf`;
      console.log(this.pdfSrc);

      this.loadPdf();
    },
  },
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
  methods: {
    loadPdf() {
      console.log(this.pdfSrc);
      const loadingTask = createLoadingTask(this.pdfSrc);
      // const loadingTask = createLoadingTask(this.pdfSrc);
      loadingTask.promise.then((pdf) => {
        this.numOfPages = pdf.numPages;
        this.$store.commit("TOGGLE_ISPDF", true);
      });
    },
  },
  mounted() {
    this.loadPdf();
  },
  created() {
    this.$store.dispatch("auth/tryAutoLogin");
    localStorage.setItem("lang", "zh");
    this.pdfSrc = `pdf/cheung-chau-island-recommendations.pdf`;
    console.log(this.pdf);
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
