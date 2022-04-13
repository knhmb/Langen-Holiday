<template>
  <div class="forgot-password">
    <div v-if="!stepOneComplete && !stepTwoComplete" class="email-conformation">
      <el-form
        hide-required-asterisk
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-position="top"
      >
        <el-row>
          <el-col>
            <el-form-item label="電郵地址" prop="username">
              <el-input v-model.trim="ruleForm.username"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col>
            <el-form-item label="電話號碼" prop="phone">
              <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col> -->
          <el-col>
            <el-button @click="firstStep">下一步</el-button>
          </el-col>
          <el-col>
            <p class="return" @click="toggleLoginForm">返回</p>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="stepOneComplete" class="password-confirmation">
      <p>Email has been sent to {{ ruleForm.username }}</p>
      <div class="check-btn">
        <el-button @click="completedLastStep">Submit</el-button>
      </div>
    </div>
    <div v-if="stepTwoComplete" class="password-confirmation">
      <el-form label-position="top">
        <el-row>
          <el-col>
            <el-form-item label="新密碼">
              <el-input
                class="post-icon"
                v-model="password"
                :type="passwordType1"
              ></el-input>
              <img @click="switchIcon('password')" :src="iconEye1" alt="" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="確認密碼">
              <el-input
                class="post-icon"
                v-model="confirmPassword"
                :type="passwordType2"
              ></el-input>
              <img
                @click="switchIcon('confirm-password')"
                :src="iconEye2"
                alt=""
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-button>重設密碼</el-button>
          </el-col>
          <el-col>
            <p @click="previousStep" class="return">返回</p>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        phone: "",
      },
      password: "",
      confirmPassword: "",
      passwordType1: "password",
      passwordType2: "password",
      iconEye1: require("../assets/icon-eyeoff.svg"),
      iconEye2: require("../assets/icon-eyeoff.svg"),
      stepOneComplete: false,
      stepTwoComplete: false,
      rules: {
        username: [
          {
            required: true,
            message: this.$i18n.t("username_required"),
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: this.$i18n.t("phone_required"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    switchIcon(option) {
      if (option === "password") {
        if (this.iconEye1 === require("../assets/icon-eyeon.svg")) {
          this.iconEye1 = require("../assets/icon-eyeoff.svg");
          this.passwordType1 = "password";
        } else if (this.iconEye1 === require("../assets/icon-eyeoff.svg")) {
          this.iconEye1 = require("../assets/icon-eyeon.svg");
          this.passwordType1 = "text";
        }
      } else if (option === "confirm-password") {
        if (this.iconEye2 === require("../assets/icon-eyeon.svg")) {
          this.iconEye2 = require("../assets/icon-eyeoff.svg");
          this.passwordType2 = "password";
        } else if (this.iconEye2 === require("../assets/icon-eyeoff.svg")) {
          this.iconEye2 = require("../assets/icon-eyeon.svg");
          this.passwordType2 = "text";
        }
      }
    },
    toggleLoginForm() {
      this.$emit("toggleLoginForm", { title: "登入" });
    },
    async firstStep() {
      await this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/forgotPassword", {
              username: this.ruleForm.username,
            })
            .then(() => {
              this.stepOneComplete = true;
              this.$emit("toggleLoginForm", { title: "Check Email" });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.message,
                type: "error",
              });
            });
        }
      });
    },
    previousStep() {
      this.stepOneComplete = false;
      this.stepTwoComplete = false;
      this.$emit("toggleLoginForm", { title: "忘記密碼" });
    },
    completedLastStep() {
      this.stepOneComplete = false;
      this.stepTwoComplete = true;
      this.$emit("toggleLoginForm", { title: "忘記密碼" });
    },
  },
};
</script>

<style>
.bottom-header .el-dialog .forgot-password,
.bottom-header .el-dialog .forgot-password .el-form .el-form-item__label {
  color: #8d8d8d;
}

.bottom-header .el-dialog .forgot-password .el-form .el-button,
.bottom-header .el-dialog .forgot-password .password-confirmation .el-button {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  width: 100%;
}

.bottom-header .el-dialog .forgot-password .el-form .el-input {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  position: relative;
}

.bottom-header .el-dialog .forgot-password .el-form .el-input .el-input__inner {
  border: none;
}

.bottom-header
  .el-dialog
  .forgot-password
  .el-form
  .post-icon
  .el-input__inner {
  padding-right: 2rem;
}

.bottom-header .el-dialog .forgot-password .el-form .return {
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
}

.bottom-header .el-dialog .forgot-password .el-form img {
  position: absolute;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.bottom-header .el-dialog .forgot-password .password-confirmation p {
  text-align: center;
  margin-bottom: 2rem;
}

.bottom-header
  .el-dialog
  .forgot-password
  .password-confirmation
  p:last-of-type {
  margin-top: 1rem;
}

.bottom-header .el-dialog .forgot-password .password-confirmation .check-btn {
  text-align: center;
}
</style>