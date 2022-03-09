<template>
  <base-container>
    <div class="services-provided">
      <h2>設施</h2>
      <div>
        <p>免費</p>
        <el-row>
          <template v-for="item in selectedHotel.amenities" :key="item.id">
            <el-col
              v-if="item.isFree === true && item.isBed === false"
              class="items"
              :sm="12"
              :md="4"
            >
              <img src="../../assets/icon-check.png" alt="" />
              <span
                >{{ item.name }}
                {{ item.description !== null ? item.description : "" }}</span
              >
              <img :src="item.thumbnail" alt="" />
            </el-col>
          </template>
        </el-row>
      </div>
      <div class="not-provided-services">
        <p>免費</p>
        <el-row>
          <template v-for="item in selectedHotel.amenities" :key="item.id">
            <el-col
              v-if="item.isFree === false && item.isBed === false"
              class="items"
              :sm="12"
              :md="4"
            >
              <img src="../../assets/icon-check.png" alt="" />
              <span
                >{{ item.name }}
                {{ item.description !== null ? item.description : "" }} (+${{
                  item.unitCharge
                }})</span
              >
              <img :src="item.thumbnail" alt="" />
            </el-col>
          </template>
        </el-row>
      </div>
      <div class="beds">
        <p>床</p>
        <el-row>
          <template v-for="item in selectedHotel.amenities" :key="item.id">
            <el-col v-if="item.isBed === true" class="items" :sm="12" :md="4">
              <img src="../../assets/icon-check.png" alt="" />
              <span
                >{{ item.name }}
                {{ item.description !== null ? item.description : "" }} x
                {{ item.quantity }}</span
              >
              <img :src="item.thumbnail" alt="" />
            </el-col>
          </template>
        </el-row>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
  },
};
</script>

<style scoped>
.services-provided {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 2rem;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.services-provided h2 {
  margin-bottom: 0.5rem;
  letter-spacing: 4px;
  color: #fd9a1a;
}

.services-provided p {
  margin-bottom: 0.6rem;
  font-size: 14px;
}

.services-provided .el-col {
  margin-bottom: 0.5rem;
}

.services-provided .items {
  display: flex;
  align-items: center;
}

.services-provided .items span {
  font-size: 12px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.services-provided .items img {
  width: 22px;
}

.services-provided .not-provided-services {
  margin-top: 1.5rem;
}

.services-provided .beds p {
  margin-top: 2rem;
  letter-spacing: 4px;
  color: #fd9a1a;
  font-size: 20px;
}
</style>