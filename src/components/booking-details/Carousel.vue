<template>
  <el-carousel trigger="click" height="418px" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <img
        src="https://image.shutterstock.com/z/stock-vector-editable-template-for-carousel-post-in-social-network-design-background-for-social-media-vector-1847884783.jpg"
        alt=""
        class="carousel-img"
      />
    </el-carousel-item>
  </el-carousel>
  <div class="img-collection hidden-md-and-down">
    <el-row :gutter="5">
      <el-col :sm="24" :lg="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :sm="24" :lg="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
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
  /* height: 100%; */
  object-fit: contain;
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