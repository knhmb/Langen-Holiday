<template>
  <section class="day-time">
    <banner v-for="banner in dayNightBanner" :key="banner.id">
      <img :src="banner.thumbnail" alt="" />
      <h3>{{ banner.name }}</h3>
      <p>
        {{ banner.description }}
      </p>
    </banner>
    <base-container>
      <div class="search">
        <!-- <h2>渡假屋 <span>搜尋結果 :</span></h2> -->
        <el-row :gutter="20">
          <el-col :sm="24" :lg="6">
            <div class="left-section">
              <p>入住日期</p>
              <DatePicker
                :model-config="modelConfig"
                color="orange"
                is-range
                v-model="range"
              />

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
                      src="../assets/icon--.svg"
                      alt=""
                    />
                    <span>{{ numberOfLivingPopulation }}</span>
                    <img
                      @click="increaseNumberOfPopulation"
                      class="plus-icon"
                      src="../assets/icon-+.svg"
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
                      src="../assets/icon--.svg"
                      alt=""
                    />
                    <span>{{ numberOfRooms }}</span>
                    <img
                      @click="increaseRoom"
                      class="plus-icon"
                      src="../assets/icon-+.svg"
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

              <!-- <el-row>
                <el-col :span="24">
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
                  <template
                    v-for="lantau in lantauIslandItems"
                    :key="lantau.id"
                  >
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
              @getRecommendation="applyRecommendation"
            ></right-section>
          </el-col>
        </el-row>
      </div>
    </base-container>
  </section>
</template>

<script>
import { DatePicker } from "v-calendar";
import RightSection from "../components/search/RightSection.vue";
import Banner from "../components/cheung-chau/Banner.vue";
import RangeMixin from "../mixins/range.js";
import moment from "moment";

export default {
  components: {
    DatePicker,
    RightSection,
    Banner,
  },
  mixins: [RangeMixin],
  data() {
    return {
      time: [],
      location: [],
      isSelected: "false",
      roomType: [],
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
    dayNightBanner() {
      return this.$store.getters["dashboard/dayNightBanner"];
    },
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
  },
  watch: {
    range() {
      this.checkboxChanged();
    },
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
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
          this.range === ""
            ? formattedDate +
              "|" +
              moment(date.setDate(date.getDate() + 1))
                .format("YYYY-MM-DD")
                .replaceAll("-", "")
            : this.range.start.replaceAll("-", "") +
              "|" +
              this.range.end.replaceAll("-", ""),
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
          this.range === ""
            ? formattedDate +
              "|" +
              moment(date.setDate(date.getDate() + 1))
                .format("YYYY-MM-DD")
                .replaceAll("-", "")
            : this.range.start.replaceAll("-", "") +
              "|" +
              this.range.end.replaceAll("-", ""),
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
    this.$store.dispatch("dashboard/setDayNightBanner");
    this.$store.dispatch("dashboard/setRoomType");
  },
};
</script>


<style>
.day-time {
  margin-bottom: 2rem;
}

.day-time .search .left-section {
  margin-bottom: 1rem;
  color: #333333;
}
.day-time .search h2 {
  color: #fd9a1a;
}

.day-time .search span {
  color: #8d8d8d;
  font-size: 16px;
}

.day-time .search .left-section p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.day-time .search .left-section .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.day-time .search .left-section .range img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.day-time .search .left-section .range span {
  margin: 0 1.9rem;
}

.day-time .search .left-section .pet-option {
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 18px;
}

.day-time .search .left-section .pet-option .el-col {
  border-radius: 18px;
}

.day-time .search .left-section .pet-option .el-col p {
  margin: 0;
  padding: 0.3rem 0;
  color: #999;
  cursor: pointer;
}

.day-time .search .is-active-option {
  background-color: #fd9a1a;
}

.day-time .search .left-section .pet-option .el-col.is-active-option p {
  color: #fff;
}

.day-time .search .left-section .location {
  /* border: none; */
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 0.5rem;
}

.day-time .search .left-section .location.un-bordered {
  border: none;
}

.day-time .search .left-section .el-checkbox--default {
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: -0.4rem;
}

.day-time .search .left-section .el-checkbox--default .el-checkbox__label {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.day-time .search .left-section .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 16px;
  height: 16px;
}

.day-time .banner {
  margin-bottom: 2rem;
  position: relative;
}

.day-time .banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.day-time .banner p,
.day-time .banner h3 {
  position: absolute;
  left: 4rem;
  color: #fff;
}

.day-time .banner h3 {
  top: 60%;
  font-size: 2rem;
}

.day-time .banner p {
  top: 75%;
  max-width: 700px;
}

@media screen and (max-width: 820px) {
  .day-time .banner p,
  .day-time .banner h3 {
    left: 1rem;
  }

  .day-time .banner h3 {
    top: 45%;
  }

  .day-time .banner p {
    top: 65%;
    max-width: 650px;
  }
}

@media screen and (max-width: 540px) {
  .day-time .banner p,
  .day-time .banner h3 {
    left: 1rem;
  }

  .day-time .banner h3 {
    top: 30%;
    font-size: 1rem;
  }

  .day-time .banner p {
    top: 45%;
    font-size: 0.6rem;
    margin-top: 0.5rem;
    max-width: 300px;
  }
}
</style>