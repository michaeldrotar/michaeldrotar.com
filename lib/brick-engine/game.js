import * as browser from './browser';
import Scene from './scene';

var loop;
if (typeof browser.window.requestAnimationFrame !== 'undefined') {
  loop = function() {
    var rate = Math.floor(this.rate * 1e3);
    var maxRate = Math.floor(this.maxRate * 1e3);
    var lastUpdate = performance.now();
    var remainder = 0;

    var check = function(time) {
      if (this.stopped) return;

      var delta = time - lastUpdate;
      if (delta > maxRate) delta = maxRate;
      lastUpdate = time;

      remainder += delta;
      while (remainder > delta) {
        // previousState = this.scene.state;
        this.scene.update(this.rate);
        remainder -= rate;
      }

      // var alpha = remainder / rate;
      // var alphaState = this.scene.state * alpha + previousState * (1.0 - alpha);
      if (this.canvas) {
        this.scene.render(this.canvas, delta / 1e9);
      }

      browser.window.requestAnimationFrame(check.bind(this));
    };
    browser.window.requestAnimationFrame(check.bind(this));
  };
} else {
  var getTime = function() {
    var time = process.hrtime();
    return time[0] * 1e9 + time[1];
  };

  loop = function() {
    var rate = Math.floor(this.rate * 1e9);
    var maxRate = Math.floor(this.maxRate * 1e9);
    var lastUpdate = getTime();
    var remainder = 0;

    var check = function() {
      if (this.stopped) return;

      var time = getTime();
      var delta = time - lastUpdate;

      if (delta < rate) {
        setImmediate(check.bind(this));
        return;
      }

      if (delta > maxRate) delta = maxRate;
      lastUpdate = time;

      remainder += delta;
      while (remainder >= rate) {
        this.scene.update(this.rate);
        remainder -= rate;
      }

      var elapsed = getTime() - lastUpdate;
      var next = rate - (remainder + elapsed);
      if (next < 1e6) {
        setImmediate(check.bind(this));
      } else {
        setTimeout(check.bind(this), next / 1e6);
      }
    };

    check.bind(this)();
  };
}

export default class Game {
  constructor(options) {
    this.rate = 1 / 60; // 60 fps
    this.maxRate = this.rate * 3;
    this.scenes = [];
    this.scene = new Scene();
    if (options) {
      this.canvas = options.canvas;
    }
  }

  start() {
    if (this.stopped === false) return;

    this.stopped = false;
    loop.bind(this)();

    return this;
  }

  stop() {
    this.stopped = true;
    return this;
  }
}
