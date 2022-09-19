<template>
  <base-container>
    <div class="list-content">
      <el-row>
        <el-col>
          <div class="list">
            <h1>{{ $t("precautions") }}</h1>
            <el-card class="box-card">
              <div v-html="selectedHotel.basicInfo.thingsToNote"></div>
              <!-- <ul>
                <li>
                  •
                  {{ selectedHotel.basicInfo.thingsToNote }}
                </li>
                <template
                  v-for="note in selectedHotel.hotelNotes"
                  :key="note.id"
                >
                  <li v-if="note.isNote === true">
                    •
                    {{ note.details }}
                  </li>
                </template>
              </ul> -->
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>{{ $t("cancellation_policy") }}</h1>
            <el-card class="box-card">
              <div v-html="selectedHotel.basicInfo.cancelPolicy"></div>

              <!-- <ul>
                <li>
                  •
                  {{ selectedHotel.basicInfo.cancelPolicy }}
                </li>
                <template
                  v-for="note in selectedHotel.hotelNotes"
                  :key="note.id"
                >
                <li v-if="note.isCancelPolicy === true">
                  •
                  {{ note.details }}
                </li>
                </template>
              </ul> -->
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>{{ $t("severe_weather_management") }}</h1>
            <el-card class="box-card last">
              <div v-html="selectedHotel.basicInfo.badWeatherArrangement"></div>

              <!-- <p>
                •
                {{ selectedHotel.basicInfo.badWeatherArrangement }}
              </p> -->
              <!-- <template v-for="note in selectedHotel.hotelNotes" :key="note.id">
                <p v-if="note.isBadWeather === true">
                  •
                  {{ note.details }}
                </p>
              </template> -->
              <img @click="openDialog" src="../../assets/icon-cs.png" alt="" />
            </el-card>
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
                  歡迎與我們聯繫！ 閣下可通過以下方式與我們聯絡，或致電 (852)
                  3598 6538查詢。
                </p>
              </div>
              <div class="body">
                <a
                  href="//api.whatsapp.com/send?phone=85253962553&text=From Langen Holiday"
                  target="_blank"
                >
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
                </a>
                <a href="mailto:info@langenholiday.com" target="_blank">
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
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-checkbox
            v-model="isAgreed"
            label="我同意本頁顯示的金額，也同意注意事項，取消政策和惡劣天氣安排以及網站使用條款"
            size="large"
            >{{ $t("agreement")
            }}<span
              @click.stop="$router.push('/terms-and-conditions')"
              class="terms-of-use"
              >{{ $t("terms_of_use") }}</span
            ></el-checkbox
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button :disabled="!isAgreed" @click="reserve" class="submit">{{
            $t("submit")
          }}</el-button>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import { ElNotification } from "element-plus";
import moment from "moment";

