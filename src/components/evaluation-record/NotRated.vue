<template>
  <div class="not-rated">
    <div class="comment-card" v-for="rate in rates" :key="rate.id">
      <el-row>
        <el-col :span="5">
          <img :src="rate.image" alt="" />
        </el-col>
        <el-col :span="19">
          <div class="card-content">
            <div class="head">
              <el-row>
                <el-col :span="12">
                  <h3>{{ rate.title }}</h3>
                  <p>{{ rate.description }}</p>
                </el-col>
                <el-col class="btn-alignment" :span="12">
                  <el-button @click="openDialog(rate.id)">評價</el-button>
                </el-col>
              </el-row>
            </div>
            <div class="number-of-individuals">
              <el-row>
                <el-col :span="12">
                  <p>人數:</p>
                  <p>{{ rate.noOfPeople }}</p>
                </el-col>
                <el-col :span="12">
                  <p>寵物:</p>
                  <p>{{ rate.pets }}</p>
                </el-col>
              </el-row>
            </div>
            <div class="days-of-stay">
              <el-row>
                <el-col :span="12">
                  <p>入住日期:</p>
                  <p>{{ rate.checkInDate }}</p>
                </el-col>
                <el-col :span="12">
                  <p>離開日期:</p>
                  <p>{{ rate.checkOutDate }}</p>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- Dialog -->
    <el-dialog v-model="dialogFormVisible" title="白沙灣渡假酒店">
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
            <el-button @click.prevent="addReview(selectedId)" class="submit"
              >提交</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["rates"],
  data() {
    return {
      selectedId: null,

      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      dialogFormVisible: false,
      review: "",
      rate: null,
      //   rates: [
      //     {
      //       id: 1,
      //       title: "白沙灣渡假酒店",
      //       description: "白沙灣渡假酒店",
      //       noOfPeople: 5,
      //       pets: 2,
      //       checkInDate: "2021年5月22日 15:00",
      //       checkOutDate: "2021年5月22日 12:00",
      //       image: require("../../assets/img-houseinfo4.jpg"),
      //       reviewed: [],
      //     },
      //     {
      //       id: 2,
      //       title: "白沙灣渡假酒店",
      //       description: "白沙灣渡假酒店",
      //       noOfPeople: 5,
      //       pets: 2,
      //       checkInDate: "2021年5月22日 15:00",
      //       checkOutDate: "2021年5月22日 12:00",
      //       image: require("../../assets/img-house3.jpg"),
      //       reviewed: [],
      //     },
      //   ],
    };
  },
  methods: {
    openDialog(id) {
      console.log(id);
      this.selectedId = id;
      this.dialogFormVisible = true;
    },
    addReview(id) {
      this.$emit("submitReview", {
        id: id,
        review: this.review,
        rating: this.rate,
      });

      this.review = "";
      this.rate = null;
      this.dialogFormVisible = false;
    },
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