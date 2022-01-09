<template>
  <el-card :body-style="{ padding: '0px' }">
    <!-- <div class="outer"> -->
    <div class="card-img">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <!-- <div class="ranking"> -->
      <img class="ranks" :src="icon" alt="" />
      <!-- <img class="ranks" src="../../assets/icon-rank2.png" alt="" />
                  <img class="ranks" src="../../assets/icon-rank3.png" alt="" /> -->
      <!-- </div> -->
    </div>
    <!-- </div> -->

    <div>
      <el-row>
        <el-col :span="14">
          <span>{{ name }}</span>
          <span class="small">{{ description }}</span>
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
          ><span style="text-align: end; display: block">icon</span></el-col
        >
      </el-row>

      <!-- <div class="bottom">
                  <time class="time">{{ new Date().getTime() }}</time>
                  <el-button type="text" class="button">Operating</el-button>
                </div> -->
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
  ],
  data() {
    return {
      value: 4,
    };
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
  /* padding-top: 1rem;
  padding-right: 2rem; */
}

.places-carousel span {
  display: block;
}

.places-carousel .small {
  font-size: 12px;
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