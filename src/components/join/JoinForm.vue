<template>
  <div class="form">
    <h4>{{ $t("fill_information") }}</h4>
    <el-form
      label-position="top"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      hide-required-asterisk
    >
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <el-form-item label="公司名稱：" prop="companyName">
            <el-input v-model="ruleForm.companyName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="服務種類/行業：" prop="industry">
            <el-input v-model="ruleForm.industry"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="網站(或社交媒體)：" prop="website">
            <el-input v-model="ruleForm.website"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="聯絡人：" prop="contactPerson">
            <el-input v-model="ruleForm.contactPerson"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="聯絡電話：" prop="contactNo">
            <el-input v-model="ruleForm.contactNo"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="電郵地址：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="如何認識我們？" prop="knowUsFrom">
            <el-select
              v-model="ruleForm.knowUsFrom"
              class="m-2"
              placeholder="如何認識我們？"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col>
          <el-button @click="submit">{{ $t("submit") }}</el-button>
        </el-col>
      </el-row>
    </el-form>

    <img
      @click="openDialog"
      class="cs-icon"
      src="../../assets/icon-cs.png"
      alt=""
    />
    <div v-if="isDialogOpen" class="contact-us-list">
      <div class="header">
        <div class="close">
          <img
            @click="closeDialog"
            class="close-icon"
            src="../../assets/icon-close.png"
            alt=""
          />
        </div>
        <p>
          歡迎與我們聯繫！<br />
          閣下可通過以下方式與我們聯絡，<br />
          或致電 (852) 3598 6538查詢。
        </p>
      </div>
      <div class="body">
        <a
          href="//api.whatsapp.com/send?phone=85253962553&text=From Langen Holiday"
          target="_blank"
        >
          <div class="grey">
            <el-row :gutter="30">
              <el-col :span="5">
                <img
                  class="whats-img"
                  src="../../assets/icon-whatsapp.png"
                  alt=""
                />
              </el-col>
              <el-col :span="19">
                <p>WhatsApp</p>
                <p>(852) 5396 2553</p>
              </el-col>
            </el-row>
          </div>
        </a>
        <a href="mailto:info@langenholiday.com" target="_blank">
          <div class="grey">
            <el-row :gutter="30">
              <el-col :span="5">
                <img
                  class="whats-img"
                  src="../../assets/icon-email.png"
                  alt=""
                />
              </el-col>
              <el-col :span="19">
                <p>Email</p>
                <p>info@langenholiday.com</p>
              </el-col>
            </el-row>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      value: "",
      isDialogOpen: false,
      options: [
        {
          value: "Google",
          label: "Google",
        },
        {
          value: "Yahoo",
          label: "Yahoo",
        },
        {
          value: "Facebook",
          label: "Facebook",
        },
        {
          value: "Instagram",
          label: "Instagram",
        },
        {
          value: "朋友介紹",
          label: "朋友介紹",
        },
        {
          value: "其他途徑",
          label: "其他途徑",
        },
      ],
      ruleForm: {
        companyName: "",
        industry: "",
        website: "",
        contactPerson: "",
        contactNo: "",
        email: "",
        knowUsForm: "",
      },
      rules: {
        companyName: [
          {
            required: true,
            message: "請輸入公司名稱",
            trigger: "blur",
          },
        ],
        industry: [
          {
            required: true,
            message: "請進入行業",
            trigger: "blur",
          },
        ],
        website: [
          {
            required: true,
            message: "請輸入您的網站",
            trigger: "blur",
          },
        ],
        contactPerson: [
          {
            required: true,
            message: "請輸入聯繫人",
            trigger: "blur",
          },
        ],
        contactNo: [
          {
            required: true,
            message: "請輸入您的號碼",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "請輸入您的電子郵件",
            type: "email",
            trigger: "blur",
          },
        ],
        knowUsFrom: [
          {
            required: true,
            message: "請輸入您聽說過我們的地方",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    resetForm() {
      this.ruleForm.companyName = "";
      this.ruleForm.industry = "";
      this.ruleForm.website = "";
      this.ruleForm.contactPerson = "";
      this.ruleForm.contactNo = "";
      this.ruleForm.email = "";
      this.ruleForm.knowUsFrom = "";
    },
    async submit() {
      const data = {
        companyName: this.ruleForm.companyName,
        industry: this.ruleForm.industry,
        website: this.ruleForm.website,
        contactPerson: this.ruleForm.contactPerson,
        contactNo: this.ruleForm.contactNo,
        email: this.ruleForm.email,
        knowUsFrom: this.ruleForm.knowUsFrom,
      };
      console.log(data);

      await this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("dashboard/joinUs", data)
            .then(() => {
              ElNotification({
                title: "Success",
                message: "請求已發送",
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
        }
      });
    },
  },
};
</script>

<style>
.join .form {
  margin-top: 1rem;
  padding-right: 20rem;
  position: relative;
}

.join .form h4 {
  letter-spacing: 3px;
  color: #8d8d8d;
  margin-bottom: 1rem;
}

.join .form .el-form .el-input {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  position: relative;
}

.join .form .el-form .el-input .el-input__inner {
  border: none;
}

.join .form .el-form .el-select {
  width: 100%;
}

.join .form .el-form .el-form-item__label {
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.join .form .el-form .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #fff5ea;
}

.join .form .el-form .el-button {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  border-radius: 5px;
  padding: 0 3rem;
}

.join .form .cs-icon {
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  bottom: -3.5rem;
  cursor: pointer;
}

.join .form .contact-us-list {
  position: absolute;
  right: 0;
  top: 9rem;
  max-width: 300px;
}

.join .form .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.join .form .contact-us-list .header .close {
  text-align: end;
}

.join .form .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.join .form .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.join .form .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px;
  margin-bottom: 1rem;
}

.join .form .contact-us-list .body .grey img {
  width: 50px;
}

.join .form .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  /* font-size: 14px; */
}

.join .form .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

@media screen and (max-width: 820px) {
  .join .form {
    padding-right: 0;
  }

  .join .form .contact-us-list {
    top: 27rem;
  }
}

@media screen and (max-width: 414px) {
  .join .form .contact-us-list {
    top: 28.5rem;
  }
}
</style>