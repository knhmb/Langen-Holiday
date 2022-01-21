<template>
  <div class="evaluation">
    <h3>評價記錄</h3>
    <el-row>
      <el-col :span="5">
        <div
          :class="{ 'is-active': isSelected === 'not-rated' }"
          @click="setOption('not-rated')"
          class="pill"
        >
          未評價預約
        </div>
      </el-col>
      <el-col :span="5">
        <div
          :class="{ 'is-active': isSelected === 'reviewed' }"
          @click="setOption('reviewed')"
          class="pill"
        >
          已評價預約
        </div>
      </el-col>
    </el-row>
    <not-rated v-if="isSelected === 'not-rated'"></not-rated>
    <Reviewed v-else />
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
    };
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
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