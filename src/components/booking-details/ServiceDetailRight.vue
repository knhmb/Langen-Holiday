<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>請輸入日期查詢房間空缺及價格</span>
      </div>
    </template>
    <div class="text item">
      <el-row>
        <el-col class="date" :sm="24" :md="5">入住日期</el-col>
        <v-date-picker
          locale="zh-cn"
          :masks="masks"
          :min-date="new Date()"
          class="inline-block h-full hidden-md-and-up"
          v-model="startDate"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <div class="flex items-center">
              <input
                mode="date"
                @click="togglePopover()"
                :value="inputValue"
                readonly
                class="date-picker-input"
              />
            </div>
          </template>
        </v-date-picker>
        <el-col :sm="3" :md="5" class="line hidden-sm-and-down"></el-col>
        <el-col class="date" :sm="24" :md="5">入住日期</el-col>
        <v-date-picker
          v-if="!selectedHotel.hasDayNightSessions"
          locale="zh-cn"
          :masks="masks"
          :min-date="new Date()"
          class="inline-block h-full hidden-md-and-up"
          v-model="endDate"
          @click="isChangedDate = true"
        >
          <template v-slot="{ inputValue, togglePopover }">
            <div class="flex items-center">
              <input
                @click="togglePopover()"
                :value="inputValue"
                readonly
                class="date-picker-input"
              />
            </div>
          </template>
        </v-date-picker>
      </el-row>
      <el-row>
        <el-col :span="10" class="hidden-sm-and-down">
          <!-- <span class="date-delivery"
            >{{ checkInDate }} {{ checkInDateDay }}</span
          > -->
          <v-date-picker
            locale="zh-cn"
            :masks="masks"
            :min-date="new Date()"
            class="inline-block h-full"
            v-model="startDate"
          >
            <template v-slot="{ inputValue, togglePopover }">
              <div class="flex items-center">
                <input
                  mode="date"
                  @click="togglePopover()"
                  :value="inputValue"
                  readonly
                  class="date-picker-input"
                />
              </div>
            </template>
          </v-date-picker>
        </el-col>
        <el-col :span="10" class="hidden-sm-and-down">
          <!-- <span class="date-delivery"
            >{{ checkOutDate }} {{ checkOutDateDay }}</span
          > -->
          <v-date-picker
            v-if="!selectedHotel.hasDayNightSessions"
            locale="zh-cn"
            :masks="masks"
            :min-date="new Date()"
            class="inline-block h-full"
            v-model="endDate"
            @click="isChangedDate = true"
          >
            <template v-slot="{ inputValue, togglePopover }">
              <div class="flex items-center">
                <input
                  @click="togglePopover()"
                  :value="inputValue"
                  readonly
                  class="date-picker-input"
                />
              </div>
            </template>
          </v-date-picker>
        </el-col>
        <el-col class="my-btn" :span="4">
          <el-button class="small-btn"
            >{{ dateDifference === "" ? "1" : dateDifference }}晚</el-button
          >
        </el-col>
      </el-row>
      <el-row :gutter="20" class="time-room">
        <el-col :span="12" v-if="selectedHotel.hasDayNightSessions">
          <label class="date-delivery" style="display: block">登記時間</label>
          <el-select
            v-model="timeslotids"
            class="m-2"
            placeholder="9:00 - 13:00"
          >
            <el-option
              v-for="time in selectedHotel.timeslots"
              :key="time.timeslotId"
              :label="time.checkInTime + ' - ' + time.checkOutTime"
              :value="time.timeslotId"
            >
              <span style="float: left">{{ time.checkInTime }}</span>
              <span
                style="
                  float: right;

                  font-size: 13px;
                "
                >{{ time.checkOutTime }}</span
              >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <label class="date-delivery" style="display: block">房間數量</label>
          <el-select
            :disabled="parseInt(selectedHotel.basicInfo.maxRoomBooking) <= 1"
            v-model="numberOfRooms"
            class="m-2"
          >
            <el-option
              v-for="roomQty in parseInt(
                selectedHotel.basicInfo.maxRoomBooking
              )"
              :key="roomQty"
              :label="roomQty"
              :value="roomQty"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col>
          <p class="date">人數</p>
        </el-col>
        <el-col :span="12">
          <label class="date-delivery" style="display: block">成人</label>
          <el-select v-model="numberOfAdults" class="m-2" placeholder="2">
            <el-option
              v-for="adult in parseInt(selectedHotel.basicInfo.maxAdult)"
              :key="adult"
              :label="adult"
              :value="adult"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <label class="date-delivery" style="display: block">兒童</label>
          <el-select
            v-if="parseInt(selectedHotel.basicInfo.maxChildren) !== 0"
            v-model="numberOfChildren"
            class="m-2"
            placeholder="0"
          >
            <el-option
              v-for="adult in parseInt(selectedHotel.basicInfo.maxChildren)"
              :key="adult"
              :label="adult"
              :value="adult"
            >
            </el-option>
          </el-select>
          <p v-else>這個房間沒有孩子</p>
        </el-col>
        <el-col
          v-for="(child, index) in numberOfChildren"
          :key="child"
          :span="12"
        >
          <label class="date-delivery" style="display: block"
            >兒童{{ child }} 年齡</label
          >
          <el-select
            v-model="childAge['兒童' + (index + 1) + '年齡']"
            class="m-2"
            placeholder="8"
          >
            <el-option
              v-for="num in 10"
              :key="num"
              :value="num"
              :label="num"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-if="parseInt(selectedHotel.basicInfo.maxPets) > 0">
        <el-col :span="12">
          <label class="date-delivery" style="display: block">寵物</label>
          <el-select v-model="petQty" class="m-2" placeholder="0">
            <el-option
              v-for="num in parseInt(selectedHotel.basicInfo.maxPets)"
              :key="num"
              :label="num"
              :value="num"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <p class="cost">HK${{ selectedHotel.priceOfSelectedDate }}.00</p>
        </el-col>
      </el-row>
    </div>
    <add-ons
      :start-date="startDate"
      :end-date="endDate"
      :time-session="timeSession"
      :child-age="childAge"
    ></add-ons>
  </el-card>
