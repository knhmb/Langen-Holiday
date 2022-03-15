<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>請輸入日期查詢房間空缺及價格</span>
      </div>
    </template>
    <div class="text item">
      <el-row>
        <el-col class="date" :span="5">入住日期</el-col>
        <el-col :span="5" class="line"></el-col>
        <el-col class="date" :span="5">入住日期</el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <!-- <span class="date-delivery"
            >{{ checkInDate }} {{ checkInDateDay }}</span
          > -->
          <v-date-picker
            locale="zh-cn"
            :masks="masks"
            class="inline-block h-full"
            v-model="startDate"
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
        <el-col :span="10">
          <!-- <span class="date-delivery"
            >{{ checkOutDate }} {{ checkOutDateDay }}</span
          > -->
          <v-date-picker
            locale="zh-cn"
            :masks="masks"
            class="inline-block h-full"
            v-model="endDate"
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
          <el-button class="small-btn">1晚</el-button>
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
          <el-select v-model="numberOfChildren" class="m-2" placeholder="3">
            <el-option
              v-for="adult in parseInt(selectedHotel.basicInfo.maxChildren)"
              :key="adult"
              :label="adult"
              :value="adult"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col v-for="child in numberOfChildren" :key="child" :span="12">
          <label class="date-delivery" style="display: block"
            >兒童{{ child }} 年齡</label
          >
          <el-select class="m-2" placeholder="8">
            <el-option></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <p class="cost">HK${{ selectedHotel.priceOfSelectedDate }}.00</p>
        </el-col>
      </el-row>
    </div>
    <add-ons></add-ons>
  </el-card>
</template>

<script>
import AddOns from "./AddOns.vue";
import moment from "moment";
import { DatePicker } from "v-calendar";

export default {
  components: {
    AddOns,
    VDatePicker: DatePicker,
  },
  data() {
    return {
      numberOfAdults: null,
      numberOfChildren: null,
      date: new Date(),
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
      masks: {
        input: "YYYY年M月DD日 WWW",
      },
    };
  },
  watch: {
    // startDate() {
    //   const data = {
    //     start: moment(this.startDate).format('YYYYMMDD'),
    //     end: moment(this.endDate).format('YYYYMMDD')
    //   }
    // },
    endDate() {
      const data = {
        start: moment(this.startDate).format("YYYYMMDD"),
        end: moment(this.endDate).format("YYYYMMDD"),
      };
      this.$store.dispatch("changeDate", data);
    },
  },
  computed: {
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
  },
  methods: {
    dummy() {
      console.log("clicked");
    },
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