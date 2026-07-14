import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AvaliacaoView from './views/AvaliacaoView.vue'
import RankingView from './views/RankingView.vue'




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
      component: AvaliacaoView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
    }
  ],
})



export default router
