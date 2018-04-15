import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '@/components/app-layout'
import AppHomepage from '@/components/app-homepage'
import AppProjects from '@/components/app-projects'
import AppResume from '@/components/app-resume'
import PageNotFound from '@/components/page-not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: AppHomepage
        },
        {
          path: 'projects',
          component: AppProjects
        },
        {
          path: 'resume',
          component: AppResume
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
