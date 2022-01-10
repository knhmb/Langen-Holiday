<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <div class="text item">
      <el-row>
        <el-col :span="5">Date</el-col>
        <el-col :span="5" class="line"></el-col>
        <el-col :span="5">Date</el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <span>2022/5/2</span>
        </el-col>
        <el-col :span="10">
          <span>2022/5/2</span>
        </el-col>
        <el-col class="my-btn" :span="4">
          <el-button class="small-btn">Add</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <label style="display: block">Select</label>
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
.service-detail .el-card .el-card__header {
  padding: 10px 16px;
  background-color: orange;
  color: #fff;
}

.service-detail .el-card .text.item .el-row {
  align-items: center;
  position: relative;
}

.service-detail .el-card .text.item {
  color: #aaa;
  font-size: 14px;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
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
}

.service-detail .small-btn {
  background-color: orange;
  border-color: orange;
  /* padding: 0; */
  color: #fff;
}

.service-detail .my-btn {
  text-align: end;
}

.service-detail .m-2 {
  margin-top: 0.2rem;
  width: 71%;
}

.service-detail .cost {
  color: orange;
  font-size: 40px;
  margin-top: 1rem;
}
</style>