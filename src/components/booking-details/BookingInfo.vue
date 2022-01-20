<template>
  <base-container>
    <div class="booking-info">
      <el-row class="heading">
        <el-col :sm="24" :md="4" :lg="7">
          <h1>白沙灣渡假酒店</h1>
        </el-col>
        <el-col :sm="24" :md="17" :lg="14">
          <el-rate
            v-model="value"
            disabled
            show-score
            :colors="colors"
            text-color="#c6c6c6"
            score-template="{value} 則評語"
          >
          </el-rate>
        </el-col>
        <el-col :sm="3" :md="3" :lg="3">
          <el-button>加入收藏 </el-button>
          <!-- <img
            class="icon-bookmark"
            src="../../assets/icon-bookmark-off.png"
            alt=""
          /> -->
        </el-col>
        <el-col>
          <p class="price">HK$500 <span>起</span></p>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const value = ref(4);
    const colors = ref(["#FD9A1A", "#FD9A1A", "#FD9A1A"]);
    return { value, colors };
  },
};
</script>

<style>
.booking-info {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.booking-info h1 {
  font-size: 40px;
  color: #8d8d8d;
}

.booking-info .el-button--default {
  background-color: #fd9a1a;
  color: #fff;
  border-color: #fd9a1a;
  width: 100%;
  position: relative;
}

.booking-info .icon-bookmark {
  width: 30px;
  position: absolute;
  /* right: 5px; */
}

.booking-info .heading {
  align-items: center;
}

.booking-info .el-rate .el-rate__icon {
  margin: 0;
  font-size: 25px;
}

.booking-info .el-rate .el-rate__text {
  margin-left: 1rem;
}

.booking-info .price {
  font-size: 30px;
  color: #8d8d8d;
  margin-top: 0.5rem;
}

.booking-info .price span {
  font-size: 12px;
}

@media screen and (max-width: 1024px) {
  .booking-info .el-rate {
    margin-left: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .booking-info .el-rate {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .booking-info .heading .el-col {
    display: flex;
    justify-content: center;
  }

  .booking-info h1 {
    font-size: 32px;
  }
}
</style>