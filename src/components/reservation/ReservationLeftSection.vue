<template>
  <base-container>
    <el-row :gutter="70">
      <el-col :sm="24" :lg="12">
        <div class="left-section">
          <h1>Reservation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem eaque repellendus quas soluta aliquam eligendi assumenda
            similique, perspiciatis ipsa, iste laudantium adipisci ipsam ducimus
            aut eos consectetur minima aliquid!
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
  color: #999;
}

.reservation .left-section p {
  color: #999;
  text-align: justify;
  margin-bottom: 2rem;
}
</style>