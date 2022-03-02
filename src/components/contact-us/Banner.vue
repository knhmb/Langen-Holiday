<template>
  <div class="contact-us-banner">
    <img :src="contactContent.thumbnail" alt="" />
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
}

.contact-us-banner img {
  width: 100%;
}
</style>