import Brick from '../brick';

export default Brick.extend({
  name: 'transform',
  data() {
    return {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 }
    };
  }
});

/*
export default Brick.extend({
  name: 'Transform',
  data() {
    return {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 }
    }
  }
})

export default Brick.extend({
  name: 'transform',
  props: {
    position: Vector3,
    rotation: Vector3,
    scale: {
      type: Vector3,
      default: () => { { x: 1, y: 1, z: 1 } },
      init: (options) => {
        if (typeof options === 'number') {
          const scale = options
          return new Vector3({ x: scale, y: scale, z: scale });
        }
        return new Vector3(options);
      }
    }
  }
})
*/
