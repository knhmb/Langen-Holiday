<template>
  <div class="top-places-card">
    <div class="card-img">
      <img @click="selectHotel(id)" :src="image" class="image" />
      <img class="ranks" :src="icon" alt="" />
    </div>
    <div class="bottom">
      <el-row>
        <el-col :span="14">
          <span>{{ name }}</span>
          <span class="small"
            ><img
              class="location-icon"
              src="../../assets/icon-location.png"
              alt=""
            />
            {{ description }}</span
          >
          <span class="discount">HK${{ price }}</span>
          <span class="price">HK${{ discount }}<small> 起</small></span>
          <el-rate
            v-model="value"
            show-score
            disabled
            text-color="#c6c6c6"
            :score-template="rateText + '則評語'"
          >
          </el-rate>
        </el-col>
        <el-col :span="10"
          ><span class="bookmark-icon"
            ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
        ></el-col>
      </el-row>
    </div>
  </div>
  <!-- <el-card :body-style="{ padding: '0px' }">
    <div class="card-img">
      <img @click="selectHotel(id)" :src="image" class="image" />
      <img class="ranks" :src="icon" alt="" />
    </div>

    <div>
      <el-row>
        <el-col :span="14">
          <span>{{ name }}</span>
          <span class="small"
            ><img
              class="location-icon"
              src="../../assets/icon-location.png"
              alt=""
            />
            {{ description }}</span
          >
          <span class="discount">HK${{ price }}</span>
          <span class="price">HK${{ discount }}<small> 起</small></span>
          <el-rate
            v-model="value"
            show-score
            disabled
            text-color="#c6c6c6"
            :score-template="rateText + '則評語'"
          >
          </el-rate>
        </el-col>
        <el-col :span="10"
          ><span class="bookmark-icon"
            ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
        ></el-col>
      </el-row>
    </div>
  </el-card> -->
</template>

<script>
// import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  props: [
    "name",
    "description",
    "discount",
    "price",
    "rateValue",
    "rateText",
    "image",
    "bookmarked",
    "id",
  ],
  data() {
    return {
      value: +this.rateValue,
      bookmarkIcon:
        this.bookmarked === false
          ? require("../../assets/icon-bookmark-off.png")
          : require("../../assets/icon-bookmark-on.png"),
      icon:
        this.id === "2"
          ? require("../../assets/icon-rank1.png")
          : this.id === "4"
          ? require("../../assets/icon-rank2.png")
          : this.id === "5"
          ? require("../../assets/icon-rank3.png")
          : "",
    };
  },
  watch: {
    bookmarked() {
      this.bookmarkIcon =
        this.bookmarked === false
          ? require("../../assets/icon-bookmark-off.png")
          : require("../../assets/icon-bookmark-on.png");
    },
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    topPlaces() {
      return this.$store.getters["dashboard/topPlaces"];
    },
  },
  methods: {
    async removeBookmark() {
      await this.$store
        .dispatch("profile/removeBookmark", {
          hotelId: this.id,
          value: false,
        })
        .then(() => {})
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
        });
    },
    async setBookmark() {
      await this.$store
        .dispatch("profile/setBookmark", { hotelId: this.id, value: true })
        .then(() => {})
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
        });
    },
    async checkAcessToken(option) {
      await this.$store
        .dispatch("auth/checkAccessTokenValidity")
        .then(() => {
          if (option === "remove") {
            this.removeBookmark();
          } else {
            this.setBookmark();
          }
        })
        .catch(() => {
          this.checkRefreshToken(option);
        });
    },
    async checkRefreshToken(option) {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          if (option === "remove") {
            this.removeBookmark();
          } else {
            this.setBookmark();
          }
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
    async toggleBookmark() {
      if (!localStorage.getItem("accessToken")) {
        this.$store.commit("TOGGLE_LOGIN_FORM", true);
        return;
      }
      if (this.bookmarkIcon === require("../../assets/icon-bookmark-on.png")) {
        this.checkAcessToken("remove");
      } else {
        this.checkAcessToken("set");

        // this.bookmarkIcon = require("../../assets/icon-bookmark-on.png");
      }
    },
    async selectHotel(id) {
      console.log(id);
      const date = new Date();
      const today = date.setDate(date.getDate());
      const tomorrow = date.setDate(date.getDate() + 1);
      // const today = moment(date).format("YYYYMMDD");
      // const tomorrow = moment(date.setDate(date.getDate() + 1)).format(
      //   "YYYYMMDD"
      // );

      const data = {
        hotelId: id,
        checkInDate: today,
        checkOutDate: tomorrow,
        roomQty: 1,
      };
      console.log(data);
      await this.$store.dispatch("booking/getHotel", data).then(() => {
        this.$router.push("/booking-details/" + id);
        console.log(this.selectedHotel);
      });
    },
  },
};
</script>

<style>
.places-carousel .el-card {
  border: none;
  box-shadow: none !important;
  background: transparent;
  padding-right: 17px;
  padding-top: 25px;
}

.places-carousel .el-card .el-card__body {
  /* max-width: 300px; */
}

.places-carousel .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
  cursor: pointer;
  /* padding-top: 1rem;
  padding-right: 2rem; */
}

.places-carousel span {
  display: block;
  color: #8d8d8d;
}

.places-carousel .bookmark-icon {
  text-align: end;
  display: block;
}

.places-carousel .location-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.places-carousel .bookmark-icon img {
  width: 40px;
  cursor: pointer;
}

.places-carousel .small {
  font-size: 12px;
  display: flex;
  align-items: center;
}

.places-carousel .discount {
  text-decoration: line-through;
  color: #ddd;
  font-size: 13px;
  margin-top: 0.3rem;
}

.places-carousel .price {
  font-size: 16px;
}

.places-carousel .price small {
  letter-spacing: 2px;
  color: #8d8d8d;
  font-size: 12px;
}

.places-carousel .el-rate {
  height: 50px;
}

.places-carousel .el-rate span {
  display: inline;
}

/* .places-carousel .el-rate__item {
  margin-right: 1rem;
} */

.places-carousel .el-rate .el-rate__text {
  font-size: 12px;
  margin-left: 0.5rem;
}

.places-carousel .card-img {
  position: relative;
  width: 100%;
  height: 100%;
}

.places-carousel .card-img .ranks {
  position: absolute;
  width: 60px;
  top: -1.5rem;
}

.places-carousel .card-img .ranks {
  right: -1rem;
}

.places-carousel .top-places-card {
  width: 100%;
  height: 100%;
}

.places-carousel .top-places-card .bottom {
  border-radius: 0 0 5px 5px;
  margin-top: 0.5rem;
  /* padding: 0.5rem; */
}

@media screen and (max-width: 768px) {
  .places-carousel .el-rate .el-rate__text {
    font-size: 10px;
    margin-left: 0rem;
  }
}
</style>