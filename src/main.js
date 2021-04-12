import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import BaseButton from './components/UI/BaseButton.vue'
import NewProfile from './components/NewProfile.vue'
import Container from './components/UI/Container.vue'

const app = createApp(App)
app.component('container', Container)
app.component('base-button', BaseButton)
app.component('new-profile', NewProfile)
app.mount('#app')
