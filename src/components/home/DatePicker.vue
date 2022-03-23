<template>
  <div class="date-picker" @click.self="toggleDropDown">
    <img @click="toggleDropDown" src="../../assets/icon-calendar.png" alt="" />
    <el-button class="inner-btn" @click="dateDiff"
      >{{ dateDifference === "" ? "1" : dateDifference }}晚</el-button
    >

    <p>
      {{ "入住 " + checkInDate + " (" + checkInDateDay + ")" }}
    </p>
    <span>-</span>
    <p>{{ "退房 " + checkOutDate + " (" + checkOutDateDay + ")" }}</p>
    <transition name="slide-fade">
      <div v-if="isDateOpen" class="date-picker_input">
        <p>入住日期</p>
        <DatePicker
          :model-config="modelConfig"
          @dayclick="onDayClick"
          :columns="layout.columns"
          :rows="layout.rows"
          :is-expanded="layout.isExpanded"
          :min-date="new Date()"
          color="orange"
          is-range
          v-model="dateSelected"
          @click="assignDateDifference"
        >
        </DatePicker>
        <div class="date-picker-btn">
          <el-button @click="closeDropdown">套用</el-button>
        </div>
      </div>
    </transition>

    <el-dialog
      v-model="dialogVisible"
      :title="$i18n.t('number_of_nights')"
      width="30%"
    >
      <span>{{
        dateDifference === "" ? $i18n.t("date_unselected") : dateDifference
      }}</span>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import moment from "moment";

export default {
  props: ["isDateOpen", "dateRange"],
  components: {
    DatePicker,
  },
  data() {
    return {
      days: [],
      range: this.dateRange,
      checkInPlaceholder: "入住 2021年5月22日 (星期六)",
      checkOutPlaceholder: "退房 2021年5月23日 (星期日)",
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      dateDifference: "",
      dialogVisible: false,
      //   isOpen: false,
    };
  },
  // watch: {
  //   dateRange(oldVal, newVal) {
  //     console.log(oldVal, newVal);
  //   },
  // },
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
          isExpanded: false,
        },
      });
    },
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
    dateSelected: {
      get() {
        return this.$store.getters.dateSelected;
      },
      set(value) {
        this.$store.dispatch("changeDate", value);
      },
    },
    checkInDate() {
      return moment(this.dateSelected.start).locale("zh-cn").format("ll");
    },
    checkOutDate() {
      return moment(this.dateSelected.end).locale("zh-cn").format("ll");
    },
    checkOutDateDay() {
      return moment(this.dateSelected.end).locale("zh-cn").format("dddd");
    },
    checkInDateDay() {
      return moment(this.dateSelected.start).locale("zh-cn").format("dddd");
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    toggleDropDown() {
      this.$emit("dropdownToggle", !this.isDateOpen);
    },
    closeDropdown() {
      this.$emit("dropdownToggle", false);
      if (this.range) {
        this.$emit("numberOfDays", {
          start: this.range.start,
          end: this.range.end,
        });
      } else {
        console.log("error");
      }
    },
    dateDiff() {
      if (this.dateSelected) {
        this.assignDateDifference();
        this.dialogVisible = true;
      } else {
        this.dialogVisible = true;
      }
    },
    assignDateDifference() {
      if (this.dateSelected) {
        let startDate = moment(this.dateSelected.start);
        let endDate = moment(this.dateSelected.end);
        let duration = moment.duration(endDate.diff(startDate));
        let days = duration.asDays();
        this.dateDifference = Math.round(days);
      }
    },
  },
};
</script>

<style scoped>
.booking .date-picker {
  position: relative;
  background-color: #fff;
  border: 1px solid #fd9a1a;
  width: 100%;
  height: 42px;
  padding: 20px 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

.booking .date-picker img {
  width: 20px;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.booking .date-picker .el-button.inner-btn {
  position: absolute;
  right: 1rem;
  bottom: 10%;
  padding: 0.2rem 1rem;
  background-color: #fd9a1a;
  border: 1px solid #fd9a1a;
  color: #fff;
  border-radius: 5px;
  letter-spacing: 1.1px;
}

.booking .date-picker .placeholder {
  position: absolute;
  display: flex;
}
.booking .date-picker p {
  font-size: 14px;
}

.booking .date-picker span {
  display: block;
  margin: 0 1rem;
}

.booking .date-picker p,
.booking .date-picker span {
  color: #8d8d8d;
}

/* .booking .date-picker::after {
  content: "1晚";
  position: absolute;
  background-color: #fd9a1a;
  border: 1px solid #fd9a1a;
  color: #fff;
  right: 1rem;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  cursor: pointer;
} */

.booking .date-picker .date-picker_input {
  background-color: #fff;
  position: absolute;
  bottom: -26.05rem;
  width: 100%;
  left: 0;
  padding: 16px;
  box-shadow: 0px 3px 6px #00000028;
  border-radius: 0px 0px 5px 5px;
  z-index: 1;
  cursor: context-menu;
}

.booking .date-picker .date-picker_input p {
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.booking .date-picker .date-picker_input .vc-container.vc-orange {
  border: none;
  width: 100%;
  margin-bottom: 1rem;
}

.booking .date-picker .date-picker_input .vc-container.vc-orange::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0.5rem;
  transform: translateX(-50%);
  background-color: #ddd;
  width: 1px;
  height: 100%;
}

.booking .date-picker .date-picker_input .date-picker-btn {
  text-align: end;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

.booking .date-picker .date-picker_input .date-picker-btn .el-button {
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
  padding: 0 1rem;
  border-radius: 5px;
}

@media screen and (max-width: 1280px) {
  .booking .date-picker .date-picker_input {
    bottom: -26rem;
  }
}

@media screen and (max-width: 912px) {
  .booking .date-picker .date-picker_input .vc-container.vc-orange::after {
    display: none;
  }
  .booking .date-picker .date-picker_input {
    bottom: -42.7rem;
  }
}

@media screen and (max-width: 540px) {
  .booking .date-picker p {
    font-size: 12px;
  }

  .booking .date-picker {
    padding: 0 55px;
  }

  .booking .date-picker::after {
    padding: 0.5rem 0.5rem;
    font-size: 12px;
  }

  /* .booking .date-picker .date-picker_input {
    bottom: -42.6rem;
  } */
}

@media screen and (max-width: 540px) {
  .booking .date-picker .date-picker_input {
    bottom: -42.3rem;
  }
}

@media screen and (max-width: 540px) {
  .booking .date-picker p {
    font-size: 9px;
  }
}
</style>