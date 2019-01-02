<template>
  <div>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from '@/components/app-navigation';

export default {
  name: 'game-layout',
  components: {
    AppNavigation
  }
};
</script>
