<template>
  <div class="appointment-record" v-for="rate in rates" :key="rate.id">
    <el-row>
      <el-col :sm="24" :lg="8">
        <img :src="rate.thumbnail" alt="" />
      </el-col>
      <el-col :sm="24" :lg="16">
        <div class="card-content">
          <div class="head">
            <el-row>
              <el-col :span="12">
                <h3>{{ rate.hotelName }}</h3>
                <p>{{ rate.hotelAddress }}</p>
              </el-col>
              <el-col class="btn-alignment" :span="12">
                <el-button
                  @click="
                    checkAccessToken({
                      id: rate.reservationId,
                      option: 'detail',
                    })
                  "
                  >詳細</el-button
                >
              </el-col>
            </el-row>
          </div>
          <div class="number-of-individuals">
            <el-row>
              <el-col :span="12">
                <p>人數:</p>
                <p>{{ rate.adultQty }}位成人 + {{ rate.childrenQty }}位兒童</p>
              </el-col>
              <el-col :span="12">
                <p>寵物:</p>
                <p>
                  {{
                    rate.petsQty === 0 || rate.petsQty === null
                      ? 0
                      : rate.petsQty
                  }}
                </p>
              </el-col>
              <template v-for="(child, index) in rate.childrenAge" :key="child">
                <el-col v-if="rate.childrenAge.length > 0" :span="8">
                  <p>兒童{{ index + 1 }}年齡:</p>
                  <p>{{ child }}</p>
                </el-col>
              </template>
              <!-- <el-col :span="8">
                <p>兒童1年齡:</p>
                <p>8</p>
              </el-col>
              <el-col :span="8">
                <p>兒童2年齡:</p>
                <p>9</p>
              </el-col>
              <el-col :span="8">
                <p>兒童3年齡:</p>
                <p>10</p>
              </el-col> -->
            </el-row>
          </div>
          <div class="days-of-stay">
            <el-row>
              <el-col :span="12">
                <p>入住日期:</p>
                <p>
                  {{ formatDate(rate.checkInDate) }}
                  {{ rate.checkInTime }}
                  <!-- {{ rate.checkInTime.replace(/(.{2})$/, ":$1") }} -->
                </p>
              </el-col>
              <el-col :span="12">
                <p>離開日期:</p>
                <p>
                  {{ formatDate(rate.checkOutDate) }}
                  {{ rate.checkOutTime }}
                  <!-- {{ rate.checkOutTime.replace(/(.{2})$/, ":$1") }} -->
                </p>
              </el-col>
            </el-row>
          </div>
          <div class="total-price-with-tax">
            <el-row>
              <el-col>
                <p>總價格(已包含稅款及服務費):</p>
              </el-col>
              <el-col>
                <p class="price-after-tax">HK${{ rate.totalPrice }}</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="appointment-record-dialog">
    <el-dialog v-model="dialogFormVisible" :title="reservationDetail.hotelName">
      <p class="subtitle">
        {{ reservationDetail.hotelAddress }}
      </p>
      <div class="number-of-individuals">
        <el-row>
          <el-col :span="12">
            <p>人數:</p>
            <p>
              {{ reservationDetail.adultQty }}位成人 +
              {{ reservationDetail.childrenQty }}位兒童
            </p>
          </el-col>
          <el-col :span="12">
            <p>寵物:</p>
            <p>
              {{
                reservationDetail.petsQty === null ||
                reservationDetail.petsQty === ""
                  ? 0
                  : reservationDetail.petsQty
              }}
            </p>
          </el-col>
          <template
            v-for="(child, index) in reservationDetail.childrenAge"
            :key="child"
          >
            <el-col v-if="reservationDetail.childrenAge.length > 0" :span="8">
              <p>兒童{{ index + 1 }}年齡:</p>
              <p>{{ child }}</p>
            </el-col>
          </template>
          <!-- <el-col :span="8">
            <p>兒童1年齡:</p>
            <p>8</p>
          </el-col>
          <el-col :span="8">
            <p>兒童2年齡:</p>
            <p>9</p>
          </el-col>
          <el-col :span="8">
            <p>兒童3年齡:</p>
            <p>10</p>
          </el-col> -->
        </el-row>
      </div>
      <div class="days-of-stay">
        <el-row>
          <el-col :span="12">
            <p>入住日期:</p>
            <p>
              {{ formatDate(reservationDetail.checkInDate) }}
              {{ reservationDetail.checkInTime.replace(/(.{2})$/, ":$1") }}
            </p>
          </el-col>
          <el-col :span="12">
            <p>離開日期:</p>
            <p>
              {{ formatDate(reservationDetail.checkOutDate) }}
              {{ reservationDetail.checkOutTime.replace(/(.{2})$/, ":$1") }}
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="pricing">
        <el-row>
          <el-col :span="12">
            <p>原價:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK${{ reservationDetail.roomPrice }}</p>
          </el-col>
          <el-col :span="12">
            <p>折扣:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK${{ reservationDetail.discount }}</p>
          </el-col>
        </el-row>
      </div>
      <div class="pet-info" v-if="reservationDetail.addlService.length > 0">
        <el-row>
          <template
            v-for="service in reservationDetail.addlService"
            :key="service"
          >
            <el-col :span="12">
              <p>{{ service.name }}:</p>
            </el-col>
            <el-col :span="12">
              <p class="price">{{ service.quantity }}</p>
            </el-col>
            <el-col :span="12">
              <p>寵物留宿附加費:</p>
            </el-col>
            <el-col :span="12">
              <p class="price">HK${{ service.unitCharge }}</p>
            </el-col>
          </template>
        </el-row>
      </div>
      <div class="full-price">
        <el-row>
          <el-col :span="14">
            <p>總價格(已包含稅款及服務費):</p>
          </el-col>
          <el-col :span="10">
            <p class="price-colored">HK${{ reservationDetail.totalPrice }}</p>
          </el-col>
          <el-col :span="12">
            <p>現需繳付:</p>
          </el-col>
          <el-col :span="12">
            <p class="price-colored">HK${{ reservationDetail.pricePayNow }}</p>
          </el-col>
          <el-col :span="12">
            <p>入住時需繳付:</p>
          </el-col>
          <el-col :span="12">
            <p class="price-colored">
              HK${{ reservationDetail.pricePayCheckIn }}
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="deposit">
        <el-row>
          <el-col :span="12">
            <p>按金:</p>
          </el-col>
          <el-col :span="12">
            <p class="price">HK${{ reservationDetail.deposit }}</p>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  computed: {
    rates() {
      return this.$store.getters["profile/reservations"];
    },
    reservationDetail() {
      return this.$store.getters["profile/reservationDetail"];
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).locale("zh-cn").format("ll");
    },
    async openDialog(reservationId) {
      await this.$store
        .dispatch("profile/viewReservationDetail", reservationId)
        .then(() => {
          this.dialogFormVisible = true;
        });
    },
    async checkAccessToken({ id, option }) {
      await this.$store
        .dispatch("auth/checkAccessTokenValidity")
        .then(() => {
          if (option && option === "detail") {
            this.openDialog(id);
          } else {
            this.$store.dispatch("profile/getReservations");
          }
        })
        .catch(() => {
          this.checkRefreshToken({ id: id, option: option });
        });
    },
    async checkRefreshToken({ id, option }) {
      await this.$store
        .dispatch("auth/checkRefreshTokenValidity")
        .then(() => {
          if (option && option === "detail") {
            this.openDialog(id);
          } else {
            this.$store.dispatch("profile/getReservations");
          }
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: err.message,
            type: "error",
          });
          this.$store.dispatch("auth/logout");
        });
    },
  },
  mounted() {
    this.checkAccessToken({ id: null, option: null });
  },
};
</script>

