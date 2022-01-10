<template>
  <el-card :body-style="{ padding: '0px' }">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div style="padding: 14px">
      <div class="bottom">
        <el-row>
          <el-col :span="18">
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
          <el-col :span="6"
            ><span style="text-align: end; display: block">icon</span></el-col
          >
        </el-row>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["name", "description", "discount", "price", "rateValue", "rateText"],
  data() {
    return {
      value: 4,
    };
  },
};
</script>

<style>
.search .right-section .el-card {
  margin-top: 1rem;
}
.search .right-section .image {
  width: 100%;
  /* object-fit: contain; */
}

.search .right-section span {
  display: block;
}

.search .right-section .small {
  font-size: 12px;
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