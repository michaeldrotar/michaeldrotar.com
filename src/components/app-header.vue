<template>
  <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <span class="mdc-top-app-bar__title">michaeldrotar.com</span>
      </section>
      <!--section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <app-header-action to="projects" icon-id="group_work" text="Projects" />
      </section-->
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar';
// import AppHeaderAction from '@/components/app-header-action';

export default {
  name: 'mdc-top-app-bar',
  foo: 'bar',
  components: {
    // AppHeaderAction
  },
  mounted: function() {
    this.mdcTopAppBar = new MDCTopAppBar(this.$el);
  }
};
</script>

<style lang="scss">
@import '@material/top-app-bar/mdc-top-app-bar';

.mdc-top-app-bar {
  @include mdc-top-app-bar-ink-color($body-text);
  @include mdc-top-app-bar-icon-ink-color($body-text);
  @include mdc-top-app-bar-fill-color($body-bg);

  background-image: url('../assets/logo.png');
  background-position: -50px -100px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.mdc-top-app-bar::before {
  content: '';

  background-image: url('../assets/logo.png');
  background-position: -50px -156px;
  background-repeat: no-repeat;
  background-size: 200px;

  display: block;
  height: 10px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
}
</style>
