<script>
import TheNavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue"
export default {
  components: { TheNavBar, RouterView, TheFooter },
  computed: {
    isLogin() {
      return this.$store.getters.isLoggedIn;
    },
    color1() {
      return this.$store.getters.getPrimaryColor;
    },
    color2() {
      return this.$store.getters.getSecondaryColor;
    },
  },
};
</script>

<template>
  <the-nav-bar v-if="isLogin"></the-nav-bar>
  <div class="base-cont">
    <RouterView />
  </div>
  <the-footer v-if="isLogin"></the-footer>

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
  background-color: rgba(83, 93, 108, 0.3);
  z-index: -2 !important;
}
.base-cont{
  /*width: 95%;*/
  width: 100%;

}
</style>
