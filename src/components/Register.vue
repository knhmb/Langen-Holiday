<template>
  <div class="register">
    <el-form label-position="top">
      <el-row :gutter="10">
        <el-col :sm="24" :md="12">
          <el-form-item label="中文姓名 (與證件相同)">
            <el-input v-model="value" placeholder="Please input">
              <template #prepend>
                <el-select placeholder="先生" style="width: 70px">
                  <el-option label="先生" value="1"></el-option>
                  <el-option label="小姐" value="2"></el-option>
                  <el-option label="女士" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="英文姓名 (與證件相同)">
            <el-input placeholder="Please input">
              <template #prepend>
                <el-select placeholder="Mr." style="width: 70px">
                  <el-option label="Mr" value="1"></el-option>
                  <el-option label="Miss" value="2"></el-option>
                  <el-option label="Ms" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="電郵地址">
            <el-input class="input-btn" v-model="email"></el-input>
            <el-button class="inner-btn">獲取驗證碼</el-button>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="電郵驗證碼">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="電話號碼">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="密碼">
            <el-input
              class="post-icon"
              v-model="password"
              :type="passwordType1"
            ></el-input>
            <img @click="switchIcon('password')" :src="iconEye1" alt="" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
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
          <el-form-item>
            <el-checkbox></el-checkbox>
            <span class="checkbox-label"
              >我已詳閱並同意 <span>使用者條款</span>&
              <span>隱私權保護政策</span></span
            >
          </el-form-item>
        </el-col>
        <el-col>
          <el-button class="register-btn">註冊</el-button>
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
export default {
  data() {
    return {
      value: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordType1: "password",
      passwordType2: "password",
      iconEye1: require("../assets/icon-eyeoff.svg"),
      iconEye2: require("../assets/icon-eyeoff.svg"),
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
      this.$emit("toggleLogin", { title: "登入" });
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