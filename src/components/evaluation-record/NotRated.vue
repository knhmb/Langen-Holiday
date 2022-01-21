<template>
  <div class="comment-card">
    <el-row>
      <el-col :span="5">
        <img src="../../assets/img-houseinfo4.jpg" alt="" />
      </el-col>
      <el-col :span="19">
        <div class="card-content">
          <div class="head">
            <el-row>
              <el-col :span="12">
                <h3>白沙灣渡假酒店</h3>
                <p>香港新界西貢區白沙灣</p>
              </el-col>
              <el-col class="btn-alignment" :span="12">
                <el-button>評價</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="number-of-individuals">
            <el-row>
              <el-col :span="12">
                <p>人數:</p>
                <p>5</p>
              </el-col>
              <el-col :span="12">
                <p>寵物:</p>
                <p>2</p>
              </el-col>
            </el-row>
          </div>
          <div class="days-of-stay">
            <el-row>
              <el-col :span="12">
                <p>入住日期:</p>
                <p>2021年5月22日 15:00</p>
              </el-col>
              <el-col :span="12">
                <p>離開日期:</p>
                <p>2021年5月22日 12:00</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="comment-card">
    <el-row>
      <el-col :span="5">
        <img src="../../assets/img-house3.jpg" alt="" />
      </el-col>
      <el-col :span="19">
        <div class="card-content">
          <div class="head">
            <el-row>
              <el-col :span="12">
                <h3>白沙灣渡假酒店</h3>
                <p>香港新界西貢區白沙灣</p>
              </el-col>
              <el-col class="btn-alignment" :span="12">
                <el-button>評價</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="number-of-individuals">
            <el-row>
              <el-col :span="12">
                <p>人數:</p>
                <p>5</p>
              </el-col>
              <el-col :span="12">
                <p>寵物:</p>
                <p>2</p>
              </el-col>
            </el-row>
          </div>
          <div class="days-of-stay">
            <el-row>
              <el-col :span="12">
                <p>入住日期:</p>
                <p>2021年5月22日 15:00</p>
              </el-col>
              <el-col :span="12">
                <p>離開日期:</p>
                <p>2021年5月22日 12:00</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
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
</style>