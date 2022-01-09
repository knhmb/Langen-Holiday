<template>
  <div class="places-carousel">
    <el-carousel
      class="hidden-md-and-up"
      trigger="click"
      height="570px"
      arrow="always"
    >
      <el-carousel-item v-for="service in services" :key="service.id">
        <base-container>
          <el-row :gutter="10">
            <el-col :span="24">
              <Card
                :name="service.name"
                :description="service.description"
                :discount="service.discount"
                :price="service.price"
                :rate-value="service.rateValue"
                :rate-text="service.rateText"
                :icon="service.icon"
              />
            </el-col>
          </el-row>
        </base-container>
      </el-carousel-item>
    </el-carousel>

    <el-carousel
      class="hidden-sm-and-down"
      trigger="click"
      height="570px"
      arrow="always"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <base-container>
          <el-row :gutter="10">
            <el-col v-for="service in services" :key="service.id" :span="8">
              <Card
                :name="service.name"
                :description="service.description"
                :discount="service.discount"
                :price="service.price"
                :rate-value="service.rateValue"
                :rate-text="service.rateText"
                :icon="service.icon"
              />
            </el-col>
          </el-row>
        </base-container>
      </el-carousel-item>
    </el-carousel>
    <base-container>
      <el-row>
        <el-col :span="12">
          <img src="../../assets/main-img1.png" class="fish-img" alt="" />
        </el-col>
        <el-col class="swimming-img" :span="12">
          <img src="../../assets/main-img2.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Yummy hamburger",
          description: "Burger",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 points",
          icon: require("../../assets/icon-rank1.png"),
        },
        {
          id: 2,
          name: "Yummy hamburger",
          description: "Burger",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 points",
          icon: require("../../assets/icon-rank2.png"),
        },
        {
          id: 3,
          name: "Yummy hamburger",
          description: "Burger",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 points",
          icon: require("../../assets/icon-rank3.png"),
        },
      ],
    };
  },
};
</script>



<style>
.places-carousel .swimming-img {
  text-align: end;
}
.places-carousel .swimming-img img {
  width: 200px;
  position: relative;
  /* left: 350px; */
}

.places-carousel .fish-img {
  width: 300px;
}

.places-carousel .el-carousel .el-carousel__item {
  padding-top: 1.6rem;
  /* padding-bottom: 1.6rem; */
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--left,
.places-carousel .el-carousel__arrow.el-carousel__arrow--right {
  background-color: orange;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--left {
  left: 5%;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--right {
  right: 5%;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--right .el-icon,
.places-carousel .el-carousel__arrow.el-carousel__arrow--left .el-icon {
  color: #fff;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .places-carousel .el-carousel__arrow.el-carousel__arrow--left {
    left: 1%;
  }

  .places-carousel .swimming-img img {
    width: 150px;
  }

  .places-carousel .fish-img {
    width: 150px;
  }
}
</style>