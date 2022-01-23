<template>
  <div class="places">
    <h3>我的收藏</h3>
    <el-row :gutter="10">
      <el-col v-for="service in services" :key="service.id" :sm="24" :lg="12">
        <Card
          :name="service.name"
          :description="service.description"
          :discount="service.discount"
          :price="service.price"
          :rate-value="service.rateValue"
          :rate-text="service.rateText"
          :image="service.image"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "白沙灣渡假酒店",
          description: "西貢",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 則評語",
          image: require("../../assets/img-house1.jpg"),
        },
        {
          id: 2,
          name: "沙田渡假酒店",
          description: "沙田",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 則評語",
          image: require("../../assets/img-house2.jpg"),
        },
        {
          id: 3,
          name: "馬𩣑山酒店",
          description: "馬𩣑山",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 則評語",
          image: require("../../assets/img-house3.jpg"),
        },
        {
          id: 5,
          name: "白沙灣渡假酒店",
          description: "西貢",
          discount: "HK560",
          price: "HK500",
          rateValue: 4,
          rateText: "62 則評語",
          image: require("../../assets/img-house1.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.places h3 {
  color: #333333;
  font-weight: bold;
}
</style>