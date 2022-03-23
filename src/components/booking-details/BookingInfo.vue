<template>
  <base-container>
    <div class="booking-info" v-if="Object.keys(selectedHotel).length > 0">
      <el-row class="heading">
        <el-col :sm="24" :md="4" :lg="7">
          <h1>{{ selectedHotel.basicInfo.name }}</h1>
        </el-col>
        <el-col :sm="24" :md="17" :lg="14">
          <el-rate
            :model-value="+selectedHotel.rating"
            disabled
            show-score
            :colors="colors"
            text-color="#c6c6c6"
            :score-template="`${selectedHotel.reviewsCount} 則評語`"
          >
          </el-rate>
        </el-col>
        <el-col :sm="3" :md="3" :lg="3">
          <el-button>加入收藏 </el-button>
          <img class="icon-bookmark" :src="iconBookmark" alt="" />
        </el-col>
        <el-col>
          <p class="price">
            HK${{ selectedHotel.averagePrice }} <span>起</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // const value = ref(4);
    const colors = ref(["#FD9A1A", "#FD9A1A", "#FD9A1A"]);
    return { colors };
  },
  data() {
    return {
      value: "",
      iconBookmark: "",
    };
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
  },
  created() {
    this.value = +this.selectedHotel.rating;
    (this.iconBookmark =
      this.selectedHotel.bookmarked === false
        ? require("../../assets/icon-bookmark-off.png")
        : require("../../assets/icon-bookmark-on.png")),
      console.log(this.value);
    console.log(this.iconBookmark);
  },
};
</script>

<style>
.booking-info {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.booking-info h1 {
  font-size: 40px;
  color: #8d8d8d;
}

.booking-info .el-button--default {
  background-color: #fd9a1a;
  color: #fff;
  border-color: #fd9a1a;
  width: 100%;
  position: relative;
}

.booking-info .icon-bookmark {
  width: 30px;
  position: absolute;
  right: 0rem;
}

.booking-info .heading {
  align-items: center;
}

.booking-info .el-rate .el-rate__icon {
  margin: 0;
  font-size: 25px;
}

.booking-info .el-rate .el-rate__text {
  margin-left: 1rem;
}

.booking-info .price {
  font-size: 30px;
  color: #8d8d8d;
  margin-top: 0.5rem;
}

.booking-info .price span {
  font-size: 12px;
}

@media screen and (max-width: 1024px) {
  .booking-info .el-rate {
    margin-left: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .booking-info .el-rate {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .booking-info .heading .el-col {
    display: flex;
    justify-content: center;
  }

  .booking-info h1 {
    font-size: 32px;
  }
}
</style>