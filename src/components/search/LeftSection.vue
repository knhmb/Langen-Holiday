<template>
  <!-- <Carousel /> -->
  <base-container>
    <h2>
      {{ $t("holiday_home") }} <span>{{ $t("search_results") }} :</span>
    </h2>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="6">
        <div class="left-section">
          <p>{{ $t("check_in_date") }}</p>
          <DatePicker
            :model-config="modelConfig"
            :min-date="new Date()"
            color="orange"
            is-range
            v-model="dateSelected"
            @click="dateChanged"
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
              <p>{{ $t("accommodation_requirements") }}</p>
            </el-col>
            <el-col :span="12">
              <p>{{ $t("living_population") }}</p>
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
              <p>{{ $t("room") }}</p>
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
              <p>{{ $t("pet") }}</p>
            </el-col>
            <el-col :span="12">
              <div class="pet-option">
                <el-row>
                  <el-col
                    :class="{ 'is-active-option': isSelected === 'true' }"
                    :span="12"
                  >
                    <p @click="setOption('true')">{{ $t("have") }}</p>
                  </el-col>
                  <el-col
                    :class="{ 'is-active-option': isSelected === 'false' }"
                    :span="12"
                  >
                    <p @click="setOption('false')">{{ $t("do_not_have") }}</p>
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
          <p>{{ $t("place") }}</p>
          <div class="location">
            <el-checkbox-group v-model="location" @change="sort">
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
            <el-checkbox-group v-model="location" @change="sort">
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
            <el-checkbox-group v-model="location" @change="sort">
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
            <el-checkbox-group v-model="location" @change="sort">
              <el-checkbox label="hong-kong-island">{{
                $t("hong_kong_island")
              }}</el-checkbox>
              <el-checkbox label="kowloon">{{ $t("kowloon") }}</el-checkbox>
              <el-checkbox label="new-territories">{{
                $t("new_territories")
              }}</el-checkbox>
            </el-checkbox-group>
          </div>
          <p>{{ $t("room_type") }}</p>
          <el-checkbox-group v-model="roomType" @change="sort">
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
      roomType: [],
      isDateChanged: false,
      recommendation: "",
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
    themes() {
      // return this.$store.getters["dashboard/themes"];
      return this.$store.state.dashboard.themes;
    },
    dateSelected: {
      get() {
        return this.$store.getters.dateSelected;
      },
      set(value) {
        this.$store.dispatch("changeDate", value);
      },
    },
    isSelected() {
      return this.$store.getters.isHavePets;
    },
    numberOfLivingPopulation() {
      return this.$store.getters.numberOfIndividuals;
    },
    numberOfRooms() {
      return this.$store.getters.numberOfRooms;
    },
  },
  watch: {
    dateSelected() {
      if (!this.isDateChanged) {
        return;
      }
      this.sort();
    },
    recommendation() {
      this.sort();
    },
  },
  methods: {
    dateChanged() {
      if (this.isDateChanged) {
        return;
      }
      this.isDateChanged = true;
      console.log("changed");
    },
    setOption(option) {
      // this.isSelected = option;
      this.$store.dispatch("setIsHavePets", option);
      this.sort();
    },
    increaseNumberOfPopulation() {
      this.$store.dispatch("increasePopulation");
      // this.numberOfLivingPopulation++;
      this.sort();
    },
    decreaseNumberOfPopulation() {
      if (this.numberOfLivingPopulation <= 0) {
        return;
      }
      // this.numberOfLivingPopulation--;
      this.$store.dispatch("decreasePopulation");
      this.sort();
    },
    increaseRoom() {
      // this.numberOfRooms++;
      this.$store.dispatch("increaseRooms");
      this.sort();
    },
    decreaseRoom() {
      if (this.numberOfRooms <= 0) {
        return;
      }
      // this.numberOfRooms--;
      this.$store.dispatch("decreaseRooms");
      this.sort();
    },
    checkboxChanged() {
      let currentTheme = "";
      currentTheme = this.themes.filter((theme) => {
        return theme.slug === this.$route.query.q;
      });

      const data = {
        stayingDate:
          moment(this.dateSelected.start).format("YYYYMMDD") +
          "|" +
          moment(this.dateSelected.end).format("YYYYMMDD"),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
        theme:
          currentTheme.length > 0
            ? currentTheme[0].slug
            : Object.keys(this.$route.query).length > 0
            ? this.$route.query.q
            : "",
      };

      if (
        currentTheme.length > 0 &&
        currentTheme[0].slug === this.$route.query.q
      ) {
        this.$store.dispatch("dashboard/filterTheme", data);
      } else if (Object.keys(this.$route.query).length > 0) {
        console.log("Not empty Query");
        this.$store.dispatch("dashboard/filterSearch", data);
      } else {
        this.$store.dispatch("dashboard/filterHotel", data);
        console.log("reached");
      }
    },
    applyRecommendation(value) {
      this.recommendation = value;
      // let currentTheme = this.themes.filter((theme) => {
      //   return theme.slug === this.$route.query.q;
      // });
      // const data = {
      //   stayingDate:
      //     moment(this.dateSelected.start).format("YYYYMMDD") +
      //     "|" +
      //     moment(this.dateSelected.end).format("YYYYMMDD"),
      //   guestQty: this.numberOfLivingPopulation,
      //   roomQty: this.numberOfRooms,
      //   isHavePets: this.isSelected,
      //   location: this.location.toString().replaceAll(",", "|"),
      //   roomType: this.roomType.toString().replaceAll(",", "|"),
      //   sort: value,
      //   theme:
      //     currentTheme.length > 0
      //       ? currentTheme[0].slug
      //       : Object.keys(this.$route.query).length > 0
      //       ? this.$route.query.q
      //       : "",
      // };
      // console.log(data);
      // if (
      //   currentTheme.length > 0 &&
      //   currentTheme[0].slug === this.$route.query.q
      // ) {
      //   this.$store.dispatch("dashboard/sortTheme", data);
      // } else if (Object.keys(this.$route.query).length > 0) {
      //   console.log("Not empty Query");
      //   this.$store.dispatch("dashboard/sortSearch", data);
      // } else {
      //   this.$store.dispatch("dashboard/sortHotel", data);
      //   console.log("reached");
      // }
      // this.$store.dispatch("dashboard/sortHotel", data);
    },
    sort() {
      let currentTheme = this.themes.filter((theme) => {
        return theme.slug === this.$route.query.q;
      });
      const data = {
        stayingDate:
          moment(this.dateSelected.start).format("YYYYMMDD") +
          "|" +
          moment(this.dateSelected.end).format("YYYYMMDD"),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
        sort: this.recommendation === "" ? "" : this.recommendation,
        theme:
          currentTheme.length > 0
            ? currentTheme[0].slug
            : Object.keys(this.$route.query).length > 0
            ? this.$route.query.q
            : "",
      };
      console.log(data);
      if (
        currentTheme.length > 0 &&
        currentTheme[0].slug === this.$route.query.q
      ) {
        this.$store.dispatch("dashboard/sortTheme", data);
      } else if (Object.keys(this.$route.query).length > 0) {
        console.log("Not empty Query");
        this.$store.dispatch("dashboard/sortSearch", data);
      } else {
        this.$store.dispatch("dashboard/sortHotel", data);
        console.log("reached");
      }
    },
  },
  created() {
    this.$store.dispatch("dashboard/setRoomType");
    // this.$store.dispatch("resetDate");
    // this.$store.dispatch("resetIsHavePets");

    // const data = {
    //   search: this.searchHotel.replaceAll(" ", "-"),
    //   stayingDate:
    //     moment(this.dateSelected.start).format("YYYYMMDD") +
    //     "|" +
    //     moment(this.dateSelected.end).format("YYYYMMDD"),
    //   guestQty: this.numberOfLivingPopulation,
    //   roomQty: this.numberOfRooms,
    //   isHavePets: this.isSelected,
    // };
    // if (data.search === "") {
    //   this.$store.dispatch("dashboard/searchHotel", data);
    // }
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