<template>
  <div>
    <canvas id="latency-checker"></canvas>
    <div>{{ num }}</div>
    <div v-for="diff in oldStates" :key="diff.num.newValue">
      <div class="diff">
        <div v-for="key in Object.keys(diff)" :key="key">
          <span class="diff-key">{{ key }}</span>
          <span
            class="diff-old"
            :class="{ green: diff[key].oldValue > diff[key].newValue }"
            >{{ diff[key].oldValue }}</span
          >
          <span
            class="diff-new"
            :class="{ green: diff[key].oldValue < diff[key].newValue }"
            >{{ diff[key].newValue }}</span
          >
          <span class="diff-diff">{{
            diff[key].oldValue - diff[key].newValue
          }}</span>
        </div>
      </div>
      <!-- <span :class="{ green: state[0].num > state[1].num }">{{state[0].num}}</span>
      &nbsp;
      <span :class="{ green: state[1].num > state[0].num }">{{state[1].num}}</span>
      &nbsp;
      <span>{{ state[0].num - state[1].num }}</span> -->
    </div>
    <div class="block" style="top: 10px" id="block-1"></div>
    <div class="block" style="top: 20px" id="block-2"></div>
    <div class="block" style="top: 30px" id="block-3"></div>
  </div>
</template>

<script>
// import Game from '../../games/latency-checker';
import { client } from '../../games/latency-checker/client';
import config from '../../lib/config';

// import Game from '../../lib/brick-engine/game';

export default {
  name: 'latency-checker',
  data() {
    return {
      game: null,
      client: null,
      slow: { top: '10%', left: 0 },
      medium: { top: '20%', left: 0 },
      fast: { top: '30%', left: 0 },
      num: 0,
      oldStates: [],
    };
  },
  mounted() {
    console.log('mounted');
    this.client = client(config.apiPath, true);
    // this.game = new Game({ canvas: true });
    var slow = document.getElementById('block-1');
    var medium = document.getElementById('block-2');
    var fast = document.getElementById('block-3');
    function render(el, state) {
      el.style.left = 0;
      el.style.transform =
        'translateX(' + (state.x / 100) * (window.outerWidth - 10) + 'px)';
      // el.style.transform = '';
      // el.style.left = state.x + '%';
    }
    var self = this;
    this.client.game.scene.render = function () {
      render(slow, this.state.slow);
      render(medium, this.state.medium);
      render(fast, this.state.fast);
      self.num = this.state.num;
    };
    window.game = this.client.game;
    this.oldStates = this.client.oldStates;
    // this.game.start();
    /*
    this.game = new Client({canvas: document.body}).start();
    */
    // this.game = new Game({
    //   viewport: document.queryElementById('latency-checker')
    // }).start();
    // var apiHost =
    //   window && window.location && window.location.hostname === 'localhost'
    //     ? 'http://localhost:8081'
    //     : '';
    //
    // this.client = gameClient(apiHost);
    // var req = new XMLHttpRequest();
    // req.addEventListener('load', function() {
    //   console.log(JSON.parse(this.response)['message']); // eslint-disable-line no-console
    // });
    // req.open('get', `${apiHost}/api`);
    // req.send();
  },
  destroyed() {
    this.client.game.stop();
    this.client.io.close();
    console.log('destroyed');
    /*
    this.game.stop();
    */
    // this.game.stop();
    // this.client.close();
  },
};
</script>

<style type="text/scss">
.block {
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: red;
  transition:
    left 0.1s,
    transform 0.1s;
}

.diff {
  margin-top: 10px;
}

.diff span {
  display: inline-block;
}

.diff-key {
  width: 100px;
}

.diff-old,
.diff-new {
  width: 300px;
}

.green {
  color: #339933;
}
</style>
