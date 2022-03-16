<template>
  <section class="lantau-island">
    <banner v-for="banner in lantauBanner" :key="banner.id">
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
              >
              </DatePicker>
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
              <p>地點</p>
              <div class="location">
                <el-checkbox-group v-model="location" @change="sortIsland">
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
              <p>房間類型</p>
              <el-checkbox-group v-model="roomType" @change="sortIsland">
                <el-checkbox
                  v-for="room in roomTypes"
                  :key="room.id"
                  :label="room.slug"
                  >{{ room.name }}</el-checkbox
                >
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
      </div>
    </base-container>
  </section>
</template>

<script>
import RightSection from "../components/search/RightSection.vue";
import Banner from "../components/cheung-chau/Banner.vue";
import RangeMixin from "../mixins/range.js";
import { DatePicker } from "v-calendar";
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
      recommendation: "",
      isSelected: "false",
      roomType: [],
      range: {
        start: moment(new Date()).format("YYYYMMDD"),
        end: moment(new Date().setDate(new Date().getDate() + 1)).format(
          "YYYYMMDD"
        ),
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  computed: {
    lantauBanner() {
      return this.$store.getters["dashboard/lantauBanner"];
    },
    lantauIslandItems() {
      return this.$store.getters["dashboard/lantauIslandItems"];
    },
    roomTypes() {
      return this.$store.getters["dashboard/roomTypes"];
    },
    headerItems() {
      return this.$store.getters["dashboard/headerItems"];
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
    range() {
      this.sortIsland();
    },
    recommendation() {
      this.sortIsland();
    },
    // $route() {
    //   this.$store.dispatch("resetDate");
    // },
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
      this.sortIsland();
    },
    checkboxChanged() {
      let subItem = this.lantauIslandItems.filter((item) =>
        this.$route.path.split("/").includes(item.slug)
      );

      const data = {
        stayingDate:
          moment(this.range.start).format("YYYYMMDD") +
          "|" +
          moment(this.range.end).format("YYYYMMDD"),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
        slug:
          subItem.length > 0
            ? subItem[0].slug
            : this.lantauIslandItems[0].parentCodexSlug,
      };
      console.log(data);
      this.$store.dispatch("search/filterIslandSearch", data);
      this.$store.dispatch("changeDate", this.range);
      // this.range = {
      //   start: moment(new Date()).format("YYYYMMDD"),
      //   end: moment(new Date().setDate(new Date().getDate() + 1)).format(
      //     "YYYYMMDD"
      //   ),
      // };
    },
    applyRecommendation(value) {
      this.recommendation = value;
    },
    sortIsland() {
      let subItem = this.lantauIslandItems.filter((item) =>
        this.$route.path.split("/").includes(item.slug)
      );

      const data = {
        stayingDate:
          moment(this.range.start).format("YYYYMMDD") +
          "|" +
          moment(this.range.end).format("YYYYMMDD"),
        guestQty: this.numberOfLivingPopulation,
        roomQty: this.numberOfRooms,
        isHavePets: this.isSelected,
        location: this.location.toString().replaceAll(",", "|"),
        roomType: this.roomType.toString().replaceAll(",", "|"),
        sort: this.recommendation === "" ? "" : this.recommendation,
        slug:
          subItem.length > 0
            ? subItem[0].slug
            : this.lantauIslandItems[0].parentCodexSlug,
      };
      console.log(data);
      // this.$store.dispatch("dashboard/sortHotel", data);
      this.$store.dispatch("search/sortIslandSearch", data);
      this.$store.dispatch("changeDate", this.range);
    },
  },
  created() {
    this.$store.dispatch("dashboard/setLantauBanner");
    this.$store.dispatch("dashboard/setRoomType");
  },
};
</script>


<style>
.lantau-island {
  margin-bottom: 2rem;
}

.lantau-island .search .left-section {
  margin-bottom: 1rem;
  color: #333333;
}
.lantau-island .search h2 {
  color: #fd9a1a;
}

.lantau-island .search span {
  color: #8d8d8d;
  font-size: 16px;
}

.lantau-island .search .left-section p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.lantau-island .search .left-section .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.lantau-island .search .left-section .range img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.lantau-island .search .left-section .range span {
  margin: 0 1.9rem;
}

.lantau-island .search .left-section .pet-option {
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 18px;
}

.lantau-island .search .left-section .pet-option .el-col {
  border-radius: 18px;
}

.lantau-island .search .left-section .pet-option .el-col p {
  margin: 0;
  padding: 0.3rem 0;
  color: #999;
  cursor: pointer;
}

.lantau-island .search .is-active-option {
  background-color: #fd9a1a;
}

.lantau-island .search .left-section .pet-option .el-col.is-active-option p {
  color: #fff;
}

.lantau-island .search .left-section .location {
  border: none;
  /* border-bottom: 1px solid #d8d8d8; */
  padding-bottom: 0.5rem;
}

.lantau-island .search .left-section .el-checkbox--default {
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: -0.4rem;
}

.lantau-island .search .left-section .el-checkbox--default .el-checkbox__label {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.lantau-island .search .left-section .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 16px;
  height: 16px;
}

.lantau-island .banner {
  margin-bottom: 2rem;
  position: relative;
}

.lantau-island .banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.lantau-island .banner p,
.lantau-island .banner h3 {
  position: absolute;
  left: 4rem;
  color: #fff;
}

.lantau-island .banner h3 {
  top: 60%;
  font-size: 2rem;
}

.lantau-island .banner p {
  top: 75%;
  max-width: 700px;
}

@media screen and (max-width: 820px) {
  .lantau-island .banner p,
  .lantau-island .banner h3 {
    left: 1rem;
  }

  .lantau-island .banner h3 {
    top: 45%;
  }

  .lantau-island .banner p {
    top: 65%;
    max-width: 650px;
  }
}

@media screen and (max-width: 540px) {
  .lantau-island .banner p,
  .lantau-island .banner h3 {
    left: 1rem;
  }

  .lantau-island .banner h3 {
    top: 30%;
    font-size: 1rem;
  }

  .lantau-island .banner p {
    top: 45%;
    font-size: 0.6rem;
    margin-top: 0.5rem;
    max-width: 300px;
  }
}
</style>