<template>
  <div
    class="alert"
    v-if="
      Object.keys(selectedHotel).length > 0 &&
      selectedHotel.basicInfo.specialNotice !== null
    "
  >
    <el-row>
      <el-col :sm="24" :lg="3">
        <img src="../../assets/icon-warning.svg" alt="" />
      </el-col>
      <el-col :sm="24" :lg="21">
        <h3>特別通告</h3>
        <p>
          {{ selectedHotel.basicInfo.specialNotice }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
  },
};
</script>

<style scoped>
.alert {
  background: #fff6d8;
  border-radius: 5px;
  width: 50%;
  padding: 16px 12px;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.alert .el-row {
  align-items: center;
}

.alert h3 {
  color: #393939;
  margin-bottom: 0.5rem;
}

.alert p {
  color: #333333;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .alert {
    width: 100%;
  }

  .alert {
    text-align: center;
  }
}
</style>