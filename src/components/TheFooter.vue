<template>
  <section class="footer">
    <base-container>
      <div class="footer-content">
        <el-row justify="space-between">
          <el-col :sm="24" :lg="11">
            <span>聯絡我們</span>
            <span>付款方法</span>
            <span>條例與細則</span>
            <span>成為合作伙伴</span>
          </el-col>
          <el-col :sm="24" :lg="6">
            <span>付款方式</span>
            <img class="payment" src="../assets/footer-payment.png" alt="" />
          </el-col>
          <el-col :sm="24" :lg="5">
            <span>關注我們</span>
            <img
              class="social-media"
              src="../assets/footer-social-media.png"
              alt=""
            />
          </el-col>
          <el-col :sm="24" :lg="5">
            <p>Copyright © 2005 - 2021 樂程假期公司 All Right Reserve</p>
          </el-col>
        </el-row>
      </div>
    </base-container>
  </section>
</template>

<style>
.footer {
  background-color: orange;
  padding: 4rem 0;
  overflow-x: hidden;
}

.footer-content {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.footer-content span {
  margin-right: 1rem;
  letter-spacing: 4.4px;
  color: #ffffff;
}

.footer-content .payment {
  width: 250px;
  margin-top: 0.7rem;
  display: block;
}

.footer-content .social-media {
  width: 50px;
  margin-top: 0.7rem;
  display: block;
}

.footer-content p {
  margin: 0;
  color: #fff;
  font-size: 14px;
  word-spacing: 1px;
}

@media screen and (max-width: 1024px) {
  .footer-content .el-row .el-col {
    text-align: -webkit-center;
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .footer-content span {
    font-size: 8px;
  }
}
</style>