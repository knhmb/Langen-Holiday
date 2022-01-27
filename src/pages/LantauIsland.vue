<template>
  <section class="lantau-island">
    <banner>
      <img src="../assets/banner-LantauIsland.jpg" alt="" />
      <h3>大嶼山</h3>
      <p>
        大嶼山位於珠江口，是本港最大的一個島嶼，面積約144平方公里，近年因島上迪士尼樂園開幕而聞名中外。其實此島尚有很多知名的地方，如梅窩銀礦灣，大澳水鄉，寶蓮寺大佛及香港國際機場等均令各地遊人慕名而至。
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
                    <img class="plus-icon" src="../assets/icon--.svg" alt="" />
                    <span>4</span>
                    <img class="plus-icon" src="../assets/icon-+.svg" alt="" />
                  </div>
                </el-col>

                <el-col :span="12">
                  <p>房間</p>
                </el-col>
                <el-col :span="12">
                  <div class="range">
                    <img class="plus-icon" src="../assets/icon--.svg" alt="" />
                    <span>2</span>
                    <img class="plus-icon" src="../assets/icon-+.svg" alt="" />
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
                  <el-checkbox label="大嶼山" />
                  <el-checkbox label="梅窩" />
                  <el-checkbox label="貝澳" />
                  <el-checkbox label="塘福" />
                  <el-checkbox label="大澳" />
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

export default {
  components: {
    Calendar,
    RightSection,
    Banner,
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