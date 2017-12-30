<template>
  <div>
    <main-nav/>
    <router-view/>
  </div>
</template>

<script>
  import mainNav from './main-nav'
  export default {
    name: 'app',
    components: {
      'main-nav': mainNav
    }
  }
</script>

<style>
  palette {
    color: #c9544e;
    color: #f9a659;
    color: #eac994;
    color: #6bb78b;
    color: #51a4a5;
  }
</style>
