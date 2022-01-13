<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="image" class="image" />
    <div style="padding: 14px">
      <div class="bottom">
        <el-row>
          <el-col :span="18">
            <span>{{ name }}</span>
            <span class="small"
              ><img
                class="location-icon"
                src="../../assets/icon-location.png"
                alt=""
              />{{ description }}</span
            >
            <span class="discount">{{ discount }}</span>
            <span class="price">{{ price }}</span>
            <el-rate
              v-model="value"
              show-score
              disabled
              :colors="colors"
              text-color="#c6c6c6"
              :score-template="rateText"
            >
            </el-rate>
          </el-col>
          <el-col :span="6"
            ><span class="bookmark-icon"
              ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
          ></el-col>
        </el-row>
      </div>
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
    "image",
  ],
  data() {
    return {
      value: 4,
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
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

<style>
.search .right-section .el-card {
  margin-top: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}
.search .right-section .image {
  width: 100%;
  /* object-fit: contain; */
}

.search .right-section .location-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.search .right-section .bookmark-icon {
  text-align: end;
  display: block;
}

.search .right-section .bookmark-icon img {
  width: 40px;
  cursor: pointer;
}

.search .right-section span {
  display: block;
  letter-spacing: 3px;
  color: #8d8d8d;
}

.search .right-section .small {
  font-size: 12px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  /* color: red; */
}

.search .right-section .discount {
  text-decoration: line-through;
  color: #ddd;
  font-size: 13px;
  margin-top: 0.3rem;
}

.search .right-section .price {
  font-size: 16px;
  letter-spacing: 0px;
}

/* .search .right-section .el-rate {
  height: 50px;
} */

.search .right-section .el-rate span {
  display: inline;
}

.search .right-section .el-rate .el-rate__text {
  font-size: 12px;
}

.search .right-section .el-rate .el-rate__icon {
  margin: 0;
}
</style>