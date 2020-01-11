<template>
  <div>
    Clicker Heroes 2 / mods /
    <router-link to="/clicker-heroes-2/mods/frequent-ruby-shop"
      >Frequent Ruby Shop</router-link
    >
    <image-list>
      <image-list-item
        image="clicker-heroes-2/ruby-shop.png"
        label="Frequent Ruby Shop"
      />
    </image-list>
    <router-view></router-view>
  </div>
</template>

<script>
import ImageList from '@/components/image-list';
import ImageListItem from '@/components/image-list-item';

export default {
  components: {
    ImageList,
    ImageListItem
  }
};
</script>

<style lang="scss"></style>
