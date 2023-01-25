import { createStore } from "vuex";
import modules from "./modules";
import axios from "axios";
const store = createStore({
  state: {
    modules: modules,
    data: 1,
    user: null,
  },
  mutations: {
    updateData(state, payload) {
      state.data = state.data + payload;
    },
    setUser(state, payload) {
      state.user = payload;
      console.log("user has changed", state.user);
    },
  },
  actions: {
    async signup(
      context,
      { firstName, lastName, email, password, mobile_number }
    ) {
      console.log("signup action");
      const result = await axios.post(
        "http://localhost:5000/api/user-registration",
        { firstName, lastName, email, password, mobile_number }
      );
      if (result) {
        context.commit("setUser", result.user);
        localStorage.setItem("user-register>", JSON.stringify(result.data));
      } else {
        throw new Error("Cant signup");
      }
      setTimeout(() => {
        context.commit("setUser", {
          firstName,
          lastName,
          email,
          password,
          mobile_number,
        });
      }, 2000);
    },
    async login(context, { email, password }) {
      console.log("login action");
      const result = await axios.post("http://localhost:5000/api/user-login", {
        email,
        password,
      });
      if (result) {
        context.commit("setUser", result.user);
        localStorage.setItem("user-login>", JSON.stringify(result.data));
      } else {
        throw new Error("Cant login");
      }
      setTimeout(() => {
        context.commit("setUser", {
          email,
          password,
        });
      }, 2000);
    },
  },
});
export default store;
