<template>
  <section class="footer">
    <base-container>
      <div class="footer-content">
        <el-row :gutter="270">
          <el-col :sm="24" :lg="8">
            <span>About</span>
            <span>About</span>
            <span>About</span>
            <span>About</span>
          </el-col>
          <el-col :sm="24" :lg="8">
            <span>About</span>
            <img class="payment" src="../assets/footer-payment.png" alt="" />
          </el-col>
          <el-col :sm="24" :lg="8">
            <span>About</span>
            <img
              class="social-media"
              src="../assets/footer-social-media.png"
              alt=""
            />
          </el-col>
          <el-col :sm="24" :lg="8">
            <p>Copyright &copy; 2005-2021 About All Right Reserve</p>
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
  color: #fff;
  margin-right: 2rem;
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
    font-size: 12px;
  }
}
</style>