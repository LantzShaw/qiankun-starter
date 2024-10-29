import { RouteRecordRaw } from "vue-router";

const Home = () => import('../views/Home/index.vue')
const About = () => import('../views/About/index.vue')

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

// const router = createRouter({
// //   history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue-app-sub' : '/vue-app-sub'),
//   history: createWebHistory('/app-sub'),
//   routes,
// })

// export default router