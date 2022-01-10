<template>
  <el-carousel trigger="click" height="400px" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <img
        src="https://image.shutterstock.com/z/stock-vector-editable-template-for-carousel-post-in-social-network-design-background-for-social-media-vector-1847884783.jpg"
        alt=""
        class="carousel-img"
      />
    </el-carousel-item>
  </el-carousel>
  <div class="img-collection">
    <el-row :gutter="5">
      <el-col :span="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :span="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :span="6">
        <img
          src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg"
          alt=""
          class="room-imgs"
        />
      </el-col>
      <el-col :span="6">
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
</style>