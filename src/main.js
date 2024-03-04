// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Contact from './components/Contact.vue'
import Departments from './components/Departments.vue'
import Doctors from './components/Doctors.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: Home },
        { path: '/about', component: AboutUs },
        { path: '/contact', component: Contact },
        { path: '/departments', component: Departments },
        { path: '/doctors', component: Doctors },
    ]
});





const app = createApp(App)
app.use(router)
app.mount('#app')
