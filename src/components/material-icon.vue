<template>
  <span class="material-icons" :aria-label="label" :aria-hidden="hidden">{{ id }}</span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  },
  computed: {
    hidden: function() {
      return !this.label;
    }
  }
};
</script>
