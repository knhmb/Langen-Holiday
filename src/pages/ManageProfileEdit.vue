<template>
  <div class="manage-profile-edit">
    <h3>個人資料</h3>
    <base-card>
      <el-form label-position="top">
        <el-row>
          <el-col>
            <el-form-item label="姓名">
              <el-input v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="電郵地址">
              <el-input v-model="email"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="電話號碼">
              <el-input v-model="telephone"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button @click.prevent="submit">電話號碼</el-button>
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
      name: "Chan Tai Man",
      email: "chantaiman@gmai.com",
      telephone: "61234678",
    };
  },
  methods: {
    submit() {
      this.$router.push("/edit-profile");
    },
  },
};
</script>

<style>
.edit-profile .manage-profile-edit h3 {
  color: #333333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.edit-profile .manage-profile-edit .el-form .el-form-item__label {
  color: #8d8d8d;
}

.edit-profile .manage-profile-edit .el-form .el-input {
  width: 50%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}

.edit-profile .manage-profile-edit .el-form .el-input .el-input__inner {
  border: none;
}

.edit-profile .manage-profile-edit p {
  color: #333333;
  margin: 1rem 0;
}

.edit-profile .manage-profile-edit .el-button {
  border-radius: 5px;
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  padding: 0 1rem;
}

/* .manage-profile-edit .el-button:hover {
  background-color: #fd9a1a;
  color: #fff;
} */
</style>