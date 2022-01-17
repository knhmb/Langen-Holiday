<template>
  <base-container>
    <div class="services-provided">
      <h2>設施</h2>
      <div>
        <p>免費</p>
        <el-row>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>wifi</span>
            <img src="../../assets/icon-wifi.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>沐浴露</span>
            <img src="../../assets/icon-bodywash.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>洗頭水</span>
            <img src="../../assets/icon-shampoo.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>風筒</span>
            <img src="../../assets/icon-dryer.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>電視</span>
            <img src="../../assets/icon-tv.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>露台</span>
            <img src="../../assets/icon-terrace.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-check.png" alt="" />
            <span>燒烤</span>
            <img src="../../assets/icon-grill.png" alt="" />
          </el-col>
        </el-row>
      </div>
      <div class="not-provided-services">
        <p>免費</p>
        <el-row>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-cross.png" alt="" />
            <span>毛巾(+$20.0)</span>
            <img src="../../assets/icon-towel.png" alt="" />
          </el-col>
          <el-col class="items" :sm="24" :md="3" :lg="3">
            <img src="../../assets/icon-cross.png" alt="" />
            <span>拖鞋(+10.0)</span>
            <img src="../../assets/icon-shoes.png" alt="" />
          </el-col>
        </el-row>
      </div>
      <div class="beds">
        <p>床</p>
        <el-row>
          <el-col :sm="24" :md="3" :lg="3" class="items">
            <span>雙人床 x 1</span>
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
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.services-provided h2 {
  margin-bottom: 0.5rem;
  letter-spacing: 4px;
  color: #fd9a1a;
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
  letter-spacing: 4px;
  color: #fd9a1a;
  font-size: 20px;
}
</style>