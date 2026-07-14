import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/HomeView.vue'
import LeaderboardTable from '@/LeaderboardTable.vue'
import RatingForm from '@/RatingForm.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/avaliacoes',
      name: 'avaliacoes',
      component: RatingForm
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: LeaderboardTable
    }
  ],
})



export default router
