<template>
  <div class="reviewed">
    <div
      class="review-card"
      v-for="(review, index) in reviewed"
      :key="review.id"
    >
      <el-row v-if="review[0]">
        <el-col :sm="24" :lg="5">
          <img :src="review[0].image" alt="" />
        </el-col>
        <el-col :sm="24" :lg="19">
          <div class="card-content">
            <div class="head">
              <el-row>
                <el-col :span="12">
                  <h3>{{ review[0].title }}</h3>
                </el-col>
                <el-col class="btn-alignment" :span="12">
                  <font-awesome-icon
                    class="edit-icon"
                    icon="edit"
                    @click="edit(review[0].id)"
                  />
                  <font-awesome-icon
                    class="trash-icon"
                    icon="trash-alt"
                    @click="
                      deleteItem({
                        id: review[0].id,
                        index: index,
                        itemId: review[0].itemId,
                      })
                    "
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
                    v-model="review[0].rate"
                  ></el-rate>
                  <p>{{ review[0].desc }}</p>
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
            <el-button @click.prevent="updateItem(selectedId)" class="submit"
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
      reviewed: [],
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      dialogFormVisible: false,
      rate: "",
      review: "",
      updatedReview: "",
      selectedId: null,
    };
  },
  methods: {
    edit(id) {
      console.log(id);
      this.selectedId = id;
      const item = this.reviewed.find((rate) => rate[0].id === id);
      this.rate = item[0].rate;
      this.review = item[0].desc;

      console.log(item);
      this.dialogFormVisible = true;
    },
    updateItem(id) {
      const singleItem = {
        rate: this.rate,
        desc: this.review,
      };
      console.log(singleItem);

      const data = this.reviewed.findIndex((p) => p[0].id === id);
      Object.assign(this.reviewed[data][0], singleItem);

      this.dialogFormVisible = false;
    },
    deleteItem({ id, index, itemId }) {
      // console.log(this.reviewed);
      // console.log(id);
      this.$emit("removeItem", { id: id, index: index, itemId: itemId });
      // this.reviewed.splice(index, 1);
    },
  },
  created() {
    const arr = [];
    for (let rate of this.rates) {
      arr.push(rate.reviewed);
    }

    for (let a of arr) {
      this.reviewed.push(a);
    }
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