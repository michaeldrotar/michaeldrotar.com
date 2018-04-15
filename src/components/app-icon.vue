<template>
  <div :class="['icon', 'icon-' + type]">
    <div v-for="part in parts"></div>
    <span v-if="text" class="sr-only">{{text}}</span>
  </div>
</template>

<script>
const PARTS = {
  hamburger: 3
};

export default {
  name: "app-icon",
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "",
      validator: function(value) {
        return Object.keys(PARTS).indexOf(value) !== -1;
      }
    }
  },
  computed: {
    parts: function() {
      return PARTS[this.type];
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/application/config";

.icon-hamburger {
  display: block;
  height: 60px;
  padding: 11px;
  width: 60px;

  & > div {
    background-color: $body-text;
    display: block;
    height: 2px;
    margin: 8px auto;
    opacity: 1;
    position: relative;
    transform: translateY(0);
    transition: opacity 0.15s ease-out,
      transform 0.45s cubic-bezier(0.33, 0.98, 0.46, 1.68), width 0.1s ease-in;
    width: 24px;

    &::before {
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      top: 0;
      transition-delay: 0s;
      transition-duration: 0s;
      width: 0;
    }

    &:nth-child(1) {
      z-index: 1;
    }
  }

  @nest button:hover & {
    & > div:nth-child(1) {
      transform: translateY(-4px);
    }

    & > div:nth-child(3) {
      transform: translateY(4px);
    }
  }

  @nest .is-open button & {
    & > div {
      &:nth-child(1), &:nth-child(3) {
        width: 8px;
      }

      &:nth-child(1)::before, &:nth-child(3)::before {
        transition: width 1s ease-out;
        transition-delay: 0.25s;
        width: 30px;
      }

      &:nth-child(1) {
        transform: rotate(45deg) translateX(22px) translateY(7px);

        &::before {
          background-color: $color-green;
          box-shadow: 0 0 10px 1px $color-green;
          right: 10px;
        }
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translateX(-9px) translateY(-8px);

        &::before {
          background-color: $color-red;
          box-shadow: 0 0 10px 1px $color-red;
          left: 10px;
        }
      }
    }
  }
}
</style>
