<template>
  <div class="header">
    <h2>{{ joinContent.title }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    joinContent() {
      return this.$store.getters["dashboard/joinContent"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getJoinContent");
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 1rem;
}
.header h2 {
  letter-spacing: 4.5px;
  color: #8d8d8d;
}
</style>