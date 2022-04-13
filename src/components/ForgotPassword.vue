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
            <el-button @click="firstStep">提交</el-button>
          </el-col>
          <el-col>
            <p class="return" @click="toggleLoginForm">返回</p>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="stepOneComplete" class="password-confirmation">
      <p>
        重設密碼的連結即將發送至你的電郵地址 <br />
        {{ ruleForm.username }}
      </p>
      <div class="check-btn">
        <el-button @click="completedLastStep">確定</el-button>
      </div>
    </div>
    <div v-if="stepTwoComplete" class="password-confirmation">
      <el-form
        label-position="top"
        hide-required-asterisk
        :model="ruleForm2"
        ref="ruleForm2"
        :rules="rules2"
      >
        <el-row>
          <el-col>
            <el-form-item label="新密碼" prop="password">
              <el-input
                class="post-icon"
                v-model="ruleForm2.password"
                :type="passwordType1"
              ></el-input>
              <img @click="switchIcon('password')" :src="iconEye1" alt="" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="確認密碼" prop="confirmPassword">
              <el-input
                class="post-icon"
                v-model="ruleForm2.confirmPassword"
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
            <el-button @click="submitPassword">重設密碼</el-button>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("password_required")));
      } else {
        if (this.ruleForm2.confirmPassword !== "") {
          this.$refs.ruleForm2.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("請重新輸入密碼"));
      } else {
        if (value !== this.ruleForm2.password) {
          callback(new Error(this.$i18n.t("password_dont_match")));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        username: "",
        phone: "",
      },
      ruleForm2: {
        password: "",
        confirmPassword: "",
      },
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
      rules2: {
        password: [
          {
            required: true,
            message: this.$i18n.t("password_required"),
            validator: validatePass,
            trigger: "blur",
          },
          {
            min: 6,
            message: "密碼必須至少6個字符",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: this.$i18n.t("password_required"),
            validator: validateConfirmPass,
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
              this.$emit("toggleLoginForm", { title: "重設密碼" });
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
      this.$store.commit("TOGGLE_LOGIN_FORM", false);
    },
    submitPassword() {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          const data = {
            checkString: this.$route.query.value,
            newPassword: this.ruleForm2.password,
          };
          console.log(data);
          console.log(this.$route);
          // this.$router.replace("/");
        }
      });
    },
  },
  created() {
    if (this.$route.path === "/reset-password") {
      this.stepOneComplete = false;
      this.stepTwoComplete = true;
      this.$emit("toggleLoginForm", { title: "忘記密碼" });
    }
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