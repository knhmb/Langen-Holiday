<template>
  <div class="payment-banner">
    <img :src="paymentContent.thumbnail" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    paymentContent() {
      return this.$store.getters["dashboard/paymentContent"];
    },
  },
};
</script>

<style scoped>
.payment-banner {
  margin-top: 1rem;
}
.payment-banner img {
  width: 100%;
}
</style>