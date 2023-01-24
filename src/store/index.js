import { createStore } from "vuex";
import modules from "./modules";

const store = createStore({
  state: {
    modules: modules,
    data: 1,
  },
  mutations:{
    updateData(state,payload){
        state.data = state.data + payload
    }
  }
});
export default store;
