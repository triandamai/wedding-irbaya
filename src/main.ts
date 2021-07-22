import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
//sakura js
import "./assets/sakura.css"
import "./assets/index.css"

createApp(App).use(router).mount('#app')
