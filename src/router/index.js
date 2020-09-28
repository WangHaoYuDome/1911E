import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children:[
      {
        path: '/liebiao',
        name: 'liebiao',
        component: () => import('../views/liebiao.vue'),
      },
      {
        path: '/one',
        name: 'One',
        component: () => import('../views/One.vue'),
      },
      {
        path: '/two',
        name: 'Two',
        component: () => import('../views/Two.vue'),
      },

    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=="/"){
    next()
  }else{
    if(localStorage.token){
      next()
    }else{
      next("/")
    }
  }
})



export default router
