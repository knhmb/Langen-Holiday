<template>
  <base-container>
    <div class="comment">
      <h2>{{ $t("latest_evaluation") }}</h2>
      <el-row
        ><el-col class="alert" :span="23">
          <el-alert
            v-for="review in selectedHotel.reviews"
            :key="review.id"
            :closable="false"
            type="warning"
          >
            <!-- <template> -->
            <el-rate
              disabled-void-color="#D1D1D1"
              :colors="colors"
              :model-value="+review.rating"
              disabled
            ></el-rate>
            <p>
              {{ review.comments }}
            </p>
            <!-- </template> -->
            <img class="img-alert" src="../../assets/icon-comment.png" alt="" />
          </el-alert>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>{{ $t("display_more") }}</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="cs">
          <img
            @click="openDialog"
            class="img-cs"
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
              <!-- <div class="grey">
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
              </div> -->
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
              <!-- <div class="grey">
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
              </div> -->
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      isDialogOpen: false,
    };
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
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
};
</script>

<style>
.comment {
  margin-top: 2rem;
  padding-bottom: 1rem;
}

.comment h2 {
  letter-spacing: 4px;
  color: #fd9a1a;
  margin-bottom: 1.5rem;
}

.comment .el-alert {
  padding: 2rem;
  padding-right: 4rem;
  border-radius: 24px;
  position: relative;
  margin-bottom: 1rem;
  overflow: visible;
}

.comment .el-alert .el-rate .el-rate__icon {
  margin: 0;
}

.comment .el-alert p {
  font-size: 18px;
  letter-spacing: 5.6px;
  color: #8d8d8d;
  word-break: break-word;
}

.comment .el-row .el-col {
  position: relative;
}

.comment .el-row .el-alert::after {
  content: "K";
  color: #fff;
  position: absolute;
  right: 1.5%;
  top: 42%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}

.comment .img-alert {
  width: 100px;
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.comment .el-button--default {
  background-color: #b00100;
  border-color: #fd9a1a;
  border-radius: 5px;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  letter-spacing: 1.4px;
}

.comment .img-cs {
  width: 50px;
  position: absolute;
  right: 0;
  cursor: pointer;
}

.comment .contact-us-list {
  position: absolute;
  right: 0;
  top: -20rem;
  max-width: 300px;
}

.comment .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.comment .contact-us-list .header .close {
  text-align: end;
}

.comment .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.comment .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.comment .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.comment .contact-us-list .body .grey img {
  width: 50px;
}

.comment .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  /* font-size: 14px; */
}

.comment .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

@media screen and (max-width: 1024px) {
  .comment .el-row .el-alert::after {
    right: 2.3%;
    /* top: 25%; */
  }
}

@media screen and (max-width: 768px) {
  .comment .el-row .el-alert::after {
    right: 2.5%;
    /* top: 27%; */
  }

  .comment .el-button--default {
    padding: 0 1.5rem;
  }
}

@media screen and (max-width: 540px) {
  .comment .el-row .el-alert::after {
    right: 3.8%;
    /* top: 34%; */
  }
}

@media screen and (max-width: 414px) {
  .comment .el-row .el-alert::after {
    right: 5%;
    /* top: 32%; */
  }
}

@media screen and (max-width: 375px) {
  .comment .el-row .el-alert::after {
    right: 6%;
    /* top: 40%; */
  }
}

@media screen and (min-width: 1790px) {
  .comment .el-row .el-alert::after {
    right: 1%;
    /* top: 40%; */
  }
}
</style>