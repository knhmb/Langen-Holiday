<template>
  <base-container>
    <div class="date-selection">
      <h2>Date Selected</h2>
      <el-row justify="space-around">
        <el-col :sm="24" :lg="15">
          <date-picker></date-picker>
        </el-col>
        <el-col class="date-btns" :sm="24" :lg="4">
          <el-button class="yellow">Add</el-button>
          <el-button class="grey">Add</el-button>
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
  color: orange;
}

.date-selection .yellow {
  background-color: orange;
  border-color: orange;
  color: #fff;
  display: block;
  margin: 0;
  width: 100%;
}

.date-selection .grey {
  background-color: #c6c6c6;
  color: black;
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
    width: 30%;
    text-align: center;
  }
}
</style>

