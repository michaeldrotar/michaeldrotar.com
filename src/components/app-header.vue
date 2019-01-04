<template>
  <header class="app-header mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="app-header-logo-image"></div>
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <span class="mdc-top-app-bar__title">
          michaeldrotar.com
        </span>
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

.app-header-logo-image {
  background-image: url('../assets/logo.png');
  background-position: -50px -112px;
  background-repeat: no-repeat;
  background-size: 200px;
  bottom: -10px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
}

.mdc-top-app-bar {
  @include mdc-top-app-bar-ink-color($body-text);
  @include mdc-top-app-bar-icon-ink-color($body-text);
  @include mdc-top-app-bar-fill-color($body-bg);
}
</style>
