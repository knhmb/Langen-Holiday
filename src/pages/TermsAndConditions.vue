<template>
  <base-container>
    <section class="TC">
      <h1>{{ termsConditionsContent.title }}</h1>
      <el-card class="box-card">
        <el-scrollbar height="300px">
          <div v-html="termsConditionsContent.content"></div>
        </el-scrollbar>
        <img @click="openDialog" src="../assets/icon-cs.png" alt="" />
        <div v-if="isDialogOpen" class="contact-us-list">
          <div class="header">
            <div class="close">
              <img
                @click="closeDialog"
                class="close-icon"
                src="../assets/icon-close.png"
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
                      src="../assets/icon-whatsapp.png"
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
                      src="../assets/icon-email.png"
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
      </el-card>
    </section>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  computed: {
    termsConditionsContent() {
      return this.$store.getters["dashboard/termsConditionsContent"];
    },
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
  },
  created() {
    this.$store.dispatch("dashboard/getTermsConditions");
  },
};
</script>

<style>
.TC {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  color: #8d8d8d;
}

.TC h1 {
  margin-bottom: 1.5rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.TC p {
  color: #999;
  margin-bottom: 1rem;
  font-size: 14px;
}

.TC .el-scrollbar {
  padding: 0 1rem;
}

.TC .el-scrollbar .el-scrollbar__thumb {
  background-color: #fd9a1a;
  opacity: 1;
}

.TC .el-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}

.TC .box-card {
  padding-bottom: 1rem;
}

.TC .el-card img {
  width: 50px;
  position: absolute;
  right: 0;
  bottom: -20px;
  cursor: pointer;
}

.TC .contact-us-list {
  position: absolute;
  right: 0;
  top: 4.5rem;
  max-width: 300px;
  z-index: 1;
}

.TC .contact-us-list .whats-img {
  position: static;
}

.TC .contact-us-list .el-row {
  margin-top: 0.5rem;
}

.TC .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.TC .contact-us-list .header .close {
  text-align: end;
}

.TC .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
  position: static;
}

.TC .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.TC .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px 8px;
  margin-bottom: 1rem;
}

.TC .contact-us-list .body .grey .el-row {
  align-items: center;
}

.TC .contact-us-list .body .grey img {
  width: 50px;
}

.TC .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  font-size: 14px;
  word-break: break-all;
}

.TC .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

.TC .box-card .info {
  margin: 0;
  font-weight: bold;
}

@media screen and (max-width: 414px) {
  .TC .contact-us-list {
    top: 4rem;
  }
}

@media screen and (max-width: 375px) {
  .TC .contact-us-list {
    top: 3rem;
  }
}
</style>