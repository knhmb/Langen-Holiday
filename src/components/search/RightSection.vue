<template>
  <div class="right-section">
    <el-row :gutter="10">
      <el-col :sm="12" :md="3" :lg="3">
        <div
          @click="setOption('1')"
          :class="{ selected: isActive === '1' }"
          class="pill"
        >
          樂程推薦
        </div>
      </el-col>
      <el-col :sm="12" :md="3" :lg="4">
        <div
          @click="setOption('2')"
          :class="{ selected: isActive === '2' }"
          class="pill"
        >
          價錢 - 由低至高
        </div>
      </el-col>
      <el-col :sm="12" :md="3" :lg="4">
        <div
          @click="setOption('3')"
          :class="{ selected: isActive === '3' }"
          class="pill"
        >
          價錢 - 由高至低
        </div>
      </el-col>
      <el-col :sm="12" :md="3" :lg="4">
        <div
          @click="setOption('4')"
          :class="{ selected: isActive === '4' }"
          class="pill"
        >
          評價 - 由低至高
        </div>
      </el-col>
      <el-col :sm="12" :md="3" :lg="4">
        <div
          @click="setOption('5')"
          :class="{ selected: isActive === '5' }"
          class="pill"
        >
          評價 - 由高至低
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" justify="space-between">
      <!-- <template v-if="$route.path.includes('municipal-services-building')"> -->
      <el-col
        v-for="item in searchItems"
        :key="item.id"
        :sm="24"
        :md="8"
        :lg="8"
      >
        <SearchCard
          :name="item.name"
          :description="item.location"
          :discount="item.discountedPrice"
          :price="item.originalPrice"
          :rate-value="item.rating"
          :rate-text="item.reviewsCount"
          :image="item.thumbnail"
          :bookmarked="item.bookmarked"
        />
      </el-col>
      <!-- </template> -->
    </el-row>
  </div>
</template>

<script>
import SearchCard from "./SearchCard.vue";
import services from "./data.js";

export default {
  components: {
    SearchCard,
  },
  data() {
    return {
      isActive: "",
      services,
    };
  },
  computed: {
    searchItems() {
      return this.$store.getters["search/searchItems"];
    },
  },
  methods: {
    setOption(option) {
      this.isActive = option;
      let value = "";
      if (option === "1") {
        value = "recommendation";
      } else if (option === "2") {
        value = "%2Bprice";
      } else if (option === "3") {
        value = "%2Dprice";
      } else if (option === "4") {
        value = "%2Brating";
      } else if (option === "5") {
        value = "%2Drating";
      }
      this.$emit("getRecommendation", value);
    },
  },
};
</script>

<style scoped>
.pill {
  background-color: #f7f7f7;
  color: #8d8d8d;
  font-size: 14px;
  text-align: center;
  border-radius: 50px;
  padding: 3px 0 6px 0;
  cursor: pointer;
  margin-top: 0.5rem;
  /* width: 100px; */
}

.pill:hover {
  background-color: #fd9a1a;
  color: #fff;
}

.pill.selected {
  background-color: #fd9a1a;
  color: #fff;
}
</style>