<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<style scoped>
.banner {
  margin-bottom: 2rem;
  position: relative;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.banner p,
.banner h3 {
  position: absolute;
  left: 4rem;
  color: #fff;
}

.banner h3 {
  top: 60%;
  font-size: 2rem;
}

.banner p {
  top: 75%;
  max-width: 700px;
}

@media screen and (max-width: 820px) {
  .banner p,
  .banner h3 {
    left: 1rem;
  }

  .banner h3 {
    top: 45%;
  }

  .banner p {
    top: 65%;
    max-width: 300px;
  }
}

@media screen and (max-width: 540px) {
  .banner p,
  .banner h3 {
    left: 1rem;
  }

  .banner h3 {
    top: 30%;
    font-size: 1rem;
  }

  .banner p {
    top: 45%;
    font-size: 0.6rem;
    margin-top: 0.5rem;
  }
}
</style>