<template>
  <div class="right-section">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="selectedHotel.basicInfo.thumbnail" class="image" />
      <div style="padding: 14px">
        <div class="title">
          <p>{{ selectedHotel.basicInfo.name }}</p>
        </div>
        <div class="days-of-stay">
          <el-row>
            <el-col :span="10">
              <p class="info">人數:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">
                {{ numberOfAdults === "" ? 0 : numberOfAdults }}位成人 +
                {{ numberOfChildren === "" ? 0 : numberOfChildren }}位兒童
              </p>
            </el-col>
            <template v-for="(age, key) in childrenAge[0]" :key="age">
              <el-col :span="10">
                <!-- <p class="info">兒童1年齡:</p> -->
                <p class="info">{{ childrenAge.length > 0 ? key : "1" }}</p>
              </el-col>
              <el-col :span="14">
                <!-- <p class="data">8</p> -->
                <p class="data">{{ childrenAge.length > 0 ? age : "1" }}</p>
              </el-col>
            </template>
            <!-- <el-col :span="8">
              <p class="info">兒童2年齡:</p>
            </el-col>
            <el-col :span="16">
              <p class="data">9</p>
            </el-col>
            <el-col :span="8">
              <p class="info">兒童3年齡:</p>
            </el-col>
            <el-col :span="16">
              <p class="data">10</p>
            </el-col> -->
            <el-col :span="10">
              <p class="info">寵物:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">{{ petQty === "" ? 0 : petQty }}</p>
            </el-col>
            <el-col :span="10">
              <p class="info">入住日期:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">{{ checkInDate }} - {{ checkOutDate }}</p>
              <!-- <p class="data">2021年5月22日 - 2021年5月23日</p> -->
            </el-col>
            <el-col :span="10" v-if="timeslotids">
              <p class="info">登記時間:</p>
            </el-col>
            <el-col :span="14" v-if="timeslotids">
              <p class="data">
                {{ selectedTimeslot[0].checkInTime }} -
                {{ selectedTimeslot[0].checkOutTime }}
              </p>
            </el-col>
            <el-col :span="10">
              <p class="info">房間數量:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">
                {{ numberOfRooms }}
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="price-single">
          <el-row>
            <el-col :span="10">
              <p class="info">原價:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">HK${{ selectedHotel.priceOfSelectedDate }}.00</p>
            </el-col>
            <el-col :span="10">
              <p class="info">折扣:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">HK$0.00</p>
            </el-col>
          </el-row>
        </div>
        <div class="price-per-item" v-if="selectedServices.length > 0">
          <el-row>
            <template v-for="service in selectedServices" :key="service">
              <el-col :span="10">
                <!-- <p class="info">寵物留宿:</p> -->
                <p class="info">{{ service.amenitiesCode }}:</p>
              </el-col>
              <el-col :span="14">
                <!-- <p class="data">2</p> -->
                <p class="data">{{ service.quantity }}</p>
              </el-col>

              <el-col :span="10">
                <p class="info">寵物留宿附加費:</p>
              </el-col>
              <el-col :span="14">
                <p class="data">HK${{ service.unitCharge }}.00</p>
              </el-col>
            </template>
          </el-row>
        </div>
        <div class="total-price">
          <el-row>
            <el-col :span="12">
              <p class="info">總價格(已包含稅款及服務費):</p>
            </el-col>
            <el-col :span="10">
              <!-- <p class="end">HK$1480.00</p> -->
              <p class="end">
                HK${{ selectedHotel.priceOfSelectedDate - 0 + amount }}.00
              </p>
            </el-col>
            <el-col :span="12">
              <p class="info">現需繳付:</p>
            </el-col>
            <el-col :span="10">
              <!-- <p class="end">HK$1480.00</p> -->
              <p class="end">
                HK${{ selectedHotel.priceOfSelectedDate - 0 + amount }}.00
              </p>
            </el-col>
            <el-col :span="12">
              <p class="info">入住時需繳付:</p>
            </el-col>
            <el-col :span="10">
              <!-- <p class="end">HK$0.00</p> -->
              <p class="end">
                HK${{
                  selectedHotel.priceOfSelectedDate -
                  0 +
                  amount -
                  (selectedHotel.priceOfSelectedDate - 0 + amount)
                }}.00
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="tax">
          <el-row>
            <el-col :span="10">
              <p class="info">按金:</p>
            </el-col>
            <el-col :span="14">
              <p class="data">
                HK${{
                  selectedHotel.basicInfo.deposit === null
                    ? 0
                    : selectedHotel.basicInfo.deposit
                }}.00
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
    <el-row>
      <el-col>
        <label class="input-label">折扣代碼:</label>
        <el-input v-model="couponCode" size="large"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button @click="applyCoupon">使用折扣代碼</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      arr: [],
      couponCode: "",
    };
  },
  computed: {
    responses: {
      get() {
        return this.$store.getters.responses;
      },
      set(value) {
        this.$store.dispatch("changeService", value);
        console.log(value);
      },
    },
    timeslotids() {
      return this.$store.getters.timeslotids;
    },
    selectedTimeslot() {
      return this.selectedHotel.timeslots.filter(
        (time) => time.timeslotId === this.timeslotids
      );
    },
    numberOfRooms() {
      return this.$store.getters.numberOfRooms;
    },
    petQty() {
      return this.$store.getters["booking/petQty"];
    },
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    numberOfChildren() {
      return this.$store.getters["booking/numberOfChildren"];
    },
    numberOfAdults() {
      return this.$store.getters["booking/numberOfAdults"];
    },
    childrenAge() {
      return this.$store.getters["booking/childrenAge"];
    },
    dateSelected() {
      return this.$store.getters.dateSelected;
    },
    checkInDate() {
      return moment(this.dateSelected.start).locale("zh-cn").format("ll");
    },
    checkOutDate() {
      return moment(this.dateSelected.end).locale("zh-cn").format("ll");
    },
    selectedServices() {
      return this.$store.getters["booking/selectedServices"];
    },
    amount() {
      if (this.selectedServices.length > 0) {
        this.selectedServices.forEach((item) =>
          // this.arr.push({ price: item.unitCharge, qty: item.quantity })
          this.arr.push(item.unitCharge * item.quantity)
        );
        return this.arr
          .map((num) => Number(num))
          .map((item) => item)
          .reduce((prev, next) => prev + next);
      } else {
        return 0;
      }

      // return { ...this.arr };
    },
  },
  methods: {
    async applyCoupon() {
      const data = {
        couponCode: this.couponCode,
        hotelId: this.$route.params.id,
        price: this.selectedHotel.priceOfSelectedDate,
      };
      console.log(data);
      await this.$store
        .dispatch("booking/applyCoupon", data)
        .then(() => {
          console.log("successful");
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
        });
    },
  },
  mounted() {
    console.log(this.amount);
    console.log(this.selectedServices);
  },
};
</script>

