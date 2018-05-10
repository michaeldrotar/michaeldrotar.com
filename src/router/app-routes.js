import AppLayout from '@/components/app-layout';
import AppHomepage from '@/components/app-homepage';
import AppProjects from '@/components/app-projects';
import AppResume from '@/components/app-resume';

export default [
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
  }
];
