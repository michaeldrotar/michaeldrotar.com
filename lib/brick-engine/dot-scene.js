import _ from 'lodash';
import Scene from './scene.js';

export default class DotScene extends Scene {
  constructor(options) {
    super(options);
    this.state = {
      slow: {
        x: 0,
        velocity: 5
      },
      medium: {
        x: 0,
        velocity: 10
      },
      fast: {
        x: 0,
        velocity: 20
      },
      num: 0
    };
  }

  render() {
    // function renderObj(obj) {
    //   // var x = Math.floor(obj.x / 2);
    //   return _.repeat(' ', obj.x) + '#';
    // }
    // console.log(_.repeat('-', 100) + ' ' + this.state.mode);
    // console.log(renderObj(this.state.slow));
    // console.log(renderObj(this.state.medium));
    // console.log(renderObj(this.state.fast));
  }

  update(delta) {
    function updateObj(obj, delta) {
      obj.x += obj.velocity * delta;
      if (obj.x > 99) {
        obj.x = 99 - (obj.x - 99);
        obj.velocity *= -1;
      } else if (obj.x < 0) {
        obj.x = -obj.x;
        obj.velocity *= -1;
      }
    }

    var newState = _.merge({}, this.state);
    updateObj(newState.slow, delta);
    updateObj(newState.medium, delta);
    updateObj(newState.fast, delta);
    newState.num += 1;
    this.state = newState;
  }
}
