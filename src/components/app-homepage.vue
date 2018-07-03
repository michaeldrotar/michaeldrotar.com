<template>
  <div>
    <awful-typewriter>
      <div class="homepage-intro">
        <h1 class="homepage-intro-heading homepage-intro-line">Hi, I'm Michael.</h1>
        <p class="homepage-intro-text">I'm a lead web architect by day and chronic tinkerer by night. <!-- Visit my <a href="/projects" class="link">projects</a> to see things that I love to work on. --></p>
        <p class="homepage-intro-text">Want to get in touch? Contact me at <a href="mailto:michaeldrotar@gmail.com" class="link">michaeldrotar@gmail.com</a></p>
        <p class="homepage-intro-text">Thanks for stopping by!</p>
      </div>
    </awful-typewriter>
    {{ apiMessage }}
  </div>
</template>

<script>
import AwfulTypewriter from '@/components/awful-typewriter';
export default {
  name: 'homepage',
  components: {
    AwfulTypewriter
  },
  data() {
    return {
      apiMessage: null
    };
  },
  mounted() {
    var apiHost =
      window && window.location && window.location.hostname === 'localhost'
        ? 'http://localhost:8081'
        : '';
    var req = new XMLHttpRequest();
    var self = this;
    req.addEventListener('load', function() {
      self.apiMessage = JSON.parse(this.response)['message'];
    });
    req.open('get', `${apiHost}/api`);
    req.send();
  }
};
</script>
