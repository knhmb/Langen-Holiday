<template>
  <base-container>
    <div class="service-detail">
      <Alert />
      <h3>基本資料</h3>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="12">
          <el-row :gutter="30" class="service-info">
            <el-col :span="12">
              <div class="separation">
                <span>地區:</span>
                <span
                  ><img
                    style="width: 15px"
                    src="../../assets/icon-location.png"
                    alt=""
                  />
                  西貢</span
                >
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>樓層:</span>
                <span>2</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>服務類別:</span>
                <span>渡假屋</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>景觀:</span>
                <span>海景</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>房間類型:</span>
                <span>家庭套房</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>面積:</span>
                <span>400 呎</span>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="separation">
                <span>可住人數:</span>
                <span>6</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>入住時間:</span>
                <span>15:00</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation no-border">
                <span>竉物留宿:</span>
                <span>可以</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation no-border">
                <span>退房時間:</span>
                <span>12:00</span>
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
import Alert from "./Alert.vue";

export default {
  components: {
    ServiceDetailRight,
    Alert,
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
  letter-spacing: 4px;
  color: #fd9a1a;
}

.service-detail .service-info {
}

.service-detail .separation {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
  padding-bottom: 0.3rem;
  font-size: 14px;
  margin-bottom: 0.5rem;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.service-detail .separation.no-border {
  border-bottom: none;
}

@media screen and (max-width: 768px) {
  .service-detail .purchasing-details {
    margin-top: 1rem;
  }
}
</style>