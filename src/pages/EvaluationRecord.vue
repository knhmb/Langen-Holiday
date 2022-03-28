<template>
  <div class="evaluation">
    <h3>評價記錄</h3>
    <el-row>
      <el-col :sm="24" :lg="5">
        <div
          :class="{ 'is-active': isSelected === 'not-rated' }"
          @click="setOption('not-rated')"
          class="pill"
        >
          未評價預約
        </div>
      </el-col>
      <el-col :sm="24" :lg="5">
        <div
          :class="{ 'is-active': isSelected === 'reviewed' }"
          @click="setOption('reviewed')"
          class="pill"
        >
          已評價預約
        </div>
      </el-col>
    </el-row>
    <not-rated
      @submitReview="addReview"
      v-if="isSelected === 'not-rated'"
    ></not-rated>
    <Reviewed @removeItem="assignValues" v-else />

    <div class="delete-dialog">
      <el-dialog v-model="dialogVisible" title="刪除評價" width="30%">
        <span>評價一但刪除，即無法恢復！ 確定要刪除此評價嗎？</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button class="cancel" @click="dialogVisible = false"
              >返回</el-button
            >
            <el-button
              class="delete"
              type="primary"
              @click="checkAccessTokenDelete(id)"
              >刪除</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import NotRated from "../components/evaluation-record/NotRated.vue";
import Reviewed from "../components/evaluation-record/Reviewed.vue";

export default {
  components: {
    NotRated,
    Reviewed,
  },
  data() {
    return {
      isSelected: "not-rated",
      dialogVisible: false,
      reviewId: 1,
      id: null,
      itemId: null,
      arr: [],
      // rates: [
      //   {
      //     id: 1,
      //     title: "白沙灣渡假酒店",
      //     description: "白沙灣渡假酒店",
      //     noOfPeople: "2位成人 + 3位兒童",
      //     pets: 2,
      //     checkInDate: "2021年5月22日 15:00",
      //     checkOutDate: "2021年5月22日 12:00",
      //     image: require("../assets/img-houseinfo4.jpg"),
      //     reviewed: [],
      //   },
      //   {
      //     id: 2,
      //     title: "白沙灣渡假酒店",
      //     description: "白沙灣渡假酒店",
      //     noOfPeople: "2位成人 + 3位兒童",
      //     pets: 2,
      //     checkInDate: "2021年5月22日 15:00",
      //     checkOutDate: "2021年5月22日 12:00",
      //     image: require("../assets/img-house3.jpg"),
      //     reviewed: [],
      //   },
      // ],
    };
  },
  computed: {
    comments() {
      return this.$store.getters["profile/hotelComments"];
    },
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
    },
    addReview({ id, review, rating }) {
      const selectedRate = this.rates.find((rate) => rate.id === id);
      selectedRate.reviewed.push({
        id: this.reviewId++,
        title: selectedRate.title,
        desc: review,
        rate: rating,
        image: selectedRate.image,
        itemId: id,
      });
    },
    assignValues(id) {
      this.dialogVisible = true;
      this.id = id;
      // this.itemId = itemId;
    },
    async checkAccessTokenDelete(id) {
      await this.$store
        .disptach("auth/checkAccessTokenValidity")
        .then(() => {
          this.deleteItem(id);
        })
        .catch(() => {
          this.checkRefreshTokenDelete(id);
        });
    },
    async checkRefreshTokenDelete(id) {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          this.deleteItem(id);
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
    async deleteItem(id) {
      await this.$store.dispatch("profile/deleteComment", id).then(() => {
        this.dialogVisible = false;
        this.$store.dispatch("profile/getHotelComments");
      });
      // let selectedRate = this.rates.find((rate) => rate.id === itemId);
      // let index = selectedRate.reviewed.findIndex((rate) => rate.id === id);
      // selectedRate.reviewed.splice(index, 1);
      // this.dialogVisible = false;
      // console.log(selectedRate.reviewed);
    },
    async checkAccessToken() {
      await this.$store
        .dispatch("auth/checkAccessTokenValidity")
        .then(() => {
          this.getHotelComments();
        })
        .catch(() => {
          this.checkRefreshToken();
        });
    },
    async checkRefreshToken() {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          this.getHotelComments();
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
    getHotelComments() {
      this.$store.dispatch("profile/getHotelComments");
    },
  },
  mounted() {
    console.log("comments");
    this.checkAccessToken();
  },
};
</script>

<style>
.evaluation h3 {
  color: #333;
}

.evaluation .pill {
  background-color: #f7f7f7;
  color: #8d8d8d;
  border-radius: 24px;
  padding: 0.2rem 0;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: 1rem;
}

.evaluation .pill:hover,
.evaluation .pill.is-active {
  background-color: #fd9a1a;
  color: #fff;
}

.evaluation .delete-dialog .el-dialog {
  min-width: 350px;
}

.evaluation .delete-dialog .el-dialog .el-dialog__header .el-dialog__title {
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1.4px;
  color: #3e3e3e;
}

.evaluation .delete-dialog .el-dialog .el-dialog__header .el-dialog__headerbtn {
  display: none;
}

.evaluation .delete-dialog .el-dialog .el-dialog__body span {
  display: block;
  text-align: center;
  color: #666666;
  font-size: 16px;
}

.evaluation .delete-dialog .el-dialog .el-dialog__footer {
  text-align: center;
}

.evaluation .delete-dialog .el-dialog .el-button.cancel,
.evaluation .delete-dialog .el-dialog .el-button.delete {
  border-radius: 5px;
  padding: 0 2rem;
}

.evaluation .delete-dialog .el-dialog .el-button.cancel {
  border-color: #707070;
  color: #707070;
}

.evaluation .delete-dialog .el-dialog .el-button.delete {
  background-color: #e63737;
  border-color: #e63737;
  color: #fff;
}
</style>