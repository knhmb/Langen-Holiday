export default {
  data() {
    return {
      numberOfLivingPopulation: 0,
      numberOfRooms: 0,
    };
  },
  methods: {
    increaseNumberOfPopulation() {
      this.numberOfLivingPopulation++;
      this.checkboxChanged();
    },
    decreaseNumberOfPopulation() {
      if (this.numberOfLivingPopulation <= 0) {
        return;
      }
      this.numberOfLivingPopulation--;
      this.checkboxChanged();
    },
    increaseRoom() {
      this.numberOfRooms++;
      this.checkboxChanged();
    },
    decreaseRoom() {
      if (this.numberOfRooms <= 0) {
        return;
      }
      this.numberOfRooms--;
      this.checkboxChanged();
    },
  },
};
