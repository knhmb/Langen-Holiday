<template>
  <base-container>
    <div class="banks">
      <h2>{{ paymentContent.title }}</h2>
      <div v-html="paymentContent.content"></div>
      <!-- <div class="all-bank">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">1.香港銀行入賬號碼</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-hsbc.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>銀行名稱：匯豐銀行</p>
            <p>戶口名稱：LANGEN HOLIDAY COMPANY</p>
            <p>戶口號碼：047-880430-838</p>
          </el-col>
        </el-row>
        <el-row class="single-bank">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-bochk.png" alt="" />
          </el-col>
          <el-col :sm="24" class="bank-info" :md="16">
            <p>銀行名稱：中國銀行</p>
            <p>戶口名稱：LANGEN HOLIDAY COMPANY</p>
            <p>戶口號碼：012-706-1032-8273</p>
          </el-col>
        </el-row>
      </div>
      <div class="all-bank second">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">2.轉數快FPS 或 支付寶 或 PAYME 付款</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payment-fps.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>識別碼 ID : 9742909</p>
          </el-col>
        </el-row>
        <el-row class="single-bank">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payment-alipay.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>如客人使用支付寶電子錢包付款，請先聯絡本公司</p>
          </el-col>
        </el-row>
        <el-row class="single-bank tall">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payme-payme.png" alt="" />
          </el-col>
          <el-col class="bank-info payme" :sm="24" :md="16">
            <p>你可以通過PAYME掃一掃付款</p>
            <img src="../../assets/Payme-qr-code.jpeg" alt="" />
          </el-col>
        </el-row>
      </div>
      <div class="all-bank third">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">3.僅在中國境內付款時使用</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-icbc.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>銀行名稱：中國工商銀行</p>
            <p>帳戶名稱：歐珮妍</p>
            <p>戶口號碼：6222-0236-0200-4507661</p>
            <p class="space">
              提示: 於國內任何工商銀行分行辦理入帳手續，款項可即時到帳!!
            </p>
          </el-col>
        </el-row>
      </div> -->
      <img
        @click="openDialog"
        src="../../assets/icon-cs.png"
        class="cs-icon"
        alt=""
      />
      <div v-if="isDialogOpen" class="contact-us-list">
        <div class="header">
          <div class="close">
            <img
              @click="closeDialog"
              class="close-icon"
              src="../../assets/icon-close.png"
              alt=""
            />
          </div>
          <p>
            歡迎與我們聯繫！ 閣下可通過以下方式與我們聯絡，或致電 (852) 3598
            6538查詢。
          </p>
        </div>
        <div class="body">
          <div class="grey">
            <el-row :gutter="30">
              <el-col :span="5">
                <img
                  class="whats-img"
                  src="../../assets/icon-whatsapp.png"
                  alt=""
                />
              </el-col>
              <el-col :span="19">
                <p>WhatsApp</p>
                <p>(852) 5396 2553</p>
              </el-col>
            </el-row>
          </div>
          <div class="grey">
            <el-row :gutter="30">
              <el-col :span="5">
                <img
                  class="whats-img"
                  src="../../assets/icon-email.png"
                  alt=""
                />
              </el-col>
              <el-col :span="19">
                <p>Email</p>
                <p>info@langenholiday.com</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  computed: {
    paymentContent() {
      return this.$store.getters["dashboard/paymentContent"];
    },
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getPaymentContent");
  },
};
</script>

<style scoped>
.banks {
  color: #999;
  padding-top: 3rem;
  padding-bottom: 6rem;
  position: relative;
}

.banks :deep(.all-bank) {
  border-bottom: 1px solid #999;

  /* padding-bottom: 2rem; */
}

.banks .all-bank.second {
  /* padding-bottom: 4rem; */
}

.banks :deep(.el-row) {
  align-items: center;
}

.banks :deep(h2) {
  font-size: 24px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 0.5rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.banks :deep(.single-bank) {
  margin-bottom: 3rem;
}

.banks :deep(.single-bank.tall) {
  margin-top: 4.5rem;
}

.banks :deep(.single-bank .bank-title) {
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  letter-spacing: 3px;
  color: #8d8d8d;
}

.banks :deep(.single-bank img) {
  width: 150px;
}

.banks :deep(.single-bank .bank-info) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banks :deep(.single-bank .bank-info .space) {
  margin-top: 2rem;
}

.banks :deep(.single-bank .bank-info p) {
  margin-left: 6rem;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.banks :deep(.single-bank .bank-info::before) {
  content: "";
  position: absolute;
  background-color: black;
  height: 75px;
  width: 1px;
}

.banks :deep(.single-bank .bank-info.payme::before) {
  content: "";
  position: absolute;
  background-color: black;
  height: 190px;
  width: 1px;
}

.banks :deep(.single-bank .bank-info.payme img) {
  margin-left: 6rem;
}

.banks :deep(.all-bank.third .single-bank) {
  margin: 0;
}

.banks :deep(.all-bank.third .single-bank .bank-info::before) {
  content: "";
  position: absolute;
  background-color: black;
  height: 125px;
  width: 1px;
}

.banks :deep(.all-bank.third) {
  border: none;
}

.banks .cs-icon {
  position: absolute;
  width: 50px;
  right: 0;
  bottom: 20px;
  cursor: pointer;
}

.banks .img-cs {
  width: 50px;
  position: absolute;
  right: 0;
  cursor: pointer;
}

.banks .contact-us-list {
  position: absolute;
  right: 0;
  top: 49.5rem;
  max-width: 300px;
}

.banks .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.banks .contact-us-list .header .close {
  text-align: end;
}

.banks .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.banks .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.banks .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px;
  margin-bottom: 1rem;
}

.banks .contact-us-list .body .grey img {
  width: 50px;
}

.banks .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  /* font-size: 14px; */
}

.banks .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .banks :deep(.single-bank .bank-info::before) {
    display: none;
  }
  .banks :deep(.single-bank .bank-info p),
  .banks :deep(.single-bank .bank-info.payme img) {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .banks :deep(.single-bank .bank-info) {
    align-items: center;
  }

  .banks :deep(.single-bank .bank-info) {
    text-align: center;
  }

  .banks :deep(.single-bank .bank-image) {
    text-align: center;
  }

  .banks .contact-us-list {
    top: 77.5rem;
  }
}

@media screen and (max-width: 820px) {
  .banks .contact-us-list {
    top: 63.5rem;
  }
}

@media screen and (max-width: 768px) {
  .banks .contact-us-list {
    top: 68.5rem;
  }
}

@media screen and (max-width: 540px) {
  .banks .contact-us-list {
    top: 70.5rem;
  }
}

@media screen and (max-width: 414px) {
  .banks .contact-us-list {
    top: 78rem;
  }
}
</style>