import babylon from 'babylonjs';

export default class Vector3 extends babylon.Vector3 {
  constructor(options) {
    options = options || {};
    super(options.x || 0, options.y || 0, options.z || 0);
  }
}
