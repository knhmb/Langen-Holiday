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
              <Calendar />

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
                        :class="{ 'is-active-option': isSelected === 'pet' }"
                        :span="12"
                      >
                        <p @click="setOption('pet')">有</p>
                      </el-col>
                      <el-col
                        :class="{ 'is-active-option': isSelected === 'no' }"
                        :span="12"
                      >
                        <p @click="setOption('no')">沒有</p>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <p>Time</p>
                  <el-checkbox-group v-model="time">
                    <el-checkbox label="9:00 - 13:00" />
                    <el-checkbox label="13:00 - 21:00" />
                  </el-checkbox-group>
                </el-col>
                <!-- <el-col :span="12">
                  <p style="text-align: end">arrow</p>
                </el-col> -->
              </el-row>

              <p>地點</p>
              <div class="location">
                <el-checkbox-group v-model="location">
                  <el-checkbox label="長洲" />
                  <el-checkbox label="市政大樓" />
                  <el-checkbox label="東灣東堤" />
                  <el-checkbox label="西堤海景樓" />
                </el-checkbox-group>
              </div>
              <div class="location">
                <el-checkbox-group v-model="location">
                  <el-checkbox label="大嶼山" />
                  <el-checkbox label="梅窩" />
                  <el-checkbox label="貝澳" />
                  <el-checkbox label="塘福" />
                  <el-checkbox label="大澳" />
                </el-checkbox-group>
              </div>
              <div class="location">
                <el-checkbox-group v-model="location">
                  <el-checkbox label="南丫島" />
                  <el-checkbox label="模達灣" />
                  <el-checkbox label="沙埔舊村" />
                  <el-checkbox label="榕樹灣" />
                </el-checkbox-group>
              </div>
              <div class="location un-bordered">
                <el-checkbox-group v-model="location">
                  <el-checkbox label="港島區" />
                  <el-checkbox label="九龍區" />
                  <el-checkbox label="新界區" />
                </el-checkbox-group>
              </div>
              <p>房間類型</p>
              <el-checkbox-group v-model="roomType">
                <el-checkbox label="雙人套房" />
                <el-checkbox label="家庭套房" />
                <el-checkbox label="一房一廳" />
                <el-checkbox label="兩房一廳" />
                <el-checkbox label="三房/四房一廳" />
              </el-checkbox-group>
            </div>
          </el-col>
          <el-col :sm="24" :lg="18">
            <right-section></right-section>
          </el-col>
        </el-row>
      </div>
    </base-container>
  </section>
</template>

<script>
import Calendar from "../components/search/Calendar.vue";
import RightSection from "../components/search/RightSection.vue";
import Banner from "../components/cheung-chau/Banner.vue";
import RangeMixin from "../mixins/range.js";

export default {
  components: {
    Calendar,
    RightSection,
    Banner,
  },
  mixins: [RangeMixin],
  data() {
    return {
      time: [],
      location: [],
      isSelected: "pet",
      roomType: [],
    };
  },
  computed: {
    dayNightBanner() {
      return this.$store.getters["dashboard/dayNightBanner"];
    },
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
    },
  },
  created() {
    this.$store.dispatch("dashboard/setDayNightBanner");
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