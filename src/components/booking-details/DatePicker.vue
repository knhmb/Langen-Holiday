<template>
  <date-picker
    :columns="layout.columns"
    :rows="layout.rows"
    :is-expanded="layout.isExpanded"
    color="orange"
    :model-config="modelConfig"
    v-model="dateSelected"
    :attributes="attrs"
    is-range
  >
  </date-picker>
</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      attrs: [
        {
          highlight: true,
          dates: new Date(year, month, 12),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 13),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 14),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 15),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 9),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 10),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 11),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 12),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 13),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 14),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 15),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 16),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 17),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 18),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 19),
          // popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 20),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 21),
          // popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 22),
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
