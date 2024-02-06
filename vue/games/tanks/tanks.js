import Game from '../../lib/brick-engine/game';

import MainScene from './main-scene';

export default class Tanks extends Game {
  constructor(options) {
    super(
      Object.assign(
        {
          scenes: [MainScene],
        },
        options,
      ),
    );
  }
}
