<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="card-img">
      <img :src="image" class="image" />
      <img class="ranks" :src="icon" alt="" />
    </div>

    <div>
      <el-row>
        <el-col :span="14">
          <span>{{ name }}</span>
          <span class="small"
            ><img
              class="location-icon"
              src="../../assets/icon-location.png"
              alt=""
            />
            {{ description }}</span
          >
          <span class="discount">{{ discount }}</span>
          <span class="price">{{ price }}</span>
          <el-rate
            v-model="value"
            show-score
            disabled
            text-color="#c6c6c6"
            :score-template="rateText"
          >
          </el-rate>
        </el-col>
        <el-col :span="10"
          ><span class="bookmark-icon"
            ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
        ></el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  props: [
    "name",
    "description",
    "discount",
    "price",
    "rateValue",
    "rateText",
    "icon",
    "image",
  ],
  data() {
    return {
      value: 4,
      bookmarkIcon: require("../../assets/icon-bookmark-on.png"),
    };
  },
  methods: {
    toggleBookmark() {
      if (this.bookmarkIcon === require("../../assets/icon-bookmark-on.png")) {
        this.bookmarkIcon = require("../../assets/icon-bookmark-off.png");
      } else {
        this.bookmarkIcon = require("../../assets/icon-bookmark-on.png");
      }
    },
  },
};
</script>

<style scoped>
.places-carousel .el-card {
  border: none;
  box-shadow: none;

  padding-right: 17px;
  padding-top: 25px;
}

.places-carousel .el-card .el-card__body {
  /* max-width: 300px; */
}

.places-carousel .image {
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
  /* padding-top: 1rem;
  padding-right: 2rem; */
}

.places-carousel span {
  display: block;
  color: #8d8d8d;
}

.places-carousel .bookmark-icon {
  text-align: end;
  display: block;
}

.places-carousel .location-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.places-carousel .bookmark-icon img {
  width: 40px;
  cursor: pointer;
}

.places-carousel .small {
  font-size: 12px;
  display: flex;
  align-items: center;
}

.places-carousel .discount {
  text-decoration: line-through;
  color: #ddd;
  font-size: 13px;
  margin-top: 0.3rem;
}

.places-carousel .price {
  font-size: 16px;
}

.places-carousel .el-rate {
  height: 50px;
}

.places-carousel .el-rate span {
  display: inline;
}

.places-carousel .el-rate .el-rate__text {
  font-size: 12px;
}

.places-carousel .card-img {
  position: relative;
  width: 100%;
}

.places-carousel .card-img .ranks {
  position: absolute;
  width: 60px;
  top: -1.5rem;
}

.places-carousel .card-img .ranks {
  right: -1rem;
}

@media screen and (max-width: 768px) {
}
</style>