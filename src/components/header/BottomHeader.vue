<template>
  <div class="bottom-header">
    <el-row>
      <el-col :sm="24" :lg="22">
        <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          unique-opened
          :ellipsis="true"
          menu-trigger="click"
          class="el-menu-demo hidden-lg-and-up"
          mode="horizontal"
        >
          <el-sub-menu
            :class="{ 'my-active': isActive === 3 }"
            index="1"
            @click="closeDropdown"
          >
            <template #title>長洲渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
              @click="selectedSubMenu(4)"
              index="1-1"
              >市政大樓</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 5 }"
              @click="selectedSubMenu(5)"
              index="1-2"
              >東灣東堤</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 6 }"
              @click="selectedSubMenu(6)"
              index="1-3"
              >西堤海景樓</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 7 }"
              @click="selectedSubMenu(7)"
              index="1-4"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            :class="{ 'my-active': isActive === 4 }"
            index="2"
            @click="closeDropdown"
          >
            <template #title>大嶼山渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
              @click="selectedSubMenu(8)"
              index="2-1"
              >梅窩</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 9 }"
              @click="selectedSubMenu(9)"
              index="2-2"
              >貝澳</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 10 }"
              @click="selectedSubMenu(10)"
              index="2-3"
              >塘福</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 11 }"
              @click="selectedSubMenu(11)"
              index="2-4"
              >大澳</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 12 }"
              @click="selectedSubMenu(12)"
              index="2-5"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            :class="{ 'my-active': isActive === 5 }"
            index="3"
            @click="closeDropdown"
          >
            <template #title>南丫島渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 13 }"
              @click="selectedSubMenu(13)"
              index="3-1"
              >模達灣</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 14 }"
              @click="selectedSubMenu(14)"
              index="3-2"
              >沙埔舊村</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 15 }"
              @click="selectedSubMenu(15)"
              index="3-3"
              >榕樹灣</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 16 }"
              @click="selectedSubMenu(16)"
              index="3-4"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item
            @click="selectedSubMenu(19)"
            :class="{ 'my-active': isActive === 7 }"
            index="4"
            >精選酒店推介</el-menu-item
          >

          <el-sub-menu
            :class="{ 'my-active': isActive === 6 }"
            index="5"
            @click="closeDropdown"
          >
            <template #title>日間/晚間住宿</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 17 }"
              @click="selectedSubMenu(17)"
              index="5-1"
              >日間住宿</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 18 }"
              @click="selectedSubMenu(18)"
              index="5-2"
              >晚間住宿</el-menu-item
            >
          </el-sub-menu>
        </el-menu>

        <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          unique-opened
          :ellipsis="false"
          menu-trigger="click"
          class="el-menu-demo hidden-md-and-down"
          mode="horizontal"
        >
          <el-sub-menu
            :class="{ 'my-active': isActive === 3 }"
            index="1"
            @click="closeDropdown"
          >
            <template #title>長洲渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
              @click="selectedSubMenu(4)"
              index="1-1"
              >市政大樓</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 5 }"
              @click="selectedSubMenu(5)"
              index="1-2"
              >東灣東堤</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 6 }"
              @click="selectedSubMenu(6)"
              index="1-3"
              >西堤海景樓</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 7 }"
              @click="selectedSubMenu(7)"
              index="1-4"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            :class="{ 'my-active': isActive === 4 }"
            index="2"
            @click="closeDropdown"
          >
            <template #title>大嶼山渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
              @click="selectedSubMenu(8)"
              index="2-1"
              >梅窩</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 9 }"
              @click="selectedSubMenu(9)"
              index="2-2"
              >貝澳</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 10 }"
              @click="selectedSubMenu(10)"
              index="2-3"
              >塘福</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 11 }"
              @click="selectedSubMenu(11)"
              index="2-4"
              >大澳</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 12 }"
              @click="selectedSubMenu(12)"
              index="2-5"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            :class="{ 'my-active': isActive === 5 }"
            index="3"
            @click="closeDropdown"
          >
            <template #title>南丫島渡假屋</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 13 }"
              @click="selectedSubMenu(13)"
              index="3-1"
              >模達灣</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 14 }"
              @click="selectedSubMenu(14)"
              index="3-2"
              >沙埔舊村</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 15 }"
              @click="selectedSubMenu(15)"
              index="3-3"
              >榕樹灣</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 16 }"
              @click="selectedSubMenu(16)"
              index="3-4"
              >景點介紹</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item
            @click="
              selectedSubMenu(19);
              closeDropdown();
            "
            :class="{ 'my-active': isActive === 7 }"
            index="4"
            >精選酒店推介</el-menu-item
          >

          <el-sub-menu
            :class="{ 'my-active': isActive === 6 }"
            index="5"
            @click="closeDropdown"
          >
            <template #title>日間/晚間住宿</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 17 }"
              @click="selectedSubMenu(17)"
              index="5-1"
              >日間住宿</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 18 }"
              @click="selectedSubMenu(18)"
              index="5-2"
              >晚間住宿</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu
            v-if="loggedIn"
            :class="{ 'my-active': isActive === 8 }"
            class="edit-profile-menu"
            index="6"
            @click="closeDropdown"
          >
            <template #title>會員中心</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 20 }"
              @click="$router.push({ name: 'personal-information' })"
              index="6-1"
              >個人資料</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 21 }"
              @click="$router.push({ name: 'change-password' })"
              index="6-2"
              >修改密碼</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 22 }"
              @click="$router.push({ name: 'places' })"
              index="6-3"
              >我的收藏</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 23 }"
              @click="$router.push({ name: 'evaluation-record' })"
              index="6-4"
              >評價記錄</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 24 }"
              @click="$router.push({ name: 'appointment-record' })"
              index="6-5"
              >預約記錄</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 25 }"
              @click="logout"
              index="6-6"
              >登出</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col v-if="!loggedIn" :sm="24" :lg="2">
        <el-button class="login-btn" @click="dialogFormVisible = true"
          >登入</el-button
        >
      </el-col>
    </el-row>

    <!-- Dialog -->
    <el-dialog v-model="dialogFormVisible" :title="dialogTitle">
      <Login
        v-if="dialogTitle === '登入'"
        @closeDialog="login"
        @toggleRegisterForm="switchForm"
        @toggleForgotPassword="switchForm"
      />
      <Register v-else-if="dialogTitle === '註冊'" @toggleLogin="switchForm" />
      <forgot-password @toggleLoginForm="switchForm" v-else></forgot-password>
    </el-dialog>
  </div>
