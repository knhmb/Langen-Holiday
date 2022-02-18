<template>
  <DatePicker
    v-model="dummy"
    color="orange"
    :attributes="attributes"
    @dayclick="onDayClick"
  />
</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      days: [],
      dummy: "",
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
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
          date: day.date.toLocaleDateString(),
        });
      }
    },
  },
};
</script>

<style>
.search .left-section .vc-container {
  /* margin-top: 1rem; */
  border: none;
}

.search .left-section .vc-container .vc-arrow svg {
  color: black;
}

.search .left-section .vc-container .vc-weekday {
  color: black;
}

.search .left-section .vc-container .vc-day {
  color: #c6c6c6;
}
</style>