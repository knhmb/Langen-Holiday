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
            <el-button @click="oneTimePassword" class="inner-btn">{{
              $t("verification_code")
            }}</el-button>
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
              >{{ $t("read_and_agreed") }}
              <span @click="navigateTC('/terms-and-conditions')"
                >{{{$t('terms_of_use_2')}}}</span
              >&
              <span @click="navigateTC('/privacy-and-policy')">{{
                $t("privacy_policy")
              }}</span></span
            >
          </el-form-item>
        </el-col>
        <el-col>
          <el-button @click="register" class="register-btn">{{
            $t("register")
          }}</el-button>
        </el-col>
        <el-col>
          <p class="login-link">
            {{ $t("have_account") }}
            <span @click="toggleLoginForm">{{ $t("login") }}</span>
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
        callback(new Error("請重新輸入密碼"));
      } else {
        if (value !== this.ruleForm.password) {
          callback(new Error(this.$i18n.t("password_dont_match")));
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
        terms: false,
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
            message: this.$i18n.t("name_required"),
            trigger: "blur",
          },
        ],
        englishSurName: [
          {
            required: true,
            message: this.$i18n.t("name_required"),
            trigger: "change",
          },
        ],
        chineseName: [
          {
            required: true,
            message: this.$i18n.t("name_required"),
            trigger: "blur",
          },
        ],
        chineseSurName: [
          {
            required: true,
            message: this.$i18n.t("name_required"),
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: this.$i18n.t("email_required"),
            type: "email",
            trigger: "blur",
          },
        ],
        emailVerificationCode: [
          {
            required: true,
            message: "請輸入驗證碼",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            message: this.$i18n.t("phone_required"),
            trigger: "change",
          },
        ],
        terms: [
          {
            required: true,
            message: this.$i18n.t("terms_required"),
            trigger: "change",
          },
        ],
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
    resetFields() {
      this.ruleForm.englishSurName = "";
      this.ruleForm.chineseSurName = "";
      this.ruleForm.chineseName = "";
      this.ruleForm.englishName = "";
      this.ruleForm.email = "";
      this.ruleForm.emailVerificationCode = "";
      this.ruleForm.phoneNumber = "";
      this.ruleForm.terms = false;
      this.ruleForm.password = "";
      this.ruleForm.confirmPassword = "";
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
    navigateTC(path) {
      this.$router.push(path);
      this.$emit("closeDialog", { closeDialog: false });
    },
    async submitData() {
      const data = {
        fullName: this.ruleForm.englishName,
        fullNameTc: this.ruleForm.chineseName,
        phoneNo: this.ruleForm.phoneNumber,
        email: this.ruleForm.email,
        otp: this.ruleForm.emailVerificationCode,
        password: this.ruleForm.password,
        isAgreePrivacyNotice: this.ruleForm.terms,
        memberRegistration: true,
      };
      console.log(data);

      try {
        await this.$store.dispatch("auth/register", data);
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
    async register() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submitData();
        } else {
          // alert("Error");
          ElNotification({
            title: "Error",
            message: this.$i18n.t("check_inputs"),
            type: "error",
          });
          return false;
        }
      });
    },
    async oneTimePassword() {
      if (this.ruleForm.email === "") {
        ElNotification({
          title: "Error",
          message: this.$i18n.t("email_required"),
          type: "error",
        });
      } else {
        await this.$store
          .dispatch("auth/oneTimePassword", {
            email: this.ruleForm.email,
          })
          .then(() => {
            ElNotification({
              title: "Success",
              message: "代碼發送到您的電子郵件",
              type: "success",
            });
          })
          .catch((err) => {
            ElNotification({
              title: "Error",
              message: err.message,
              type: "error",
            });
          });
      }
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
  cursor: pointer;
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