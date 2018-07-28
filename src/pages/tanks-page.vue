<template>
  <div id="tanks">
  </div>
</template>

<script>
import Tanks from '../../games/tanks';

export default {
  name: 'tanks-page',
  data() {
    return {
      tanksGame: null
    };
  },
  mounted() {
    this.tanksGame = new Tanks({ canvas: document.getElementById('tanks') });
    this.tanksGame.start();
  },
  destroyed() {
    this.tanksGame.stop();
  }
};
</script>
