<template>
  <base-container>
    <h2>Booking <span>Details:</span></h2>
    <el-row justify="space-between">
      <div class="left-section">
        <el-col :sm="24" :lg="5">
          <p>Date</p>
          <Calendar />
          <p>Time</p>
          <el-checkbox-group v-model="time">
            <el-checkbox label="9:00 - 13:00" />
            <el-checkbox label="13:00 - 21:00" />
          </el-checkbox-group>
          <p>Location</p>
          <el-checkbox-group v-model="location">
            <el-checkbox label="location(3)" />
            <el-checkbox label="location(8)" />
            <el-checkbox label="location(12)" />
            <el-checkbox label="location(10)" />
            <el-checkbox label="location(24)" />
            <el-checkbox label="location(25)" />
          </el-checkbox-group>
        </el-col>
      </div>
      <el-col :sm="24" :lg="18">
        <right-section></right-section>
      </el-col>
    </el-row>
  </base-container>
</template>

<script>
import Calendar from "./Calendar.vue";
import RightSection from "./RightSection.vue";

export default {
  components: {
    Calendar,
    RightSection,
  },
  data() {
    return {
      time: [],
      location: [],
    };
  },
};
</script>


<style>
.search .left-section {
  margin-bottom: 1rem;
}
.search h2 {
  color: orange;
}

.search span {
  color: grey;
  font-size: 16px;
}

.search .left-section p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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
}

.search .left-section .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 16px;
  height: 16px;
}
</style>