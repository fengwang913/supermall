import vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/category.vue')
const cart = () => import('../views/cart/cart.vue')
const profile = () => import('../views/profile/profilr.vue')
const Detail = () => import('../views/detail/Detail.vue')


//  安装插件
vue.use(VueRouter)

//  创建router

const routes = [
    {
        path:'/',
        redirect:'home'
      },
      {
        path:'/home',
        component:home
      },
      {
        path:'/category',
        component:category
      },
      {
        path:'/cart',
        component:cart
      },
      {
        path:'/profile',
        component:profile
      },
      {
        path:'/detail/:iid',
        component:Detail
      },


]

// 创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'

})

//  导出路由对象
export default router