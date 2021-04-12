import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import BaseButton from './components/UI/BaseButton.vue'
import Profile from './components/Profile.vue'
import router from './router'
import Container from './components/UI/Container.vue'

const app = createApp(App)
app.component('container', Container)
app.component('base-button', BaseButton)
app.component('profile', Profile)
app.use(router).mount('#app')
