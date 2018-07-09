import GameLayout from '@/layouts/game-layout';
import LatencyChecker from '@/pages/latency-checker';

export default [
  {
    path: '/games',
    component: GameLayout,
    children: [
      {
        path: 'latency-checker',
        component: LatencyChecker
      }
    ]
  }
];
