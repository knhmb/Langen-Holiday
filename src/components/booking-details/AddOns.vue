<template>
  <div class="add-ons">
    <p>附加服務</p>

    <el-row class="add-on-item">
      <el-col :span="12">
        <el-checkbox-group v-model="services">
          <el-checkbox
            :label="service.amenitiesCode"
            @change="
              serviceChanged({
                value: $event,
                index: index,
                name: service.amenitiesCode,
                unitCharge: service.unitCharge,
                id: service.id,
              })
            "
            v-for="(service, index) in selectedHotel.addlService"
            :key="service.id"
            >{{ service.name }}
            <el-select
              @change="
                serviceChanged({
                  value: $event,
                  index: index,
                  name: service.amenitiesCode,
                  unitCharge: service.unitCharge,
                })
              "
              remote
              default-first-option
              v-model="responses['service' + index]"
              :disabled="
                services.length <= 0 ||
                !services.toString().includes(service.amenitiesCode)
              "
              class="additional-services"
              placeholder="選擇"
            >
              <el-option
                v-for="num in parseInt(service.quantity)"
                :key="num"
                :value="
                  service.amenitiesCode + '|' + num + '|' + service.unitCharge
                "
                :label="num"
              >
              </el-option>
            </el-select>
          </el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="12">
        <p
          v-for="service in selectedHotel.addlService"
          :key="service.id"
          class="add-on-price"
        >
          + $ {{ service.unitCharge }}.00
        </p>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col>
        <el-select
          @change="
            serviceChanged({
              value: $event,
              index: index,
              name: service.amenitiesCode,
            })
          "
          remote
          default-first-option
          v-model="responses['service' + index]"
          v-for="(service, index) in selectedHotel.addlService"
          :key="service.id"
          :disabled="
            services.length <= 0 ||
            !services.toString().includes(service.amenitiesCode)
          "
          class="m-2"
          :placeholder="service.name"
        >
          <el-option
            v-for="num in parseInt(service.quantity)"
            :key="num"
            :value="service.amenitiesCode + '|' + num"
            :label="num"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row> -->
  </div>

  <div class="calculated-add-on">
    <el-row class="add-on-item">
      <el-col :span="12">
        <p>附加服務價錢:</p>
      </el-col>
      <el-col :span="12">
        <p class="add-on-price">
          ${{ selectedHotel.totalSelectedAddlServiceCharge }}.00
        </p>
      </el-col>
    </el-row>
  </div>

  <div class="total-price">
    <el-row>
      <el-col :span="14">
        <p>總價格(已包含稅款及服務費):</p>
      </el-col>
      <el-col :span="10" class="final-price"
        >HK${{ selectedHotel.totalPrice }}.00</el-col
      >
      <el-col class="btn-alignment">
        <el-button @click="book">預訂</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  props: ["childAge", "timeSession", "startDate", "endDate"],
  data() {
    return {
      services: [],
      arr: [],
      addlService: [],
      finalArr: [],
      serviceQuantity: "",
      serviceArray: [],
      // responses: {},
      index: "service",
      num: 0,
      dummy: {
        service0: "khaled",
      },
    };
  },
  // watch: {
  //   responses: {
  //     deep: true,
  //     handler(oldVal, newVal) {
  //       console.log(`oldVal ${oldVal}`);
  //       console.log(`newVal ${newVal}`);
  //     },
  //   },
  // },
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
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    dateSelected() {
      return this.$store.getters.dateSelected;
    },
    selectedServices() {
      return this.$store.getters["booking/selectedServices"];
    },
    timeslotids() {
      return this.$store.getters.timeslotids;
    },
    numberOfRooms() {
      return this.$store.getters.numberOfRooms;
    },
    numberOfAdults() {
      return this.$store.getters["booking/numberOfAdults"];
    },
    numberOfChildren() {
      return this.$store.getters["booking/numberOfChildren"];
    },
  },
  methods: {
    serviceChanged({ value, index, name, unitCharge }) {
      this.finalArr = [];
      this.arr = [];
      if (value === false) {
        delete this.responses["service" + index];
        this.arr.splice(index, 1);
      } else if (value === true) {
        this.responses["service" + index] = name + "|" + "1" + "|" + unitCharge;
      }

      console.log(this.responses);
      const selectedServices = Object.values(this.responses);
      console.log(selectedServices);

      selectedServices.filter((item) => {
        this.arr.push({ ...item.split("|").toString().split(",") });
      });

      this.arr.filter((item) => {
        this.finalArr.push(item[0] + "|" + item[1]);
      });
      // let obj = {};

      this.arr.filter((item) => {
        item["amenitiesCode"] = item[0];
        item["quantity"] = item[1];
        item["unitCharge"] = item[2];
        delete item[0];
        delete item[1];
        delete item[2];
      });

      // console.log(obj);

      // console.log("===================================");
      // console.log(this.arr);
      // console.log(this.finalArr);
      // console.log(this.addlService);
      // console.log("===================================");

      const data = {
        hotelId: this.selectedHotel.basicInfo.hotelId,
        checkInDate: moment(this.dateSelected.start).format("YYYYMMDD"),
        checkOutDate: moment(this.dateSelected.end).format("YYYYMMDD"),
        service: this.finalArr.toString(),
        timeslotids: this.timeslotids === "" ? 0 : this.timeslotids,
        roomQty: this.numberOfRooms,
      };
      console.log(data);
      this.$store.dispatch("booking/changedService", data);
      this.$store.dispatch("booking/storeSelectedServices", this.arr);
    },
    async book() {
      if (
        moment(this.dateSelected.start).format("YYYYMMDD") >
        moment(this.dateSelected.end).format("YYYYMMDD")
      ) {
        ElNotification({
          title: "Error",
          message: "退房日期不能早於入住日期。請選擇其他日期",
          type: "error",
        });
        return;
      }
      this.$store.dispatch("booking/storeChildrenAge", this.childAge);
      if (localStorage.getItem("accessToken")) {
        if (this.numberOfAdults === "" || this.numberOfAdults === 0) {
          ElNotification({
            title: "Error",
            message: "請輸入成人人數",
            type: "error",
          });
        } else if (this.timeSession && this.timeslotids === "") {
          ElNotification({
            title: "Error",
            message: "請選擇時間段",
            type: "error",
          });
        } else if (
          this.numberOfChildren &&
          Object.keys(this.childAge).length < this.numberOfChildren
        ) {
          ElNotification({
            title: "Error",
            message: "Please Select Child Age",
            type: "error",
          });
        } else {
          await this.$store
            .dispatch("auth/checkAccessTokenValidity")
            .then(() => {
              if (this.timeSession) {
                this.$store.dispatch("changeDate", {
                  start: this.startDate,
                  end: this.startDate,
                });
              } else {
                this.$store.dispatch("changeDate", {
                  start: this.startDate,
                  end: this.endDate,
                });
              }
              this.$store.commit("AUTHENTICATED_TO_RESERVE", true);

              this.$router.push({
                name: "reservation",
                params: { id: this.$route.params.id },
              });
            })
            .catch((err) => {
              console.log(err);
              this.checkRefershToken();
            });
        }
      } else {
        if (this.numberOfAdults === "" || this.numberOfAdults === 0) {
          ElNotification({
            title: "Error",
            message: "請輸入成人人數",
            type: "error",
          });
        } else if (this.timeSession && this.timeslotids === "") {
          ElNotification({
            title: "Error",
            message: "請選擇時間段",
            type: "error",
          });
        } else if (
          this.numberOfChildren &&
          Object.keys(this.childAge).length < this.numberOfChildren
        ) {
          ElNotification({
            title: "Error",
            message: "Please Select Child Age",
            type: "error",
          });
        } else {
          if (this.timeSession) {
            this.$store.dispatch("changeDate", {
              start: this.startDate,
              end: this.startDate,
            });
          } else {
            this.$store.dispatch("changeDate", {
              start: this.startDate,
              end: this.endDate,
            });
          }
          this.$store.commit("AUTHENTICATED_TO_RESERVE", true);
          this.$router.push({
            name: "reservation",
            params: { id: this.$route.params.id },
          });
        }
      }
    },
    async checkRefershToken() {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          if (this.timeSession) {
            this.$store.dispatch("changeDate", {
              start: this.startDate,
              end: this.startDate,
            });
          } else {
            this.$store.dispatch("changeDate", {
              start: this.startDate,
              end: this.endDate,
            });
          }
          this.$router.push({
            name: "reservation",
            params: { id: this.$route.params.id },
          });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
  },
  created() {
    console.log(this.dummy[this.index + this.num]);
    this.$store.commit("RESET_RESPONSES");
    console.log(this.selectedServices);
    console.log(this.numberOfAdults);
    this.$store.commit("booking/RESET_SELECTED_SERVICES");
  },
};
</script>

