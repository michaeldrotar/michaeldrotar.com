<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/app-header';

export default {
  components: {
    AppHeader,
  },
};
</script>
