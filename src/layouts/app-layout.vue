<template>
  <div>
    <app-header></app-header>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/app-header';
import AppNavigation from '@/components/app-navigation';

export default {
  name: 'app-layout',
  components: {
    AppNavigation,
    AppHeader
  }
};
</script>
