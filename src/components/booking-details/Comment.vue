<template>
  <base-container>
    <div class="comment">
      <h2>Comment</h2>
      <el-row
        ><el-col class="alert" :span="23">
          <el-alert :closable="false" type="warning">
            <el-rate :colors="colors" v-model="value" disabled></el-rate>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda dolores repudiandae est quos sit temporibus architecto
              provident
            </p>
            <img class="img-alert" src="../../assets/icon-comment.png" alt="" />
          </el-alert>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>Review</el-button>
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
      colors: ["orange", "orange", "orange"],
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
  color: orange;
  margin-bottom: 1.5rem;
}

.comment .el-alert {
  padding: 2rem;
  padding-right: 4rem;
  border-radius: 24px;
  position: static;
}

.comment .el-alert p {
  font-size: 18px;
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
  background-color: darkred;
  border-color: orange;
  border-radius: 2px;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
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
    top: 36%;
  }
}

@media screen and (max-width: 375px) {
  .comment .el-row .alert::after {
    right: 9.8%;
    top: 40%;
  }
}
</style>