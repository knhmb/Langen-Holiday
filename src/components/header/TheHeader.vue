<template>
  <header>
    <top-header
      :isActive="isActive"
      :isActiveSubMenuItem="isActiveSubMenuItem"
      @setIsActiveClass="setActive"
      @setIsActiveSubMenuItem="setActiveSubMenu"
    ></top-header>
    <bottom-header
      :isActive="isActive"
      :isActiveSubMenuItem="isActiveSubMenuItem"
      @setIsActiveClass="setActive"
      @setIsActiveSubMenuItem="setActiveSubMenu"
    ></bottom-header>
  </header>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import BottomHeader from "./BottomHeader.vue";

export default {
  components: {
    TopHeader,
    BottomHeader,
  },
  data() {
    return {
      isActive: "",
      isActiveSubMenuItem: "",
    };
  },
  methods: {
    setActive(value) {
      this.isActive = value;
    },
    setActiveSubMenu(value) {
      this.isActiveSubMenuItem = value;
    },
  },
};
</script>

<style>
.my-active {
  border-bottom: 2px solid #fd9a1a !important;
}

.inner-active {
  color: #fd9a1a !important;
}
</style>

