<template>
  <section class="carousel">
    <el-row>
      <el-col>
        <el-carousel trigger="click" arrow="always" height="630px">
          <el-carousel-item v-for="item in 1" :key="item">
            <img
              src="../../assets/promotion-banner-sample.png"
              class="img-carousel"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </section>
</template>

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
</style>