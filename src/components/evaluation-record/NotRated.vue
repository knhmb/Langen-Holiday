<template>
  <div class="not-rated">
    <div class="comment-card" v-for="rate in comments" :key="rate">
      <el-row v-if="rate.commented === false">
        <el-col :sm="24" :lg="5">
          <img :src="rate.thumbnail" alt="" />
        </el-col>
        <el-col :sm="24" :lg="19">
          <div class="card-content">
            <div class="head">
              <el-row>
                <el-col :span="12">
                  <h3>{{ rate.hotelName }}</h3>
                  <p>{{ rate.hotelAddress }}</p>
                </el-col>
                <el-col class="btn-alignment" :span="12">
                  <el-button @click="openDialog(rate)">評價</el-button>
                </el-col>
              </el-row>
            </div>
            <div class="number-of-individuals">
              <el-row>
                <el-col :span="12">
                  <p>人數:</p>
                  <p>
                    {{ rate.adultQty }}位成人 + {{ rate.childrenQty }}位兒童
                  </p>
                </el-col>
                <el-col :span="12">
                  <p>寵物:</p>
                  <p>
                    {{
                      rate.petsQty === null || rate.petsQty === ""
                        ? 0
                        : rate.petsQty
                    }}
                  </p>
                </el-col>
                <template v-for="(age, index) in rate.childrenAge" :key="age">
                  <el-col :span="8">
                    <p>兒童{{ index + 1 }}年齡:</p>
                    <p>{{ age }}</p>
                  </el-col>
                </template>
                <!-- <el-col :span="8">
                  <p>兒童1年齡:</p>
                  <p>8</p>
                </el-col>
                <el-col :span="8">
                  <p>兒童2年齡:</p>
                  <p>9</p>
                </el-col>
                <el-col :span="8">
                  <p>兒童3年齡::</p>
                  <p>10</p>
                </el-col> -->
              </el-row>
            </div>
            <div class="days-of-stay">
              <el-row>
                <el-col :span="12">
                  <p>入住日期:</p>
                  <p>
                    {{ formatDate(rate.checkInDate) }}
                    {{ rate.checkInTime.replace(/(.{2})$/, ":$1") }}
                  </p>
                  <p></p>
                </el-col>
                <el-col :span="12">
                  <p>離開日期:</p>
                  <p>
                    {{ formatDate(rate.checkOutDate) }}
                    {{ rate.checkOutTime.replace(/(.{2})$/, ":$1") }}
                  </p>
                  <!-- <p>{{ rate.checkOutDate }}</p> -->
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
            <el-button @click.prevent="addReview()" class="submit"
              >提交</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      hotelId: null,
      reservationId: null,
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      dialogFormVisible: false,
      review: "",
      hotelName: "",
      rate: null,
    };
  },
  computed: {
    comments() {
      return this.$store.getters["profile/hotelComments"];
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).locale("zh-cn").format("ll");
    },
    openDialog(rate) {
      console.log(rate);
      this.hotelName = rate.hotelName;
      this.hotelId = rate.hotelId;
      this.reservationId = rate.reservationId;
      this.dialogFormVisible = true;
    },
    async addReview() {
      // this.$emit("submitReview", {
      //   id: id,
      //   review: this.review,
      //   rating: this.rate,
      // });
      const data = {
        hotelId: this.hotelId,
        reservationId: this.reservationId,
        rating: this.rate,
        comments: this.review,
      };
      console.log(data);
      await this.$store.dispatch("profile/addComment", data).then(() => {
        this.review = "";
        this.rate = null;
        this.dialogFormVisible = false;
        this.$store.dispatch("profile/getHotelComments");
      });
    },
  },
  created() {
    console.log(this.comments);
  },
};
</script>

<style>
.evaluation .comment-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 1rem;
}

.evaluation .comment-card img {
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.evaluation .comment-card .card-content {
  padding: 1rem;
}

.evaluation .comment-card .head {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.evaluation .comment-card .head h3 {
  letter-spacing: 1.4px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.evaluation .comment-card .head p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
}

.evaluation .comment-card .head .btn-alignment {
  text-align: end;
}

.evaluation .comment-card .head .el-button {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  text-align: end;
  padding: 0 2rem;
}

.evaluation .comment-card .number-of-individuals .el-col {
  margin-bottom: 0.5rem;
}

.evaluation .comment-card .number-of-individuals,
.evaluation .comment-card .days-of-stay {
  margin-top: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.evaluation .comment-card .days-of-stay {
  border: none;
}

.evaluation .comment-card .number-of-individuals p,
.evaluation .comment-card .days-of-stay p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 14px;
}

.evaluation .not-rated .el-dialog {
  min-width: 350px;
  max-width: 400px;
}

.evaluation .not-rated .el-dialog .el-dialog__title {
  text-align: center;
  display: block;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  letter-spacing: 1.4px;
  font-weight: bold;
  color: #3e3e3e;
}

.evaluation .not-rated .el-dialog .el-icon.el-dialog__close {
  display: none;
}

.evaluation .not-rated .el-dialog .el-form .el-row .el-col {
  display: flex;
  justify-content: center;
}

.evaluation .not-rated .el-dialog .el-form .el-form-item__label {
  text-align: center;
  color: #8d8d8d;
}

.evaluation .not-rated .el-dialog .el-form .el-rate .el-icon.el-rate__icon {
  font-size: 2rem;
}

.evaluation .not-rated .el-dialog .el-form .el-col.default {
  display: block;
}

.evaluation .not-rated .el-dialog .el-form .el-textarea {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}

.evaluation .not-rated .el-dialog .el-form .el-textarea .el-textarea__inner {
  border: none;
}

.evaluation .not-rated .el-dialog .el-form .el-button {
  border-radius: 5px;
  letter-spacing: 2.2px;
  padding: 0 2rem;
}

.evaluation .not-rated .el-dialog .el-form .el-button.cancel {
  border-color: #707070;
  color: #707070;
}

.evaluation .not-rated .el-dialog .el-form .el-button.submit {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  padding: 0 2.5rem;
}
</style>