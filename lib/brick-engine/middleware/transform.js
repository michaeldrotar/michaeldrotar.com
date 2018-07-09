import Middleware from './index';

class Base extends Middleware {
  static properties() {
    return { x: 0, y: 0, z: 0 };
  }
}

class Position extends Base {}

class Rotation extends Base {}

class Scale extends Base {}

export default class Transform extends Middleware {
  constructor(options) {
    super(
      {
        position: new Position(),
        rotation: new Rotation(),
        scale: new Scale()
      },
      options
    );
  }
}
