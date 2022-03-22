<template>
  <div class="change-password">
    <h3>修改密碼</h3>
    <base-card>
      <el-form
        hide-required-asterisk
        label-position="top"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
      >
        <el-row>
          <el-col>
            <el-form-item label="現有密碼" prop="changePassword">
              <el-input
                type="password"
                v-model="ruleForm.changePassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="新密碼" prop="newPassword">
              <el-input
                type="password"
                v-model="ruleForm.newPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="確認新密碼" prop="confirmPassword">
              <el-input
                type="password"
                v-model="ruleForm.confirmPassword"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button @click="changePassword">修改</el-button>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("password_required")));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleForm.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("password_required")));
      } else {
        if (value !== this.ruleForm.newPassword) {
          callback(new Error(this.$i18n.t("password_dont_match")));
        } else {
          callback();
        }
      }
    };
    return {
      ruleForm: {
        changePassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      rules: {
        changePassword: [
          {
            required: true,
            message: this.$i18n.t("password_required"),
            trigger: "blur",
          },
        ],
        newPassword: [
          {
            required: true,
            // message: this.$i18n.t("password_required"),
            validator: validatePass,
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            // message: this.$i18n.t("password_required"),
            validator: validateConfirmPass,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async changePassword() {
      await this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("Password Changed!");
          const data = {
            oldPassword: this.ruleForm.changePassword,
            newPassword: this.ruleForm.newPassword,
          };
          this.$store
            .dispatch("auth/checkAccessTokenValidity")
            .then(() => {
              this.updatePassword(data);
            })
            .catch(() => {
              this.checkRefershToken(data);
            });
          console.log(data);
        }
      });
    },
    async updatePassword(data) {
      this.$store
        .dispatch("auth/changePassword", data)
        .then(() => {
          ElNotification({
            title: "Password Changed",
            message: "密碼修改成功",
            type: "success",
          });
          this.resetForm();
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
          this.updatePassword(data);
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
    resetForm() {
      this.ruleForm.newPassword = "";
      this.ruleForm.confirmPassword = "";
      this.ruleForm.changePassword = "";
    },
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