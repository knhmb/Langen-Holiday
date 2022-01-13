<template>
  <base-container>
    <div class="contact-info">
      <h2>聯絡我們</h2>
      <el-row>
        <el-col :sm="24" :md="6">
          <p>地址</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"
          ><p>香港仔田灣興和街25號大生工業大廈9樓B室</p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>營業時間</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>星期一至五 12:00 - 19:00</p>
          <p>星期六：12:00 - 18:00</p>
          <p>星期日及公眾假期：休 息</p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>電話查詢服務時間</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>上午10時至下午9時 (星期一至日)</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="24" :md="6">
          <p>電話</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"><p>(852)-3598 6538</p> </el-col>

        <el-col :sm="24" :md="6">
          <p>傳真</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>(852)-3598 6539</p>
        </el-col>

        <el-col :sm="24" :md="6">
          <p>WhatsApp</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>(852)-5396-2553</p>
        </el-col>

        <el-col :sm="24" :md="6">
          <p>電郵</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>info@langenholiday.com</p>
        </el-col>
      </el-row>
      <img src="../../assets/icon-cs.png" class="icon-cs" alt="" />
    </div>
  </base-container>
</template>

<style scoped>
.contact-info {
  color: #999;
  margin-top: 2rem;
  padding-bottom: 4rem;
  position: relative;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.contact-info h2 {
  font-size: 24px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 0.5rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.contact-info .el-row {
  margin-top: 2rem;
  /* align-items: center; */
}

.contact-info .el-row .el-col {
  margin-bottom: 0.5rem;
}

.contact-info .icon-cs {
  width: 50px;
  position: absolute;
  right: 0;
  bottom: 20px;
}

@media screen and (max-width: 991px) {
  .contact-info .el-row .el-col {
    margin-bottom: 1rem;
  }
}

/* .contact-info .el-row p span {
  margin-left: 12rem;
} */
</style>