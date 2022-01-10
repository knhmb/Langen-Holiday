<template>
  <Calendar :columns="2" color="orange" :attributes="attrs"> </Calendar>
</template>

<script>
import { Calendar } from "v-calendar";

export default {
  components: {
    Calendar,
  },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      attrs: [
        {
          highlight: true,
          dates: new Date(year, month, 12),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 13),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 14),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, month, 15),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 9),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 10),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 11),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 12),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 13),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 14),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 15),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 16),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 17),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 18),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 19),
          popover: { label: 800 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 20),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 21),
          popover: { label: 500 },
        },
        {
          highlight: true,
          dates: new Date(year, 1, 22),
          popover: { label: 500 },
        },
      ],
    };
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
  background-color: grey;
}

.date-selection .vc-weeks {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.date-selection .vc-weekday {
  background-color: #c6c6c6;
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
  background-color: orange;
  color: #fff;
}

.date-selection .vc-arrows-container.title-center .vc-arrow.is-left {
  left: -10%;
}

.date-selection .vc-arrows-container.title-center .vc-arrow.is-right {
  right: -10%;
}
</style>
