<template>
  <base-container>
    <div class="service-detail">
      <h3>Service</h3>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="12">
          <el-row :gutter="30" class="service-info">
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>Type:</span>
                <span>Test</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="purchasing-details" :sm="24" :lg="12">
          <service-detail-right></service-detail-right>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import ServiceDetailRight from "./ServiceDetailRight.vue";

export default {
  components: {
    ServiceDetailRight,
  },
};
</script>

<style scoped>
.service-detail {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 4rem;
}

.service-detail h3 {
  font-size: 24px;
  margin-bottom: 1rem;
  color: orange;
}

.service-detail .service-info {
}

.service-detail .separation {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
  padding-bottom: 0.3rem;
  color: #aaa;
  font-size: 14px;
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 768px) {
  .service-detail .purchasing-details {
    margin-top: 1rem;
  }
}
</style>