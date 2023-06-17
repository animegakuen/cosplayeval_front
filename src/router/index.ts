import { useCosplayerStore } from '@/stores/cosplayer'
import { useVoteStore } from '@/stores/vote'
import { CosplayerAPI, VoteAPI } from '@/structures/api'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('../views/VoteView.vue'),
      beforeEnter: (_to, _from, next) => {
        CosplayerAPI
          .fetch()
          .then(data => {
            useCosplayerStore().hydrate(data)

            next()
          })
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
      beforeEnter: async (_to, _from, next) => {
        const cosplayers = await CosplayerAPI.fetch()
        useCosplayerStore().hydrate(cosplayers)

        const votes = await VoteAPI.fetch()
        useVoteStore().hydrate(votes)

        next()
      }
    }
  ]
})

export default router
