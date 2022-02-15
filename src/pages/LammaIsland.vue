<template>
  <section class="lamma-island">
    <banner>
      <img src="../assets/banner-LammaIsland.jpg" alt="" />
      <h3>南丫島</h3>
      <p>
        南丫島位於香港島西南，面積約十三點六平方公里，是香港境內的第三大島嶼，由於島上風光明媚，有不少洋人聚居於此，令島上生活文化溶合了中西兩方面的特色。
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
              <p>地點</p>
              <div class="location">
                <el-checkbox-group v-model="location">
                  <el-checkbox label="南丫島" />
                  <el-checkbox label="模達灣" />
                  <el-checkbox label="沙埔舊村" />
                  <el-checkbox label="榕樹灣" />
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
  methods: {
    setOption(option) {
      this.isSelected = option;
    },
  },
};
</script>


<style>
.lamma-island {
  margin-bottom: 2rem;
}

.lamma-island .search .left-section {
  margin-bottom: 1rem;
  color: #333333;
}
.lamma-island .search h2 {
  color: #fd9a1a;
}

.lamma-island .search span {
  color: #8d8d8d;
  font-size: 16px;
}

.lamma-island .search .left-section p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.lamma-island .search .left-section .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.lamma-island .search .left-section .range img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.lamma-island .search .left-section .range span {
  margin: 0 1.9rem;
}

.lamma-island .search .left-section .pet-option {
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 18px;
}

.lamma-island .search .left-section .pet-option .el-col {
  border-radius: 18px;
}

.lamma-island .search .left-section .pet-option .el-col p {
  margin: 0;
  padding: 0.3rem 0;
  color: #999;
  cursor: pointer;
}

.lamma-island .search .is-active-option {
  background-color: #fd9a1a;
}

.lamma-island .search .left-section .pet-option .el-col.is-active-option p {
  color: #fff;
}

.lamma-island .search .left-section .location {
  border: none;
  /* border-bottom: 1px solid #d8d8d8; */
  padding-bottom: 0.5rem;
}

.lamma-island .search .left-section .el-checkbox--default {
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: -0.4rem;
}

.lamma-island .search .left-section .el-checkbox--default .el-checkbox__label {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.lamma-island .search .left-section .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 16px;
  height: 16px;
}

.lamma-island .banner {
  margin-bottom: 2rem;
  position: relative;
}

.lamma-island .banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.lamma-island .banner p,
.lamma-island .banner h3 {
  position: absolute;
  left: 4rem;
  color: #fff;
}

.lamma-island .banner h3 {
  top: 60%;
  font-size: 2rem;
}

.lamma-island .banner p {
  top: 75%;
  max-width: 700px;
}

@media screen and (max-width: 820px) {
  .lamma-island .banner p,
  .lamma-island .banner h3 {
    left: 1rem;
  }

  .lamma-island .banner h3 {
    top: 45%;
  }

  .lamma-island .banner p {
    top: 65%;
    max-width: 650px;
  }
}

@media screen and (max-width: 540px) {
  .lamma-island .banner p,
  .lamma-island .banner h3 {
    left: 1rem;
  }

  .lamma-island .banner h3 {
    top: 30%;
    font-size: 1rem;
  }

  .lamma-island .banner p {
    top: 45%;
    font-size: 0.6rem;
    margin-top: 0.5rem;
    max-width: 300px;
  }
}
</style>