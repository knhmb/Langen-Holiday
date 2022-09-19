<template>
  <section class="top-places">
    <base-container>
      <h1>
        {{ $t("top_5_most_popular") }}
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
  padding-top: 8rem;
  overflow-x: hidden;
  /* margin-top: -0.6rem; */
}

.top-places h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: #fd9a1a;
  letter-spacing: 9.6px;
  text-transform: uppercase;
  /* display: inline-block; */
  margin-bottom: 4rem;
}

.top-places .places-icon {
  width: 40px;
}

@media screen and (max-width: 768px) {
  .top-places h1 {
    font-size: 1rem;
  }

  .top-places .places-icon {
    width: 30px;
  }
}
</style>