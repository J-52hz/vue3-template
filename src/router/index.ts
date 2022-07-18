import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/views/home.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Index',
  //   meta: {
  //     title: '首页',
  //     keepAlive: true,
  //     requireAuth: true,
  //   },
  //   component: () => import('@/pages/index.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
