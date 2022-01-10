<template>
  <div class="bottom-header">
    <el-row>
      <el-col :sm="24" :lg="22">
        <el-menu
          unique-opened
          :ellipsis="true"
          menu-trigger="click"
          class="el-menu-demo hidden-lg-and-up"
          mode="horizontal"
        >
          <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>Workspace</template>
            <el-menu-item index="4-1">item one</el-menu-item>
            <el-menu-item index="4-2">item two</el-menu-item>
            <el-menu-item index="4-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>Workspace</template>
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item two</el-menu-item>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>

        <el-menu
          unique-opened
          :ellipsis="false"
          menu-trigger="click"
          class="el-menu-demo hidden-md-and-down"
          mode="horizontal"
        >
          <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>Workspace</template>
            <el-menu-item index="4-1">item one</el-menu-item>
            <el-menu-item index="4-2">item two</el-menu-item>
            <el-menu-item index="4-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>Workspace</template>
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item two</el-menu-item>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :sm="24" :lg="2">
        <el-button>Login</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.bottom-header .el-row {
  align-items: center;
}
.bottom-header {
  padding: 0rem 8rem;
  margin-top: -1rem;
  overflow-x: hidden;
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
  /* padding: 0; */
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

.bottom-header .el-button {
  width: 100%;
  background-color: orange;
  border-color: orange;
  color: #fff;
}

.bottom-header .el-button:hover {
  background-color: rgba(255, 166, 0, 0.857);
}

.bottom-header .el-button span {
  margin: 0;
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
    /* padding-left: 1rem; */
    /* margin-right: 2.5rem; */
  }

  .bottom-header .el-col {
    justify-content: center;
  }

  .bottom-header .el-button {
    margin-top: 0.5rem;
  }
}
</style>