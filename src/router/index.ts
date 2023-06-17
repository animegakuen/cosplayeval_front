import { useCosplayerStore } from '@/stores/cosplayer'
import { CosplayerAPI } from '@/structures/api'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/vote/:id',
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
      beforeEnter: (_to, _from, next) => {
        CosplayerAPI
          .fetch()
          .then(data => {
            useCosplayerStore().hydrate(data)

            next()
          })
      }
    }
  ]
})

export default router
