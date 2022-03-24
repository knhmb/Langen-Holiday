<template>
  <div class="bookmark-card">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="image" class="image" />
      <div style="padding: 14px">
        <div class="bottom">
          <el-row>
            <el-col :span="18">
              <span>{{ name }}</span>
              <span class="small"
                ><img
                  class="location-icon"
                  src="../../assets/icon-location.png"
                  alt=""
                />{{ description }}</span
              >
              <!-- <span class="discount">{{ discount }}</span>
              <span class="price">{{ price }}</span> -->
              <span class="discount">HK${{ price }}</span>
              <span class="price">HK${{ discount }}<small> 起</small></span>
              <el-rate
                v-model="value"
                show-score
                disabled
                :colors="colors"
                text-color="#c6c6c6"
                :score-template="rateText"
              >
              </el-rate>
            </el-col>
            <el-col :span="6"
              ><span class="bookmark-icon"
                ><img
                  @click="toggleBookmark"
                  :src="bookmarkIcon"
                  alt="" /></span
            ></el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
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
      value: 4,
      colors: ["#FD9A1A", "#FD9A1A", "#FD9A1A"],
      bookmarkIcon:
        this.bookmarked === true
          ? require("../../assets/icon-bookmark-on.png")
          : require("../../assets/icon-bookmark-off.png"),
    };
  },
  methods: {
    async removeWishlist() {
      await this.$store
        .dispatch("profile/removeWishlist", { id: this.id })
        .then(() => {
          // ElNotification({
          //   title: "Success",
          //   message: "Removed",
          //   type: "success",
          // });
        })
        .catch(() => {
          this.checkRefreshToken();
        });
    },
    async checkRefreshToken() {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          this.removeWishlist();
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
      if (this.bookmarkIcon === require("../../assets/icon-bookmark-on.png")) {
        // this.bookmarkIcon = require("../../assets/icon-bookmark-off.png");
        await this.$store
          .dispatch("auth/checkAccessTokenValidity")
          .then(() => {
            this.removeWishlist();
          })
          .catch(() => {
            this.checkRefreshToken();
          });
      } else {
        this.bookmarkIcon = require("../../assets/icon-bookmark-on.png");
      }
    },
  },
};
</script>

<style>
.edit-profile .bookmark-card .el-card {
  margin-top: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}

.edit-profile .bookmark-card .image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.edit-profile .bookmark-card .location-icon {
  width: 15px;
  margin-right: 0.2rem;
}

.edit-profile .bookmark-card .bookmark-icon {
  text-align: end;
  display: block;
}

.edit-profile .bookmark-card .bookmark-icon img {
  width: 40px;
  cursor: pointer;
}

.edit-profile .bookmark-card span {
  display: block;
  letter-spacing: 3px;
  color: #8d8d8d;
}

.edit-profile .bookmark-card .small {
  font-size: 12px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  /* color: red; */
}

.edit-profile .bookmark-card .price small {
  letter-spacing: 2px;
  color: #8d8d8d;
  font-size: 12px;
}

.edit-profile .bookmark-card .discount {
  text-decoration: line-through;
  color: #ddd;
  font-size: 13px;
  margin-top: 0.3rem;
}

.edit-profile .bookmark-card .price {
  font-size: 16px;
  letter-spacing: 0px;
}

/* .edit-profile .el-rate {
  height: 50px;
} */

.edit-profile .bookmark-card .el-rate span {
  display: inline;
}

.edit-profile .bookmark-card .el-rate .el-rate__text {
  font-size: 12px;
}

.edit-profile .bookmark-card .el-rate .el-rate__icon {
  margin: 0;
}
</style>