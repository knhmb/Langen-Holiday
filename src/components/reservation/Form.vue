<template>
  <div class="form">
    <h2>填寫你的詳細資料</h2>
    <el-form label-position="top" ref="formRef" label-width="120px">
      <el-row :gutter="10">
        <el-col :sm="24" :lg="12">
          <el-form-item label="中文姓名 (與證件相同)：">
            <el-input
              size="large"
              v-model="input3"
              placeholder="e.g. 陳大文"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="先生"
                  style="width: 80px"
                >
                  <el-option label="先生" value="1"></el-option>
                  <el-option label="小姐" value="2"></el-option>
                  <el-option label="女士" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :lg="12">
          <el-form-item label="英文姓名 (與證件相同)：">
            <el-input
              size="large"
              v-model="input3"
              placeholder="e.g. Chan Tai Man"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Mr."
                  style="width: 80px"
                >
                  <el-option label="Mr" value="1"></el-option>
                  <el-option label="Miss" value="2"></el-option>
                  <el-option label="Ms" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="電郵地址：">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="再次輸入電郵地址：">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="電話號碼：">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="特別要求：">
            <el-input type="textarea" rows="8"></el-input>
          </el-form-item>
          <p>
            建議盡早提出特別要求,但最終仍需視乎實際情況作出安排,請注意無法保證能達成你的要求。
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: "",
      select: "",
    };
  },
};
</script>

<style>
.reservation .left-section .form h2 {
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.reservation .left-section .form p {
  letter-spacing: 1.8px;
  color: #8d8d8d;
  font-size: 10px;
  margin-bottom: 1rem;
}

.reservation .left-section .form .el-form .el-form-item__label {
  padding: 0;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.reservation .left-section .form .el-form .el-form-item__content {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}

.reservation .left-section .form .el-form .el-input-group__prepend,
.reservation .left-section .form .el-form .el-input__inner {
  border: none;
  background: transparent;
}

.reservation .left-section .form .el-form .el-input-group__prepend {
  /* position: relative; */
  /* border-right: 1px solid #999; */
}

.reservation .left-section .form .el-form .el-input-group__prepend::after {
  content: "";
  position: absolute;
  background-color: #999;
  height: 22px;
  width: 1px;
  right: 0;
}
</style>