<template>
  <div class="change-password">
    <h3>修改密碼</h3>
    <base-card>
      <el-form label-position="top">
        <el-row>
          <el-col>
            <el-form-item label="修改密碼">
              <el-input type="password" v-model="changePassword"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="新密碼">
              <el-input type="password" v-model="newPassword"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="確認新密碼">
              <el-input type="password" v-model="confirmPassword"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button
              :disabled="!changePassword || !newPassword || !confirmPassword"
              >修改</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changePassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
};
</script>

<style>
.edit-profile .change-password h3 {
  color: #333333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.edit-profile .change-password .el-form .el-form-item__label {
  color: #8d8d8d;
}

.edit-profile .change-password .el-form .el-input {
  width: 50%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}

.edit-profile .change-password .el-form .el-input .el-input__inner {
  border: none;
}

.edit-profile .change-password .el-button {
  border-radius: 5px;
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  padding: 0 1rem;
}

.edit-profile .change-password .el-button[disabled] {
  background-color: #999;
  border-color: #999;
}

@media screen and (max-width: 768px) {
  .edit-profile .change-password .el-form .el-input {
    width: 100%;
  }
}
</style>