<template>
  <base-container>
    <div class="services-provided">
      <h2>Services</h2>
      <div>
        <p>item</p>
        <el-row>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-wifi.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-bodywash.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-shampoo.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-dryer.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-tv.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-terrace.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-grill.png" alt="" />
          </el-col>
        </el-row>
      </div>
      <div class="not-provided-services">
        <p>item</p>
        <el-row>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-cross.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-towel.png" alt="" />
          </el-col>
          <el-col class="items" :span="3">
            <img src="../../assets/icon-cross.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-shoes.png" alt="" />
          </el-col>
        </el-row>
      </div>
      <div class="beds">
        <p>Beds</p>
        <el-row>
          <el-col :span="3" class="items">
            <span>Bed x1</span>
            <img src="../../assets/icon-bed.png" alt="" />
          </el-col>
        </el-row>
      </div>
    </div>
  </base-container>
</template>

<style scoped>
.services-provided {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 2rem;
}

.services-provided h2 {
  color: orange;
  margin-bottom: 0.5rem;
}

.services-provided p {
  margin-bottom: 0.6rem;
  font-size: 14px;
}

.services-provided .items {
  display: flex;
  align-items: center;
}

.services-provided .items span {
  font-size: 12px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.services-provided .items img {
  width: 20px;
}

.services-provided .not-provided-services {
  margin-top: 1.5rem;
}

.services-provided .beds p {
  margin-top: 2rem;
  color: orange;
  font-size: 20px;
}
</style>