</template>

<script>
import AddOns from "./AddOns.vue";
import moment from "moment";
import { DatePicker } from "v-calendar";
import { ElNotification } from "element-plus";

export default {
  components: {
    AddOns,
    VDatePicker: DatePicker,
  },
  data() {
    return {
      isChangedDate: false,
      dateDifference: "",
      childAge: {},
      date: new Date(),
      dummyDate: "",
      startDate: "",
      endDate: "",
      timeSession: null,
      time: "",
      masks: {
        input: "YYYY年M月DD日 WWW",
      },
      dummi: {
        date: new Date(),
      },
    };
  },
  watch: {
    dateDifference() {
      if (this.dateDifference < 0) {
        const storedData = JSON.parse(localStorage.getItem("vuex"));
        console.log(storedData);
      }
    },
    dateSelected() {
      // this.startDate = moment(this.dateSelected.start).format("YYYY-MM-DD");
      // this.endDate = moment(this.dateSelected.end).format("YYYY-MM-DD");
      this.isChangedDate = false;
    },
    startDate() {
      // const data = {
      //   start: this.startDate,
      //   end: this.dateSelected.end,
      // };
      const data = {
        start: this.startDate,
        end: this.startDate,
      };
      if (this.timeSession) {
        this.$store.dispatch("changeDate", data);
        const selectedServices = Object.values(this.responses);

        const serviceData = {
          hotelId: this.selectedHotel.basicInfo.hotelId,
          checkInDate: moment(this.startDate).format("YYYYMMDD"),
          checkOutDate: moment(this.startDate).format("YYYYMMDD"),
          service: selectedServices.toString(),
          timeslotids: this.timeslotids === "" ? 0 : this.timeslotids,
          roomQty: this.numberOfRooms,
        };

        this.$store.dispatch("booking/changedService", serviceData);
        this.$store.commit("SET_ROOM_QTY", 1);
      }
    },
    endDate() {
      if (!this.isChangedDate) {
        return;
      }
      if (
        moment(this.startDate).format("YYYYMMDD") >
        moment(this.endDate).format("YYYYMMDD")
      ) {
        console.log("Start Date is bigger");
        ElNotification({
          title: "Error",
          message: "退房日期不能早於入住日期。請選擇其他日期",
          type: "error",
        });
        return;
      }
      this.assignDateDifference();
      console.log("reached changed date");
      const data = {
        start: this.startDate,
        end: this.endDate,
      };
      this.$store.dispatch("changeDate", data);
      const selectedServices = Object.values(this.responses);

      const serviceData = {
        hotelId: this.selectedHotel.basicInfo.hotelId,
        checkInDate: moment(this.startDate).format("YYYYMMDD"),
        checkOutDate: moment(this.endDate).format("YYYYMMDD"),
        service: selectedServices.toString(),
        timeslotids: this.timeslotids === "" ? 0 : this.timeslotids,
        roomQty: this.numberOfRooms,
      };
      console.log(serviceData);
      if (!this.timeSession) {
        if (
          moment(this.startDate).format("YYYYMMDD") <
          moment(this.endDate).format("YYYYMMDD")
        ) {
          console.log("End Date Comes Later");
          console.log(data);
          this.$store.dispatch("booking/changedService", serviceData);
        }
      } else {
        this.$store.dispatch("booking/changedService", serviceData);
      }
      this.$store.commit("SET_ROOM_QTY", 1);
    },
    timeslotids() {
      const selectedServices = Object.values(this.responses);
      const serviceData = {
        hotelId: this.selectedHotel.basicInfo.hotelId,
        checkInDate: moment(this.startDate).format("YYYYMMDD"),
        checkOutDate: moment(this.startDate).format("YYYYMMDD"),
        service: selectedServices.toString(),
        timeslotids: this.timeslotids === "" ? 0 : this.timeslotids,
        roomQty: this.numberOfRooms,
      };
      this.$store.dispatch("booking/changedService", serviceData);
      this.$store.commit("SET_ROOM_QTY", 1);
    },
    numberOfRooms() {
      const selectedServices = Object.values(this.responses);
      const serviceData = {
        hotelId: this.selectedHotel.basicInfo.hotelId,
        checkInDate: moment(this.startDate).format("YYYYMMDD"),
        checkOutDate: this.timeSession
          ? moment(this.startDate).format("YYYYMMDD")
          : moment(this.endDate).format("YYYYMMDD"),
        service: selectedServices.toString(),
        timeslotids: this.timeslotids === "" ? 0 : this.timeslotids,
        roomQty: this.numberOfRooms,
      };
      if (!this.timeSession) {
        if (
          moment(this.startDate).format("YYYYMMDD") <
          moment(this.endDate).format("YYYYMMDD")
        ) {
          console.log("No Time Session");
          this.$store.dispatch("booking/changedService", serviceData);
        }
      } else {
        this.$store.dispatch("booking/changedService", serviceData);
      }
    },
  },
  computed: {
    numberOfChildren: {
      get() {
        return this.$store.getters["booking/numberOfChildren"];
      },
      set(value) {
        this.$store.dispatch("booking/updateChildren", value);
      },
    },
    numberOfAdults: {
      get() {
        return this.$store.getters["booking/numberOfAdults"];
      },
      set(value) {
        this.$store.dispatch("booking/updateAdults", value);
      },
    },
    petQty: {
      get() {
        return this.$store.getters["booking/petQty"];
      },
      set(value) {
        this.$store.dispatch("booking/updatePetQty", value);
      },
    },
    responses() {
      return this.$store.getters.responses;
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
    checkOutDateDay() {
      return moment(this.dateSelected.end).locale("zh-cn").format("dddd");
    },
    checkInDateDay() {
      return moment(this.dateSelected.start).locale("zh-cn").format("dddd");
    },
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    numberOfRooms: {
      get() {
        return this.$store.getters.numberOfRooms;
      },
      set(val) {
        this.$store.commit("SET_ROOM_QTY", val);
      },
    },
    timeslotids: {
      get() {
        return this.$store.getters.timeslotids;
      },
      set(val) {
        this.$store.commit("SET_TIMESLOT", val);
      },
    },
  },
  methods: {
    dummy() {
      console.log("clicked");
    },
    assignDateDifference() {
      console.log("executed");
      if (this.dateSelected) {
        let startDate = moment(this.startDate);
        let endDate = moment(this.endDate);
        let duration = moment.duration(endDate.diff(startDate));
        let days = duration.asDays();
        this.dateDifference = Math.round(days);
      }
    },
  },
  created() {
    console.log(this.dateSelected);
    if (!this.selectedHotel.hasDayNightSessions) {
      this.startDate = this.selectedHotel.defaultCheckInDate;
      this.endDate = this.selectedHotel.defaultCheckOutDate;
      this.timeSession = false;
    } else {
      this.startDate = this.selectedHotel.defaultCheckInDate;
      this.endDate = this.selectedHotel.defaultCheckInDate;
      this.timeSession = true;
    }
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(moment(this.dateSelected.start).format("YYYY-MM-DD"));
    console.log(moment(this.dateSelected.end).format("YYYY-MM-DD"));
    this.assignDateDifference();
  },
  mounted() {
    this.isChangedDate = true;
  },
};
</script>

<style>
.service-detail .box-card {
  color: #aaa;
}

.service-detail .box-card .card-header {
  letter-spacing: 2.2px;
}

.service-detail .el-card .el-card__header {
  padding: 10px 16px;
  background-color: #fd9a1a;
  color: #fff;
}

.service-detail .el-card .text.item .el-row {
  align-items: center;
  position: relative;
}

.service-detail .el-card .text.item .el-row.time-room {
  margin: 1rem 0;
}

.service-detail .el-card .text.item .el-col {
  margin-bottom: 0.5rem;
}

.service-detail .el-card .text.item .el-col .el-select {
  width: 100%;
}

.service-detail .el-card .text.item {
  color: #8d8d8d;
  font-size: 14px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 1rem;
}

.service-detail .el-card .text.item .date {
  letter-spacing: 2.2px;
}

.service-detail .el-card .text.item .date-delivery {
  letter-spacing: 1.1px;
}

.service-detail .el-card .line {
  position: relative;
}

.service-detail .el-card .line::after {
  content: "";
  position: absolute;
  background-color: #aaa;
  width: 16px;
  height: 2px;
  right: 50%;
  transform: translateX(-50%);
}

.service-detail .small-btn {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  /* padding: 0; */
  color: #fff;
  letter-spacing: 1.1px;
}

.service-detail .my-btn {
  text-align: end;
}

.service-detail .m-2 {
  margin-top: 0.2rem;
  width: 71%;
}

.service-detail .cost {
  color: #fd9a1a;
  font-size: 40px;
  margin-top: 1rem;
}

.service-detail .el-card .date-picker-input {
  border: none;
  background: transparent;
  padding: 6px;
  color: #8d8d8d;
  font-size: 14px;
  font-family: "Noto Sans HK", sans-serif;
  letter-spacing: 1.1px;
}

@media screen and (max-width: 768px) {
  .service-detail .box-card .card-header span {
    font-size: 14px;
  }
}
</style>