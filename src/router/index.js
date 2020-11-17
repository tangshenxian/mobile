import {createRouter, createWebHistory} from 'vue-router';

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Car = () => import("@/views/car/Car");
const Profile = () => import("@/views/profile/Profile");
const Detail = () => import("@/views/detail/Detail");

const routes = [
  {
    path: '/',
    meta: {
      isTurn: true
    },
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    meta: {
      isTurn: true
    },
    component: Home
  },
  {
    path: '/category',
    name: '分类',
    meta: {
      isTurn: true
    },
    component: Category
  },
  {
    path: '/car',
    name: '购物车',
    meta: {
      isTurn: true
    },
    component: Car
  },
  {
    path: '/profile',
    name: '我的',
    meta: {
      isTurn: true
    },
    component: Profile
  },
  {
    path: '/detail',
    name: '详情',
    meta: {
      isTurn: false
    },
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
