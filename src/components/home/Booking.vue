<template>
  <section class="booking">
    <base-container>
      <el-row>
        <el-col class="booking-title">
          <h1>搜尋住宿優惠</h1>
          <img
            class="search-icon"
            src="../../assets/icon-search-jetso.png"
            alt=""
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="form-control" :span="24">
          <el-input v-model="input" type="text" placeholder="你要去哪裡？" />
          <img class="place-icon" src="../../assets/icon-place.png" alt="" />
        </el-col>
      </el-row>
      <el-row :gutter="3">
        <el-col @click="isOpen = false" class="form-control" :sm="24" :lg="15">
          <date-picker
            @dropdownToggle="toggleDropdown"
            :isDateOpen="isDateOpen"
          ></date-picker>
          <!-- <el-date-picker
            v-model="datePicker"
            type="daterange"
            start-placeholder="入住 2021年5月22日 (星期六)"
            end-placeholder="退房 2021年5月23日 (星期日)"
          >
          </el-date-picker> -->
          <!-- <el-input
            class="calendar-input"
            v-model="input"
            type="text"
            placeholder="入住 2021年5月22日 (星期六) - 退房 2021年5月23日 (星期日)"
          /> -->
          <!-- <img
            class="calendar-icon"
            src="../../assets/icon-calendar.png"
            alt=""
          /> -->
        </el-col>
        <el-col :sm="24" :lg="9">
          <div class="select-input" @click.self="openDropdown">
            <img
              class="person-icon"
              src="../../assets/icon-people.png"
              alt=""
            />
            <p>2位成人・沒有小孩入住・沒有寵物・1間房</p>
            <transition name="slide-fade">
              <div v-if="isOpen" class="individual-booking">
                <div class="content">
                  <el-row>
                    <el-col :span="12">
                      <p class="head">住宿要求</p>
                    </el-col>
                    <el-col class="end" :span="12">
                      <p class="small">清除</p>
                    </el-col>
                    <el-col :span="12">
                      <p>入住人數</p>
                    </el-col>
                    <el-col :span="12">
                      <div class="range">
                        <img
                          class="plus-icon"
                          src="../../assets/icon--.svg"
                          alt=""
                        />
                        <span>4</span>
                        <img
                          class="plus-icon"
                          src="../../assets/icon-+.svg"
                          alt=""
                        />
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <p>房間</p>
                    </el-col>
                    <el-col :span="12">
                      <div class="range">
                        <img
                          class="plus-icon"
                          src="../../assets/icon--.svg"
                          alt=""
                        />
                        <span>2</span>
                        <img
                          class="plus-icon"
                          src="../../assets/icon-+.svg"
                          alt=""
                        />
                      </div>
                    </el-col>
                    <el-col :span="14">
                      <p>寵物</p>
                    </el-col>
                    <el-col class="pet" :span="10">
                      <div class="pet-option">
                        <el-row>
                          <el-col
                            @click="setOption('pet')"
                            :class="{
                              'is-active-option': isSelected === 'pet',
                            }"
                            :span="12"
                          >
                            <p>有</p>
                          </el-col>
                          <el-col
                            @click="setOption('no')"
                            :class="{ 'is-active-option': isSelected === 'no' }"
                            :span="12"
                          >
                            <p>沒有</p>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="submit-btn">
                  <el-button>套用</el-button>
                </div>
              </div>
            </transition>
            <!-- <el-select
              v-model="value"
              placeholder="2位成人・沒有小孩入住・沒有寵物・1間房"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> -->
            <!-- <img
              class="person-icon"
              src="../../assets/icon-people.png"
              alt=""
            /> -->
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>搜尋</el-button>
        </el-col></el-row
      >
    </base-container>
  </section>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      input: "",
      datePicker: "",
      isSelected: "no",
      isOpen: false,
      date: new Date(),
      isDateOpen: false,
    };
  },
  methods: {
    setOption(option) {
      this.isSelected = option;
    },
    openDropdown() {
      this.isOpen = !this.isOpen;
      this.isDateOpen = false;
    },
    toggleDropdown(event) {
      this.isDateOpen = event;
      this.isOpen = false;
    },
  },
  computed: {
    layout() {
      return this.$screens({
        // Default layout for mobile
        default: {
          columns: 1,
          rows: 2,
          isExpanded: true,
        },
        // Override for large screens
        lg: {
          columns: 2,
          rows: 1,
          isExpanded: true,
        },
      });
    },
  },
};
</script>

<style>
.booking {
  background-color: #fd9a1a;
  margin-top: -0.6rem;
  padding: 4rem 0;
  /* overflow-x: hidden; */
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
  letter-spacing: 9.6px;
}

.booking .booking-title {
  margin-bottom: 2rem;
}

