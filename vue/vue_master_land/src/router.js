import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddBlog from "@/components/AddBlog";
import Login from "./components/Login";
import Main from "./components/Main";
import SecurityMain from "./components/SecurityMain";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            // path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },
        {
            //住房保障
            path: '/SecurityMain',
            name: 'SecurityMain',
            component: SecurityMain
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            // path: '/',
            path: '/addBlog',
            name: 'addBlog',
            component: AddBlog
        }
    ]
})
