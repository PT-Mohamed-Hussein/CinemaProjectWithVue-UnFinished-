<template>
  <nav class="my-nav">
    <div class="logo">Watch <span class="title-second-half">This</span></div>
    <div class="search">
      <input
        type="text"
        v-model="search"
        placeholder="Seach Your Favourite Movie"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="search-icon"
      />
    </div>
    <div class="info">
      <div class="img-holder">
        <img src="image-juliusomo.webp" alt="picture" />
      </div>
      <div class="username" @click="togMenu">
        <span>Jhon Doe</span>
        <font-awesome-icon icon="fa-solid fa-caret-down" class="down-icon" />
      </div>
    </div>
  </nav>
  <Teleport to="#app">
    <div class="dropdown-info" v-if="dropdownActive">
      <div class="drop-personal-info">
        <div class="drop-img-holder">
          <img src="image-juliusomo.webp" alt="picture" />
        </div>
        <div class="drop-username">
          <span>Jhon Doe</span>
        </div>
      </div>
      <div class="drop-options">
        <RouterLink to="./" class="option">My Tickets</RouterLink>
        <RouterLink to="/support" class="option">Support</RouterLink>
        <RouterLink to="./" class="option">Edit My Profile</RouterLink>
      </div>
      <div class="logoutsection">
        <RouterLink to="./" class="option">
          <font-awesome-icon
            icon="fa-solid fa-right-from-bracket"
            class="down-icon"
          />
          Logout
        </RouterLink>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
  data() {
    return {
      search: null,
      dropdownActive: false,
    };
  },
  computed: {
    color1() {
      return this.$store.getters.getPrimaryColor;
    },
    color2() {
      return this.$store.getters.getSecondaryColor;
    },
  },
  methods: {
    togMenu() {
      this.dropdownActive = !this.dropdownActive;
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  width: 100%;
  grid-template-columns: 25% 50% 25%;
  padding: 7px;
  background-color: v-bind(color1);
  color: v-bind(color2);
  align-items: center;
  z-index: 10;
}
.logo {
  grid-column: 1/2;
  width: 100%;
  display: flex;
  justify-content: center;
  letter-spacing: 0.1em;
  padding: 10px;
  text-transform: uppercase;
  align-items: center;
  font-weight: 600;
}
.title-second-half{
  background-color: v-bind(color2);
  color: v-bind(color1);
  margin-left: 10px;
  padding: 5px 20px;
}
.search {
  grid-column: 2/3;
  width: 100%;
  position: relative;
}
.search input {
  outline: none;
  width: 100%;
  padding: 0.2em;
  border-radius: 10px;
  border: 1px solid v-bind(color2);
  font-size: 1em;
  transition: 0.3s;
}
.search input:focus {
  border-radius: 0;
}
.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: rgba(0, 0, 0, 0.4);
}
.info {
  grid-column: 3/4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}
.img-holder {
  width: 15%;
}
.img-holder img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
.username {
  cursor: pointer;
}
.personalinfo,
.username {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.dropdown-info {
  position: absolute;
  top: 80px;
  background-color: #2a353e;
  width: 25%;
  right: 5px;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 6px;
  margin-top: 2px;
  z-index: 1000;
}
.drop-personal-info {
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 20% 75%;
  gap: 5%;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #e8e7d7;
  margin-bottom: 10px;
}
.drop-img-holder {
  width: 100%;
  grid-column: 1/2;
}
.drop-img-holder img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
.drop-username {
  width: 100%;
  font-size: 1.2em;
  font-weight: 700;
  color: #e8e7d7;
}
.drop-options,
.logoutsection {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  font-size: 1.1em;
  font-weight: 500;
}
.option {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: #e8e7d7;
  transition: 0.3s;
}
.option:hover {
  background-color: #e8e7d7;
  color: v-bind(color1);
}
.drop-options {
  border-bottom: 1px solid #e8e7d7;
}
.logoutsection {
  margin-top: 7px;
  margin-bottom: 7px;
}
</style>
