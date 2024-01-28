import { createApp } from 'vue'
import './style.css'
import Aos from 'aos'
import App from './App.vue'
import 'aos/dist/aos.css'

createApp(App, Aos.init()).mount('#app')
