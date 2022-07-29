<template>
  <div class="container">
    <base-head>Featured</base-head>
    <FeaturedSlider class="main-section" />
    <base-head>All Movies</base-head>
    <AllItems class="main-section" />  
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import BaseHead from "../components/ui/BaseHead.vue";
import FeaturedSliderTwo from "../components/FeaturedSliderTwo.vue";
import FeaturedSlider from "../components/FeaturedSlider.vue";
import AllItems from "../components/AllItems.vue";
export default {
  components: {
    RouterView,
    RouterLink,
    FeaturedSlider,
    AllItems,
    BaseHead,
    FeaturedSliderTwo
  },
  computed: {
    color1() {
      return this.$store.getters.getPrimaryColor;
    },
    color2() {
      return this.$store.getters.getSecondaryColor;
    },
  },
};
</script>

<style scoped>
.container {
  width: 95%;
  position: relative;
  z-index: 0;
  margin: auto
}
.main-section{
  margin-top: 40px;
  margin-bottom: 40px
}
</style>
