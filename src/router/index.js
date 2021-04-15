import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const childCart = () => import('../views/cart/childComp/childCart')
const Order = () => import('../views/order/Order')

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


const routes = [
  {
    path: '/',
    redirect: '/home',
    // 这个属性为true的页面才显示tabbar
    meta: {
      showTab: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/Cart',
    component: Cart,
    meta: {
      showTab: true
    }
  },
  {
    path: '/Order',
    component: Order,
    meta: {
      showTab: true
    }
  },
  {
    path: '/childCart',
    component: childCart,
    meta: {
      showTab: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router