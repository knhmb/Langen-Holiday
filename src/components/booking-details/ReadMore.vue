<template>
  <base-container>
    <div class="read-more">
      <el-row>
        <el-col :span="24">
          <h2>Read More</h2>
          <div :class="{ 'sidebar-box': hideContent1 }">
            <div class="list">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <!-- <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li> -->
              </ul>
            </div>
            <div :class="{ hide: hideContent1 }"></div>
          </div>
          <el-button @click="appendText('1')" v-if="hideContent1"
            >+ Read</el-button
          >
          <el-button @click="hideText('1')" v-else>- Less</el-button>
        </el-col>
        <el-col :span="24">
          <h2>Read More</h2>
          <div :class="{ 'sidebar-box': hideContent2 }">
            <div class="list">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <!-- <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li> -->
              </ul>
            </div>
            <div :class="{ hide: hideContent2 }"></div>
          </div>
          <el-button @click="appendText('2')" v-if="hideContent2"
            >+ Read</el-button
          >
          <el-button @click="hideText('2')" v-else>- Less</el-button>
        </el-col>
        <el-col :span="24">
          <h2>Read More</h2>
          <div :class="{ 'sidebar-box': hideContent3 }">
            <div class="list">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <!-- <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li> -->
              </ul>
            </div>
            <div :class="{ hide: hideContent3 }"></div>
          </div>
          <el-button @click="appendText('3')" v-if="hideContent3"
            >+ Read</el-button
          >
          <el-button @click="hideText('3')" v-else>- Less</el-button>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      //   showReadMore: true,
      hideContent1: true,
      hideContent2: true,
      hideContent3: true,
    };
  },
  methods: {
    appendText(option) {
      if (option === "1") {
        this.hideContent1 = false;
      } else if (option === "2") {
        this.hideContent2 = false;
      } else if (option === "3") {
        this.hideContent3 = false;
      }
      this.showReadMore = false;
    },
    hideText(option) {
      if (option === "1") {
        this.hideContent1 = true;
      } else if (option === "2") {
        this.hideContent2 = true;
      } else if (option === "3") {
        this.hideContent3 = true;
      }
      this.showReadMore = true;
    },
  },
};
</script>

<style scoped>
.read-more {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.read-more h2 {
  margin-bottom: 1.5rem;
  color: orange;
}

.read-more .list {
  padding-left: 1.4rem;
}

.read-more .list ul li {
  color: #666;
}

.hide {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 4rem 0 0 0;

  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, #fff);
}

.sidebar-box {
  max-height: 120px;
  position: relative;
  overflow: hidden;
}

.read-more .el-button--default {
  background: transparent;
  border: none;
  color: orange;

  display: block;
  margin: 0;
  margin-top: 1rem;
}

/* .hide {
  width: 100%;
  height: 100px;
  background-color: #eee;
  margin-top: -0.7rem;
  position: relative;
  z-index: 1;
} */
</style>