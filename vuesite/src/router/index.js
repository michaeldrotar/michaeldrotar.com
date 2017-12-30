import Vue from 'vue'
import Router from 'vue-router'

import AppHomepage from '@/pages/homepage'
import AppLayout from '@/layouts/application'
import AppNotFound from '@/components/app-not-found'
import AppProjects from '@/components/app-projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppHomepage
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: 'projects',
          component: AppProjects
        }
      ]
    },
    {
      path: '*',
      component: AppNotFound
    }
  ]
})