<style>
.reservation .right-section {
  margin-bottom: 2rem;
}

.reservation .right-section label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
}

.reservation .right-section .info,
.reservation .right-section .data {
  color: #8d8d8d;
}

.reservation .right-section .info {
  letter-spacing: 2.2px;
}

.reservation .right-section .data {
  letter-spacing: 1.1px;
}

.reservation .right-section .el-input {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}

.reservation .right-section .el-input .el-input__inner {
  border: none;
}

.reservation .right-section .el-card .image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.reservation .right-section .el-card .tax {
  padding-bottom: 1rem;
}

.reservation .right-section .el-card .title,
.reservation .right-section .el-card .days-of-stay,
.reservation .right-section .el-card .price-single,
.reservation .right-section .el-card .total-price,
.reservation .right-section .el-card .price-per-item {
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 1rem;
}

.reservation .right-section .el-card .title p {
  font-size: 24px;
  letter-spacing: 3.3px;
  color: #8d8d8d;
}

.reservation .right-section .el-card .days-of-stay,
.reservation .right-section .el-card .price-single,
.reservation .right-section .el-card .total-price,
.reservation .right-section .el-card .tax,
.reservation .right-section .el-card .price-per-item {
  padding-top: 1rem;
}

.reservation .right-section .el-card .days-of-stay .el-col {
  margin-bottom: 0.5rem;
}

.reservation .right-section .el-card .days-of-stay p,
.reservation .right-section .el-card .price-single p,
.reservation .right-section .el-card .total-price p,
.reservation .right-section .el-card .tax p,
.reservation .right-section .el-card .price-per-item {
  /* font-size: 14px; */
  color: #8d8d8d;
}

.reservation .right-section .el-card .total-price .el-col {
  margin-bottom: 1rem;
}

.reservation .right-section .el-card .total-price .end {
  letter-spacing: 0px;
  color: #fd9a1a;
  font-size: 24px;
  text-align: end;
}

.reservation .right-section .el-button--default {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  margin-top: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  letter-spacing: 2.2px;
  border-radius: 5px;
}

.reservation .input-label {
  letter-spacing: 2.2px;
  color: #8d8d8d;
}
</style>