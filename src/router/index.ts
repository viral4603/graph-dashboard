import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppHome from '../components/app-home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'appcell',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/core/app-cell.vue'),
    children: [
      {
        path:'home',
        name:'home',
        component:AppHome
      },
      {
        path:'',
        redirect:'home'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
