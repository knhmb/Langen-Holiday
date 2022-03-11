<template>
  <!-- <Carousel /> -->
  <base-container>
    <h2>渡假屋 <span>搜尋結果 :</span></h2>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="6">
        <div class="left-section">
          <p>入住日期</p>
          <DatePicker
            :model-config="modelConfig"
            color="orange"
            is-range
            v-model="dateSelected"
          />
          <!-- <el-row>
            <el-col :span="12">
              <p>Time</p>
              <el-checkbox-group v-model="time">
                <el-checkbox label="9:00 - 13:00" />
                <el-checkbox label="13:00 - 21:00" />
              </el-checkbox-group>
            </el-col>
            <el-col :span="12">
              <p style="text-align: end">arrow</p>
            </el-col>
          </el-row> -->
          <el-row>
            <el-col>
              <p>住宿要求</p>
            </el-col>
            <el-col :span="12">
              <p>入住人數</p>
            </el-col>
            <el-col :span="12">
              <div class="range">
                <img
                  @click="decreaseNumberOfPopulation"
                  class="plus-icon"
                  src="../../assets/icon--.svg"
                  alt=""
                />
                <span>{{ numberOfLivingPopulation }}</span>
                <img
                  @click="increaseNumberOfPopulation"
                  class="plus-icon"
                  src="../../assets/icon-+.svg"
                  alt=""
                />
              </div>
            </el-col>

            <el-col :span="12">
              <p>房間</p>
            </el-col>
            <el-col :span="12">
              <div class="range">
                <img
                  @click="decreaseRoom"
                  class="plus-icon"
                  src="../../assets/icon--.svg"
                  alt=""
                />
                <span>{{ numberOfRooms }}</span>
                <img
                  @click="increaseRoom"
                  class="plus-icon"
                  src="../../assets/icon-+.svg"
                  alt=""
                />
              </div>
            </el-col>

            <el-col :span="12">
              <p>寵物</p>
            </el-col>
            <el-col :span="12">
              <div class="pet-option">
                <el-row>
                  <el-col
                    :class="{ 'is-active-option': isSelected === 'true' }"
                    :span="12"
                  >
                    <p @click="setOption('true')">有</p>
                  </el-col>
                  <el-col
                    :class="{ 'is-active-option': isSelected === 'false' }"
                    :span="12"
                  >
                    <p @click="setOption('false')">沒有</p>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <!-- <p>入住時段</p>
          <el-checkbox-group v-model="time">
            <el-checkbox label="9:00 - 13:00" />
            <el-checkbox label="13:00 - 21:00" />
          </el-checkbox-group> -->
          <p>地點</p>
          <div class="location">
            <el-checkbox-group v-model="location" @change="checkboxChanged">
              <template v-for="cheung in headerItems" :key="cheung">
                <el-checkbox
                  v-if="cheung.slug === 'cheung-chau-island'"
                  :label="cheung.slug"
                  >{{ cheung.name }}</el-checkbox
                >
              </template>
              <template
                v-for="cheung in cheungChauIslandItems"
                :key="cheung.id"
              >
                <el-checkbox
                  :label="cheung.slug"
                  v-if="cheung.name !== '景點介紹'"
                  :checked="$route.path.includes(cheung.slug)"
                  >{{ cheung.name }}</el-checkbox
                >
              </template>
            </el-checkbox-group>
          </div>
          <div class="location">
            <el-checkbox-group v-model="location" @change="checkboxChanged">
              <template v-for="lantau in headerItems" :key="lantau.id">
                <el-checkbox
                  v-if="lantau.slug === 'lantau-island'"
                  :label="lantau.slug"
                  >{{ lantau.name }}</el-checkbox
                >
              </template>
              <template v-for="lantau in lantauIslandItems" :key="lantau.id">
                <el-checkbox
                  :label="lantau.slug"
                  v-if="lantau.name !== '景點介紹'"
                  :checked="$route.path.includes(lantau.slug)"
                >
                  {{ lantau.name }}</el-checkbox
                >
              </template>
            </el-checkbox-group>
          </div>
          <div class="location">
            <el-checkbox-group v-model="location" @change="checkboxChanged">
              <template v-for="lamma in headerItems" :key="lamma.id">
                <el-checkbox
                  v-if="lamma.slug === 'lamma-island'"
                  :label="lamma.slug"
                  >{{ lamma.name }}</el-checkbox
                >
              </template>

              <template v-for="lamma in lammaIslandItems" :key="lamma.id">
                <el-checkbox
                  :label="lamma.slug"
                  v-if="lamma.name !== '景點介紹'"
                  :checked="$route.path.includes(lamma.slug)"
                  >{{ lamma.name }}</el-checkbox
                >
              </template>
            </el-checkbox-group>
          </div>
          <div class="location un-bordered">
            <el-checkbox-group v-model="location" @change="checkboxChanged">
              <el-checkbox label="hong-kong-island">港島區</el-checkbox>
              <el-checkbox label="kowloon">九龍區</el-checkbox>
              <el-checkbox label="new-territories">新界區</el-checkbox>
            </el-checkbox-group>
          </div>
          <p>房間類型</p>
          <el-checkbox-group v-model="roomType" @change="checkboxChanged">
            <el-checkbox
              v-for="room in roomTypes"
              :key="room.id"
              :label="room.slug"
              >{{ room.name }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :sm="24" :lg="18">
        <right-section
          :number-of-rooms="numberOfRooms"
          @getRecommendation="applyRecommendation"
        ></right-section>
      </el-col>
    </el-row>
  </base-container>
</template>

<script>
// import Calendar from "./Calendar.vue";
import RightSection from "./RightSection.vue";
// import Carousel from "./Carousel.vue";
import { DatePicker } from "v-calendar";
import moment from "moment";

export default {
  components: {
    DatePicker,
    RightSection,
    // Carousel,
  },
  data() {
    return {
      time: [],
      location: [],
      isSelected: "false",
      roomType: [],
      numberOfLivingPopulation: 0,
      numberOfRooms: 0,
      range: {
        start: moment(new Date()).format("YYYY-MM-DD").replaceAll("-", ""),
        end: moment(new Date().setDate(new Date().getDate() + 1))
          .format("YYYY-MM-DD")
          .replaceAll("-", ""),
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  computed: {
    cheungChauIslandItems() {
      return this.$store.getters["dashboard/cheungChauIslandItems"];
    },
    lantauIslandItems() {
      return this.$store.getters["dashboard/lantauIslandItems"];
    },
    lammaIslandItems() {
      return this.$store.getters["dashboard/lammaIslandItems"];
    },
    headerItems() {
      return this.$store.getters["dashboard/headerItems"];
    },
    roomTypes() {
      return this.$store.getters["dashboard/roomTypes"];
    },
    dateSelected: {
      get() {
        return this.$store.getters.dateSelected;
      },
      set(value) {
        this.$store.dispatch("changeDate", value);
      },
    },
  },
  watch: {
    dateSelected() {
      this.checkboxChanged();
    },
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
      this.checkboxChanged();
    },
    increaseNumberOfPopulation() {
      this.numberOfLivingPopulation++;
      this.checkboxChanged();
    },
    decreaseNumberOfPopulation() {
      if (this.numberOfLivingPopulation <= 0) {
        return;
      }
      this.numberOfLivingPopulation--;
      this.checkboxChanged();
    },
    increaseRoom() {
      this.numberOfRooms++;
      this.checkboxChanged();
    },
    decreaseRoom() {
      if (this.numberOfRooms <= 0) {
        return;
      }
      this.numberOfRooms--;
      this.checkboxChanged();
    },
    checkboxChanged() {
      console.log(this.location);
      const date = new Date();
      const formattedDate = moment(date)
        .format("YYYY-MM-DD")
        .replaceAll("-", "");
      const data = {
        stayingDate:
          this.dateSelected === ""
            ? formattedDate +
              "|" +
              moment(date.setDate(date.getDate() + 1))
                .format("YYYY-MM-DD")
                .replaceAll("-", "")
            : this.dateSelected.start.replaceAll("-", "") +
              "|" +
              this.dateSelected.end.replaceAll("-", ""),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
      };
      console.log(data);
      this.$store.dispatch("dashboard/filterHotel", data);
    },
    applyRecommendation(value) {
      const date = new Date();
      const formattedDate = moment(date)
        .format("YYYY-MM-DD")
        .replaceAll("-", "");
      const data = {
        stayingDate:
          this.dateSelected === ""
            ? formattedDate +
              "|" +
              moment(date.setDate(date.getDate() + 1))
                .format("YYYY-MM-DD")
                .replaceAll("-", "")
            : this.dateSelected.start.replaceAll("-", "") +
              "|" +
              this.dateSelected.end.replaceAll("-", ""),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
        sort: value,
      };
      console.log(data);
      this.$store.dispatch("dashboard/sortHotel", data);
    },
  },
  created() {
    this.$store.dispatch("dashboard/setRoomType");
  },
};
</script>


<style>
.search .left-section {
  margin-bottom: 1rem;
  color: #333333;
}
.search h2 {
  color: #fd9a1a;
}

.search span {
  color: #8d8d8d;
  font-size: 16px;
}

.search .left-section p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.search .left-section .vc-container {
  border: none;
}

.search .left-section .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.search .left-section .range img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.search .left-section .range span {
  margin: 0 1.9rem;
}

.search .left-section .pet-option {
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 18px;
}

.search .left-section .pet-option .el-col {
  border-radius: 18px;
}

.search .left-section .pet-option .el-col p {
  margin: 0;
  padding: 0.3rem 0;
  color: #999;
  cursor: pointer;
}

.search .is-active-option {
  background-color: #fd9a1a;
}

.search .left-section .pet-option .el-col.is-active-option p {
  color: #fff;
}

.search .left-section .location:not(:last-of-type) {
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 0.5rem;
}

.search .left-section .el-checkbox--default {
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: -0.4rem;
}

.search .left-section .el-checkbox--default .el-checkbox__label {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.search .left-section .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 16px;
  height: 16px;
}
</style>