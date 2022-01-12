<template>
  <base-container>
    <div class="contact-info">
      <h2>Contact Us</h2>
      <el-row>
        <el-col :sm="24" :md="6">
          <p>Name</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat.
          </p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>Time</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>Mon - Fri 12:00 - 9:00</p>
          <p>Sat : 12:00 - 18:00</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat.
          </p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>Information</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat.
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="24" :md="6">
          <p>Telephone</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"><p>(852)-3598 6538</p> </el-col>

        <el-col :sm="24" :md="6">
          <p>Fax</p>
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
          <p>Email</p>
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
}

.contact-info h2 {
  font-size: 24px;
  border-bottom: 1px solid #999;
  padding-bottom: 0.5rem;
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