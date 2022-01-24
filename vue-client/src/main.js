import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

export const store = createStore({
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        logIn(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
