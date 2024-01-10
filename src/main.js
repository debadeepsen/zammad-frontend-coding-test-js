import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)
const pinia = createPinia()

initializeRouter(app)
app.use(pinia)

app.mount('#app')
