import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      primaryColor: "#2a353e",
      secondaryColor: "#e8e7d7",
      isLoggeedIn: true,
    };
  },
  mutations,
  actions,
  getters,
});
export default store;
