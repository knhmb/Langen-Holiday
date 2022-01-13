<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>請輸入日期查詢房間空缺及價格</span>
      </div>
    </template>
    <div class="text item">
      <el-row>
        <el-col class="date" :span="5">入住日期</el-col>
        <el-col :span="5" class="line"></el-col>
        <el-col class="date" :span="5">入住日期</el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <span class="date-delivery">2021年5月22日 (星期六)</span>
        </el-col>
        <el-col :span="10">
          <span class="date-delivery">2021年5月23日 (星期日)</span>
        </el-col>
        <el-col class="my-btn" :span="4">
          <el-button class="small-btn">1晚</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <label class="date" style="display: block">人數</label>
          <el-select class="m-2" placeholder="5">
            <el-option> </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <p class="cost">HK$1280.00</p>
        </el-col>
      </el-row>
    </div>
    <add-ons></add-ons>
  </el-card>
</template>

<script>
import AddOns from "./AddOns.vue";

export default {
  components: {
    AddOns,
  },
};
</script>

<style>
.service-detail .box-card {
  color: #aaa;
}

.service-detail .box-card .card-header {
  letter-spacing: 2.2px;
}

.service-detail .el-card .el-card__header {
  padding: 10px 16px;
  background-color: #fd9a1a;
  color: #fff;
}

.service-detail .el-card .text.item .el-row {
  align-items: center;
  position: relative;
}

.service-detail .el-card .text.item {
  color: #8d8d8d;
  font-size: 14px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 1rem;
}

.service-detail .el-card .text.item .date {
  letter-spacing: 2.2px;
}

.service-detail .el-card .text.item .date-delivery {
  letter-spacing: 1.1px;
}

.service-detail .el-card .line {
  position: relative;
}

.service-detail .el-card .line::after {
  content: "";
  position: absolute;
  background-color: #aaa;
  width: 16px;
  height: 2px;
  right: 50%;
  transform: translateX(-50%);
}

.service-detail .small-btn {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  /* padding: 0; */
  color: #fff;
  letter-spacing: 1.1px;
}

.service-detail .my-btn {
  text-align: end;
}

.service-detail .m-2 {
  margin-top: 0.2rem;
  width: 71%;
}

.service-detail .cost {
  color: #fd9a1a;
  font-size: 40px;
  margin-top: 1rem;
}
</style>