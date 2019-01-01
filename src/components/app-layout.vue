<template>
  <div>
    <mdc-top-app-bar></mdc-top-app-bar>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import MdcTopAppBar from '@/components/mdc-top-app-bar';
import AppNavigation from '@/components/app-navigation';

export default {
  name: 'app-layout',
  components: {
    AppNavigation,
    MdcTopAppBar
  }
};
</script>

<style lang="scss">
@import '../stylesheets/application';
</style>