<style>
.add-ons {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 2rem;
  color: #8d8d8d;
}

.add-ons p {
  letter-spacing: 2.2px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.add-ons .el-checkbox {
  display: block;
  /* margin-top: 0.5rem; */
}

.add-ons .el-checkbox:last-of-type {
  margin-top: 2.5rem;
}

.add-ons .el-select.additional-services {
  display: block;
  margin-top: 0.5rem;
}

.add-ons .el-checkbox .el-checkbox__inner {
  top: -28px;
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner {
  background-color: #fd9a1a;
  border-color: #aaa;
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner::after {
  display: none;
}

.add-ons .el-checkbox .el-checkbox__inner:hover {
  border-color: #fd9a1a;
}

.add-ons .el-checkbox .el-checkbox__label {
  color: #8d8d8d;
  letter-spacing: 2.2px;
}

.calculated-add-on {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.calculated-add-on p {
  color: #8d8d8d;
  letter-spacing: 2.2px;
}

.calculated-add-on .add-on-item {
  align-items: center;
}

.add-ons .add-on-price:not(:first-of-type) {
  margin-top: 2.5rem;
}

.add-ons .add-on-price,
.calculated-add-on .add-on-price {
  text-align: end;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.total-price {
  margin-top: 0.5rem;
}

.total-price p {
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.total-price .el-row {
  align-items: center;
}

.total-price .final-price {
  color: #fd9a1a;
  font-size: 24px;
}

.total-price .btn-alignment {
  text-align: center;
}

.total-price .el-button--default {
  background-color: #fd9a1a;
  border-radius: 5px;
  border-color: #fd9a1a;
  color: #fff;
  letter-spacing: 5.6px;
  width: 30%;
  margin-top: 3rem;
}

@media screen and (max-width: 991px) {
  .total-price p,
  .calculated-add-on p,
  .add-ons .el-checkbox .el-checkbox__label,
  .add-ons p {
    font-size: 12px;
  }

  .total-price .final-price {
    font-size: 18px;
  }
}
</style>