export default {
  props: ["bookingInfo"],
  data() {
    return {
      isDialogOpen: false,
      isAgreed: false,
    };
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    selectedServices() {
      return this.$store.getters["booking/selectedServices"];
    },
    timeslotids() {
      return this.$store.getters.timeslotids;
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
    petQty() {
      return this.$store.getters["booking/petQty"];
    },

    dateSelected() {
      return this.$store.getters.dateSelected;
    },
    checkInDate() {
      return moment(this.dateSelected.start).format("YYYYMMDD");
      // return moment(this.dateSelected.start).locale("zh-cn").format("ll");
    },
    checkOutDate() {
      return moment(this.dateSelected.end).format("YYYYMMDD");
      // return moment(this.dateSelected.end).locale("zh-cn").format("ll");
    },
    discountData() {
      return this.$store.getters["booking/discountData"];
    },
    numberOfRooms() {
      return this.$store.getters.numberOfRooms;
    },
    selectedTimeslot() {
      return this.selectedHotel.timeslots.filter(
        (time) => time.timeslotId === this.timeslotids
      );
    },
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    async reserve() {
      console.log(this.childrenAge);
      console.log(Object.values(this.childrenAge));
      console.log(this.bookingInfo);
      const tempObject = { ...this.bookingInfo };
      delete tempObject.specialRequest;
      delete tempObject.englishNameTitle;
      delete tempObject.chineseNameTitle;
      // console.log(tempObject);
      // console.log(this.bookingInfo);
      // console.log(this.selectedHotel);
      let str = JSON.stringify(this.bookingInfo, (k, v) =>
        v === null ? "" : v
      );
      let str2 = JSON.stringify(tempObject, (k, v) => (v === null ? "" : v));
      console.log(JSON.parse(str));
      const userInfo = JSON.parse(str);
      // tempObject

      const isEmpty = Object.values(JSON.parse(str2)).some(
        (item) => item === "" || item === null
      );
      console.log(isEmpty);

      const childrenQty = this.numberOfChildren ? this.numberOfChildren : 0;
      const discount =
        Object.keys(this.discountData).length > 0
          ? this.discountData.discount
          : 0;
      const totalPrice =
        this.selectedHotel.priceOfSelectedDate -
        discount +
        this.selectedHotel.totalSelectedAddlServiceCharge +
        ".00";
      const couponId =
        Object.keys(this.discountData).length > 0
          ? this.discountData.couponId
          : null;
      const arr = [];

      this.childrenAge.forEach((item) => {
        item.forEach((i) => {
          arr.push(i);
        });
      });

      console.log(this.childrenAge);

      const data = {
        nameInChinese: userInfo.chineseName ? userInfo.chineseName : "",
        nameInEnglish: userInfo.englishName ? userInfo.englishName : "",
        email: userInfo.email,
        telNo: userInfo.telephone,
        specialRequest: userInfo.specialRequest ? userInfo.specialRequest : "",
        guestQty: this.numberOfAdults + childrenQty,
        adultQty: this.numberOfAdults,
        childrenQty: childrenQty,
        childrenAge: arr,
        // childrenAge: this.childrenAge,
        // childrenAge: Object.values(this.childrenAge),
        petsQty: this.petQty ? this.petQty : 0,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        // checkInDate: moment(this.checkInDate).format("YYYYMMDD"),
        // checkOutDate: moment(this.checkOutDate).format("YYYYMMDD"),
        roomPrice: this.selectedHotel.priceOfSelectedDate,
        addlService: this.selectedServices,
        totalPrice: totalPrice,
        pricePayNow: totalPrice,
        pricePayCheckIn: totalPrice - totalPrice,
        depoit: 0.0,
        hotelId: this.selectedHotel.basicInfo.hotelId,
        totalAddlServiceCharge:
          this.selectedHotel.totalSelectedAddlServiceCharge,
        roomQty: this.numberOfRooms,
        couponId: couponId,
        timeslotId: this.timeslotids ? this.timeslotids : "",
        timeslot: this.timeslotids
          ? `${this.selectedTimeslot[0].checkInTime}-${this.selectedTimeslot[0].checkOutTime}`
          : "",
      };
      console.log(this.selectedServices);
      console.log(this.selectedHotel);
      console.log(data);

      if (isEmpty || Object.values(JSON.parse(str)).length <= 0) {
        ElNotification({
          title: "Error",
          message: "請在上方輸入您的詳細信息",
          type: "error",
        });
      } else {
        await this.$store.dispatch("booking/makeReservation", data).then(() => {
          ElNotification({
            title: "Success",
            message: "已預訂",
            type: "success",
          });
          this.$store.dispatch("resetIsHavePets");
          this.$router.replace("/");
          this.$store.commit("AUTHENTICATED_TO_RESERVE", false);
        });
      }
    },
  },
  created() {
    console.log(this.selectedHotel);
  },
};
</script>

<style>
.reservation .list-content {
  margin-bottom: 2rem;
}

.reservation .list-content .el-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}
.reservation .list {
  margin-top: 3rem;
  position: relative;
  /* margin-bottom: 1rem; */
}

.reservation .list .box-card.last {
  position: relative;
}

.reservation .list .box-card.last img {
  position: absolute;
  width: 50px;
  right: 0;
  bottom: 0;
  cursor: pointer;
  margin-top: 1rem;
}

.reservation .contact-us-list {
  position: absolute;
  right: 0;
  top: -10.5rem;
  max-width: 300px;
}

.reservation .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.reservation .contact-us-list .header .close {
  text-align: end;
}

.reservation .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.reservation .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.reservation .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px;
  margin-bottom: 1rem;
}

.reservation .contact-us-list .body .grey img {
  width: 50px;
}

.reservation .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  /* font-size: 14px; */
}

.reservation .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

.reservation .list .el-card {
  border: none;
}

.reservation .list .el-card .el-card__body {
  margin-bottom: 2rem;
}

.reservation .list h1 {
  font-size: 24px;
  margin-bottom: 1rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.reservation .list ul {
  padding-left: 2rem;
  list-style-type: none;
}

.reservation .list ul li {
  margin-bottom: 1rem;
  letter-spacing: 0px;
  color: #8d8d8d;
}

.reservation .list p {
  color: #8d8d8d;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.reservation .el-checkbox {
  margin-top: 1rem;
  padding-left: 20px;
}

.reservation .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 18px;
  height: 18px;
  border: 1px solid black;
}

.reservation .el-checkbox .el-checkbox__inner::after {
  top: 3px;
  left: 6px;
}

.reservation .el-checkbox .el-checkbox__label {
  color: #8d8d8d;
  white-space: normal;
}

.reservation .el-checkbox span.terms-of-use {
  color: #fd9a1a;
  text-decoration: underline;
}

.reservation .el-button--default.submit {
  width: 100%;
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  border-radius: 5px;
  color: #fff;
  margin-top: 2rem;
  font-size: 28px;
  font-family: Noto Sans Mono CJK TC;
  letter-spacing: 5.6px;
  padding: 1.5rem 0;
}

@media screen and (max-width: 1024px) {
  .contact-us-list {
    top: -7.5rem;
  }
}

@media screen and (max-width: 540px) {
  .contact-us-list {
    top: -3rem;
  }
}

@media screen and (max-width: 414px) {
  .contact-us-list {
    top: -3rem;
  }
}

@media screen and (max-width: 375px) {
  .contact-us-list {
    top: 1.5rem;
  }
}
</style>