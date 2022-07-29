<template>
  <div class="cont">
    <div class="forumContainer">
      <div class="forum">
        <h1 class="title">Register</h1>
        <div class="mail">
          <input type="text" class="inputfield" v-model="username" />
          <span class="info" :class="!!username ? 'valid' : ''">username</span>
        </div>
        <div class="mail">
          <input type="text" class="inputfield" v-model="email" />
          <span class="info" :class="!!email ? 'valid' : ''">E-Mail</span>
        </div>
        <div class="mail">
          <input type="text" class="inputfield" v-model="phone" />
          <span class="info" :class="!!phone ? 'valid' : ''">Phone Number</span>
        </div>

        <div class="password">
          <input :type="passwordtype" class="inputfield" v-model="password" />
          <span class="info" :class="!!password ? 'valid' : ''">Password</span>
          <font-awesome-icon
            icon="fa-solid fa-eye"
            class="passIcon"
            v-if="passwordtype == 'password'"
            @click="changePassType"
          />
          <font-awesome-icon
            icon="fa-solid fa-eye-slash"
            class="passIcon"
            v-else
            @click="changePassType"
          />
        </div>
        <div class="password">
          <input
            :type="passwordconfirmationtype"
            class="inputfield"
            v-model="passwordconfirmation"
          />
          <span class="info" :class="!!passwordconfirmation ? 'valid' : ''"
            >Confirm Password</span
          >
          <font-awesome-icon
            icon="fa-solid fa-eye"
            class="passIcon"
            v-if="passwordconfirmationtype == 'password'"
            @click="changePassConfirmationType"
          />
          <font-awesome-icon
            icon="fa-solid fa-eye-slash"
            class="passIcon"
            v-else
            @click="changePassConfirmationType"
          />
        </div>
      </div>
      <div class="login">
        <span
          >Already Have Account?<RouterLink to="/login" class="loginbutton">
            Login
          </RouterLink></span
        >
      </div>
      <div class="tos">
        <input type="checkbox" id="tos" v-model="tos" />
        <label for="tos"
          >I've Already Read All
          <RouterLink to="/" class="loginbutton">
            Terms Of Service
          </RouterLink></label
        >
      </div>
      <div class="submit">
        <button>Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import mix from "../mixin/mixins";

export default {
  computed: {
    color1() {
      return this.$store.getters.getPrimaryColor;
    },
    color2() {
      return this.$store.getters.getSecondaryColor;
    },
  },
  mixins: [mix],
  data() {
    return {
      username: null,
      email: null,
      phone: null,
      password: null,
      passwordconfirmation: null,
      tos: null,
    };
  },
  components: { RouterLink },
};
</script>

<style scoped>
#app {
  background-color: #ece6d8;
}
.cont {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /*background-color: #ece6d8;*/
  background-color: rgba(83, 93, 108, 0.3);
  justify-content: center;
}
.title {
  color: v-bind(color2);
  text-transform: uppercase;
  letter-spacing: 10px;
}
.forumContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: v-bind(color1);
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  position: relative;
  padding: 4rem;
  border-radius: 20px;
  justify-items: center;
  border: 1px solid black;
}
.forum {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.mail,
.password {
  position: relative;
}
.inputfield {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 10px;
  width: 400px;
  background-color: v-bind(color1);
  border-radius: 10px;
  font-size: 1em;
  color: rgba(255, 255, 255, 1);
}
.info {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.25);
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
}
.passIcon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.25);
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.passIcon:hover {
  color: v-bind(color2);
}

.inputfield:focus ~ .info,
.valid {
  transform: translate(10px, -17px);
  color: v-bind(color2);
  font-size: 0.9em;
  padding: 0 10px;
  background-color: v-bind(color1);
  border-left: 1px solid v-bind(color2);
  border-right: 1px solid v-bind(color2);
}
.inputfield:focus {
  border-color: v-bind(color2);
}
.login,
.tos {
  width: 100%;
}
.tos {
  display: flex;
  gap: 3px;
  align-items: center;
  font-size: 1.1em;
}
.login {
  color: #89acc9;
}
.loginbutton {
  color: v-bind(color2);
  text-decoration: none;
  transition: all 0.3s;
}
.loginbutton:hover {
  color: #696861;
}
.submit {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.tos {
  color: #89acc9;
  font-size: 1em;
}

.submit button {
  outline: none;
  color: v-bind(color1);
  background-color: v-bind(color2);
  border: 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 700;
  transition: all 0.3s;
}

.submit button:hover {
  background-color: #696861;
  color: #b5b194;
}
</style>
