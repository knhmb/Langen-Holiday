<template>
  <Carousel />
  <base-container>
    <h2>渡假屋 <span>搜尋結果 :</span></h2>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="6">
        <div class="left-section">
          <p>Date</p>
          <Calendar />
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
                <img class="plus-icon" src="../../assets/icon--.svg" alt="" />
                <span>4</span>
                <img class="plus-icon" src="../../assets/icon-+.svg" alt="" />
              </div>
            </el-col>

            <el-col :span="12">
              <p>房間</p>
            </el-col>
            <el-col :span="12">
              <div class="range">
                <img class="plus-icon" src="../../assets/icon--.svg" alt="" />
                <span>2</span>
                <img class="plus-icon" src="../../assets/icon-+.svg" alt="" />
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
          <p>入住時段</p>
          <el-checkbox-group v-model="time">
            <el-checkbox label="9:00 - 13:00" />
            <el-checkbox label="13:00 - 21:00" />
          </el-checkbox-group>
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
          <div class="location">
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
  </base-container>
</template>

<script>
import Calendar from "./Calendar.vue";
import RightSection from "./RightSection.vue";
import Carousel from "./Carousel.vue";

export default {
  components: {
    Calendar,
    RightSection,
    Carousel,
  },
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