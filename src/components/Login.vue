<template>
  <div class="login">
    <el-form
      hide-required-asterisk
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-row>
        <el-col class="form-col">
          <el-form-item
            prop="email"
            label="電郵地址"
            :label-width="formLabelWidth"
          >
            <el-input v-model="ruleForm.email"></el-input>
            <img src="../assets/icon-loginname.svg" alt="" />
          </el-form-item>
        </el-col>
        <el-col class="form-col">
          <el-form-item
            prop="password"
            label="密碼"
            :label-width="formLabelWidth"
          >
            <el-input v-model="ruleForm.password" :type="passwordInputType">
            </el-input>
            <img src="../assets/icon-password.svg" alt="" />
            <img
              @click="switchIcon"
              class="eye-close-icon"
              :src="eyeIcon"
              alt=""
            />
          </el-form-item>
        </el-col>
        <el-col class="form-col" :span="12">
          <el-checkbox label="記住我"></el-checkbox>
        </el-col>
        <el-col class="form-col" :span="12">
          <p @click="forgotPassword" class="forgot-password">忘記密碼?</p>
        </el-col>
        <el-col class="form-col">
          <el-button @click.prevent="login">登入</el-button>
        </el-col>
        <el-col class="form-col">
          <p class="register-link">
            還未有帳號? <span @click="toggleRegister">立即註冊</span>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      alert: "Wrong Answer",
      ruleForm: {
        email: "",
        password: "",
      },
      formLabelWidth: "120px",
      eyeIcon: require("../assets/icon-eyeoff.svg"),
      passwordInputType: "password",
      rules: {
        email: [
          {
            required: true,
            message: this.$t("username_required"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("password_required"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    switchIcon() {
      if (this.eyeIcon === require("../assets/icon-eyeon.svg")) {
        this.eyeIcon = require("../assets/icon-eyeoff.svg");
        this.passwordInputType = "password";
      } else if (this.eyeIcon === require("../assets/icon-eyeoff.svg")) {
        this.eyeIcon = require("../assets/icon-eyeon.svg");
        this.passwordInputType = "text";
      }
    },
    async loginForm() {
      const data = {
        username: this.ruleForm.email,
        password: this.ruleForm.password,
      };
      try {
        await this.$store.dispatch("auth/login", data);
        this.$emit("closeDialog", { closeDialog: false });
        this.$router.replace("/");
        this.resetFields();
      } catch (error) {
        ElNotification({
          title: "Error",
          message: error.message,
          type: "error",
        });
      }
    },
    async login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loginForm();
        } else {
          ElNotification({
            title: "Error",
            message: this.$i18n.t("check_inputs"),
            type: "error",
          });
          return false;
        }
      });
    },
    resetFields() {
      this.ruleForm.email = "";
      this.ruleForm.password = "";
    },
    toggleRegister() {
      this.$emit("toggleRegisterForm", { title: "註冊", formType: "regsiter" });
    },
    forgotPassword() {
      this.$emit("toggleForgotPassword", { title: "忘記密碼" });
    },
  },
};
</script>

<style>
.bottom-header .el-dialog .login .el-form .el-form-item__label,
.bottom-header .el-dialog .login .el-form p,
.bottom-header .el-dialog .login .el-form .el-checkbox__label {
  color: #8d8d8d;
}

.bottom-header .el-dialog .login .el-form .el-input {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  position: relative;
}

.bottom-header .el-dialog .login .el-form img {
  position: absolute;
  width: 30px;
  height: 30px;
}

.bottom-header .el-dialog .login .el-form .eye-close-icon {
  right: 0.5rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.bottom-header .el-dialog .login .el-form .el-input .el-input__inner {
  border: none;
  padding: 0 2rem;
}

.bottom-header .el-dialog .login .el-form .forgot-password {
  text-align: end;
  text-decoration: underline;
  cursor: pointer;
}

.bottom-header .el-dialog .login .el-form .el-checkbox__input,
.bottom-header .el-dialog .login .el-form .el-checkbox__inner {
  margin-left: 0;
}

.bottom-header
  .el-dialog
  .login
  .el-form
  .el-checkbox__input.is-checked
  .el-checkbox__inner {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
}

.bottom-header .el-dialog .login .el-form .el-button {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  width: 100%;
  margin-top: 1rem;
}

.bottom-header .el-dialog .login .el-form .register-link {
  text-align: center;
  margin-top: 1rem;
}

.bottom-header .el-dialog .login .el-form .register-link span {
  color: #fd9a1a;
  cursor: pointer;
}

.bottom-header .el-dialog .login .el-form .register-link span:hover {
  text-decoration: underline;
}
</style>