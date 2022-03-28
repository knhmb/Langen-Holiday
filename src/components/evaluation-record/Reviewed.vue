<template>
  <div class="reviewed">
    <div
      class="review-card"
      v-for="comment in comments"
      :key="comment.commentId"
    >
      <el-row v-if="comment.commented === true">
        <el-col :sm="24" :lg="5">
          <img :src="comment.thumbnail" alt="" />
        </el-col>
        <el-col :sm="24" :lg="19">
          <div class="card-content">
            <div class="head">
              <el-row>
                <el-col :span="12">
                  <h3>{{ comment.hotelName }}</h3>
                </el-col>
                <el-col class="btn-alignment" :span="12">
                  <font-awesome-icon
                    class="edit-icon"
                    icon="edit"
                    @click="edit(comment.commentId)"
                  />
                  <font-awesome-icon
                    class="trash-icon"
                    icon="trash-alt"
                    @click="deleteItem(comment.commentId)"
                  />
                  <!-- <el-button>評價</el-button> -->
                </el-col>
              </el-row>
            </div>
            <div class="number-of-individuals">
              <el-row>
                <el-col>
                  <el-rate
                    disabled-void-color="#D1D1D1"
                    :colors="colors"
                    disabled
                    :model-value="+comment.rating"
                  ></el-rate>
                  <p>{{ comment.comments }}</p>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- Dialog -->
    <el-dialog v-model="dialogFormVisible" :title="hotelName">
      <el-form label-position="top">
        <el-row>
          <el-col>
            <el-form-item label="選擇評分">
              <el-rate
                :colors="colors"
                void-color="#D1D1D1"
                v-model="rate"
              ></el-rate>
            </el-form-item>
          </el-col>
          <el-col class="default">
            <el-form-item>
              <el-input v-model="review" :rows="7" type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button @click.prevent="dialogFormVisible = false" class="cancel"
              >下次再說</el-button
            >
          </el-col>
          <el-col :span="12">
            <el-button @click.prevent="checkAccessToken" class="submit"
              >提交</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      reviewed: [],
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      dialogFormVisible: false,
      commentId: null,
      hotelName: "",
      rate: "",
      review: "",
      updatedReview: "",
      selectedId: null,
    };
  },
  computed: {
    comments() {
      return this.$store.getters["profile/hotelComments"];
    },
  },
  methods: {
    async checkAccessToken() {
      await this.$store
        .disptach("auth/checkAccessTokenValidity")
        .then(() => {
          this.updateItem();
        })
        .catch(() => {
          this.checkRefreshToken();
        });
    },
    async checkRefreshToken() {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          this.updateItem();
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
    edit(id) {
      console.log(id);
      this.selectedId = id;
      const item = this.comments.find((comment) => comment.commentId === id);
      this.hotelName = item.hotelName;
      this.rate = +item.rating;
      this.review = item.comments;
      this.commentId = item.commentId;
      // this.rate = item[0].rate;
      // this.review = item[0].desc;

      console.log(item);
      this.dialogFormVisible = true;
    },
    async updateItem() {
      const data = {
        commentId: this.commentId,
        rating: this.rate,
        comments: this.review,
      };
      console.log(data);

      await this.$store.dispatch("profile/updateComment", data).then(() => {
        this.dialogFormVisible = false;
        this.$store.dispatch("profile/getHotelComments");
      });
    },
    deleteItem(id) {
      console.log(id);
      this.$emit("removeItem", id);
    },
  },
  created() {
    // console.log(this.reviewed);
  },
};
</script>

<style>
.evaluation .review-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 1rem;
}

.evaluation .review-card img {
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.evaluation .review-card .card-content {
  padding: 1rem;
}

.evaluation .review-card .head {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.evaluation .review-card .head h3 {
  letter-spacing: 1.4px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.evaluation .review-card .head .btn-alignment {
  text-align: end;
}

.evaluation .review-card .head .trash-icon,
.evaluation .review-card .head .edit-icon {
  cursor: pointer;
}

.evaluation .review-card .head .edit-icon {
  color: #8d8d8d;
  margin-right: 1rem;
}

.evaluation .review-card .head .trash-icon {
  color: #e63737;
}

.evaluation .review-card .number-of-individuals {
  margin-top: 1rem;
}

.evaluation .review-card .number-of-individuals p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 16px;
  word-break: break-all;
  margin-top: 1rem;
}

.evaluation .reviewed .el-dialog {
  min-width: 350px;
  max-width: 400px;
}

.evaluation .reviewed .el-dialog .el-dialog__title {
  text-align: center;
  display: block;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  letter-spacing: 1.4px;
  font-weight: bold;
  color: #3e3e3e;
}

.evaluation .reviewed .el-dialog .el-icon.el-dialog__close {
  display: none;
}

.evaluation .reviewed .el-dialog .el-form .el-row .el-col {
  display: flex;
  justify-content: center;
}

.evaluation .reviewed .el-dialog .el-form .el-form-item__label {
  text-align: center;
  color: #8d8d8d;
}

.evaluation .reviewed .el-rate .el-icon.el-rate__icon {
  font-size: 1.5rem;
}

.evaluation .reviewed .el-dialog .el-form .el-col.default {
  display: block;
}

.evaluation .reviewed .el-dialog .el-form .el-textarea {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}

.evaluation .reviewed .el-dialog .el-form .el-textarea .el-textarea__inner {
  border: none;
}

.evaluation .reviewed .el-dialog .el-form .el-button {
  border-radius: 5px;
  letter-spacing: 2.2px;
  padding: 0 2rem;
}

.evaluation .reviewed .el-dialog .el-form .el-button.cancel {
  border-color: #707070;
  color: #707070;
}

.evaluation .reviewed .el-dialog .el-form .el-button.submit {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  padding: 0 2.5rem;
}
</style>