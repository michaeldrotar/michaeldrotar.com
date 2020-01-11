<template>
  <router-link
    :to="to"
    class="mdc-top-app-bar__action-item"
    active-class="mdc-top-app-bar__action-item--active"
    :aria-label="text"
  >
    <material-icon :id="iconId" />
    <span class="mdc-top-app-bar__action-text">{{ text }}</span>
  </router-link>
</template>

<script>
import MaterialIcon from '@/components/material-icon';

export default {
  props: {
    iconId: {
      type: String
    },
    text: {
      type: String
    },
    to: {
      type: String
    }
  },
  components: {
    MaterialIcon
  }
};
</script>

<style lang="scss"></style>
