import babylon from 'babylonjs';

import * as browser from './browser';

/*
  Brick notes:
  - separate server (synced) vs local bricks (mixin?)
  - bricks define properties -- simple? nested?
  - denote which properties can be transitioned (metadata?)
*/

var loop;
if (typeof browser.window.requestAnimationFrame !== 'undefined') {
  loop = function () {
    var rate = this.rate * 1e3;
    var maxRate = this.maxRate * 1e3;
    var lastUpdate = performance.now();
    var remainder = 0;

    var check = function (time) {
      if (this.queueStop) {
        this.queueStop = false;
        if (!this.running) return;
      }

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
        this.scene.render(this.canvas);
      }

      browser.window.requestAnimationFrame(check.bind(this));
    };
    browser.window.requestAnimationFrame(check.bind(this));
  };
} else {
  var getTime = function () {
    var time = process.hrtime();
    return (time[0] * 1e9 + time[1]) / 1e6;
  };

  loop = function () {
    var rate = this.rate * 1e3;
    var maxRate = this.maxRate * 1e3;
    var lastUpdate = getTime();
    var remainder = 0;

    var check = function () {
      if (this.queueStop) {
        this.queueStop = false;
        if (!this.running) return;
      }

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

      this.scene.render();

      var elapsed = getTime() - lastUpdate;
      var next = rate - (remainder + elapsed);
      if (next < 16) {
        this.scene.state.mode = 'immediate';
        setImmediate(check.bind(this));
      } else {
        this.scene.state.mode = 'timeout';
        setTimeout(check.bind(this), next);
      }
    };

    check.bind(this)();
  };
}

export default class Game {
  constructor(options) {
    options = options || {};
    this.rate = 1 / 60; // 60 fps
    this.maxRate = this.rate * 30;
    this.scenes = options.scenes || [];
    this.running = false;
    this.queueStop = false;
    this.canvas = options.canvas;
    if (this.canvas) {
      let babylonCanvas = this.canvas.querySelector('canvas');
      if (!babylonCanvas) {
        babylonCanvas = document.createElement('canvas');
        this.canvas.appendChild(babylonCanvas);
      }
      this.engine = new babylon.Engine(babylonCanvas, true);
    }

    this.loadScene(this.scenes[0]);
  }

  loadScene(Scene) {
    // NOTE: just getting server running, need to fix later
    if (Scene) {
      this.scene = new Scene({ engine: this.engine });
    }
  }

  start() {
    if (this.running) return;

    this.running = true;
    loop.bind(this)();

    return this;
  }

  stop() {
    this.running = false;
    this.queueStop = true;
    return this;
  }
}
