<template>
  <div class="right-section">
    <el-card :body-style="{ padding: '0px' }">
      <img
        src="https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=20&m=627892060&s=612x612&w=0&h=k6QY-qWNlFbvYhas82e_MoSXceozjrhhgp-krujsoDw="
        class="image"
      />
      <div style="padding: 14px">
        <div class="title">
          <p>Hotel Bedroom</p>
        </div>
        <div class="days-of-stay">
          <el-row>
            <el-col :span="8">
              <p>Days:</p>
            </el-col>
            <el-col :span="16">
              <p>5</p>
            </el-col>
            <el-col :span="8">
              <p>Days:</p>
            </el-col>
            <el-col :span="16">
              <p>5</p>
            </el-col>
            <el-col :span="8">
              <p>Date:</p>
            </el-col>
            <el-col :span="16">
              <p>2021/12/03 - 2021/12/31</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style>
.reservation .right-section .el-card .image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.reservation .right-section .el-card .title,
.reservation .right-section .el-card .days-of-stay {
  border-bottom: 1px solid #999;
  padding-bottom: 1rem;
}

.reservation .right-section .el-card .title p {
  font-size: 24px;
  color: #999;
}

.reservation .right-section .el-card .days-of-stay {
  padding-top: 1rem;
}

.reservation .right-section .el-card .days-of-stay .el-col {
  margin-bottom: 0.5rem;
}

.reservation .right-section .el-card .days-of-stay p {
  /* font-size: 14px; */
  color: #999;
}
</style>