import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import { createWebHistory } from 'vue-router'
import createRouter from './router'

const app = createApp(App)
const router = createRouter(createWebHistory())
app.use(router).mount('#app')
