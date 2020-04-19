import GameLayout from '@/layouts/game-layout';
import LatencyChecker from '@/pages/latency-checker';
import TanksPage from '@/pages/tanks-page';

export default [
  {
    path: '/games',
    component: GameLayout,
    children: [
      {
        path: 'latency-checker',
        component: LatencyChecker,
      },
      {
        path: 'tanks',
        component: TanksPage,
      },
    ],
  },
];