<style>
.edit-profile .appointment-record {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 1rem;
}

.edit-profile .appointment-record img {
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.edit-profile .appointment-record .card-content {
  padding: 1rem;
}

.edit-profile .appointment-record .head {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record .head h3 {
  letter-spacing: 1.4px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record .head p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
}

.edit-profile .appointment-record .head .btn-alignment {
  text-align: end;
}

.edit-profile .appointment-record .head .el-button {
  border-color: #707070;
  color: #707070;
  letter-spacing: 2px;
  text-align: end;
  padding: 0 2rem;
}

.edit-profile .appointment-record .number-of-individuals .el-col {
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record .number-of-individuals,
.edit-profile .appointment-record .days-of-stay,
.edit-profile .appointment-record .total-price-with-tax {
  margin-top: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record .total-price-with-tax {
  border: none;
}

.edit-profile .appointment-record .number-of-individuals p,
.edit-profile .appointment-record .days-of-stay p,
.edit-profile .appointment-record .total-price-with-tax p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 14px;
}

.edit-profile .appointment-record .total-price-with-tax .price-after-tax {
  letter-spacing: 0px;
  color: #fd9a1a;
  font-size: 24px;
  font-weight: bold;
}

.edit-profile .appointment-record-dialog .el-dialog {
  min-width: 350px;
  max-width: 400px;
}

.edit-profile .appointment-record-dialog .el-dialog .el-dialog__body {
  padding: 20px;
}

.edit-profile .appointment-record-dialog .el-dialog .el-dialog__title {
  /* border-bottom: 1px solid #eee;
  padding-bottom: 1rem; */
  letter-spacing: 1.4px;
  font-weight: bold;
  color: #3e3e3e;
  display: block;
}

.edit-profile .appointment-record-dialog .el-dialog p.subtitle {
  margin-top: -1.5rem;
  /* padding-left: 4px; */
  /* margin-bottom: 2rem; */
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

/* .edit-profile .appointment-record-dialog .el-dialog .el-dialog__title::after {
  content: "香港新界西貢區白沙灣";
  display: block;
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 12px;
} */

.edit-profile .appointment-record-dialog .number-of-individuals .el-col {
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .number-of-individuals {
  padding-top: 1rem;
}

.edit-profile .appointment-record-dialog .number-of-individuals,
.edit-profile .appointment-record-dialog .days-of-stay,
.edit-profile .appointment-record-dialog .pricing,
.edit-profile .appointment-record-dialog .pet-info,
.edit-profile .appointment-record-dialog .full-price {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.edit-profile .appointment-record-dialog .deposit {
  padding-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .number-of-individuals p,
.edit-profile .appointment-record-dialog .days-of-stay p,
.edit-profile .appointment-record-dialog .deposit p {
  letter-spacing: 0.8px;
  color: #8d8d8d;
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .pricing p,
.edit-profile .appointment-record-dialog .pet-info p,
.edit-profile .appointment-record-dialog .full-price p {
  letter-spacing: 2px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.edit-profile .appointment-record-dialog .pricing .price,
.edit-profile .appointment-record-dialog .pet-info .price,
.edit-profile .appointment-record-dialog .deposit .price,
.edit-profile .appointment-record-dialog .full-price .price-colored {
  letter-spacing: 0;
  text-align: end;
}

.edit-profile .appointment-record-dialog .full-price .price-colored {
  color: #fd9a1a;
}
</style>