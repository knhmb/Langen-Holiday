<template>
  <div class="places-carousel">
    <el-carousel
      class="hidden-md-and-up"
      trigger="click"
      height="570px"
      arrow="always"
    >
      <el-carousel-item v-for="place in topPlaces" :key="place.id">
        <base-container>
          <el-row :gutter="10">
            <el-col :span="24">
              <Card
                :name="place.name"
                :description="place.location"
                :discount="place.discountedPrice"
                :price="place.originalPrice"
                :rate-value="place.rating"
                :rate-text="place.reviewsCount"
                :icon="place.icon"
                :image="place.thumbnail"
                :bookmarked="place.bookmarked"
              />
            </el-col>
          </el-row>
        </base-container>
      </el-carousel-item>
    </el-carousel>

    <el-carousel
      class="hidden-sm-and-down"
      trigger="click"
      height="670px"
      arrow="always"
    >
      <el-carousel-item>
        <base-container>
          <el-row :gutter="10">
            <el-col
              :span="8"
              v-for="place in topPlaces.slice(0, 3)"
              :key="place.id"
            >
              <Card
                :name="place.name"
                :description="place.location"
                :discount="place.discountedPrice"
                :price="place.originalPrice"
                :rate-value="place.rating"
                :rate-text="place.reviewsCount"
                :image="place.thumbnail"
                :bookmarked="place.bookmarked"
                :id="place.hotelId"
              />
            </el-col>
          </el-row>
        </base-container>
      </el-carousel-item>
      <el-carousel-item>
        <base-container>
          <el-row :gutter="10">
            <el-col
              :span="8"
              v-for="place in topPlaces.slice(3)"
              :key="place.id"
            >
              <Card
                :name="place.name"
                :description="place.location"
                :discount="place.discountedPrice"
                :price="place.originalPrice"
                :rate-value="place.rating"
                :rate-text="place.reviewsCount"
                :icon="place.icon"
                :image="place.thumbnail"
                :bookmarked="place.bookmarked"
                :id="place.hotelId"
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
      // services: [
      //   {
      //     id: 1,
      //     name: "白沙灣渡假酒店",
      //     description: "西貢",
      //     discount: "HK560",
      //     price: "HK500",
      //     rateValue: 4,
      //     rateText: "62 則評語",
      //     icon: require("../../assets/icon-rank1.png"),
      //     image: require("../../assets/img-house1.jpg"),
      //   },
      //   {
      //     id: 2,
      //     name: "沙田渡假酒店",
      //     description: "沙田",
      //     discount: "HK560",
      //     price: "HK500",
      //     rateValue: 4,
      //     rateText: "62 則評語",
      //     icon: require("../../assets/icon-rank2.png"),
      //     image: require("../../assets/img-house2.jpg"),
      //   },
      //   {
      //     id: 3,
      //     name: "馬𩣑山酒店",
      //     description: "馬𩣑山",
      //     discount: "HK560",
      //     price: "HK500",
      //     rateValue: 4,
      //     rateText: "62 則評語",
      //     icon: require("../../assets/icon-rank3.png"),
      //     image: require("../../assets/img-house3.jpg"),
      //   },
      // ],
    };
  },
  computed: {
    topPlaces() {
      return this.$store.getters["dashboard/topPlaces"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getTopPlaces");
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
  background-color: #fd9a1a;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--left {
  left: 5%;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--right {
  right: 6%;
}

.places-carousel .el-carousel__arrow.el-carousel__arrow--right .el-icon,
.places-carousel .el-carousel__arrow.el-carousel__arrow--left .el-icon {
  color: #fff;
  font-size: 24px;
}
.places-carousel .el-carousel .el-carousel__container {
  /* height: 890px !important; */
  height: 100vh !important;
}

@media screen and (min-width: 1680px) {
  .places-carousel .el-carousel__arrow.el-carousel__arrow--left {
    left: 3%;
  }

  .places-carousel .el-carousel__arrow.el-carousel__arrow--right {
    right: 4%;
  }

  /* .places-carousel .el-carousel .el-carousel__container {
    height: 890px !important;
  } */
}

@media screen and (min-width: 2022px) {
  /* .places-carousel .el-carousel .el-carousel__container {
    height: 970px !important;
  } */
}

@media screen and (max-width: 768px) {
  .places-carousel .el-carousel__arrow.el-carousel__arrow--left {
    left: 1%;
  }

  .places-carousel .el-carousel__arrow.el-carousel__arrow--right {
    right: 3.2%;
  }

  .places-carousel .swimming-img img {
    width: 150px;
  }

  .places-carousel .fish-img {
    width: 150px;
  }
}
</style>