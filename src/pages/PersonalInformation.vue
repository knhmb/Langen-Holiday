<template>
  <div v-if="!isProfileEdit" class="personal-information">
    <h3>個人資料</h3>
    <base-card>
      <el-row>
        <el-col>
          <label>中文姓名 (與證件相同)</label>
          <p>陳大文</p>
        </el-col>
        <el-col>
          <label>英文姓名 (與證件相同)</label>
          <p>Chan Tai Man</p>
        </el-col>
        <el-col>
          <label>電郵地址</label>
          <p>chantaiman@gmai.com</p>
        </el-col>
        <el-col>
          <label>電話號碼</label>
          <p>61234678</p>
        </el-col>
        <el-col>
          <el-button @click="editProfile">修改</el-button>
        </el-col>
      </el-row>
    </base-card>
  </div>

  <manage-profile-edit
    @managed="isProfileEdit = $event"
    v-if="isProfileEdit"
  ></manage-profile-edit>
</template>

<script>
import ManageProfileEdit from "./ManageProfileEdit.vue";

export default {
  components: {
    ManageProfileEdit,
  },
  data() {
    return {
      isProfileEdit: false,
    };
  },
  methods: {
    editProfile() {
      // this.$router.push({ name: "manage-profile" });
      this.isProfileEdit = true;
    },
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