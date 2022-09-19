<template>
  <div class="manage-profile-edit">
    <h3>{{ $t("personal_information") }}</h3>
    <base-card>
      <el-form label-position="top">
        <el-row>
          <el-col>
            <el-form-item label="中文姓名 (與證件相同)">
              <el-input v-model="chineseName"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="英文姓名 (與證件相同)">
              <el-input v-model="englishName"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="電郵地址">
              <el-input disabled v-model="email"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="電話號碼">
              <el-input v-model="telephone"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button
              :disabled="
                chineseName === '' ||
                chineseName === null ||
                englishName === null ||
                englishName === '' ||
                email === '' ||
                telephone === ''
              "
              @click.prevent="submit"
              >{{ $t("sure") }}</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </base-card>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      name: "",
      chineseName: "",
      englishName: "",
      email: "",
      telephone: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters["profile/account"];
    },
  },
  methods: {
    async submit() {
      // const userId = JSON.parse(localStorage.getItem("userData")).id;
      const data = {
        fullNameTc: this.chineseName,
        fullName: this.englishName,
        phoneNo: this.telephone,
      };
      await this.$store
        .dispatch("auth/checkAccessTokenValidity")
        .then(() => {
          this.editProfile(data);
        })
        .catch(() => {
          console.log("NOT WORKING");
          this.checkRefershToken(data);
          console.log("NOT WORKING2");
        });
    },
    async editProfile(data) {
      await this.$store
        .dispatch("auth/updateProfile", data)
        .then(() => {
          this.updateProfile();
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
        });
    },
    async checkRefershToken(data) {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          this.editProfile(data);
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
    async updateProfile() {
      await this.$store.dispatch("profile/getAccount").then(() => {
        this.$emit("managed", false);
      });
    },
  },
  mounted() {
    this.chineseName = this.user.fullNameTc;
    this.englishName = this.user.fullName;
    this.email = this.user.email;
    this.telephone = this.user.phoneNo;
  },
  created() {
    if (localStorage.getItem("userData")) {
      this.name = JSON.parse(localStorage.getItem("userData")).username;
    }
    console.log(this.name);
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

@media screen and (max-width: 768px) {
  .edit-profile .manage-profile-edit .el-form .el-input {
    width: 100%;
  }
}

/* .manage-profile-edit .el-button:hover {
  background-color: #fd9a1a;
  color: #fff;
} */
</style>