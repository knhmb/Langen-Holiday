<template>
  <header>
    <top-header
      :isActive="isActive"
      :isActiveSubMenuItem="isActiveSubMenuItem"
      @setIsActiveClass="setActive"
      @setIsActiveSubMenuItem="setActiveSubMenu"
    ></top-header>
    <bottom-header-1
      :isActive="isActive"
      :isActiveSubMenuItem="isActiveSubMenuItem"
      @setIsActiveClass="setActive"
      @setIsActiveSubMenuItem="setActiveSubMenu"
    ></bottom-header-1>
  </header>
</template>

<script>
import TopHeader from "./TopHeader.vue";
// import BottomHeader from "./BottomHeader.vue";
import BottomHeader1 from "./BottomHeader1.vue";

export default {
  components: {
    TopHeader,
    BottomHeader1,
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
  /* border-bottom: 2px solid #fd9a1a !important; */
}

.inner-active {
  /* color: #fd9a1a !important; */
}
</style>

