<template>
  <base-container>
    <div class="list-content">
      <el-row>
        <el-col>
          <div class="list">
            <h1>List</h1>
            <el-card class="box-card">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non voluptate porro praesentium.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non voluptate porro praesentium, quia animi, debitis quis.
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non voluptate porro praesentium, quia animi.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non voluptate porro praesentium, quia animi, debitis quis, in
                  pariatur consequatur molestias
                </li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
              </ul>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>List</h1>
            <el-card class="box-card">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                nesciunt unde dolore asperiores
              </p>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="list">
            <h1>List</h1>
            <el-card class="box-card last">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit:</p>
              <p>
                1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                nesciunt unde dolore asperiores
              </p>
              <p>
                2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                nesciunt unde dolore asperiores
              </p>
              <img @click="openDialog" src="../../assets/icon-cs.png" alt="" />
            </el-card>
            <div v-if="isDialogOpen" class="contact-us-list">
              <div class="header">
                <div class="close">
                  <img
                    @click="closeDialog"
                    class="close-icon"
                    src="../../assets/icon-close.png"
                    alt=""
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div class="body">
                <div class="grey">
                  <el-row :gutter="50">
                    <el-col :span="5">
                      <img
                        class="whats-img"
                        src="../../assets/icon-whatsapp.png"
                        alt=""
                      />
                    </el-col>
                    <el-col :span="19">
                      <p>WhatsApp</p>
                      <p>(852) 5396 2553</p>
                    </el-col>
                  </el-row>
                </div>
                <div class="grey">
                  <el-row :gutter="50">
                    <el-col :span="5">
                      <img
                        class="whats-img"
                        src="../../assets/icon-email.png"
                        alt=""
                      />
                    </el-col>
                    <el-col :span="19">
                      <p>Email</p>
                      <p>info@langenholiday.com</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-checkbox
            label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                nesciunt unde dolore asperiores"
            size="large"
          ></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button class="submit">Submit</el-button>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  methods: {
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
  },
};
</script>

<style>
.reservation .list-content {
  margin-bottom: 2rem;
}
.reservation .list {
  margin-top: 3rem;
  position: relative;
  /* margin-bottom: 1rem; */
}

.reservation .list .box-card.last {
  position: relative;
}

.reservation .list .box-card.last img {
  position: absolute;
  width: 50px;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.contact-us-list {
  position: absolute;
  right: 0;
  top: -10.5rem;
  max-width: 300px;
}

.contact-us-list .header {
  background-color: orange;
  padding: 6px 12px 6px 12px;
  border-radius: 4px 4px 0 0;
}

.contact-us-list .header .close {
  text-align: end;
}

.contact-us-list .header .close .close-icon {
  width: 15px;
  cursor: pointer;
}

.contact-us-list .body {
  padding: 12px;
  border: 1px solid #eee;
  background-color: #fff;
}

.contact-us-list .body .grey {
  background-color: #eee;
  padding: 8px;
  margin-bottom: 1rem;
}

.contact-us-list .body .grey img {
  width: 50px;
}

.contact-us-list .body .grey p {
  margin: 0;
  color: #999;
  /* font-size: 14px; */
}

.reservation .contact-us-list .header p {
  text-align: center;
  color: #fff;
}

.reservation .list .el-card {
  border: none;
}

.reservation .list h1 {
  font-size: 24px;
  margin-bottom: 1rem;
}

.reservation .list ul {
  padding-left: 2rem;
}

.reservation .list ul li {
  margin-bottom: 1rem;
  color: #999;
}

.reservation .list p {
  color: #999;
  margin-bottom: 1rem;
}

.reservation .el-checkbox {
  margin-top: 1rem;
  padding-left: 20px;
}

.reservation .el-checkbox .el-checkbox__inner {
  border-radius: 0;
  width: 18px;
  height: 18px;
  border: 1px solid black;
}

.reservation .el-checkbox .el-checkbox__inner::after {
  top: 3px;
  left: 6px;
}

.reservation .el-checkbox .el-checkbox__label {
  color: #999;
}

.reservation .el-button--default.submit {
  width: 100%;
  background-color: orange;
  border-color: orange;
  color: #fff;
  margin-top: 2rem;
}
</style>