<template>
  <section class="activities">
    <base-container>
      <div class="title">
        <h1>{{ $t("as_you_like") }}</h1>
        <img class="service-icon" src="../../assets/icon-service.png" alt="" />
      </div>

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
              <img :src="theme.thumbnail" alt="" />
            </div>
            <div class="card-text">
              <p>{{ theme.name }}</p>
            </div>
          </div>
        </el-col>
        <!-- <el-col v-for="item in 9" :key="item" :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img src="../../assets/img-service2.jpg" alt="" />
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
  /* background-repeat: no-repeat; */
  /* background-position: bottom; */
  background-position: bottom 0 left -1rem;
  padding-top: 3rem;
  /* padding-bottom: 4.5rem; */
  margin-top: -8.9rem;
}

.activities div.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.activities h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: #fd9a1a;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  /* display: inline-block; */
}

.activities img.service-icon {
  width: 3rem;
  margin-left: 0.3rem;
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
  /* height: 100%; */
  height: 13rem;
  object-fit: cover;
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