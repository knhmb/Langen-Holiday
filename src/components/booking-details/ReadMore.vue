<template>
  <base-container>
    <div class="read-more">
      <el-row>
        <el-col :span="24">
          <h2>注意事項</h2>
          <div :class="{ 'sidebar-box': hideContent1 }">
            <div class="list">
              <div v-html="selectedHotel.basicInfo.thingsToNote"></div>
              <!-- <ul>
                <template
                  v-for="note in selectedHotel.hotelNotes"
                  :key="note.id"
                >
                  <li v-if="note.isNote === true">・{{ note.details }}</li>
                </template>
              </ul> -->
            </div>
            <div :class="{ hide: hideContent1 }"></div>
          </div>
          <el-button @click="appendText('1')" v-if="hideContent1"
            >+ 更多</el-button
          >
          <el-button @click="hideText('1')" v-else>- Less</el-button>
        </el-col>
        <el-col :span="24">
          <h2>取消政策</h2>
          <div :class="{ 'sidebar-box': hideContent2 }">
            <div class="list">
              <div v-html="selectedHotel.basicInfo.cancelPolicy"></div>
              <!-- <ul>
                <template
                  v-for="note in selectedHotel.hotelNotes"
                  :key="note.id"
                >
                  <li v-if="note.isCancelPolicy === true">
                    ・{{ note.details }}
                  </li>
                </template>
              </ul> -->
            </div>
            <div :class="{ hide: hideContent2 }"></div>
          </div>
          <el-button @click="appendText('2')" v-if="hideContent2"
            >+ 更多</el-button
          >
          <el-button @click="hideText('2')" v-else>- Less</el-button>
        </el-col>
        <el-col :span="24">
          <h2>惡劣天氣安排</h2>
          <div :class="{ 'sidebar-box': hideContent3 }">
            <div class="list">
              <div v-html="selectedHotel.basicInfo.badWeatherArrangement"></div>
              <!-- <ul>
                <template
                  v-for="note in selectedHotel.hotelNotes"
                  :key="note.id"
                >
                  <li v-if="note.isBadWeather === true">
                    ・{{ note.details }}
                  </li>
                </template>
                <li>
                  ・讀品公術利爾否有，建竟物八樣在總，此之事財及量角表食大子我國飯人展筆什現的親表可自我人根以了很香我太產獎生有
                </li>
                <li>
                  ・片衣代可度和全農不嚴分，慢構醫有：推少過它自
                  ・路具經上多然我直子名對空成沒一問論處客完環人以告節以可的……好出點之就會親工
                </li>
                <li>
                  ・一跟決這下作布計，問會動展？灣作種手一義外重想府個有一家作四的為前變醫
                </li>
                <li>
                  ・單藝重賣政跑做們林關境量連心……連蘭嗎。國動家國童火的年，包實業事希女發觀、想一爭體，成活物子被式，未不智
                </li>
                <li>・不親交童這備許表，唱年。</li>
              </ul> -->
            </div>
            <div :class="{ hide: hideContent3 }"></div>
          </div>
          <el-button @click="appendText('3')" v-if="hideContent3"
            >+ 更多</el-button
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
  computed: {
    selectedHotel() {
      return this.$store.getters["booking/selectedHotel"];
    },
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
  letter-spacing: 4px;
  color: #fd9a1a;
}

.read-more .list {
  padding-left: 1.4rem;
}

.read-more .list ul {
  list-style-type: none;
}

.read-more .list ul li {
  letter-spacing: 2.2px;
  color: #8d8d8d;
  font-size: 14px;
  margin-bottom: 0.5rem;
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
  letter-spacing: 2.2px;
  color: #fd9a1a;
  display: block;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
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