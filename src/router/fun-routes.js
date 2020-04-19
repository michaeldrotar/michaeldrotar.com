import GameLayout from '@/layouts/game-layout';
import IdleApocalypsePage from '@/pages/idle-apocalypse-page';

export default [
  {
    path: '/fun',
    component: GameLayout,
    children: [
      {
        path: 'idle-apocalypse',
        component: IdleApocalypsePage,
      },
    ],
  },
];
