<template>
  <base-container>
    <el-row :gutter="70">
      <el-col :sm="24" :lg="12">
        <div class="left-section">
          <h1>預訂查詢</h1>
          <p>
            讀品公術利爾否有，建竟物八樣在總，此之事財及量角表食大子我國飯人展筆什現的親表可自我人根以了很香我太產獎生有，片衣代可度和全農不嚴分，慢構醫有：推少過它自，路具經上多然我直子名對空成沒一問論處客完環人以告節以可的……好出點之就會親工。
          </p>
          <Form />
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
}
</style>