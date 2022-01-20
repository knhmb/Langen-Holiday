<template>
  <div class="form">
    <h4>請填寫以下資料,我們在短時間內聯絡您</h4>
    <el-form label-position="top">
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <el-form-item label="公司名稱：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="服務種類/行業：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="網站(或社交媒體)：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="聯絡人：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="聯絡電話：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="電郵地址：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <el-form-item label="如何認識我們？">
            <el-select v-model="value" class="m-2" placeholder="如何認識我們？">
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
          <el-button>提交</el-button>
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
          歡迎與我們聯繫！ 閣下可通過以下方式與我們聯絡，或致電 (852) 3598
          6538查詢。
        </p>
      </div>
      <div class="body">
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
        <div class="grey">
          <el-row :gutter="30">
            <el-col :span="5">
              <img class="whats-img" src="../../assets/icon-email.png" alt="" />
            </el-col>
            <el-col :span="19">
              <p>Email</p>
              <p>info@langenholiday.com</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
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