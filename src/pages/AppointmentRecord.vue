<template>
  <div class="appointment-record" v-for="rate in rates" :key="rate.id">
    <el-row>
      <el-col :sm="24" :lg="8">
        <img :src="rate.image" alt="" />
      </el-col>
      <el-col :sm="24" :lg="16">
        <div class="card-content">
          <div class="head">
            <el-row>
              <el-col :span="12">
                <h3>{{ rate.title }}</h3>
                <p>{{ rate.description }}</p>
              </el-col>
              <el-col class="btn-alignment" :span="12">
                <el-button @click="openDialog(rate.id)">詳細</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="number-of-individuals">
            <el-row>
              <el-col :span="12">
                <p>人數:</p>
                <p>{{ rate.noOfPeople }}</p>
              </el-col>
              <el-col :span="12">
                <p>寵物:</p>
                <p>{{ rate.pets }}</p>
              </el-col>
              <el-col :span="8">
                <p>兒童1年齡:</p>
                <p>8</p>
              </el-col>
              <el-col :span="8">
                <p>兒童2年齡:</p>
                <p>9</p>
              </el-col>
              <el-col :span="8">
                <p>兒童3年齡:</p>
                <p>10</p>
              </el-col>
            </el-row>
          </div>
          <div class="days-of-stay">
            <el-row>
              <el-col :span="12">
                <p>入住日期:</p>
                <p>{{ rate.checkInDate }}</p>
              </el-col>
              <el-col :span="12">
                <p>離開日期:</p>
                <p>{{ rate.checkOutDate }}</p>
              </el-col>
            </el-row>
          </div>
          <div class="total-price-with-tax">
            <el-row>
              <el-col>
                <p>總價格(已包含稅款及服務費):</p>
              </el-col>
              <el-col>
                <p class="price-after-tax">HK$1480.00</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="appointment-record-dialog">
    <el-dialog v-model="dialogFormVisible" title="白沙灣渡假酒店">
      <div class="number-of-individuals">
        <el-row>
          <el-col :span="12">
            <p>人數:</p>
            <p>2位成人 + 3位兒童</p>
          </el-col>
          <el-col :span="12">
            <p>寵物:</p>
            <p>2</p>
          </el-col>
          <el-col :span="8">
            <p>兒童1年齡:</p>
            <p>8</p>
          </el-col>
          <el-col :span="8">
            <p>兒童2年齡:</p>
            <p>9</p>
          </el-col>
          <el-col :span="8">
            <p>兒童3年齡:</p>
            <p>10</p>
          </el-col>
        </el-row>
      </div>
      <div class="days-of-stay">
        <el-row>
          <el-col :span="12">
            <p>入住日期:</p>
            <p>2021年5月22日 15:00</p>
          </el-col>
          <el-col :span="12">
            <p>離開日期:</p>
            <p>2021年5月22日 12:00</p>
          </el-col>
        </el-row>
      </div>
      <div class="pricing">
        <el-row>
          <el-col :span="12">
            <p>原價:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK$1280.00</p>
          </el-col>
          <el-col :span="12">
            <p>折扣:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK$0.00</p>
          </el-col>
        </el-row>
      </div>
      <div class="pet-info">
        <el-row>
          <el-col :span="12">
            <p>寵物留宿:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">2</p>
          </el-col>
          <el-col :span="12">
            <p>寵物留宿附加費:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK$200.00</p>
          </el-col>
        </el-row>
      </div>
      <div class="full-price">
        <el-row>
          <el-col :span="14">
            <p>總價格(已包含稅款及服務費):</p>
          </el-col>
          <el-col :span="10">
            <p class="price-colored">HK$1480.00</p>
          </el-col>
          <el-col :span="12">
            <p>現需繳付:</p>
          </el-col>
          <el-col :span="12">
            <p class="price-colored">HK$1480.00</p>
          </el-col>
          <el-col :span="12">
            <p>入住時需繳付:</p>
          </el-col>
          <el-col :span="12">
            <p class="price-colored">HK$0.00</p>
          </el-col>
        </el-row>
      </div>
      <div class="deposit">
        <el-row>
          <el-col :span="12">
            <p>按金:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK$200.00</p>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      rates: [
        {
          id: 1,
          title: "白沙灣渡假酒店",
          description: "香港新界西貢區白沙灣",
          noOfPeople: "2位成人 + 3位兒童",
          pets: 2,
          checkInDate: "2021年5月22日 15:00",
          checkOutDate: "2021年5月22日 12:00",
          image: require("../assets/img-house1.jpg"),
        },
        {
          id: 2,
          title: "白沙灣渡假酒店",
          description: "香港新界西貢區白沙灣",
          noOfPeople: "2位成人 + 3位兒童",
          pets: 2,
          checkInDate: "2021年5月22日 15:00",
          checkOutDate: "2021年5月22日 12:00",
          image: require("../assets/img-house2.jpg"),
        },
      ],
    };
  },
  methods: {
    openDialog() {
      this.dialogFormVisible = true;
    },
  },
};
</script>