.booking .search-icon {
  width: 40px;
  margin-left: 0.5rem;
}

.booking
  .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--default {
  width: 100%;
  padding: 20px 15px;
  border-radius: 0;
  border-color: #fd9a1a;
}

.booking
  .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--default
  .el-range-input {
  padding: 20px 0;
}

.booking .el-range-editor--default .el-icon.el-input__icon.el-range__icon {
  font-size: 20px;
  color: #b00100;
}

.booking .calendar-input::after {
  content: "1晚";
  position: absolute;
  color: #fff;
  background-color: #fd9a1a;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 12px;
  border-radius: 6px;
}

/* .booking .el-select__popper.el-popper.is-light.is-pure {
  display: none;
} */

.booking .el-input .el-input__inner {
  border-radius: 0px;
  padding: 20px 55px;
  border-color: #fd9a1a;
}

/* .booking .el-input .el-input__inner[placeholder] {
  color: red;
} */

.booking .form-control {
  margin-bottom: 1rem;
}

.booking .el-input .el-input__inner:focus {
  border-color: #fd9a1a;
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

.booking .select-input {
  position: relative;
  background-color: #fff;
  border: 1px solid #fd9a1a;
  height: 42px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  padding: 20px 55px;
}

.booking .select-input::after {
  content: "";
  position: absolute;
  right: 15px;
  border-top: 5px solid #b00100;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}

.booking .select-input .individual-booking {
  position: absolute;
  bottom: -263px;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000028;
  border-radius: 0px 0px 5px 5px;
  padding: 16px;
  cursor: context-menu;
  z-index: 1;
}

.booking .select-input .individual-booking .content {
  border-bottom: 1px solid #eee;
  /* padding-bottom: 1rem; */
}

.booking .select-input .individual-booking .content .el-col {
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.booking .select-input .individual-booking .content .head {
  font-weight: bold;
}

.booking .select-input .individual-booking .content p {
  color: #333;
}

.booking .select-input .individual-booking .content .el-col .small {
  color: #e63737;
  font-size: 12px;
}

.booking .select-input .individual-booking .content .end {
  text-align: end;
}

.booking .select-input .individual-booking .content .range {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.booking .select-input .individual-booking .content .range img {
  width: 25px;
  cursor: pointer;
}

.booking .select-input .individual-booking .content .range span {
  color: #fd9a1a;
  margin: 0 0.5rem;
}

.booking .select-input .individual-booking .content .pet .el-col {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking .select-input .individual-booking .content .pet-option {
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 18px;
  cursor: pointer;
}

.booking .select-input .individual-booking .content .pet-option .el-col {
  border-radius: 18px;
}

.booking .select-input .individual-booking .content .el-col p {
  margin: 0;
  padding: 0.3rem 0;
  color: #999;
}

.booking .select-input .individual-booking .submit-btn {
  text-align: end;
}

.booking .select-input .individual-booking .submit-btn .el-button {
  background: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  border-radius: 5px;
  padding: 0 1rem;
}

.booking .is-active-option {
  background-color: #fd9a1a;
  transition: all 300ms ease;
}

.booking
  .select-input
  .individual-booking
  .content
  .pet-option
  .el-col.is-active-option
  p {
  color: #fff;
}

.booking .select-input p {
  font-size: 14px;
  color: #8d8d8d;
}

/* .booking .el-select .el-input__inner {
  padding: 20px 55px;
} */

.booking .person-icon {
  position: absolute;
  top: 50%;
  left: 0.9rem;
  width: 20px;
  transform: translateY(-50%);
}

.booking .el-button--default {
  padding: 1rem 4rem;
  border-radius: 0;
  margin-top: 1rem;
  letter-spacing: 1.4px;
  color: #8d8d8d;
}

.booking .el-input__inner::placeholder,
.booking
  .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--default
  .el-range-input::placeholder {
  color: #8d8d8d;
}

.booking .slide-fade-enter-active {
  transition: all 150ms ease-out;
}

.booking .slide-fade-leave-active {
  transition: all 150ms ease-in;
}

.booking .slide-fade-enter-from,
.booking .slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media screen and (max-width: 991px) {
  .booking h1 {
    font-size: 24px;
  }

  .booking .el-button--default {
    padding: 0 4rem;
  }
}

@media screen and (max-width: 1280px) {
  .booking .select-input .individual-booking {
    bottom: -262px;
  }
}

@media screen and (max-width: 414px) {
  .booking .el-input__inner[placeholder],
  .booking
    .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--default
    .el-range-input,
  .booking .select-input p {
    font-size: 12px;
  }

  .booking
    .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--default
    .el-range-input {
    padding-left: 0.2rem;
  }

  .booking .select-input .individual-booking {
    bottom: -250px;
  }
}
</style>