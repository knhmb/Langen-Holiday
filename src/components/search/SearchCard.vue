<template>
  <div class="my-card">
    <img :src="image" @click="selectedHotel(id)" class="image" />
    <div class="bottom">
      <el-row>
        <el-col :span="18">
          <span class="hotel-name">{{ name }}</span>
          <span class="small"
            ><img
              class="location-icon"
              src="../../assets/icon-location.png"
              alt=""
            />{{ description }}</span
          >
          <span class="discount">HK${{ price }}</span>
          <span class="price">HK${{ discount }}<small> 起</small></span>
          <el-rate
            v-model="value"
            show-score
            disabled
            :colors="colors"
            text-color="#c6c6c6"
            :score-template="rateText + '則評語'"
          >
          </el-rate>
        </el-col>
        <el-col :span="6"
          ><span class="bookmark-icon"
            ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
        ></el-col>
      </el-row>
    </div>
  </div>
  <!-- <el-card :body-style="{ padding: '0px' }">
    <img :src="image" @click="selectedHotel(id)" class="image" />
    <div style="padding: 14px">
      <div class="bottom">
        <el-row>
          <el-col :span="18">
            <span class="hotel-name">{{ name }}</span>
            <span class="small"
              ><img
                class="location-icon"
                src="../../assets/icon-location.png"
                alt=""
              />{{ description }}</span
            >
            <span class="discount">HK${{ price }}</span>
            <span class="price">HK${{ discount }}<small> 起</small></span>
            <el-rate
              v-model="value"
              show-score
              disabled
              :colors="colors"
              text-color="#c6c6c6"
              :score-template="rateText + '則評語'"
            >
            </el-rate>
          </el-col>
          <el-col :span="6"
            ><span class="bookmark-icon"
              ><img @click="toggleBookmark" :src="bookmarkIcon" alt="" /></span
          ></el-col>
        </el-row>
      </div>
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
    "numberOfRooms",
  ],
  data() {
    return {
      value: +this.rateValue,
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      bookmarkIcon:
        this.bookmarked === false
          ? require("../../assets/icon-bookmark-off.png")
          : require("../../assets/icon-bookmark-on.png"),
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
    dateSelected() {
      return this.$store.getters.dateSelected;
    },
  },
  methods: {
    async removeBookmark() {
      await this.$store
        .dispatch("profile/removeBookmarkSearch", {
          hotelId: this.id,
          value: false,
        })
        .then(() => {})
        .catch(() => {});
    },
    async setBookmark() {
      await this.$store
        .dispatch("profile/setBookmarkSearch", {
          hotelId: this.id,
          value: true,
        })
        .then(() => {})
        .catch(() => {});
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
    toggleBookmark() {
      if (!localStorage.getItem("accessToken")) {
        this.$store.commit("TOGGLE_LOGIN_FORM", true);
        return;
      }
      if (this.bookmarkIcon === require("../../assets/icon-bookmark-on.png")) {
        this.checkAcessToken("remove");
      } else {
        this.checkAcessToken("set");
      }
    },
    selectedHotel(id) {
      const date = new Date();
      const today = date.setDate(date.getDate());
      const tomorrow = date.setDate(date.getDate() + 1);

      const data = {
        hotelId: id,
        checkInDate: this.dateSelected === "" ? today : this.dateSelected.start,
        checkOutDate:
          this.dateSelected === "" ? tomorrow : this.dateSelected.end,
        roomQty: this.numberOfRooms === 0 ? 1 : this.numberOfRooms,
      };
      console.log(data);
      this.$store.dispatch("booking/getHotel", data).then(() => {
        this.$router.push("/booking-details/" + id);
      });
    },
  },
  created() {
    console.log(this.id);
  },
};
</script>

<style>
.search .right-section .el-card {
  margin-top: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  /* height: 100%; */
}

.search .right-section .image {
  width: 100%;
  /* display: block; */
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
}

.search .right-section .location-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.search .right-section .bookmark-icon {
  text-align: end;
  display: block;
}

.search .right-section .bookmark-icon img {
  width: 40px;
  cursor: pointer;
}

.search .right-section span {
  display: block;
  letter-spacing: 3px;
  color: #8d8d8d;
}

.search .right-section span.hotel-name {
  font-size: 15px;
}

.search .right-section .small {
  font-size: 12px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  /* color: red; */
}

.search .right-section .discount {
  text-decoration: line-through;
  color: #ddd;
  font-size: 13px;
  margin-top: 0.3rem;
}

.search .right-section .price {
  font-size: 16px;
  letter-spacing: 0px;
}

/* .search .right-section .el-rate {
  height: 50px;
} */

.search .right-section .el-rate span {
  display: inline;
}

.search .right-section .el-rate .el-rate__text {
  font-size: 12px;
  margin-left: 0.5rem;
}

.search .right-section .el-rate .el-rate__icon {
  margin: 0;
}

.search .right-section .my-card {
  width: 100%;
  height: 100%;
}

.search .right-section .my-card .bottom {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0 0 5px 5px;
  margin-top: -4px;
  padding: 0.5rem;
}

.search .right-section .my-card .image-content {
  /* height: 300px; */
}
</style>