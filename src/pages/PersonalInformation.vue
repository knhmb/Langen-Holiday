<template>
  <div v-if="!isProfileEdit" class="personal-information">
    <h3>{{ $t("personal_information") }}</h3>
    <base-card>
      <el-row>
        <el-col>
          <label>中文姓名 (與證件相同)</label>
          <p>{{ user.fullNameTc }}</p>
        </el-col>
        <el-col>
          <label>英文姓名 (與證件相同)</label>
          <p>{{ user.fullName }}</p>
        </el-col>
        <el-col>
          <label>電郵地址</label>
          <p>{{ user.email }}</p>
        </el-col>
        <el-col>
          <label>電話號碼</label>
          <p>{{ user.phoneNo }}</p>
        </el-col>
        <el-col>
          <el-button @click="editProfile">修改</el-button>
        </el-col>
      </el-row>
    </base-card>
  </div>

  <manage-profile-edit
    @managed="setNewData"
    v-if="isProfileEdit"
  ></manage-profile-edit>
</template>

<script>
import ManageProfileEdit from "./ManageProfileEdit.vue";
// import { ElNotification } from "element-plus";

export default {
  components: {
    ManageProfileEdit,
  },
  data() {
    return {
      isProfileEdit: false,
      currentUserData: null,
      username: "",
    };
  },
  watch: {
    username(oldVal, newVal) {
      console.log(oldVal);
      console.log(newVal);
    },
  },
  computed: {
    user() {
      return this.$store.getters["profile/account"];
    },
  },
  methods: {
    editProfile() {
      // this.$router.push({ name: "manage-profile" });
      this.isProfileEdit = true;
    },
    setNewData(val) {
      this.username = JSON.parse(localStorage.getItem("userData")).username;
      this.isProfileEdit = val;
    },
    // async checkAccessToken() {
    //   await this.$store
    //     .dispatch("auth/checkAccessTokenValidity")
    //     .then(() => {
    //       this.$store.dispatch("profile/getAccount");
    //     })
    //     .catch(() => {
    //       this.checkRefershToken();
    //       console.log("NOT WORKING2");
    //     });
    // },
    // async checkRefershToken() {
    //   await this.$store
    //     .dispatch("auth/checkRefreshTokenValidity")
    //     .then(() => {})
    //     .catch((err) => {
    //       ElNotification({
    //         title: "Error",
    //         message: err.message,
    //         type: "error",
    //       });
    //       this.$store.dispatch("auth/logout");
    //     });
    // },
  },
  created() {
    if (localStorage.getItem("userData")) {
      this.currentUserData = JSON.parse(localStorage.getItem("userData"));
      this.username = JSON.parse(localStorage.getItem("userData")).username;
    }
    console.log(this.currentUserData);
    // this.checkAccessToken();
  },
};
</script>

<style scoped>
.personal-information h3 {
  color: #333333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.personal-information label {
  color: #8d8d8d;
}

.personal-information p {
  color: #333333;
  margin: 1rem 0;
}

.personal-information .el-button {
  border-radius: 5px;
  border-color: #fd9a1a;
  color: #fd9a1a;
  padding: 0 2rem;
}

.personal-information .el-button:hover {
  background-color: #fd9a1a;
  color: #fff;
}
</style>