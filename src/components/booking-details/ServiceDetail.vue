<template>
  <base-container>
    <div class="service-detail">
      <Alert />
      <h3>{{ $t("basic_information") }}</h3>
      <el-row :gutter="30" v-if="Object.keys(selectedHotel).length > 0">
        <el-col :sm="24" :lg="12">
          <el-row :gutter="30" class="service-info">
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("area") }}:</span>
                <span
                  ><img
                    style="width: 15px"
                    src="../../assets/icon-location.png"
                    alt=""
                  />
                  {{ selectedHotel.basicInfo.location }}</span
                >
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("floor") }}:</span>
                <span>{{ selectedHotel.basicInfo.floorNo }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("service_type") }}:</span>
                <span>{{ selectedHotel.basicInfo.serviceType }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("landscape") }}:</span>
                <span>{{ selectedHotel.basicInfo.hotelView }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("room_type") }}:</span>
                <span>{{ selectedHotel.basicInfo.roomType }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("area") }}:</span>
                <span>{{ selectedHotel.basicInfo.size }} 呎</span>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("occupancy") }}:</span>
                <span>{{ selectedHotel.basicInfo.maxGuest }}</span>
              </div>
            </el-col>
            <!-- <el-col :span="12">
              <div class="separation">
                <span>入住時間:</span>
                <span>{{
                  $filters.formatTime(selectedHotel.basicInfo.checkInTime)
                }}</span>
              </div>
            </el-col> -->
            <el-col :span="12">
              <div class="separation">
                <span>{{ $t("pet_stay") }}:</span>
                <span>{{
                  selectedHotel.petsWelcome === true
                    ? $t("can_pet")
                    : $t("cannot_pet")
                }}</span>
              </div>
              <!-- <div class="separation no-border">
                <span>竉物留宿:</span>
                <span>{{
                  selectedHotel.petsWelcome === true ? "可以" : "不可以"
                }}</span>
              </div> -->
            </el-col>
            <!-- <el-col :span="12">
              <div class="separation no-border">
                <span>退房時間:</span>
                <span>{{
                  $filters.formatTime(selectedHotel.basicInfo.checkOutTime)
                }}</span>
              </div>
            </el-col> -->
          </el-row>
        </el-col>
        <el-col class="purchasing-details" :sm="24" :lg="12">
          <service-detail-right></service-detail-right>
        </el-col>
      </el-row>
    </div>
  </base-container>
</template>

<script>
import ServiceDetailRight from "./ServiceDetailRight.vue";
import Alert from "./Alert.vue";

export default {
  components: {
    ServiceDetailRight,
    Alert,
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
  },
};
</script>

<style scoped>
.service-detail {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 4rem;
}

.service-detail h3 {
  font-size: 24px;
  margin-bottom: 1rem;
  letter-spacing: 4px;
  color: #fd9a1a;
}

.service-detail .service-info {
}

.service-detail .separation {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
  padding-bottom: 0.3rem;
  font-size: 14px;
  margin-bottom: 0.5rem;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.service-detail .separation.no-border {
  border-bottom: none;
}

@media screen and (max-width: 768px) {
  .service-detail .purchasing-details {
    margin-top: 1rem;
  }
}
</style>