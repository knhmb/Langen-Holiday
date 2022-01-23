<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
  background-color: #fff;
  padding: 3rem;
}

@media screen and (max-width: 768px) {
  /* .card {
    padding: 3rem 0;
  } */
}
</style>