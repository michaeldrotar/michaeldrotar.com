import Engine from '../lib/brick-engine';
import MainScene from './scenes/main';

export default class Game extends Engine {
  constructor(options) {
    super(options);
    this.scenes = [MainScene];
  }
}
