<template>
  <div class="top-header">
    <el-row>
      <el-col class="logo-content" :sm="24" :lg="9">
        <img src="../../assets/logo.png" class="logo" alt="" />
        <!-- <span>LanGen Holiday</span> -->
        <img class="brand-name" src="../../assets/brand-name.png" alt="" />
      </el-col>
      <el-col :sm="24" :lg="15">
        <el-menu
          :ellipsis="false"
          menu-trigger="click"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-sub-menu index="1">
            <template #title>熱線電話</template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>聯絡與付款</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <div class="contact">
            <img
              class="whats-app-logo"
              src="../../assets/icon-whatsapp.png"
              alt=""
            />

            <span>WhatsApp查詢: +852 5396 2553</span>
            <!-- <span class="number">+852 5396 2553</span> -->
          </div>
        </el-menu>
      </el-col>
      <!-- <el-col :span=""></el-col> -->
      <!-- <el-col :span="8" class="contact">
        <img
          class="whats-app-logo"
          src="../../assets/icon-whatsapp.png"
          alt=""
        />
        <span>WhatsApp:</span>
        <span>+852 5396 2553</span>
      </el-col> -->
    </el-row>
  </div>
</template>

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