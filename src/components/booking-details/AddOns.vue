<template>
  <div class="add-ons">
    <p>附加服務</p>
    <el-row class="add-on-item">
      <el-col :span="12">
        <el-checkbox-group v-model="services">
          <el-checkbox
            @change="serviceChanged"
            v-for="service in selectedHotel.addlService"
            :key="service.id"
            :label="service.amenitiesCode"
            >{{ service.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-col>
      <el-col :span="12">
        <p
          v-for="service in selectedHotel.addlService"
          :key="service.id"
          class="add-on-price"
        >
          + $ {{ service.unitCharge }}.00
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-select class="m-2" placeholder="2">
          <el-option> </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>

  <div class="calculated-add-on">
    <el-row class="add-on-item">
      <el-col :span="12">
        <p>附加服務價錢:</p>
      </el-col>
      <el-col :span="12">
        <p class="add-on-price">
          ${{ selectedHotel.totalSelectedAddlServiceCharge }}.00
        </p>
      </el-col>
    </el-row>
  </div>

  <div class="total-price">
    <el-row>
      <el-col :span="14">
        <p>總價格(已包含稅款及服務費):</p>
      </el-col>
      <el-col :span="10" class="final-price"
        >HK${{ selectedHotel.totalPrice }}.00</el-col
      >
      <el-col class="btn-alignment">
        <el-button>預訂</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      services: [],
    };
  },
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
    dateSelected() {
      return this.$store.getters.dateSelected;
    },
  },
  methods: {
    serviceChanged() {
      console.log(this.services);
      const formatService = this.services.toString().replaceAll(",", "|");
      console.log(this.services.toString());
      const data = {
        hotelId: this.selectedHotel.basicInfo.hotelId,
        checkInDate: moment(this.dateSelected.start).format("YYYYMMDD"),
        checkOutDate: moment(this.dateSelected.end).format("YYYYMMDD"),
        service: formatService,
      };
      console.log(data);
      // this.$store.dispatch('booking/changedService', data)
    },
  },
};
</script>

<style>
.add-ons {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1.5rem;
  color: #8d8d8d;
}

.add-ons p {
  letter-spacing: 2.2px;
  color: #8d8d8d;
  margin-bottom: 0.5rem;
}

.add-ons .el-checkbox {
  display: block;
  /* margin-top: 0.5rem; */
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner {
  background-color: #fd9a1a;
  border-color: #aaa;
}

.add-ons .el-checkbox.is-checked .el-checkbox__inner::after {
  display: none;
}

.add-ons .el-checkbox .el-checkbox__inner:hover {
  border-color: #fd9a1a;
}

.add-ons .el-checkbox .el-checkbox__label {
  color: #8d8d8d;
  letter-spacing: 2.2px;
}

.calculated-add-on {
  margin-top: 1rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.calculated-add-on p {
  color: #8d8d8d;
  letter-spacing: 2.2px;
}

.add-ons .add-on-item,
.calculated-add-on .add-on-item {
  align-items: center;
}

/* .add-ons .add-on-price {
  margin-top: 0.5rem;
} */

.add-ons .add-on-price,
.calculated-add-on .add-on-price {
  text-align: end;
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.total-price {
  margin-top: 0.5rem;
}

.total-price p {
  letter-spacing: 2.2px;
  color: #8d8d8d;
}

.total-price .el-row {
  align-items: center;
}

.total-price .final-price {
  color: #fd9a1a;
  font-size: 24px;
}

.total-price .btn-alignment {
  text-align: center;
}

.total-price .el-button--default {
  background-color: #fd9a1a;
  border-radius: 5px;
  border-color: #fd9a1a;
  color: #fff;
  letter-spacing: 5.6px;
  width: 30%;
  margin-top: 3rem;
}

@media screen and (max-width: 991px) {
  .total-price p,
  .calculated-add-on p,
  .add-ons .el-checkbox .el-checkbox__label,
  .add-ons p {
    font-size: 12px;
  }

  .total-price .final-price {
    font-size: 18px;
  }
}
</style>