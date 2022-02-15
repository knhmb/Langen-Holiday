export default {
  data() {
    return {
      numberOfLivingPopulation: 4,
      numberOfRooms: 2,
    };
  },
  methods: {
    increaseNumberOfPopulation() {
      this.numberOfLivingPopulation++;
    },
    decreaseNumberOfPopulation() {
      if (this.numberOfLivingPopulation <= 0) {
        return;
      }
      this.numberOfLivingPopulation--;
    },
    increaseRoom() {
      this.numberOfRooms++;
    },
    decreaseRoom() {
      if (this.numberOfRooms <= 0) {
        return;
      }
      this.numberOfRooms--;
    },
  },
};
