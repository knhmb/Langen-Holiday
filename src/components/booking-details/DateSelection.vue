<template>
  <base-container>
    <div class="date-selection">
      <h2>查看可預定日期</h2>
      <el-row justify="space-around">
        <el-col :sm="24" :lg="15">
          <date-picker></date-picker>
        </el-col>
        <el-col class="date-btns" :sm="24" :lg="4">
          <el-button class="yellow">可預訂</el-button>
          <el-button class="grey">不可預訂或已售罄</el-button>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
};
</script>

<style scoped>
.date-selection {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.date-selection h2 {
  margin-bottom: 1.5rem;
  letter-spacing: 4px;
  color: #fd9a1a;
}

.date-selection .yellow {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  display: block;
  margin: 0;
  width: 100%;
  letter-spacing: 2.2px;
}

.date-selection .grey {
  background-color: #eaeaea;
  letter-spacing: 2.2px;
  color: #8d8d8d;
  margin: 0;
  display: block;
  margin-top: 0.5rem;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .date-selection .date-btns {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .date-selection .grey,
  .date-selection .yellow {
    width: 50%;
    text-align: center;
    white-space: normal;
  }
}

@media screen and (max-width: 420px) {
  .date-selection .grey,
  .date-selection .yellow {
    width: 100%;
  }
}
</style>

