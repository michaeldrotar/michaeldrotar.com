<template>
  <div class="mdc-image-list__item">
    <div class="mdc-image-list__image-aspect-container" v-if="imageUrl">
      <img :src="imageUrl" class="mdc-image-list__image" />
    </div>
    <div class="mdc-image-list__supporting">
      <span class="mdc-image-list__label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    label: {
      type: String
    }
  },
  computed: {
    imageUrl() {
      return this.image && require(`@/assets/${this.image}`);
    }
  }
};
</script>
