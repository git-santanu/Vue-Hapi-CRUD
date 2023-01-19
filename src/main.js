import { createApp } from 'vue';
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            AuthStatus: true
        }
    }
})

createApp(App).use(router,store).mount('#app')