</template>

<script>
import Login from "../Login.vue";
import Register from "../Register.vue";
import ForgotPassword from "../ForgotPassword.vue";

export default {
  props: ["isActive", "isActiveSubMenuItem"],
  emits: ["setIsActiveClass", "setIsActiveSubMenuItem"],
  components: {
    Login,
    Register,
    ForgotPassword,
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogTitle: "登入",
      // loggedIn: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    closeDropdown() {
      const li = document.querySelectorAll(".el-popper");
      li[0].style.display = "none";
      li[1].style.display = "none";
    },
    selectedSubMenu(option) {
      if (option === 4 || option === 5 || option === 6 || option === 7) {
        this.$emit("setIsActiveClass", 3);
      } else if (
        option === 8 ||
        option === 9 ||
        option === 10 ||
        option === 11 ||
        option === 12
      ) {
        this.$emit("setIsActiveClass", 4);
      } else if (
        option === 13 ||
        option === 14 ||
        option === 15 ||
        option === 16
      ) {
        this.$emit("setIsActiveClass", 5);
      } else if (option === 17 || option === 18) {
        this.$emit("setIsActiveClass", 6);
      } else if (option === 19) {
        this.$emit("setIsActiveClass", 7);
      }
      this.$emit("setIsActiveSubMenuItem", option);
    },
    switchForm(option) {
      this.dialogTitle = option.title;
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.replace("/");
      // this.loggedIn = false;
    },
    login(event) {
      this.dialogFormVisible = event.closeDialog;
      // this.loggedIn = event.login;
    },
  },
};
</script>

<style>
.bottom-header .el-row {
  align-items: center;
}
.bottom-header {
  padding: 0rem 8rem;
  margin-top: -1rem;
  overflow-x: hidden;
}

.bottom-header .el-icon.el-sub-menu__icon-arrow {
  display: none;
}

.bottom-header .logo {
  width: 115px;
}

.bottom-header .el-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bottom-header span {
  margin-left: 0.5rem;
}

.bottom-header .el-menu--horizontal {
  border-bottom: none;
  align-items: center;
}

.bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
  font-size: 12px;
  color: #8d8d8d;
  border-bottom: none;
  /* padding: 0; */
}

.bottom-header .el-menu--horizontal .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: none;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active {
  color: black;
}

.bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::after {
  content: "";
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #737373;
  margin-left: 0.5rem;
}

.bottom-header
  .el-menu--horizontal
  .el-menu.el-menu--popup.el-menu--popup-bottom-start {
  margin-top: -30px;
}

.bottom-header .whats-app-logo {
  width: 20px;
}

.bottom-header .whats-app-logo ~ span {
  margin-left: 0.5rem;
  font-size: 12px;
}

.bottom-header .el-button.login-btn {
  /* width: 100%; */
  background-color: #fd9a1a;
  border-color: #fd9a1a;
  color: #fff;
}

.bottom-header .el-button.login-btn:hover {
  background-color: rgba(255, 166, 0, 0.857);
}

.bottom-header .el-button span {
  margin: 0;
}

.bottom-header .el-dialog {
  min-width: 300px;
  max-width: 500px;
  /* width: fit-content; */
}

.bottom-header .el-dialog .el-col {
  display: block;
}

.bottom-header .el-dialog .el-dialog__title {
  font-weight: bold;
}

.bottom-header .el-dialog .login .form-col {
  display: block;
}

.bottom-header .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  color: #8d8d8d;
}

.bottom-header
  .el-menu--horizontal
  > .el-sub-menu.is-active
  .el-sub-menu__title {
  border-bottom: none;
  color: #8d8d8d;
}

.bottom-header .el-sub-menu.edit-profile-menu .el-sub-menu__title {
  color: #fd9a1a !important;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .bottom-header .el-col {
    justify-content: center;
  }

  .bottom-header .el-button {
    width: 20%;
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 768px) {
  .bottom-header {
    padding: 0;
  }

  .bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
    padding: 0;
  }

  .bottom-header .el-col {
    justify-content: center;
  }

  .bottom-header .el-button {
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 414px) {
  .bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
    padding: 0;
    padding-right: 0.17rem;
  }

  .bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::after {
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #737373;
  }
}
</style>