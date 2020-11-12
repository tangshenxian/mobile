import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Car = () => import("@/views/car/Car");
const Profile = () => import("@/views/profile/Profile");

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/category',
    name: '分类',
    component: Category
  },
  {
    path: '/car',
    name: '购物车',
    component: Car
  },
  {
    path: '/profile',
    name: '我的',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
