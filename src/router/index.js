import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/calculator",
        name: "Calculator",
        component: () => import("../views/Calculator.vue"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../components/NotFound.vue"),
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
