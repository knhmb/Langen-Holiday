<template>
  <section class="booking">
    <base-container>
      <el-row>
        <el-col class="booking-title">
          <h1>Book</h1>
          <img
            class="search-icon"
            src="../../assets/icon-search-jetso.png"
            alt=""
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="form-control" :span="24">
          <el-input v-model="input" type="text" placeholder="Test" />
          <img class="place-icon" src="../../assets/icon-place.png" alt="" />
        </el-col>
      </el-row>
      <el-row :gutter="3">
        <el-col class="form-control" :span="16">
          <el-input
            class="calendar-input"
            v-model="input"
            type="text"
            placeholder="Test"
          />
          <img
            class="calendar-icon"
            src="../../assets/icon-calendar.png"
            alt=""
          />
        </el-col>
        <el-col :span="8">
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <img class="person-icon" src="../../assets/icon-people.png" alt="" />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>Book</el-button>
        </el-col></el-row
      >
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

.<style>
.booking {
  background-color: orange;
  margin-top: -0.6rem;
  padding: 4rem 0;
}

.booking .el-col:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking h1 {
  margin: 0;
  font-size: 32px;
  color: #fff;
}

.booking .booking-title {
  margin-bottom: 2rem;
}

.booking .search-icon {
  width: 40px;
  margin-left: 0.5rem;
}

.booking .calendar-input,
.booking .el-select {
  /* position: relative; */
}

.booking .calendar-input::after {
  content: "test";
  position: absolute;
  color: #fff;
  background-color: orange;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 12px;
  border-radius: 6px;
}

.booking .el-input .el-input__inner {
  border-radius: 0px;
  padding: 20px 55px;
  border-color: orange;
}

.booking .form-control {
  margin-bottom: 1rem;
}

.booking .el-input .el-input__inner:focus {
  border-color: orange;
}

.booking .place-icon,
.booking .calendar-icon {
  position: absolute;
  width: 20px;
  left: 1rem;
}

.booking .el-select {
  width: 100%;
}

/* .booking .el-select .el-input__inner {
  padding: 20px 55px;
} */

.booking .person-icon {
  position: absolute;
  right: 20.5rem;
  top: 18%;
  width: 20px;
}

.booking .el-button--default {
  padding: 1rem 4rem;
  border-radius: 0;
}
</style>