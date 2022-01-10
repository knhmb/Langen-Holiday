<template>
  <div class="add-ons">
    <p>Addon</p>
    <el-row class="add-on-item">
      <el-col :span="12">
        <el-checkbox label="option 1"></el-checkbox>
      </el-col>
      <el-col :span="12">
        <p class="add-on-price">+ $ 100.00</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-select class="m-2" placeholder="2">
          <el-option> </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>

  <div class="calculated-add-on">
    <el-row class="add-on-item">
      <el-col :span="12">
        <p>Calculated:</p>
      </el-col>
      <el-col :span="12">
        <p class="add-on-price">$200.00</p>
      </el-col>
    </el-row>
  </div>

  <div class="total-price">
    <el-row>
      <el-col :span="12">
        <p>Total Price:</p>
      </el-col>
      <el-col :span="12" class="final-price">HK$1480.00</el-col>
    </el-row>
  </div>
</template>

<style>
.add-ons {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1.5rem;
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner {
  background-color: orange;
  border-color: #aaa;
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner::after {
  display: none;
}

.add-ons .el-checkbox .el-checkbox__inner:hover {
  border-color: orange;
}

.add-ons .el-checkbox .el-checkbox__label {
  color: #aaa;
}

.calculated-add-on {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.add-ons .add-on-item,
.calculated-add-on .add-on-item {
  align-items: center;
}

.add-ons .add-on-price,
.calculated-add-on .add-on-price {
  text-align: end;
}

.total-price {
  margin-top: 0.5rem;
}

.total-price .el-row {
  align-items: center;
}

.total-price .final-price {
  color: orange;
  font-size: 24px;
}
</style>