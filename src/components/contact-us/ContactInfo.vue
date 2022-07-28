<template>
  <base-container>
    <div class="contact-info">
      <h2>{{ contactContent.title }}</h2>
      <div v-html="contactContent.content"></div>
      <!-- <template v-for="contact in contactContent" :key="contact.id">
        {{ contact.content }}
      </template> -->
      <!-- <el-row>
        <el-col :sm="24" :md="6">
          <p>地址</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"
          ><p>香港仔田灣興和街25號大生工業大廈9樓B室</p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>營業時間</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>星期一至五 12:00 - 19:00</p>
          <p>星期六：12:00 - 18:00</p>
          <p>星期日及公眾假期：休 息</p>
        </el-col>
        <el-col :sm="24" :md="6">
          <p>電話查詢服務時間</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>上午10時至下午9時 (星期一至日)</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="24" :md="6">
          <p>電話</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16"><p>(852)-3598 6538</p> </el-col>

        <el-col :sm="24" :md="6">
          <p>傳真</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>(852)-3598 6539</p>
        </el-col>

        <el-col :sm="24" :md="6">
          <p>WhatsApp</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>(852)-5396-2553</p>
        </el-col>

        <el-col :sm="24" :md="6">
          <p>電郵</p>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="1">
          <span>:</span>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>info@langenholiday.com</p>
        </el-col>
      </el-row> -->
      <img
        @click="openDialog"
        src="../../assets/icon-cs.png"
        class="icon-cs"
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
    contactContent() {
      return this.$store.getters["dashboard/contactContent"];
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
    this.$store.dispatch("dashboard/getContactUs");
    console.log(this.contactContent);
  },
};
</script>

<style scoped>
.contact-info {
  color: #999;
  margin-top: 2rem;
  padding-bottom: 4rem;
  position: relative;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.contact-info :deep(h2) {
  font-size: 24px;
  border-bottom: 1px solid #8d8d8d;
  padding-bottom: 0.5rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.contact-info :deep(.el-row) {
  margin-top: 2rem;
  /* align-items: center; */
}

.contact-info :deep(.el-row .el-col) {
  margin-bottom: 0.5rem;
}

.contact-info .icon-cs {
  width: 50px;
  position: absolute;
  right: 0;
  bottom: 20px;
  cursor: pointer;
}

.contact-info .contact-us-list {
  position: absolute;
  right: 0;
  top: 1.5rem;
  max-width: 300px;
}

.contact-info .contact-us-list .el-row {
  margin-top: 0.5rem;
}

.contact-info .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.contact-info .contact-us-list .header .close {
  text-align: end;
}

.contact-info .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.contact-info .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.contact-info .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px 8px;
  margin-bottom: 1rem;
}

.contact-info .contact-us-list .body .grey .el-row {
  align-items: center;
}

.contact-info .contact-us-list .body .grey img {
  width: 50px;
}

.contact-info .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  font-size: 14px;
  word-break: break-all;
  /* font-size: 14px; */
}

.contact-info .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

@media screen and (max-width: 991px) {
  .contact-info :deep(.el-row .el-col) {
    margin-bottom: 1rem;
  }

  .contact-info .contact-us-list {
    top: 21.5rem;
  }
}
@media screen and (max-width: 820px) {
  .contact-info .contact-us-list {
    top: 21.5rem;
  }
}

@media screen and (max-width: 768px) {
  .contact-info .contact-us-list {
    top: 21.5rem;
  }
}

@media screen and (max-width: 540px) {
  .contact-info .contact-us-list {
    top: 21.5rem;
  }
}

@media screen and (max-width: 414px) {
  .contact-info .contact-us-list {
    top: 23rem;
  }
}

/* .contact-info .el-row p span {
  margin-left: 12rem;
} */
</style>