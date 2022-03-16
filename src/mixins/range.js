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
      this.sortIsland();
    },
    decreaseNumberOfPopulation() {
      if (this.numberOfLivingPopulation <= 0) {
        return;
      }
      this.numberOfLivingPopulation--;
      this.sortIsland();
    },
    increaseRoom() {
      this.numberOfRooms++;
      this.sortIsland();
    },
    decreaseRoom() {
      if (this.numberOfRooms <= 0) {
        return;
      }
      this.numberOfRooms--;
      this.sortIsland();
    },
  },
};
