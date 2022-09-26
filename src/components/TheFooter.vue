<template>
  <section class="footer">
    <base-container>
      <div class="footer-content">
        <el-row justify="space-between">
          <el-col :sm="24" :lg="11">
            <div class="links">
              <router-link to="/contact-us" custom v-slot="{ href, navigate }">
                <span @click="navigate" :href="href">{{
                  $t("contact_us_text")
                }}</span>
              </router-link>
              <router-link to="/payment" custom v-slot="{ href, navigate }">
                <span @click="navigate" :href="href">{{
                  $t("payment_methods")
                }}</span>
              </router-link>
              <router-link
                to="/terms-and-conditions"
                custom
                v-slot="{ href, navigate }"
              >
                <span @click="navigate" :href="href">{{
                  $t("rules_and_regulations")
                }}</span>
              </router-link>
              <router-link to="/join" custom v-slot="{ href, navigate }">
                <span @click="navigate" :href="href">{{
                  $t("become_our_partner")
                }}</span>
              </router-link>
            </div>
          </el-col>
          <el-col class="payment-method" :sm="24" :lg="5">
            <span>{{ $t("payment_methods") }}</span>
            <img class="payment" src="../assets/footer-payment.png" alt="" />
          </el-col>
          <el-col class="social" :sm="24" :lg="5">
            <span>{{ $t("follow_us") }}</span>
            <div class="social-media">
              <a href="https://www.facebook.com/langenholiday" target="_blank">
                <img src="../assets/icon-facebook.png" alt="" />
              </a>
              <a
                href="https://instagram.com/langenholiday?utm_medium=copy_link"
                target="_blank"
              >
                <img src="../assets/icon-ig.png" alt="" />
              </a>
            </div>
            <!-- <img
              class="social-media"
              src="../assets/footer-social-media.png"
              alt=""
            /> -->
          </el-col>
          <el-col :sm="24" :lg="7">
            <p>
              Copyright © 2005 – 2022 樂程假期公司 <br />
              All Right Reserve
            </p>
          </el-col>
        </el-row>
      </div>
    </base-container>
  </section>
</template>

<style>
.footer {
  /* background-color: orange; */
  background-image: url("../assets/footer-bg.png");
  background-size: cover;
  padding: 4rem 0;
  overflow-x: hidden;
}

.footer-content {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.footer-content .links span {
  cursor: pointer;
}

.footer-content .links span:hover {
  text-decoration: underline;
}

.footer-content span {
  margin-right: 1rem;
  letter-spacing: 4.4px;
  color: #ffffff;
}

.footer-content .payment-method,
.footer-content .social {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content .payment {
  width: 250px;
  margin-top: 0.7rem;
  display: block;
}

.footer-content .social span {
  margin: 0;
}

.footer-content .social-media {
  width: 100%;
  text-align: center;
  margin-top: 0.7rem;
}

.footer-content .social-media img {
  width: 25px;
  display: inline;
  margin-right: 0.5rem;
  cursor: pointer;
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