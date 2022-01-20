<template>
  <section class="search-carousel">
    <el-carousel indicator-position="none" trigger="click" height="450px">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <div class="image-content">
          <img class="banner" :src="banner.banner" alt="" />
          <h3>{{ banner.title }}</h3>
          <p>{{ banner.description }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          banner: require("../../assets/banner-CheungChau.jpg"),
          title: "長洲",
          description:
            "長洲位於香港島之西南海域，面積約3平方公里人口雖只有3至4萬人，卻為本港各離島之冠。島民大部份世代而居，故相處融洽、民風簡樸、互助互愛。而且環境優美，空氣清新，設施齊備，交通便利，是香港人假日的好去處。",
        },
        {
          id: 2,
          banner: require("../../assets/banner-LantauIsland.jpg"),
          title: "大嶼山",
          description:
            "大嶼山位於珠江口，是本港最大的一個島嶼，面積約144平方公里，近年因島上迪士尼樂園開幕而聞名中外。其實此島尚有很多知名的地方，如梅窩銀礦灣，大澳水鄉，寶蓮寺大佛及香港國際機場等均令各地遊人慕名而至。",
        },
        {
          id: 3,
          banner: require("../../assets/banner-LammaIsland.jpg"),
          title: "南丫島",
          description:
            "南丫島位於香港島西南，面積約十三點六平方公里，是香港境內的第三大島嶼，由於島上風光明媚，有不少洋人聚居於此，令島上生活文化溶合了中西兩方面的特色。",
        },
        {
          id: 4,
          banner: require("../../assets/banner-FeaturedHotels.jpg"),
          title: "香港渡假酒店之選",
          description:
            "吃會蝸皮里？動丁地車但雄洋玉良鼻。能久連風面犬現的林荷即帽菜圓飯書、六山坐女對進吃丟冰能；和唱幫小，己汁虎隻發土夏起習食自着至念耍燈；服幸何去足小詞身！愛寺完米，從少羊活娘葉找夏，明休且哥葉往。",
        },
        {
          id: 5,
          banner: require("../../assets/banner-DaytimeOvernight.jpg"),
          title: "日間/晚間住宿",
          description:
            "吃會蝸皮里？動丁地車但雄洋玉良鼻。能久連風面犬現的林荷即帽菜圓飯書、六山坐女對進吃丟冰能；和唱幫小，己汁虎隻發土夏起習食自着至念耍燈；服幸何去足小詞身！愛寺完米，從少羊活娘葉找夏，明休且哥葉往。",
        },
      ],
    };
  },
};
</script>

<style>
.search-carousel {
  margin-bottom: 2.5rem;
}

.search-carousel .banner {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.search-carousel .image-content {
  position: relative;
}

.search-carousel .image-content p,
.search-carousel .image-content h3 {
  position: absolute;
  left: 4rem;
  color: #fff;
}

.search-carousel .image-content h3 {
  top: 60%;
  font-size: 2rem;
}

.search-carousel .image-content p {
  top: 75%;
  max-width: 700px;
}

@media screen and (max-width: 1024px) {
  .search-carousel .el-carousel .el-carousel__container {
    height: 345px !important;
  }
}

@media screen and (max-width: 820px) {
  .search-carousel .el-carousel .el-carousel__container {
    height: 260px !important;
  }

  .search-carousel .image-content p,
  .search-carousel .image-content h3 {
    left: 1rem;
  }

  .search-carousel .image-content h3 {
    top: 45%;
    /* font-size: 1rem; */
  }

  .search-carousel .image-content p {
    top: 65%;
    /* font-size: 0.6rem; */
    /* margin-top: 0.5rem; */
    max-width: 650px;
  }
}

@media screen and (max-width: 540px) {
  .search-carousel .el-carousel .el-carousel__container {
    height: 140px !important;
  }

  .search-carousel .image-content p,
  .search-carousel .image-content h3 {
    left: 1rem;
  }

  .search-carousel .image-content h3 {
    top: 30%;
    font-size: 1rem;
  }

  .search-carousel .image-content p {
    top: 45%;
    font-size: 0.6rem;
    margin-top: 0.5rem;
  }
}

@media screen and (min-width: 1498px) {
  .search-carousel .el-carousel .el-carousel__container {
    min-height: 500px !important;
  }
}
</style>