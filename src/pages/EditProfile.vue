<template>
  <the-header></the-header>
  <base-container>
    <section class="edit-profile">
      <el-row :gutter="30">
        <el-col :span="5">
          <div class="profile-menu">
            <img src="../assets/member-avatar.svg" alt="" />
            <p>chan tai man</p>
            <ul>
              <router-link
                tag="li"
                :to="{ name: 'personal-information' }"
                @click="setOption('member')"
                :class="{ 'is-active': isActive === 'member' }"
                @mouseover="hover('member')"
                @mouseleave="leave('member')"
              >
                <img :src="iconMember" alt="" />
                個人資料
              </router-link>
              <router-link
                tag="li"
                :to="{ name: 'change-password' }"
                @click="setOption('password')"
                :class="{ 'is-active': isActive === 'password' }"
                @mouseover="hover('password')"
                @mouseleave="leave('password')"
              >
                <img :src="iconPassword" alt="" />
                修改密碼
              </router-link>
              <router-link
                tag="li"
                :to="{ name: 'places' }"
                @click="setOption('bookmark')"
                :class="{ 'is-active': isActive === 'bookmark' }"
                @mouseover="hover('bookmark')"
                @mouseleave="leave('bookmark')"
              >
                <img :src="iconBookmark" alt="" />
                我的收藏
              </router-link>
              <router-link
                tag="li"
                :to="{ name: 'evaluation-record' }"
                @click="setOption('comment')"
                :class="{ 'is-active': isActive === 'comment' }"
                @mouseover="hover('comment')"
                @mouseleave="leave('comment')"
              >
                <img :src="iconComment" alt="" />
                評價記錄
              </router-link>
              <router-link
                tag="li"
                :to="{ name: 'personal-information' }"
                @click="setOption('booking')"
                :class="{ 'is-active': isActive === 'booking' }"
                @mouseover="hover('booking')"
                @mouseleave="leave('booking')"
              >
                <img :src="iconBooking" alt="" />
                預約記錄
              </router-link>
            </ul>
          </div>
        </el-col>
        <el-col :span="19">
          <router-view></router-view>
        </el-col>
      </el-row>
    </section>
  </base-container>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      iconMember: require("../assets/icon-profile-member-off.svg"),
      iconPassword: require("../assets/icon-profile-password-off.svg"),
      iconBookmark: require("../assets/icon-profile-bookmark-off.svg"),
      iconComment: require("../assets/icon-profile-comment-off.svg"),
      iconBooking: require("../assets/icon-profile-bookging-off.svg"),
      isActive: "",
      isMemberClicked: false,
      isPasswordClicked: false,
      isBookmarkClicked: false,
      isCommentClicked: false,
      isBookingClicked: false,
    };
  },
  computed: {},
  methods: {
    hover(option) {
      if (option === "member") {
        this.iconMember = require("../assets/icon-profile-member-on.svg");
      } else if (option === "password") {
        this.iconPassword = require("../assets/icon-profile-password-on.svg");
      } else if (option === "bookmark") {
        this.iconBookmark = require("../assets/icon-profile-bookmark-on.svg");
      } else if (option === "comment") {
        this.iconComment = require("../assets/icon-profile-comment-on.svg");
      } else if (option === "booking") {
        this.iconBooking = require("../assets/icon-profile-bookging-on.svg");
      }
    },
    leave(option) {
      if (option === "member" && !this.isMemberClicked) {
        this.iconMember = require("../assets/icon-profile-member-off.svg");
      } else if (option === "password" && !this.isPasswordClicked) {
        this.iconPassword = require("../assets/icon-profile-password-off.svg");
      } else if (option === "bookmark" && !this.isBookmarkClicked) {
        this.iconBookmark = require("../assets/icon-profile-bookmark-off.svg");
      } else if (option === "comment" && !this.isCommentClicked) {
        this.iconComment = require("../assets/icon-profile-comment-off.svg");
      } else if (option === "booking" && !this.isBookingClicked) {
        this.iconBooking = require("../assets/icon-profile-bookging-off.svg");
      }
    },
    setOption(option) {
      this.isActive = option;
      if (option === "member") {
        this.iconMember = require("../assets/icon-profile-member-on.svg");
        this.iconPassword = require("../assets/icon-profile-password-off.svg");
        this.iconBookmark = require("../assets/icon-profile-bookmark-off.svg");
        this.iconComment = require("../assets/icon-profile-comment-off.svg");
        this.iconBooking = require("../assets/icon-profile-bookging-off.svg");
        this.isMemberClicked = true;
        this.isPasswordClicked = false;
        this.isBookmarkClicked = false;
        this.isCommentClicked = false;
        this.isBookingClicked = false;
      } else if (option === "password") {
        this.iconMember = require("../assets/icon-profile-member-off.svg");
        this.iconPassword = require("../assets/icon-profile-password-on.svg");
        this.iconBookmark = require("../assets/icon-profile-bookmark-off.svg");
        this.iconComment = require("../assets/icon-profile-comment-off.svg");
        this.iconBooking = require("../assets/icon-profile-bookging-off.svg");
        this.isMemberClicked = false;
        this.isPasswordClicked = true;
        this.isBookmarkClicked = false;
        this.isCommentClicked = false;
        this.isBookingClicked = false;
      } else if (option === "bookmark") {
        this.iconMember = require("../assets/icon-profile-member-off.svg");
        this.iconPassword = require("../assets/icon-profile-password-off.svg");
        this.iconBookmark = require("../assets/icon-profile-bookmark-on.svg");
        this.iconComment = require("../assets/icon-profile-comment-off.svg");
        this.iconBooking = require("../assets/icon-profile-bookging-off.svg");
        this.isMemberClicked = false;
        this.isPasswordClicked = false;
        this.isBookmarkClicked = true;
        this.isCommentClicked = false;
        this.isBookingClicked = false;
      } else if (option === "comment") {
        this.iconMember = require("../assets/icon-profile-member-off.svg");
        this.iconPassword = require("../assets/icon-profile-password-off.svg");
        this.iconBookmark = require("../assets/icon-profile-bookmark-off.svg");
        this.iconComment = require("../assets/icon-profile-comment-on.svg");
        this.iconBooking = require("../assets/icon-profile-bookging-off.svg");
        this.isMemberClicked = false;
        this.isPasswordClicked = false;
        this.isBookmarkClicked = false;
        this.isCommentClicked = true;
        this.isBookingClicked = false;
      } else if (option === "booking") {
        this.iconMember = require("../assets/icon-profile-member-off.svg");
        this.iconPassword = require("../assets/icon-profile-password-off.svg");
        this.iconBookmark = require("../assets/icon-profile-bookmark-off.svg");
        this.iconComment = require("../assets/icon-profile-comment-off.svg");
        this.iconBooking = require("../assets/icon-profile-bookging-on.svg");
        this.isMemberClicked = false;
        this.isPasswordClicked = false;
        this.isBookmarkClicked = false;
        this.isCommentClicked = false;
        this.isBookingClicked = true;
      }
    },
  },
  created() {
    // if (this.$refs.myMember.activeClass) {
    //   this.iconMember = require("../assets/icon-profile-member-on.svg");
    //   console.log(this.$refs.myMember.activeClass);
    // }
  },
};
</script>

<style scoped>
.edit-profile {
  padding: 0 6rem;
  margin: 2rem 0;
}
.edit-profile .profile-menu {
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-profile .profile-menu img {
  width: 120px;
}

.edit-profile .profile-menu p {
  color: #003333;
  margin-top: 0.5rem;
  font-weight: bold;
  /* padding: 0 1rem; */
}

.edit-profile .profile-menu ul {
  list-style-type: none;
  width: 100%;
}

/* .edit-profile .profile-menu ul li {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: #b3b3b3;
  cursor: pointer;
  justify-content: center;
} */

.edit-profile .profile-menu ul a {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: #b3b3b3;
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
}

.edit-profile .profile-menu ul a:hover,
.edit-profile .profile-menu ul a.router-link-exact-active {
  background-color: #fd9a1a;
  color: #fff;
}

.edit-profile .profile-menu ul a img {
  width: 32px;
  margin-right: 1rem;
}
</style>