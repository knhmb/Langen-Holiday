<template>
  <base-container>
    <div class="banks">
      <h2>Banks</h2>
      <div class="all-bank">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">1. Bank</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-hsbc.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>Name : Lorem ipsum dolor, sit amet</p>
            <p>Company : Langen Holiday Company</p>
            <p>Number : 047-880430838</p>
          </el-col>
        </el-row>
        <el-row class="single-bank">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-bochk.png" alt="" />
          </el-col>
          <el-col :sm="24" class="bank-info" :md="16">
            <p>Name : Lorem ipsum dolor, sit amet</p>
            <p>Company : Langen Holiday Company</p>
            <p>Number : 047-880430838</p>
          </el-col>
        </el-row>
      </div>
      <div class="all-bank second">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">2. Bank</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payment-fps.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>ID : 9742909</p>
          </el-col>
        </el-row>
        <el-row class="single-bank">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payment-alipay.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </el-col>
        </el-row>
        <el-row class="single-bank tall">
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/payme-payme.png" alt="" />
          </el-col>
          <el-col class="bank-info payme" :sm="24" :md="16">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </el-col>
        </el-row>
      </div>
      <div class="all-bank third">
        <el-row class="single-bank">
          <el-col :span="24">
            <p class="bank-title">3. Bank</p>
          </el-col>
          <el-col class="bank-image" :sm="24" :md="8">
            <img src="../../assets/bank-icbc.png" alt="" />
          </el-col>
          <el-col class="bank-info" :sm="24" :md="16">
            <p>
              Name: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Name: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>Number : 6222-0236-0200-4507661</p>
            <p class="space">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
  border-bottom: 1px solid #999;
  padding-bottom: 0.5rem;
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
  height: 155px;
  width: 1px;
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
  .banks .single-bank .bank-info p {
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