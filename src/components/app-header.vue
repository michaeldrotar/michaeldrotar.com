<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span class="mdc-top-app-bar__title">Title</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <app-header-action to="projects" icon-id="group_work" text="Projects" />
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '@material/top-app-bar';
import AppHeaderAction from '@/components/app-header-action';

export default {
  name: 'mdc-top-app-bar',
  foo: 'bar',
  components: {
    AppHeaderAction
  },
  mounted: function() {
    this.mdcTopAppBar = new MDCTopAppBar(this.$el);
  }
};
</script>

<style lang="scss">
@import '@material/top-app-bar/mdc-top-app-bar';
</style>
