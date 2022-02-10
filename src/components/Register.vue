<template>
  <div class="register">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-row :gutter="10">
        <el-col :sm="24" :md="12">
          <el-form-item prop="chineseName" label="中文姓名 (與證件相同)">
            <el-input v-model="ruleForm.chineseName" placeholder="Please input">
              <template #prepend>
                <el-select
                  v-model="ruleForm.chineseSurName"
                  placeholder="先生"
                  style="width: 70px"
                >
                  <el-option label="先生" value="先生"></el-option>
                  <el-option label="小姐" value="小姐"></el-option>
                  <el-option label="女士" value="女士"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item prop="englishName" label="英文姓名 (與證件相同)">
            <el-input v-model="ruleForm.englishName" placeholder="Please input">
              <template #prepend>
                <el-select
                  v-model="ruleForm.englishSurName"
                  placeholder="Mr."
                  style="width: 70px"
                >
                  <el-option label="Mr" value="Mr"></el-option>
                  <el-option label="Miss" value="Miss"></el-option>
                  <el-option label="Ms" value="Ms"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="email" label="電郵地址">
            <el-input
              class="input-btn"
              v-model.trim="ruleForm.email"
            ></el-input>
            <el-button class="inner-btn">獲取驗證碼</el-button>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item prop="emailVerificationCode" label="電郵驗證碼">
            <el-input v-model="ruleForm.emailVerificationCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item prop="phoneNumber" label="電話號碼">
            <el-input v-model="ruleForm.phoneNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item prop="password" label="密碼">
            <el-input
              class="post-icon"
              v-model="ruleForm.password"
              :type="passwordType1"
            ></el-input>
            <img @click="switchIcon('password')" :src="iconEye1" alt="" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item prop="confirmPassword" label="確認密碼">
            <el-input
              class="post-icon"
              v-model="ruleForm.confirmPassword"
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
          <el-form-item prop="terms">
            <el-checkbox v-model="ruleForm.terms"></el-checkbox>
            <span class="checkbox-label"
              >我已詳閱並同意 <span>使用者條款</span>&
              <span>隱私權保護政策</span></span
            >
          </el-form-item>
        </el-col>
        <el-col>
          <el-button @click="register" class="register-btn">註冊</el-button>
        </el-col>
        <el-col>
          <p class="login-link">
            已有帳號? <span @click="toggleLoginForm">登入</span>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleForm.validateField("confirmPassword");
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again"));
      } else {
        if (value !== this.ruleForm.password) {
          callback(new Error("Password and confirm password do not match"));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        englishSurName: "",
        chineseSurName: "",
        chineseName: "",
        englishName: "",
        email: "",
        emailVerificationCode: "",
        phoneNumber: "",
        terms: [],
        password: "",
        confirmPassword: "",
      },
      passwordType1: "password",
      passwordType2: "password",
      iconEye1: require("../assets/icon-eyeoff.svg"),
      iconEye2: require("../assets/icon-eyeoff.svg"),
      rules: {
        englishName: [
          {
            required: true,
            message: "Name cannot be empty",
            trigger: "blur",
          },
        ],
        englishSurName: [
          {
            required: true,
            message: "Pick a surname",
            trigger: "change",
          },
        ],
        chineseName: [
          {
            required: true,
            message: "Name cannot be empty",
            trigger: "blur",
          },
        ],
        chineseSurName: [
          {
            required: true,
            message: "Pick a surname",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            type: "email",
            trigger: "blur",
          },
        ],
        emailVerificationCode: [
          {
            required: true,
            message: "Please enter verification code",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: "Please enter a phone number",
            trigger: "change",
          },
        ],
        terms: [
          {
            required: true,
            message: "Terms and conditions must be checked",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password must be atleat 6 characters",
          },
        ],
        confirmPassword: [
          {
            required: true,
            validator: validateConfirmPass,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetFields() {
      this.englishSurName = "";
      this.chineseSurName = "";
      this.chineseName = "";
      this.englishName = "";
      this.email = "";
      this.emailVerificationCode = "";
      this.phoneNumber = "";
      this.terms = false;
      this.password = "";
      this.confirmPassword = "";
    },
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
      this.$emit("toggleLogin", { title: "登入" });
    },
    async submitData() {
      const data = {
        email: this.email,
        password: this.password,
        username: this.englishName,
        displayName: this.englishName,
        givenName: "Francis",
        lastName: "Wong",
        phoneNo: this.phoneNumber,
        isAgreePrivacyNotice: null,
        isAgreeRecvPromo: null,
        memberRegistration: true,
      };

      try {
        await this.$store.dispatch("auth/register", data);
        this.$emit("closeDialog", { closeDialog: false });
        this.resetFields();
      } catch (error) {
        ElNotification({
          title: "Error",
          message: error.message,
          type: "error",
        });
      }
    },
    async register() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submitData();
        } else {
          // alert("Error");
          ElNotification({
            title: "Error",
            message: "Please check your inputs",
            type: "error",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style>
.bottom-header .register {
  letter-spacing: 2.2px;
}

.bottom-header .el-dialog .register .el-form .el-input-group--prepend {
  box-shadow: 0px 3px 6px #00000029;
}

.bottom-header .el-dialog .register .el-form .el-input-group__prepend {
  background: #fff;
  border: none;
}

.bottom-header .el-dialog .register .el-form .el-input-group__prepend::after {
  content: "";
  position: absolute;
  background-color: black;
  width: 1px;
  height: 24px;
  right: 0;
  top: 4px;
}

.bottom-header .el-dialog .register .el-form .el-input {
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 3px 6px #00000029;
}

.bottom-header .el-dialog .register .el-form .el-input .el-input__inner {
  border: none;
}

.bottom-header
  .el-dialog
  .register
  .el-form
  .el-input
  .el-input__inner::placeholder {
  letter-spacing: 2.2px;
}

.bottom-header
  .el-dialog
  .register
  .el-form
  .el-input.post-icon
  .el-input__inner {
  padding-right: 2rem;
}

.bottom-header
  .el-dialog
  .register
  .el-form
  .select-trigger
  .el-input.el-input--default.el-input--suffix {
  box-shadow: none;
}

.bottom-header .el-dialog .register .el-form .inner-btn {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  position: absolute;
  right: 0;
  border-radius: 5px;
  font-family: "Noto Sans HK", sans-serif;
  letter-spacing: 2.2px;
}

.bottom-header .el-dialog .register .el-form .input-btn .el-input__inner {
  padding-right: 7rem;
}

.bottom-header .el-dialog .register .el-form img {
  position: absolute;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.bottom-header .el-dialog .register .el-form .el-form-item__label,
.bottom-header .el-dialog .register .checkbox-label {
  color: #8d8d8d;
}

.bottom-header .el-dialog .register .checkbox-label {
  font-size: 14px;
}

.bottom-header .el-dialog .register .checkbox-label span {
  color: #fd9a1a;
  margin-right: 0.5rem;
}

.bottom-header .el-dialog .register .el-form .el-checkbox__input,
.bottom-header .el-dialog .register .el-form .el-checkbox__inner {
  margin-left: 0;
}

.bottom-header
  .el-dialog
  .register
  .el-form
  .el-checkbox__input.is-checked
  .el-checkbox__inner {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
}

.bottom-header .el-dialog .register .el-form .register-btn {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  width: 100%;
  font-family: "Noto Sans HK", sans-serif;
  letter-spacing: 2.2px;
}

.bottom-header .el-dialog .register .el-form .login-link {
  color: #8d8d8d;
  margin-top: 1rem;
  text-align: center;
}

.bottom-header .el-dialog .register .el-form .login-link span {
  color: #fd9a1a;
  cursor: pointer;
}

.bottom-header .el-dialog .register .el-form .login-link span:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .bottom-header .el-dialog .register .el-form .inner-btn {
    margin: 0;
    font-size: 12px;
    width: 30%;
  }

  .bottom-header .el-dialog .register .checkbox-label {
    font-size: 10px;
  }
}
</style>