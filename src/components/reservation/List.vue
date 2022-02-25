<template>
  <base-container>
    <div class="list-content">
      <el-row>
        <el-col>
          <div class="list">
            <h1>注意事項</h1>
            <el-card class="box-card">
              <ul>
                <li>
                  •
                  訂房時必須有確實人數(大小同計，訪客包括在內)，不接受之後加人或更改人數。
                </li>
                <li>
                  •
                  預訂一經確認，所有更改/取消程序，會按照該住宿的取消政策及惡劣天氣安排辦理，請先細閱取消政策及惡劣天氣安排。
                </li>

                <li>
                  •
                  必須至少2人同行登記取匙，登記人及同行住客須出示香港身份證辦理入住手續。
                </li>
                <li>
                  •
                  在任何時間內，上述房間不得超出議定人數，包括探訪者在內。如有超額，一經發現，立即收回單位，訂單即時作廢，並且不會退回任何款項，
                  敬請注意。
                </li>
                <li>• 登記入住時需繳付按金HK$200</li>
                <li>• 入住時間：下午3時 (最遲晚上09:00前辦理入住手續）</li>
                <li>• 房間禁止攜帶貓狗或任何寵物</li>
              </ul>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>取消政策</h1>
            <el-card class="box-card">
              <ul>
                <li>• 不設更改/取消預訂</li>
              </ul>
              <p>
                (無論在任何情況下，客人於行程中自行取消、放棄所訂之住宿，或提早退房，所繳付之一切費用恕不退還。)
              </p>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>惡劣天氣安排</h1>
            <el-card class="box-card last">
              <p>如在入住當天發出八號烈風或暴風信號，將作以下安排：</p>
              <p>
                1)
                如信號在下午3:00後仍然懸掛，相關住宿可改至同等價值的日期入住，惟須於7天內回覆更改之入住日期。
              </p>
              <p>
                2)
                如信號已經在下午3:00之前除下，住宿安排將照常繼續，客人需如期入住。如有任何爭議，樂程假期將保留最終決定權
                。
              </p>
              <img @click="openDialog" src="../../assets/icon-cs.png" alt="" />
            </el-card>
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
                  歡迎與我們聯繫！ 閣下可通過以下方式與我們聯絡，或致電 (852)
                  3598 6538查詢。
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
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-checkbox
            label="我同意本頁顯示的金額，也同意注意事項，取消政策和惡劣天氣安排以及網站使用條款"
            size="large"
          ></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button class="submit">提交</el-button>
        </el-col>
      </el-row>
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
.reservation .list-content {
  margin-bottom: 2rem;
}

.reservation .list-content .el-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
}
.reservation .list {
  margin-top: 3rem;
  position: relative;
  /* margin-bottom: 1rem; */
}

.reservation .list .box-card.last {
  position: relative;
}

.reservation .list .box-card.last img {
  position: absolute;
  width: 50px;
  right: 0;
  bottom: 0;
  cursor: pointer;
  margin-top: 1rem;
}

.reservation .contact-us-list {
  position: absolute;
  right: 0;
  top: -10.5rem;
  max-width: 300px;
}

.reservation .contact-us-list .header {
  background-color: #fd9a1a;
  padding: 6px 12px 6px 12px;
  border-radius: 5px 5px 0px 0px;
}

.reservation .contact-us-list .header .close {
  text-align: end;
}

.reservation .contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.reservation .contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.reservation .contact-us-list .body .grey {
  background-color: #eaeaea;
  padding: 8px;
  margin-bottom: 1rem;
}

.reservation .contact-us-list .body .grey img {
  width: 50px;
}

.reservation .contact-us-list .body .grey p {
  margin: 0;
  color: #8d8d8d;
  padding: 0;
  /* font-size: 14px; */
}

.reservation .contact-us-list .header p {
  text-align: center;
  color: #fff;
  padding: 0;
}

.reservation .list .el-card {
  border: none;
}

.reservation .list .el-card .el-card__body {
  margin-bottom: 2rem;
}

.reservation .list h1 {
  font-size: 24px;
  margin-bottom: 1rem;
  letter-spacing: 4.5px;
  color: #8d8d8d;
}

.reservation .list ul {
  padding-left: 2rem;
  list-style-type: none;
}

.reservation .list ul li {
  margin-bottom: 1rem;
  letter-spacing: 0px;
  color: #8d8d8d;
}

.reservation .list p {
  color: #8d8d8d;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.reservation .el-checkbox {
  margin-top: 1rem;
  padding-left: 20px;
}

.reservation .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 18px;
  height: 18px;
  border: 1px solid black;
}

.reservation .el-checkbox .el-checkbox__inner::after {
  top: 3px;
  left: 6px;
}

.reservation .el-checkbox .el-checkbox__label {
  color: #8d8d8d;
  white-space: normal;
}

.reservation .el-button--default.submit {
  width: 100%;
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  border-radius: 5px;
  color: #fff;
  margin-top: 2rem;
  font-size: 28px;
  font-family: Noto Sans Mono CJK TC;
  letter-spacing: 5.6px;
  padding: 1.5rem 0;
}

@media screen and (max-width: 1024px) {
  .contact-us-list {
    top: -7.5rem;
  }
}

@media screen and (max-width: 540px) {
  .contact-us-list {
    top: -3rem;
  }
}

@media screen and (max-width: 414px) {
  .contact-us-list {
    top: -3rem;
  }
}

@media screen and (max-width: 375px) {
  .contact-us-list {
    top: 1.5rem;
  }
}
</style>