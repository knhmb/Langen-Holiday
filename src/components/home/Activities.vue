<template>
  <section class="activities">
    <base-container>
      <h1>隨你鍾意</h1>
      <el-row :gutter="30">
        <el-col
          v-for="theme in themes"
          :key="theme.id"
          :sm="24"
          :md="12"
          :lg="8"
        >
          <div class="card" @click="searchTheme(theme.slug)">
            <div class="card-img">
              <!-- <img src="../../assets/img-service1.jpg" alt="" /> -->
              <img :src="theme.thumbnail" alt="" />
            </div>
            <div class="card-text">
              <!-- <p>簡單煮食</p> -->
              <p>{{ theme.name }}</p>
            </div>
          </div>
        </el-col>
        <!-- <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service2.jpg" alt="" />
            </div>
            <div class="card-text">
              <p>簡單煮食</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service3.jpg" alt="" />
            </div>
            <div class="card-text">
              <p>簡單煮食</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service4.jpg" alt="" />
            </div>
            <div class="card-text">
              <p>簡單煮食</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service5.jpg" alt="" />
            </div>
            <div class="card-text">
              <p>簡單煮食</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service6.jpg" alt="" />
            </div>
            <div class="card-text">
              <p>簡單煮食</p>
            </div>
          </div>
        </el-col> -->
      </el-row>
    </base-container>
  </section>
</template>

<script>
export default {
  computed: {
    themes() {
      // return this.$store.getters["dashboard/themes"];
      return this.$store.state.dashboard.themes;
    },
  },
  methods: {
    searchTheme(theme) {
      this.$store
        .dispatch("search/getSearchTheme", theme)
        .then(() => {
          this.$router.push({ path: "/search", query: { q: theme } });
          this.$store.dispatch("resetIsHavePets");
          console.log(theme);
        })
        .catch(() => {
          console.log("ERROR");
        });
    },
  },
  async created() {
    await this.$store.dispatch("dashboard/setThemes");
  },
};
</script>

<style scoped>
.activities {
  background-image: url("../../assets/main-bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 4.5rem;
  margin-top: -8.9rem;
}

.activities h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: #fd9a1a;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  /* display: inline-block; */
  margin-bottom: 4rem;
}

.activities .el-col {
  margin-bottom: 3rem;
}

.activities .card {
  border-radius: 4px;
  /* margin-bottom: 3rem; */
  box-shadow: 0px 0px 3px 0px grey;
  cursor: pointer;
}

.activities .card .card-img {
  border-radius: 4px 4px 0 0;
  /* height: 300px; */
  /* width: 100%;/ */
}

.activities .card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
}

.activities .card-text {
  background-color: #fccb24;
  margin-top: -5px;
  padding: 0.5rem 0;
  border-radius: 0 0 4px 4px;
}

.activities .card-text p {
  color: #fff;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .activities {
    margin-top: -6.9rem;
  }
}
</style>