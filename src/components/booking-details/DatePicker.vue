<template>
  <date-picker
    :columns="layout.columns"
    :rows="layout.rows"
    :is-expanded="layout.isExpanded"
    color="orange"
    :model-config="modelConfig"
    v-model="dateSelected"
    :attributes="attributes"
    is-range
    ref="calendar"
    @update:fromPage="monthChanged"
    @update:toPage="toMonth"
  >
  </date-picker>
</template>

<script>
import { DatePicker } from "v-calendar";
import moment from "moment";

export default {
  components: {
    DatePicker,
  },
  data() {
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    return {
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      firstDayOfCurrentMonth: "",
      lastDayOfNextMonth: "",
      availableDates: [],
      attrs: [
        {
          highlight: true,
          // dates: new Date(year, month, 12),
          // popover: { label: 500 },
        },
      ],
    };
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
    dateSelected: {
      get() {
        return this.$store.getters.dateSelected;
      },
      set(value) {
        this.$store.dispatch("changeDate", value);
      },
    },
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    attributes() {
      return this.selectedHotel.availableDates.map((date) => ({
        highlight: date.available === true ? true : false,
        dates: date.bookingDate,
        on: [{ days: 25 }],
        popover: {
          label: date.price,
        },
      }));
    },
  },
  methods: {
    monthChanged(page) {
      console.log("From");
      console.log(page);
      const currentDay = new Date(page.year, page.month - 1);
      console.log(currentDay);
      if (moment(currentDay).format("MM") === moment(new Date()).format("MM")) {
        this.firstDayOfCurrentMonth = moment(new Date()).format("YYYYMMDD");
        console.log(this.firstDayOfCurrentMonth);
        console.log("Yes");
      } else {
        this.firstDayOfCurrentMonth = moment(
          new Date(page.year, page.month - 1)
        ).format("YYYYMMDD");
        console.log("No");
        console.log(this.firstDayOfCurrentMonth);
      }
    },
    toMonth(page) {
      console.log("To");
      console.log(page);
      const lastDay = new Date(page.year, page.month, 0);
      this.lastDayOfNextMonth = moment(lastDay).format("YYYYMMDD");
      console.log(this.lastDayOfNextMonth);

      const data = {
        hotelId: this.$route.params.id,
        firstDayOfCurrentMonth: this.firstDayOfCurrentMonth,
        lastDayOfNextMonth: this.lastDayOfNextMonth,
        roomQty: 1,
      };
      console.log(data);

      this.$store.dispatch("booking/getDate", data);
    },
  },
  created() {
    for (let item of this.selectedHotel.availableDates) {
      // console.log(moment(item.bookingDate).format("YYYY-MM-DD"));
      this.availableDates.push(moment(item.bookingDate).format("YYYY-MM-DD"));
    }
  },
};
</script>

<style>
.date-selection .vc-container {
  border: none;
}

.date-selection .vc-pane.row-from-end-1.column-from-end-2 {
  margin-right: 3rem;
}

.date-selection .vc-header {
  background-color: #8d8d8d;
}

.date-selection .vc-weeks {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.date-selection .vc-weekday {
  background-color: #e6e6e6;
  color: black;
}

.date-selection .vc-day {
  color: #c6c6c6;
}

.date-selection .vc-title {
  color: #fff;
}

.date-selection .vc-arrows-container.title-center {
  top: 50%;
  transform: translateY(-50%);
}

.date-selection .vc-arrows-container.title-center .vc-arrow.is-left,
.date-selection .vc-arrows-container.title-center .vc-arrow.is-right {
  position: relative;
  border-radius: 100%;
  background-color: #fd9a1a;
  color: #fff;
}

.date-selection .vc-arrows-container.title-center .vc-arrow.is-left {
  left: -10%;
}

.date-selection .vc-arrows-container.title-center .vc-arrow.is-right {
  right: -10%;
}

@media screen and (max-width: 768px) {
  .date-selection .vc-arrows-container.title-center .vc-arrow.is-left {
    left: -12%;
  }

  .date-selection .vc-arrows-container.title-center .vc-arrow.is-right {
    right: -12%;
  }
}

@media screen and (max-width: 414px) {
  .date-selection .vc-arrows-container.title-center .vc-arrow.is-left {
    left: -15%;
  }

  .date-selection .vc-arrows-container.title-center .vc-arrow.is-right {
    right: -15%;
  }
}
</style>
