<template>
  <div class="places-carousel">
    <el-carousel trigger="click" height="530px" arrow="always">
      <el-carousel-item v-for="item in 3" :key="item">
        <base-container>
          <el-row :gutter="20">
            <el-col v-for="o in 3" :key="o" :span="8">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div class="ranking">
                  <img src="../../assets/icon-rank1.png" alt="" />
                  <img src="../../assets/icon-rank2.png" alt="" />
                  <img src="../../assets/icon-rank3.png" alt="" />
                </div>
                <div>
                  <el-row>
                    <el-col :span="14">
                      <span>Yummy hamburger</span>
                      <span class="small">burger</span>
                      <span class="discount">HK560</span>
                      <span class="price">HK500</span>
                      <el-rate
                        v-model="value"
                        show-score
                        disabled
                        text-color="#c6c6c6"
                        score-template="62 points"
                      >
                      </el-rate>
                    </el-col>
                    <el-col :span="10"
                      ><span style="text-align: end; display: block"
                        >icon</span
                      ></el-col
                    >
                  </el-row>

                  <!-- <div class="bottom">
                  <time class="time">{{ new Date().getTime() }}</time>
                  <el-button type="text" class="button">Operating</el-button>
                </div> -->
                </div>
              </el-card>
            </el-col>
          </el-row>
        </base-container>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
    };
  },
};
</script>

<style>
.places-carousel .el-card {
  border: none;
  box-shadow: none;
}

.places-carousel .el-card .el-card__body {
  /* max-width: 300px; */
}

.places-carousel .image {
  width: 100%;
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

.places-carousel .ranking img {
  position: absolute;
  width: 60px;
  top: -1.5rem;
}

.places-carousel .ranking img {
  left: 19.6rem;
}

/* .places-carousel .ranking img:nth-child(2) {
  left: 50.2rem;
}

.places-carousel .ranking img:nth-child(3) {
  left: 73.4rem;
} */

.places-carousel .el-carousel {
  /* position: relative; */
  /* background-color: red; */

  /* max-height: 400px; */
  /* z-index: -1; */
  /* padding-top: 1rem; */
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
</style>