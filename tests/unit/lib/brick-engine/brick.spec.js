import { expect } from 'chai';
import Brick from '../../../../lib/brick-engine/brick';

describe('Brick.js', () => {
  it('instantiates bricks', () => {
    class Thing extends Brick {}
    const thing = new Thing({ prop: true });
    expect(thing).to.have.property('prop', true);
  });

  it('composites bricks', () => {
    class Transform extends Brick {
      data() {
        return {
          position: { x: 0, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 0, y: 0, z: 0 },
        };
      }
    }
    class Thing extends Brick {
      setup() {
        this.use(Transform, { rotation: { x: 45 / 360, y: 45 / 360 } });
      }
    }
    const thing = new Thing({ transform: { rotation: { y: 90 / 360 } } });
    expect(thing).to.have.property('transform');
    expect(thing.transform.rotation).to.have.property('x', 45 / 360);
    expect(thing.transform.rotation).to.have.property('y', 90 / 360);
    expect(thing.transform.rotation).to.have.property('z', 0);
  });
});
