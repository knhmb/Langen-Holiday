<template>
  <div class="top-header">
    <el-row>
      <el-col class="logo-content" :sm="24" :lg="9">
        <img
          @click="$router.push('/')"
          src="../../assets/logo.png"
          class="logo"
          alt=""
        />
        <img
          @click="$router.push('/')"
          class="brand-name"
          src="../../assets/brand-name.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :lg="15">
        <el-menu
          text-color="#8d8d8d"
          active-text-color="#8d8d8d"
          :ellipsis="false"
          menu-trigger="hover"
          class="el-menu-demo"
          mode="horizontal"
          unique-opened
        >
          <el-sub-menu
            :class="{ 'my-active': isActive === 1 }"
            index="1"
            @click="closeDropdown"
          >
            <template #title>熱線電話</template>
            <el-menu-item
              class="top-menu-item"
              :class="{ 'inner-active': isActiveSubMenuItem === 1 }"
              @click="selectedSubMenu(1)"
              index="1-1"
            >
              3598 6538</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            popper-class="contact-payment"
            class="top-menu-item"
            :class="{ 'my-active': isActive === 2 }"
            index="2"
            @click="closeDropdown"
          >
            <template #title>聯絡與付款</template>
            <el-menu-item
              class="top-menu-item"
              :class="{ 'inner-active': isActiveSubMenuItem === 2 }"
              @click="selectedSubMenu(2)"
              index="2-1"
              >聯絡我們</el-menu-item
            >
            <el-menu-item
              class="top-menu-item"
              :class="{ 'inner-active': isActiveSubMenuItem === 3 }"
              @click="selectedSubMenu(3)"
              index="2-2"
              >付款方法</el-menu-item
            >
          </el-sub-menu>
          <div class="contact">
            <a
              href="//api.whatsapp.com/send?phone=85253962553&text=From Langen Holiday"
              target="_blank"
              ><img
                class="whats-app-logo"
                src="../../assets/icon-whatsapp.png"
                alt=""
            /></a>
            <a
              href="//api.whatsapp.com/send?phone=85253962553&text=From Langen Holiday"
              target="_blank"
            >
              <span>WhatsApp查詢: +852 5396 2553</span>
            </a>
          </div>
          <a href="https://www.facebook.com/langenholiday" target="_blank">
            <img
              class="facebook-icon"
              src="../../assets/icon-facebook.svg"
              alt=""
          /></a>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["isActive", "isActiveSubMenuItem"],
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    headerVisible() {
      return this.$store.getters.headerVisible;
    },
  },
  methods: {
    closeDropdown() {
      const popper = document.querySelectorAll(".el-popper");
      const li = document.querySelectorAll(".el-sub-menu");
      // const innerLi = document.querySelectorAll(".el-menu-item");
      console.log(popper);
      if (this.headerVisible) {
        popper[7].style.display = "none";
        popper[8].style.display = "none";
        popper[9].style.display = "none";
        popper[10].style.display = "none";
        // popper[11].style.display = "none";
        this.isLoggedIn === true ? (popper[2].style.display = "none") : "";

        li[3].classList.remove("is-opened");
        li[4].classList.remove("is-opened");
        li[5].classList.remove("is-opened");
        li[6].classList.remove("is-opened");
        li[7].classList.remove("is-opened");

        // innerLi[18].classList.remove("is-active");
        // innerLi[19].classList.remove("is-active");
        // innerLi[20].classList.remove("is-active");
        // innerLi[21].classList.remove("is-active");
        // innerLi[22].classList.remove("is-active");
        // innerLi[23].classList.remove("is-active");
        // innerLi[24].classList.remove("is-active");
        // innerLi[25].classList.remove("is-active");
        // innerLi[26].classList.remove("is-active");
        // innerLi[27].classList.remove("is-active");
        // innerLi[28].classList.remove("is-active");
        // innerLi[29].classList.remove("is-active");
        // innerLi[30].classList.remove("is-active");
        // innerLi[31].classList.remove("is-active");
        // innerLi[32].classList.remove("is-active");
      }
    },
    selectedSubMenu(option) {
      if (option === 1) {
        this.$emit("setIsActiveClass", 1);
      } else if (option === 2) {
        this.$emit("setIsActiveClass", 2);
        this.$router.push("/contact-us");
      } else if (option === 3) {
        this.$emit("setIsActiveClass", 2);
        this.$router.push("/join");
      }
      this.$emit("setIsActiveSubMenuItem", option);
    },
  },
};
</script>

