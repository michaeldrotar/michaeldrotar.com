import AppLayout from '@/layouts/app-layout';
import HomepagePage from '@/pages/homepage-page';
import ProjectsPage from '@/pages/projects-page';
import ResumePage from '@/pages/resume-page';

export default [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        component: HomepagePage
      },
      {
        path: 'projects',
        component: ProjectsPage
      },
      {
        path: 'resume',
        component: ResumePage
      }
    ]
  }
];
