<template>
  <header class="app-header mdc-top-app-bar">
    <div class="app-header-logo-image"></div>
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <span class="mdc-top-app-bar__title">
          michaeldrotar.com
        </span>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar';

export default {
  mounted: function () {
    const element = this.$el;
    const parent = element.parentElement;
    parent.style.marginTop = '72px';
    element.style.top = '0';

    this.mdcTopAppBar = new MDCTopAppBar(element);
  },
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
  left: 0;
  position: absolute;
  top: 0;
  width: 150px;
}

.mdc-top-app-bar {
  @include mdc-top-app-bar-ink-color($body-text);
  @include mdc-top-app-bar-icon-ink-color($body-text);
  @include mdc-top-app-bar-fill-color(transparentize($body-bg, 0.1));
}
</style>