<style>
.top-header .el-row {
  align-items: center;
}
.top-header {
  padding: 2rem 8rem 0 8rem;
  color: #8d8d8d;
}

.top-header .logo {
  width: 100px;
}

.top-header img {
  cursor: pointer;
}

.top-header .brand-name {
  width: 350px;
}

.top-header .el-col {
  display: flex;
  align-items: center;
}

.top-header .el-col:last-of-type {
  justify-content: flex-end;
}

.top-header span {
  margin-left: 0.5rem;
}

.top-header .top-nav ul {
  display: flex;
  list-style: none;
  /* justify-content: space-between; */
}

.top-header .top-nav ul li,
.top-header .top-nav .contact {
  margin-left: 2rem;
}

.top-header .top-nav .contact {
  cursor: pointer;
}

.top-header .contact a {
  color: #8d8d8d;
  text-decoration: none;
  font-size: 12px;
}

.top-header .top-nav ul li {
  cursor: pointer;
  position: relative;
  font-size: 12px;
  color: #8d8d8d;
}

.top-header .top-nav ul li::after {
  content: "";
  position: absolute;
  border-top: 5px solid #737373;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.5rem;
}

.top-header .el-menu--horizontal {
  border-bottom: none;
  align-items: center;
}

.top-header .el-icon.el-sub-menu__icon-arrow {
  display: none;
}

.top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
  font-size: 12px;
  position: relative;
  color: #8d8d8d;
  border-bottom: none;
  /* margin-right: 0.5rem; */
}

.top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::before {
  content: "";
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #737373;
  margin-left: 0.5rem;
  right: 29px;
  /* padding-left: 0.5rem; */
}

.top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::after {
  content: "";
  background: black;
  height: 21px;
  width: 1px;
  margin-left: 1.5rem;
}

.top-header
  .el-menu--horizontal
  .el-menu.el-menu--popup.el-menu--popup-bottom-start {
  margin-top: -30px;
}

.top-header .whats-app-logo {
  width: 20px;
}

.top-header .whats-app-logo ~ span {
  margin-left: 0.5rem;
  font-size: 12px;
}

.top-header .contact {
  display: flex;
  align-items: center;
}

.top-header .contact::after {
  content: "";
  background: black;
  height: 21px;
  width: 1px;
  margin-left: 1rem;
}

.top-header .facebook-icon {
  width: 20px;
  height: 20px;
  margin-left: 1rem;
}

.top-header .el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: none;
  color: #8d8d8d;
}

.el-menu--horizontal.contact-payment li {
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::before {
    /* display: none; */
    right: 0;
  }
}

@media screen and (max-width: 1024px) {
  .top-header .logo-content,
  .top-header .logo-content + .el-col {
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .top-header .brand-name {
    display: block;
    width: 200px;
  }

  .top-header {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }

  .top-header .logo {
    width: 50px;
  }

  .top-header .el-col:last-of-type {
    justify-content: center;
  }

  .top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::after {
    display: none;
  }
  .top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title {
    padding: 0;
    padding-right: 1.1rem;
    margin-right: 5px;
  }

  .top-header .whats-app-logo {
    width: 15px;
  }

  .top-header .number {
    margin-left: 0;
  }
  .top-header .logo-content {
    justify-content: center;
  }

  .top-header .contact span {
    font-size: 0.7rem;
  }
}
</style>