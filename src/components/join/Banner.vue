<template>
  <div class="banner">
    <img src="../../assets/join-banner.jpg" alt="" />
    <h3>成為我們的合作伙伴</h3>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  margin-bottom: 3rem;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.banner h3 {
  position: absolute;
  letter-spacing: 8.7px;
  color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
}

@media screen and (max-width: 1024px) {
  .banner h3 {
    font-size: 42px;
  }
}

@media screen and (max-width: 414px) {
  .banner h3 {
    font-size: 10px;
  }
}
</style>