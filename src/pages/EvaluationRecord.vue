<template>
  <div class="evaluation">
    <h3>評價記錄</h3>
    <el-row>
      <el-col :sm="24" :lg="5">
        <div
          :class="{ 'is-active': isSelected === 'not-rated' }"
          @click="setOption('not-rated')"
          class="pill"
        >
          未評價預約
        </div>
      </el-col>
      <el-col :sm="24" :lg="5">
        <div
          :class="{ 'is-active': isSelected === 'reviewed' }"
          @click="setOption('reviewed')"
          class="pill"
        >
          已評價預約
        </div>
      </el-col>
    </el-row>
    <not-rated
      @submitReview="addReview"
      :rates="rates"
      v-if="isSelected === 'not-rated'"
    ></not-rated>
    <Reviewed @removeItem="deleteItem" :rates="rates" v-else />
  </div>
</template>

<script>
import NotRated from "../components/evaluation-record/NotRated.vue";
import Reviewed from "../components/evaluation-record/Reviewed.vue";

export default {
  components: {
    NotRated,
    Reviewed,
  },
  data() {
    return {
      isSelected: "not-rated",
      reviewId: 1,
      arr: [],
      rates: [
        {
          id: 1,
          title: "白沙灣渡假酒店",
          description: "白沙灣渡假酒店",
          noOfPeople: 5,
          pets: 2,
          checkInDate: "2021年5月22日 15:00",
          checkOutDate: "2021年5月22日 12:00",
          image: require("../assets/img-houseinfo4.jpg"),
          reviewed: [],
        },
        {
          id: 2,
          title: "白沙灣渡假酒店",
          description: "白沙灣渡假酒店",
          noOfPeople: 5,
          pets: 2,
          checkInDate: "2021年5月22日 15:00",
          checkOutDate: "2021年5月22日 12:00",
          image: require("../assets/img-house3.jpg"),
          reviewed: [],
        },
      ],
    };
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
    },
    addReview({ id, review, rating }) {
      const selectedRate = this.rates.find((rate) => rate.id === id);
      selectedRate.reviewed.push({
        id: this.reviewId++,
        title: selectedRate.title,
        desc: review,
        rate: rating,
        image: selectedRate.image,
        itemId: id,
      });
    },
    deleteItem({ id, itemId }) {
      console.log(id, index, itemId);
      let selectedRate = this.rates.find((rate) => rate.id === itemId);
      let index = selectedRate.reviewed.findIndex((rate) => rate.id === id);
      selectedRate.reviewed.splice(index, 1);
      console.log(selectedRate.reviewed);
    },
  },
};
</script>

<style scoped>
.evaluation h3 {
  color: #333;
}

.evaluation .pill {
  background-color: #f7f7f7;
  color: #8d8d8d;
  border-radius: 24px;
  padding: 0.2rem 0;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: 1rem;
}

.evaluation .pill:hover,
.evaluation .pill.is-active {
  background-color: #fd9a1a;
  color: #fff;
}
</style>