<style>
.edit-profile .appointment-record {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 1rem;
}

.edit-profile .appointment-record img {
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.edit-profile .appointment-record .card-content {
  padding: 1rem;
}

.edit-profile .appointment-record .head {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record .head h3 {
  letter-spacing: 1.4px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record .head p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
}

.edit-profile .appointment-record .head .btn-alignment {
  text-align: end;
}

.edit-profile .appointment-record .head .el-button {
  border-color: #707070;
  color: #707070;
  letter-spacing: 2px;
  text-align: end;
  padding: 0 2rem;
}

.edit-profile .appointment-record .number-of-individuals .el-col {
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record .number-of-individuals,
.edit-profile .appointment-record .days-of-stay,
.edit-profile .appointment-record .total-price-with-tax {
  margin-top: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record .total-price-with-tax {
  border: none;
}

.edit-profile .appointment-record .number-of-individuals p,
.edit-profile .appointment-record .days-of-stay p,
.edit-profile .appointment-record .total-price-with-tax p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 14px;
}

.edit-profile .appointment-record .total-price-with-tax .price-after-tax {
  letter-spacing: 0px;
  color: #fd9a1a;
  font-size: 24px;
  font-weight: bold;
}

.edit-profile .appointment-record-dialog .el-dialog {
  min-width: 350px;
  max-width: 400px;
}

.edit-profile .appointment-record-dialog .el-dialog .el-dialog__body {
  padding: 16px;
}

.edit-profile .appointment-record-dialog .el-dialog .el-dialog__title {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  letter-spacing: 1.4px;
  font-weight: bold;
  color: #3e3e3e;
  display: block;
}

.edit-profile .appointment-record-dialog .el-dialog .el-dialog__title::after {
  content: "香港新界西貢區白沙灣";
  display: block;
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
}

.edit-profile .appointment-record-dialog .number-of-individuals .el-col {
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .number-of-individuals,
.edit-profile .appointment-record-dialog .days-of-stay,
.edit-profile .appointment-record-dialog .pricing,
.edit-profile .appointment-record-dialog .pet-info,
.edit-profile .appointment-record-dialog .full-price {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.edit-profile .appointment-record-dialog .deposit {
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .number-of-individuals p,
.edit-profile .appointment-record-dialog .days-of-stay p,
.edit-profile .appointment-record-dialog .deposit p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .pricing p,
.edit-profile .appointment-record-dialog .pet-info p,
.edit-profile .appointment-record-dialog .full-price p {
  letter-spacing: 2px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .pricing .price,
.edit-profile .appointment-record-dialog .pet-info .price,
.edit-profile .appointment-record-dialog .deposit .price,
.edit-profile .appointment-record-dialog .full-price .price-colored {
  letter-spacing: 0;
  text-align: end;
}

.edit-profile .appointment-record-dialog .full-price .price-colored {
  color: #fd9a1a;
}
</style>