<template>
  <div class="bottom-header">
    <el-row>
      <el-col :sm="24" :lg="22">
        <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          unique-opened
          :ellipsis="true"
          menu-trigger="hover"
          class="el-menu-demo hidden-lg-and-up"
          mode="horizontal"
        >
          <template v-for="item in headerItems" :key="item.id">
            <el-sub-menu
              v-if="item.slug !== 'hotel-recommendations'"
              :index="item.displayOrder"
              @click="closeDropdown(item)"
              :style="{
                fontWeight:
                  $route.path === '/' + item.slug + '/' + item.slug
                    ? 'bold'
                    : 'normal',
              }"
            >
              <template #title>{{ item.name }}</template>
              <template v-if="item.slug === 'cheung-chau-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(cheung.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(cheung.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="cheung in cheungChauIslandItems"
                  :key="cheung.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
                  @click="navigateToCheung(cheung)"
                  :index="item.id + ' - ' + cheung.displayOrder"
                  >{{ cheung.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lantau-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(launtau.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(launtau.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="launtau in lantauIslandItems"
                  :key="launtau.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToLantau(launtau)"
                  :index="item.id + ' - ' + launtau.displayOrder"
                  >{{ launtau.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lamma-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(lamma.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(lamma.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="lamma in lammaIslandItems"
                  :key="lamma.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToLamma(lamma)"
                  :index="item.id + ' - ' + lamma.displayOrder"
                  >{{ lamma.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'day-n-night-time'">
                <el-menu-item
                  :style="{
                    color:
                      $route.path === '/' + day.parentCodexSlug + '/' + day.slug
                        ? 'black'
                        : '#8d8d8d',
                    fontWeight:
                      $route.path === '/' + day.parentCodexSlug + '/' + day.slug
                        ? 'bold'
                        : 'normal',
                  }"
                  v-for="day in dayNightItems"
                  :key="day.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToDayTime(day)"
                  :index="item.id + ' - ' + day.displayOrder"
                  >{{ day.name }}</el-menu-item
                >
              </template>
            </el-sub-menu>
            <el-menu-item
              :style="{
                fontWeight: $route.path === '/' + item.slug ? 'bold' : 'normal',
              }"
              @click="closeDropdown(item)"
              :class="{ 'my-active': isActive === 7 }"
              v-if="item.slug === 'hotel-recommendations'"
              :index="item.id"
              >{{ item.name }}</el-menu-item
            >
          </template>
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
              @click="profileNavigation('personal-information')"
              index="6-1"
              >個人資料</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 21 }"
              @click="profileNavigation('change-password')"
              index="6-2"
              >修改密碼</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 22 }"
              @click="profileNavigation('places')"
              index="6-3"
              >我的收藏</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 23 }"
              @click="profileNavigation('evaluation-record')"
              index="6-4"
              >評價記錄</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 24 }"
              @click="profileNavigation('appointment-record')"
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
        <!-- ================================================ SMALL SCREENS ======================================================== -->
        <!-- <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          unique-opened
          :ellipsis="true"
          menu-trigger="click"
          class="el-menu-demo hidden-lg-and-up"
          mode="horizontal"
        >
          <template v-for="item in headerItems" :key="item.id">
            <el-sub-menu
              v-if="item.slug !== 'hotel-recommendations'"
              :index="item.displayOrder"
              @click="closeDropdown()"
            >
              <template #title>{{ item.name }}</template>
              <template v-if="item.slug === 'cheung-chau-island'">
                <el-menu-item
                  v-for="cheung in cheungChauIslandItems"
                  :key="cheung.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
                  @click="selectedSubMenu(4)"
                  :index="item.id + ' - ' + cheung.displayOrder"
                  >{{ cheung.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lantau-island'">
                <el-menu-item
                  v-for="launtau in lantauIslandItems"
                  :key="launtau.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="selectedSubMenu(8)"
                  :index="item.id + ' - ' + launtau.displayOrder"
                  >{{ launtau.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lamma-island'">
                <el-menu-item
                  v-for="lamma in lammaIslandItems"
                  :key="lamma.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="selectedSubMenu(14)"
                  :index="item.id + ' - ' + lamma.displayOrder"
                  >{{ lamma.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'day-n-night-time'">
                <el-menu-item
                  v-for="day in dayNightItems"
                  :key="day.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="selectedSubMenu(17)"
                  :index="item.id + ' - ' + day.displayOrder"
                  >{{ day.name }}</el-menu-item
                >
              </template>
            </el-sub-menu>
            <el-menu-item
              @click="
                selectedSubMenu(19);
                closeDropdown();
              "
              :class="{ 'my-active': isActive === 7 }"
              v-if="item.slug === 'hotel-recommendations'"
              :index="item.id"
              >{{ item.name }}</el-menu-item
            >
          </template>
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
        </el-menu> -->

        <!-- ================================================ LARGE SCREENS ======================================================== -->

        <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          unique-opened
          :ellipsis="false"
          menu-trigger="hover"
          class="el-menu-demo hidden-md-and-down"
          mode="horizontal"
        >
          <template v-for="item in headerItems" :key="item.id">
            <el-sub-menu
              v-if="item.slug !== 'hotel-recommendations'"
              :index="item.displayOrder"
              @click="closeDropdown(item)"
              :style="{
                fontWeight:
                  $route.path === '/' + item.slug + '/' + item.slug
                    ? 'bold'
                    : 'normal',
              }"
            >
              <template #title>{{ item.name }}</template>
              <template v-if="item.slug === 'cheung-chau-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(cheung.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(cheung.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="cheung in cheungChauIslandItems"
                  :key="cheung.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
                  @click="navigateToCheung(cheung)"
                  :index="item.id + ' - ' + cheung.displayOrder"
                  >{{ cheung.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lantau-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(launtau.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(launtau.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="launtau in lantauIslandItems"
                  :key="launtau.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToLantau(launtau)"
                  :index="item.id + ' - ' + launtau.displayOrder"
                  >{{ launtau.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'lamma-island'">
                <el-menu-item
                  :style="{
                    color: $route.path.includes(lamma.slug)
                      ? 'black'
                      : '#8d8d8d',
                    fontWeight: $route.path.includes(lamma.slug)
                      ? 'bold'
                      : 'normal',
                  }"
                  v-for="lamma in lammaIslandItems"
                  :key="lamma.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToLamma(lamma)"
                  :index="item.id + ' - ' + lamma.displayOrder"
                  >{{ lamma.name }}</el-menu-item
                >
              </template>
              <template v-else-if="item.slug === 'day-n-night-time'">
                <el-menu-item
                  :style="{
                    color:
                      $route.path === '/' + day.parentCodexSlug + '/' + day.slug
                        ? 'black'
                        : '#8d8d8d',
                    fontWeight:
                      $route.path === '/' + day.parentCodexSlug + '/' + day.slug
                        ? 'bold'
                        : 'normal',
                  }"
                  v-for="day in dayNightItems"
                  :key="day.id"
                  :class="{ 'inner-active': isActiveSubMenuItem === 8 }"
                  @click="navigateToDayTime(day)"
                  :index="item.id + ' - ' + day.displayOrder"
                  >{{ day.name }}</el-menu-item
                >
              </template>
            </el-sub-menu>
            <el-menu-item
              :style="{
                fontWeight: $route.path === '/' + item.slug ? 'bold' : 'normal',
              }"
              @click="closeDropdown(item)"
              :class="{ 'my-active': isActive === 7 }"
              v-if="item.slug === 'hotel-recommendations'"
              :index="item.id"
              >{{ item.name }}</el-menu-item
            >
          </template>
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
              @click="profileNavigation('personal-information')"
              index="6-1"
              >個人資料</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 21 }"
              @click="profileNavigation('change-password')"
              index="6-2"
              >修改密碼</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 22 }"
              @click="profileNavigation('places')"
              index="6-3"
              >我的收藏</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 23 }"
              @click="profileNavigation('evaluation-record')"
              index="6-4"
              >評價記錄</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 24 }"
              @click="profileNavigation('appointment-record')"
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
        <el-button class="login-btn" @click="openDialog">登入</el-button>
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
      <Register
        @closeDialog="login"
        v-else-if="dialogTitle === '註冊'"
        @toggleLogin="switchForm"
      />
      <forgot-password @toggleLoginForm="switchForm" v-else></forgot-password>
    </el-dialog>
  </div>
</template>

<script>
import Login from "../Login.vue";
import Register from "../Register.vue";
import ForgotPassword from "../ForgotPassword.vue";
import { ElNotification } from "element-plus";

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
    headerItems() {
      return this.$store.getters["dashboard/headerItems"];
    },
    cheungChauIslandItems() {
      return this.$store.getters["dashboard/cheungChauIslandItems"];
    },
    lantauIslandItems() {
      return this.$store.getters["dashboard/lantauIslandItems"];
    },
    lammaIslandItems() {
      return this.$store.getters["dashboard/lammaIslandItems"];
    },
    dayNightItems() {
      return this.$store.getters["dashboard/dayNightItems"];
    },
  },
  methods: {
    profileNavigation(value) {
      // this.$router.push({ name: value });
      this.$store
        .dispatch("auth/checkAccessTokenValidity")
        .then((res) => {
          console.log(res);
          this.$router.push({ name: value });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
          console.log("Failed Access Token");
        });
    },
    openDialog() {
      this.dialogFormVisible = true;
      this.dialogTitle = "登入";
    },
    closeDropdown(item) {
      const li = document.querySelectorAll(".el-popper");
      li[0].style.display = "none";
      li[1].style.display = "none";
      console.log(item);
      if (item.slug === "hotel-recommendations") {
        this.$router.push("/hotel-recommendations");
      } else {
        this.$router.push(`/${item.slug}/${item.slug}`);
      }
      this.$store.dispatch("search/getSearchItems", item);
    },
    selectedSubMenu(option) {
      if (option === 4 || option === 5 || option === 6 || option === 7) {
        this.$emit("setIsActiveClass", 3);
        this.$router.push("/cheung-chau-island");
      } else if (
        option === 8 ||
        option === 9 ||
        option === 10 ||
        option === 11 ||
        option === 12
      ) {
        this.$emit("setIsActiveClass", 4);
        this.$router.push("/lantau-island");
      } else if (
        option === 13 ||
        option === 14 ||
        option === 15 ||
        option === 16
      ) {
        this.$emit("setIsActiveClass", 5);
        this.$router.push("/lamma-island");
      } else if (option === 17 || option === 18) {
        this.$emit("setIsActiveClass", 6);
        this.$router.push("/day-time");
      } else if (option === 19) {
        this.$emit("setIsActiveClass", 7);
        this.$router.push("/hotel-recommendations");
      }
      this.$emit("setIsActiveSubMenuItem", option);
    },
    switchForm(option) {
      this.dialogTitle = option.title;
    },
    logout() {
      this.$store.dispatch("auth/logout");
      // this.$router.replace("/");
      // this.loggedIn = false;
    },
    login(event) {
      this.dialogFormVisible = event.closeDialog;
      // this.loggedIn = event.login;
    },
    navigateToCheung(cheung) {
      this.$router.push(`/cheung-chau-island/${cheung.slug}`);
      this.$store.dispatch("search/getSearchItems", cheung);
    },
    navigateToLantau(lantau) {
      this.$router.push(`/lantau-island/${lantau.slug}`);
      this.$store.dispatch("search/getSearchItems", lantau);
    },
    navigateToLamma(lamma) {
      this.$router.push(`/lamma-island/${lamma.slug}`);
      this.$store.dispatch("search/getSearchItems", lamma);
    },
    navigateToDayTime(day) {
      this.$router.push(`/day-n-night-time/${day.slug}`);
      this.$store.dispatch("search/getSearchItems", day);
    },
  },
  created() {
    this.$store.dispatch("dashboard/setHeaderItems");
    this.$store.dispatch("dashboard/setSubItemsCheung");
    this.$store.dispatch("dashboard/setSubItemsLantau");
    this.$store.dispatch("dashboard/setSubItemsLamma");
    this.$store.dispatch("dashboard/setSubItemsDayAndNight");
    // this.$store.dispatch("dashboard/setSubItems");
    // console.log(this.cheungChauIslandItems);
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
  background: transparent;
}

.bottom-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
  font-size: 14px;
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

/* .el-menu--horizontal .el-menu .el-menu-item.is-active {
  color: black !important;
  font-weight: bold;
} */

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