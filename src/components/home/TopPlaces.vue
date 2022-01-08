<template>
  <section class="top-places">
    <base-container>
      <h1>
        Top 5 Places
        <img src="../../assets/icon-top5.png" class="places-icon" alt="" />
      </h1>
    </base-container>
    <places-carousel></places-carousel>
  </section>
</template>

<script>
import PlacesCarousel from "./PlacesCarousel.vue";

export default {
  components: {
    PlacesCarousel,
  },
};
</script>


<style scoped>
.top-places {
  background-image: url("../../assets/main-bg1.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 8rem 0;
  /* margin-top: -0.6rem; */
}

.top-places h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: orange;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  /* display: inline-block; */
  margin-bottom: 4rem;
}

.top-places .places-icon {
  width: 40px;
}
</style>