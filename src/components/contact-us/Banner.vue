<template>
  <div class="contact-us-banner">
    <img :src="contactContent.thumbnail" alt="" />
    <p>聯絡我們</p>
  </div>
</template>

<script>
export default {
  computed: {
    contactContent() {
      return this.$store.getters["dashboard/contactContent"];
    },
  },
};
</script>

<style scoped>
.contact-us-banner {
  margin-top: 1rem;
  position: relative;
}

.contact-us-banner img {
  width: 100%;
}

.contact-us-banner p {
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