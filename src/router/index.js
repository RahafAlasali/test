import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: '/productCat/:cat',
        name: 'productCat',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        name: 'productDetailes',
        component: () => import('../views/ProductsDetails.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/ProductCart.vue')
      }
    ]
  }, { path: "*", component: () => import('@/views/404Page.vue') }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
