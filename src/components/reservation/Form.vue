<template>
  <div class="form">
    <h2>填寫你的詳細資料</h2>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="formRef"
      label-width="120px"
      hide-required-asterisk
    >
      <el-row :gutter="10">
        <el-col :sm="24" :lg="12">
          <el-form-item label="中文姓名 (與證件相同)：" prop="chineseName">
            <el-input
              size="large"
              v-model="ruleForm.chineseName"
              placeholder="e.g. 陳大文"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="ruleForm.chineseNameTitle"
                  placeholder="先生"
                  style="width: 80px"
                >
                  <el-option label="先生" value="先生"></el-option>
                  <el-option label="小姐" value="小姐"></el-option>
                  <el-option label="女士" value="女士"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :lg="12">
          <el-form-item label="英文姓名 (與證件相同)：" prop="englishName">
            <el-input
              size="large"
              v-model="ruleForm.englishName"
              placeholder="e.g. Chan Tai Man"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="ruleForm.englishNameTitle"
                  placeholder="Mr."
                  style="width: 80px"
                >
                  <el-option label="Mr" value="Mr"></el-option>
                  <el-option label="Miss" value="Miss"></el-option>
                  <el-option label="Ms" value="Ms"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="電郵地址：" prop="email">
            <el-input v-model="ruleForm.email" size="large"></el-input>
          </el-form-item>
          <el-form-item label="再次輸入電郵地址：" prop="confirmEmail">
            <el-input v-model="ruleForm.confirmEmail" size="large"></el-input>
          </el-form-item>
          <el-form-item label="電話號碼：" prop="telephone">
            <el-input v-model="ruleForm.telephone" size="large"></el-input>
          </el-form-item>
          <el-form-item label="特別要求：">
            <el-input
              v-model="ruleForm.specialRequest"
              type="textarea"
              rows="8"
            ></el-input>
          </el-form-item>
          <p>
            建議盡早提出特別要求,但最終仍需視乎實際情況作出安排,請注意無法保證能達成你的要求。
          </p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("email_required")));
      } else {
        if (this.ruleForm.confirmEmail !== "") {
          this.$refs.formRef.validateField("confirmEmail");
        }
        callback();
      }
    };

    const validateConfirmEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$i18n.t("confirm_email")));
      } else {
        if (value !== this.ruleForm.email) {
          callback(new Error(this.$i18n.t("email_matching")));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        chineseName: "",
        englishName: "",
        email: "",
        confirmEmail: "",
        telephone: "",
        specialReuqest: "",
        chineseNameTitle: "",
        englishNameTitle: "",
      },
      rules: {
        chineseName: [
          {
            required: true,
            message: this.$i18n.t("name_required"),
            trigger: "blur",
          },
        ],
        englishName: [
          {
            required: true,
            message: this.$i18n.t("name_required"),
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: this.$i18n.t("email_required"),
            validator: validateEmail,
            trigger: "blur",
            type: "email",
          },
        ],
        confirmEmail: [
          {
            required: true,
            message: this.$i18n.t("email_required"),
            validator: validateConfirmEmail,
            trigger: "blur",
            type: "email",
          },
        ],
        telephone: [
          {
            required: true,
            message: this.$i18n.t("phone_required"),
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style>
.reservation .left-section .form h2 {
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.reservation .left-section .form p {
  letter-spacing: 1.8px;
  color: #8d8d8d;
  font-size: 10px;
  margin-bottom: 1rem;
}

.reservation .left-section .form .el-form .el-form-item__label {
  padding: 0;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.reservation .left-section .form .el-form .el-form-item__content {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}

.reservation .left-section .form .el-form .el-input-group__prepend,
.reservation .left-section .form .el-form .el-input__inner {
  border: none;
  background: transparent;
}

.reservation .left-section .form .el-form .el-input-group__prepend {
  /* position: relative; */
  /* border-right: 1px solid #999; */
}

.reservation .left-section .form .el-form .el-input-group__prepend::after {
  content: "";
  position: absolute;
  background-color: #999;
  height: 22px;
  width: 1px;
  right: 0;
}
</style>