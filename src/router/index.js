import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
      cinemaRouter,
      mineRouter,
      movieRouter,
      {
        path:'/*',
        redirect:'/movie/nowPlaying'
      }
    ]
})

export default router
