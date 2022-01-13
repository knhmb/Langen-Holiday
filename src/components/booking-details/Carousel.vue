<template>
  <el-carousel
    indicator-position="none"
    trigger="click"
    height="735px"
    arrow="always"
  >
    <el-carousel-item>
      <img src="../../assets/img-houseinfo1.jpg" alt="" class="carousel-img" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img-houseinfo2.jpg" alt="" class="carousel-img" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img-houseinfo3.jpg" alt="" class="carousel-img" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img-houseinfo4.jpg" alt="" class="carousel-img" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/img-houseinfo5.jpg" alt="" class="carousel-img" />
    </el-carousel-item>
  </el-carousel>
  <div class="img-collection hidden-md-and-down">
    <el-row :gutter="5">
      <el-col :sm="24" :lg="6">
        <img src="../../assets/img-houseinfo2.jpg" alt="" class="room-imgs" />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img src="../../assets/img-houseinfo3.jpg" alt="" class="room-imgs" />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img src="../../assets/img-houseinfo4.jpg" alt="" class="room-imgs" />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img src="../../assets/img-houseinfo5.jpg" alt="" class="room-imgs" />
      </el-col>
    </el-row>
  </div>
</template>

<style>
.booking-details .el-carousel {
  margin-top: 1rem;
}
.booking-details .el-carousel .carousel-img {
  width: 100%;
  height: 100%;
  /* object-fit: fill; */
}

.booking-details .el-carousel .el-carousel__arrow {
  background-color: transparent;
  font-size: 40px;
}

.booking-details .img-collection {
  margin-top: 1rem;
  overflow-x: hidden;
}

.booking-details .room-imgs {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .booking-details .el-carousel .el-carousel__container {
    height: 313px !important;
  }
}

@media screen and (max-width: 540px) {
  .booking-details .el-carousel .el-carousel__container {
    height: 220px !important;
  }
}

@media screen and (max-width: 414px) {
  .booking-details .el-carousel .el-carousel__container {
    height: 169px !important;
  }
}

@media screen and (max-width: 375px) {
  .booking-details .el-carousel .el-carousel__container {
    height: 153px !important;
  }
}
</style>