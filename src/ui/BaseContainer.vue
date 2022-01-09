<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 0 8rem;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 3rem;
  }
}
</style>