<template>
  <h1>Lamma</h1>
  <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
</template>

<script>
import { onMounted, ref } from "vue";
import { VuePdf, createLoadingTask } from "vue3-pdfjs/esm";
// import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props'; // Prop type definitions can also be imported
// import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

export default {
  name: "Home",
  components: { VuePdf },
  setup() {
    const pdfSrc = ref(
      `${window.location.protocol}//${window.location.hostname}/pdf/lamma-island-recommendations.pdf`
    );
    const numOfPages = ref(1);

    onMounted(() => {
      const loadingTask = createLoadingTask(pdfSrc.value);
      loadingTask.promise.then((pdf) => {
        numOfPages.value = pdf.numPages;
      });
    });
    return {
      pdfSrc,
      numOfPages,
    };
  },
};
</script>