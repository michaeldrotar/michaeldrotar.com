<template>
  <div class="intro" data-typewriter>
    <h1 class="intro-heading intro-line">Hi, I'm Michael.</h1>
    <p class="intro-text">I'm a lead web architect by day and chronic tinkerer by night. Visit my <a href="<%= static_path(page: 'projects') %>" class="link">projects</a> to see things that I love to work on.</p>
    <p class="intro-text">Want to get in touch? Contact me at <a href="mailto:michaeldrotar@gmail.com" class="link">michaeldrotar@gmail.com</a></p>
    <p class="intro-text">Thanks for stopping by!</p>
  </div>
</template>

<script>
  require('@/stylesheets/application.css')

  export default {
    name: 'homepage'
  }
</script>

<style>
  @import '../stylesheets/application/config';

  .intro {
    @apply --fullscreen;

    box-shadow: inset 0 0 20px 5px darken(var(--body-bg), 10%);
    display: flex;
    flex-flow: column;
    justify-content: center;
    line-height: 1.8;
    padding: var(--grid-gutter-width);
    text-align: center;
  }

  .intro-heading {
    color: var(--color-lighter);
    font-size: var(--font-size-lg);
    font-weight: bold;
    line-height: var(--line-height-lg);
    margin-bottom: var(--space-md);
  }

  .intro-text {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
    margin-left: auto;
    margin-right: auto;
    max-width: 27em;
  }
</style>
