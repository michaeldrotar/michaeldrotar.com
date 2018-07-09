<template>
  <div>
    Latency Checker
    <canvas id='latency-checker'></canvas>
  </div>
</template>

<script>
// import Game from '../../games/latency-checker';
// import client from '../../games/latency-checker/client';

export default {
  name: 'latency-checker',
  data() {
    return {
      // game: null,
      // client: null
    };
  },
  mounted() {
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
    /*
    this.game.stop();
    */
    // this.game.stop();
    // this.client.close();
  }
};
</script>
