<template>
  <base-container>
    <el-row :gutter="70">
      <el-col :sm="24" :lg="12">
        <div class="left-section">
          <h1>預訂查詢</h1>
          <p>
            {{ selectedHotel.basicInfo.stayInformation }}
          </p>
          <Form @formInputChanged="changedForm" />
        </div>
      </el-col>
      <el-col :sm="24" :lg="12">
        <reservation-right-section></reservation-right-section>
      </el-col>
    </el-row>
  </base-container>
</template>

<script>
import Form from "./Form.vue";
import ReservationRightSection from "./ReservationRightSection.vue";

export default {
  components: {
    Form,
    ReservationRightSection,
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
  },
  methods: {
    changedForm(value) {
      this.$emit("form", value);
    },
  },
};
</script>

<style scoped>
/* .reservation .left-section {
  margin-top: 2rem;
} */

.reservation .left-section h1 {
  margin-bottom: 1rem;
  font-size: 32px;
  letter-spacing: 6.6px;
  color: #8d8d8d;
}

.reservation .left-section p {
  text-align: justify;
  margin-bottom: 2rem;
  letter-spacing: 4.6px;
  color: #8d8d8d;
  word-break: break-all;
}
</style>