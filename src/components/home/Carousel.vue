<template>
  <section class="carousel">
    <el-row>
      <el-col>
        <el-carousel
          :autoplay="false"
          v-if="banners.length > 0"
          trigger="click"
          arrow="always"
          height="609px"
        >
          <el-carousel-item v-for="banner in banners" :key="banner.id">
            <img :src="banner.thumbnail" class="img-carousel" alt="" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  computed: {
    banners() {
      return this.$store.getters["dashboard/dashboardBanner"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/setDashboardBanner");
  },
};
</script>

<style>
.carousel .img-carousel {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .el-carousel {
  position: relative;
}

.carousel .el-carousel::after {
  content: "Your Best Travel Partner";
  position: absolute;
  color: #fff;
  font-size: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0px;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

.carousel .el-carousel__arrow.el-carousel__arrow--left,
.carousel .el-carousel__arrow.el-carousel__arrow--right {
  background-color: transparent;
}

.carousel .el-carousel__arrow.el-carousel__arrow--left .el-icon,
.carousel .el-carousel__arrow.el-carousel__arrow--right .el-icon {
  font-size: 40px;
  color: #fff;
}

/* @media screen and (min-width: 1357px) {
  .carousel .el-carousel .el-carousel__container {
    height: 700px !important;
  }
}

@media screen and (min-width: 1680px) {
  .carousel .el-carousel .el-carousel__container {
    height: 787px !important;
  }
} */
</style>