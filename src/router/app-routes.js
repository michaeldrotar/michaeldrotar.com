import AppLayout from '@/layouts/app-layout';
import ClickerHeroes2Routes from './clicker-heroes-2-routes';
import HomepagePage from '@/pages/homepage-page';
import ProjectsPage from '@/pages/projects-page';
import ResumePage from '@/pages/resume-page';

export default [
  {
    path: '/',
    component: AppLayout,
    children: [].concat(
      [
        {
          path: '',
          component: HomepagePage,
        },
        {
          path: 'projects',
          component: ProjectsPage,
        },
        {
          path: 'resume',
          component: ResumePage,
        },
      ],
      ClickerHeroes2Routes,
    ),
  },
];
