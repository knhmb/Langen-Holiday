<template>
  <header>
    <top-header></top-header>
    <bottom-header></bottom-header>
  </header>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import BottomHeader from "./BottomHeader.vue";

export default {
  components: {
    TopHeader,
    BottomHeader,
  },
};
</script>