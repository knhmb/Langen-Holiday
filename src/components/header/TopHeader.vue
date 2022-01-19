<template>
  <div class="top-header">
    <el-row>
      <el-col class="logo-content" :sm="24" :lg="9">
        <img src="../../assets/logo.png" class="logo" alt="" />
        <img class="brand-name" src="../../assets/brand-name.png" alt="" />
      </el-col>
      <el-col :sm="24" :lg="15">
        <!-- <div class="top-nav">
          <ul>
            <li>熱線電話</li>
            <li>聯絡與付款</li>
            <div class="contact">
              <img
                class="whats-app-logo"
                src="../../assets/icon-whatsapp.png"
                alt=""
              />

              <span>WhatsApp查詢: +852 5396 2553</span>
            </div>
          </ul>
          <div class="my-sub-menu"></div>
        </div> -->
        <el-menu
          :ellipsis="false"
          menu-trigger="click"
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
              :class="{ 'inner-active': isActiveSubMenuItem === 1 }"
              @click="selectedSubMenu(1)"
              index="1-1"
              >item one</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 2 }"
              @click="selectedSubMenu(2)"
              index="1-2"
              >item two</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 3 }"
              @click="selectedSubMenu(3)"
              index="1-3"
              >item three</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu
            :class="{ 'my-active': isActive === 2 }"
            index="2"
            @click="closeDropdown"
          >
            <template #title>聯絡與付款</template>
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 4 }"
              @click="selectedSubMenu(4)"
              index="2-1"
              >item one</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 5 }"
              @click="selectedSubMenu(5)"
              index="2-2"
              >item two</el-menu-item
            >
            <el-menu-item
              :class="{ 'inner-active': isActiveSubMenuItem === 6 }"
              @click="selectedSubMenu(6)"
              index="2-3"
              >item three</el-menu-item
            >
          </el-sub-menu>
          <div class="contact">
            <img
              class="whats-app-logo"
              src="../../assets/icon-whatsapp.png"
              alt=""
            />

            <span>WhatsApp查詢: +852 5396 2553</span>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["isActive", "isActiveSubMenuItem"],
  methods: {
    closeDropdown() {
      const popper = document.querySelectorAll(".el-popper");
      const li = document.querySelectorAll(".el-sub-menu");
      popper[8].style.display = "none";
      popper[9].style.display = "none";
      popper[10].style.display = "none";
      popper[11].style.display = "none";
      popper[12].style.display = "none";

      li[3].classList.remove("is-opened");
      li[4].classList.remove("is-opened");
      li[5].classList.remove("is-opened");
      li[6].classList.remove("is-opened");
      li[7].classList.remove("is-opened");
    },
    selectedSubMenu(option) {
      if (option === 1 || option === 2 || option === 3) {
        this.$emit("setIsActiveClass", 1);
      } else if (option === 4 || option === 5 || option === 6) {
        this.$emit("setIsActiveClass", 2);
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

/* .top-header .el-menu--horizontal .el-sub-menu .el-sub-menu__title::after {
  content: "";
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #737373;
  margin-left: 0.5rem;
} */

.top-header .logo {
  width: 100px;
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
    padding: 0;
    /* padding-top: 1rem;
    padding-left: 0.5rem; */
  }
  /* .top-header .el-row .el-col .el-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

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
}
</style>