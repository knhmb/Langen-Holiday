<template>
  <base-container>
    <div class="booking-alert">
      <h2>住宿訊息</h2>
      <el-alert
        type="warning"
        :closable="false"
        v-if="Object.keys(this.selectedHotel).length > 0"
      >
        <p>{{ selectedHotel.basicInfo.stayInformation }}</p>
        <!-- <p>
          讀品公術利爾否有，建竟物八樣在總，此之事財及量角表食大子我國飯人展筆什現的親表可自我人根以了很香我太產獎生有，片衣代可度和全農不嚴分，慢構醫有：推少過它自，路具經上多然我直子名對空成沒一問論處客完環人以告節以可的……好出點之就會親工。
        </p>
        <p>
          一跟決這下作布計，問會動展？灣作種手一義外重想府個有一家作四的為前變醫。單藝重賣政跑做們林關境量連心……連蘭嗎。國動家國童火的年，包實業事希女發觀、想一爭體，成活物子被式，未不智。
        </p>
        <p>不親交童這備許表，唱年。</p> -->
      </el-alert>
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

<style>
.booking-alert {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.booking-alert h2 {
  margin-bottom: 1.5rem;
  letter-spacing: 4px;
  color: #fd9a1a;
}

.booking-alert p {
  margin-bottom: 1rem;
  letter-spacing: 4.6px;
  color: #8d8d8d;
}

.booking-alert .el-alert {
  border-radius: 0;
  padding-bottom: 1.5rem;
  background-color: #fff5ea;
}
</style>