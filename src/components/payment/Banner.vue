<template>
  <div class="payment-banner">
    <img :src="paymentContent.thumbnail" alt="" />
    <p>付款方式</p>
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
.payment-banner p {
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal bold 87px/116px Noto Sans Mono CJK TC;
  letter-spacing: 8.7px;
  color: #ffffff;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>