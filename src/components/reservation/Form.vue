<template>
  <div class="form">
    <h2>Form Details</h2>
    <el-form label-position="top" ref="formRef" label-width="120px">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="First Name:">
            <el-input
              size="large"
              v-model="input3"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Mr."
                  style="width: 70px"
                >
                  <el-option label="Restaurant" value="1"></el-option>
                  <el-option label="Order No." value="2"></el-option>
                  <el-option label="Tel" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="First Name:">
            <el-input
              size="large"
              v-model="input3"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Mr."
                  style="width: 70px"
                >
                  <el-option label="Restaurant" value="1"></el-option>
                  <el-option label="Order No." value="2"></el-option>
                  <el-option label="Tel" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="Name:">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="Name:">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="Name:">
            <el-input size="large"></el-input>
          </el-form-item>
          <el-form-item label="Name:">
            <el-input type="textarea" rows="8"></el-input>
          </el-form-item>
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
.reservation .left-section .form .el-form .el-form-item__label {
  padding: 0;
  color: #999;
}

.reservation .left-section .form .el-form .el-form-item__content {
  box-shadow: 0px 2px 5px #c6c6c6;
  border-radius: 2px;
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