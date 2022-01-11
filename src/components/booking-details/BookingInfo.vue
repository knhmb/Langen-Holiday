<template>
  <base-container>
    <div class="booking-info">
      <el-row class="heading">
        <el-col :sm="24" :md="4" :lg="4">
          <h1>Details</h1>
        </el-col>
        <el-col :sm="24" :md="17" :lg="17">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#c6c6c6"
            score-template="{value} points"
          >
          </el-rate>
        </el-col>
        <el-col :sm="3" :md="3" :lg="3">
          <el-button>Save</el-button>
        </el-col>
        <el-col>
          <p class="price">HK$500</p>
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
    return { value };
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
  color: #aaa;
}

.booking-info .el-button--default {
  background-color: orange;
  color: #fff;
  border-color: orange;
  width: 100%;
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
  color: #aaa;
  margin-top: 0.5rem;
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
}
</style>