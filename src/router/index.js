import { createRouter, createWebHistory } from 'vue-router'
import NewProfile from '../components/NewProfile.vue'

import ProfileList from '../components/ProfileList.vue'
import AboutUs from '../components/AboutUs.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/AddProfile',
        name: 'AddProfile',
        component: NewProfile
    },
    {
        path: '/ProfileList',
        name: 'ProfileList',
        component: ProfileList
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
   


   

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router