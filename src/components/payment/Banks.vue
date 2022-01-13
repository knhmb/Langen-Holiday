<template>
  <base-container>
    <div class="banks">
      <h2>付款方式</h2>
      <div class="all-bank">
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
            <img src="https://i.stack.imgur.com/WVxGw.png" alt="" />
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
      </div>
      <img src="../../assets/icon-cs.png" class="cs-icon" alt="" />
    </div>
  </base-container>
</template>

<style scoped>
.banks {
  color: #999;
  padding-top: 3rem;
  padding-bottom: 6rem;
  position: relative;
}

.banks .all-bank {
  border-bottom: 1px solid #999;

  /* padding-bottom: 2rem; */
}

.banks .all-bank.second {
  /* padding-bottom: 4rem; */
}

.banks .el-row {
  align-items: center;
}

.banks h2 {
  font-size: 24px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 0.5rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.banks .single-bank {
  margin-bottom: 3rem;
}

.banks .single-bank.tall {
  margin-top: 4.5rem;
}

.banks .single-bank .bank-title {
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  letter-spacing: 3px;
  color: #8d8d8d;
}

.banks .single-bank img {
  width: 150px;
}

.banks .single-bank .bank-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banks .single-bank .bank-info .space {
  margin-top: 2rem;
}

.banks .single-bank .bank-info p {
  margin-left: 6rem;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.banks .single-bank .bank-info::before {
  content: "";
  position: absolute;
  background-color: black;
  height: 75px;
  width: 1px;
}

.banks .single-bank .bank-info.payme::before {
  content: "";
  position: absolute;
  background-color: black;
  height: 190px;
  width: 1px;
}

.banks .single-bank .bank-info.payme img {
  margin-left: 6rem;
}

.banks .all-bank.third .single-bank {
  margin: 0;
}

.banks .all-bank.third .single-bank .bank-info::before {
  content: "";
  position: absolute;
  background-color: black;
  height: 125px;
  width: 1px;
}

.banks .all-bank.third {
  border: none;
}

.banks .cs-icon {
  position: absolute;
  width: 50px;
  right: 0;
  bottom: 20px;
}

@media screen and (max-width: 768px) {
  .banks .single-bank .bank-info::before {
    display: none;
  }
  .banks .single-bank .bank-info p,
  .banks .single-bank .bank-info.payme img {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .banks .single-bank .bank-info {
    align-items: center;
  }

  .banks .single-bank .bank-info {
    text-align: center;
  }

  .banks .single-bank .bank-image {
    text-align: center;
  }
}
</style>