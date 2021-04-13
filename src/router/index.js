import { createRouter, createWebHistory } from 'vue-router'
import NewProfile from '../components/NewProfile.vue'

import ProfileList from '../components/View/ProfileList.vue'
import AboutUs from '../components/View/AboutUs.vue'
import Home from '../components/View/Home.vue'
import NotFound from '../components/View/NotFound.vue'
import ViewProfile from '../components/ViewProfile.vue'
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
    {
        path: '/ViewProfile',
        name: 'ViewProfile',
        component: ViewProfile
    },
    
    {
       
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
      }
   


   

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router