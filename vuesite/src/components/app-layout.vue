<template>
  <div>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNavigation from '@/components/app-navigation'

  export default {
    name: 'app-layout',
    components: {
      AppNavigation
    }
  }
</script>

<style>
  @import '../stylesheets/application.css';
</style>
