import babylon from 'babylonjs';

// import Brick from './brick';

export default class Scene {
  constructor(options) {
    options = options || {};
    this.state = {};
    this.engine = options.engine;
    if (this.engine) {
      this.scene = new babylon.Scene(this.engine);
    }

    // this.ground = new Plane();
  }

  render() {}

  update() {}
}
