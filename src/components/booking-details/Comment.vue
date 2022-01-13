<template>
  <base-container>
    <div class="comment">
      <h2>最新評價</h2>
      <el-row
        ><el-col class="alert" :span="23">
          <el-alert :closable="false" type="warning">
            <el-rate
              disabled-void-color="#D1D1D1"
              :colors="colors"
              v-model="value"
              disabled
            ></el-rate>
            <p>
              位置方便，周邊餐館很多；交通都非常方便，可以步行到達；管理專業，居住退房都很順利
            </p>
            <img class="img-alert" src="../../assets/icon-comment.png" alt="" />
          </el-alert>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>顯示更多</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="cs">
          <img class="img-cs" src="../../assets/icon-cs.png" alt="" />
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
    };
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
  position: static;
}

.comment .el-alert .el-rate .el-rate__icon {
  margin: 0;
}

.comment .el-alert p {
  font-size: 18px;
  letter-spacing: 5.6px;
  color: #8d8d8d;
}

.comment .el-row .el-col {
  position: relative;
}

.comment .el-row .alert::after {
  content: "K";
  color: #fff;
  position: absolute;
  right: 2.8%;
  top: 23%;
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
}

@media screen and (max-width: 1024px) {
  .comment .el-row .alert::after {
    right: 3.8%;
    top: 25%;
  }
}

@media screen and (max-width: 768px) {
  .comment .el-row .alert::after {
    right: 3.8%;
    top: 27%;
  }
}

@media screen and (max-width: 540px) {
  .comment .el-row .alert::after {
    right: 5.8%;
    top: 34%;
  }
}

@media screen and (max-width: 414px) {
  .comment .el-row .alert::after {
    right: 8.8%;
    top: 32%;
  }
}

@media screen and (max-width: 375px) {
  .comment .el-row .alert::after {
    right: 9.8%;
    top: 36%;
  }
}
</style>